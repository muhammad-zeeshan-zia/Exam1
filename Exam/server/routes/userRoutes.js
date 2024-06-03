const express = require('express');

const User = require('../models/user');
const user = require('../models/user');
const router = express.Router();

// create user API (registration)
router.post('/register', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

       

        const newUser = new User(req.body);

        await newUser.save();
        res.status(201).json({ message: "User Created Successfully", user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

// login API
router.get('/getdata',async(req,res)=>{
    try{
            const data = await user.find();
            res.status(200).json(data);
    }
    catch(err)
    {   res.status(500).json("Error Fetching data");
        console.log(err);
    }
})

module.exports = router;
