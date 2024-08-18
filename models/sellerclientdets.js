const mongoose = require("mongoose");
const { type } = require("os");
const sellerclientdetsSchema = mongoose.Schema({

    name:{
        type:String,
        minlength: 3,
        trim:true,
        required: true,
    },
    email:String,
    address: {
        type: String,
        required: [false],
    },
    city: {
        type: String,
    },
    contact: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{11}/.test(v); 
            },
            message: props => `${props.value} is not a valid phone number!`,
        },
        maxlength: [11, 'Phone number can have maximum 11 digits'], 
        required: [true, 'Phone number is required'],
    },
    postalcode:Number,
    commission:Number,
    
 
});
module.exports=mongoose.model("sellerclientdets",sellerclientdetsSchema);




