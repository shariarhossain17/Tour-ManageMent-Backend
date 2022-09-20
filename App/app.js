const express = require("express");

const app = express();
const cors = require('cors');


app.use(cors())
app.use(express.json())



app.get('/health',(req,res)=>{
    res.status(200).json("health okk")
})

module.exports = app