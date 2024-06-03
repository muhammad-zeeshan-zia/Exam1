const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

// create user API (registration)
router.post('/register', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            role: req.body.role
        });

        await newUser.save();
        res.status(201).json({ message: "User Created Successfully", user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

// login API
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email, firstname: user.firstname, lastname: user.lastname, role: user.role } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
