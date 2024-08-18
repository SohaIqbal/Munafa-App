const mongoose = require("mongoose");
const { type } = require("os");
const userSchema = mongoose.Schema({

    fullname:{
        type:String,
        minlength: 3,
        trim:true,
    },
    email:String,
    password:String,

});
module.exports=mongoose.model("user",userSchema);


