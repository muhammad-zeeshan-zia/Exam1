
const cors = require('cors')
const mongoose = require('mongoose')
const express  = require('express')
const myroutes  = require('./routes/userRoutes')
const app = express();

mongoose.connect('mongodb://localhost:27017/Final'
).then(()=>{
    console.log('Mongo Db Connected')
})
app.use(express.json());

app.use(cors());

app.use("/api",myroutes);
app.listen(3000,()=>{
console.log('Server listening on port 3000');
})
