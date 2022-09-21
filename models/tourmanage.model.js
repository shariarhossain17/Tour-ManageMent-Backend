const mongoose = require("mongoose");

const tourManageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "name already exist"],
      required: [true, "please provide name"],
      minLength: [3, "name must be 3 character's"],
      maxLength: [100, "name is to large"],
    },
    description:{
        type:String,
        required:[true,"please write description"]
    },
    price:{
        type:Number,
        required:[true,"provide price"],
        min:[0,"price can't be negative"]
    },
    img:{
        type:String,
        required:[true,"please provide image"]
    },
    views:{
        type:Number,
    }
  },
  { timestamps: true }
);


const Tour = mongoose.model("Tour", tourManageSchema);


module.exports = Tour;