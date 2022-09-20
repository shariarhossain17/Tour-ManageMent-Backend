const mongoose = require("mongoose")
const colors = require("colors")

require("dotenv").config()

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Local_DATABASE , {
    }).then(data => {
        console.log(colors.yellow("connect mongoDB"));
    })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectDb