const mongoose = require("mongoose");
const { type } = require("os");
const productSchema = mongoose.Schema({

    image:Buffer,
    name:String,
    price:String,
    discount:{
        type:Number,
        default:0,
    },
});
module.exports=mongoose.model("product",productSchema);

