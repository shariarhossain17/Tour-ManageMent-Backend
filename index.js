const express = require("express")
const colors = require("colors")



const port = process.env.PORT || 8800;

const app = require('./App/app')
const connectDb = require('./db/db')

connectDb()


app.listen(port,()=> {
    console.log(colors.red(`server running on ${port}`))
})