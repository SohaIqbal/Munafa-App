const express=require('express');
const router = express.Router();
const sellerModel = require('../models/sellermodel');

router.get("/",function(req,res){
    res.send("hi");
});


if(process.env.NODE_ENV === 'development'){
    router.post("/create", async function(req,res){
        console.log("Received data:", req.body);
        let{fullname, email , password , contact}=req.body;
        let  createdseller=await sellerModel.create({
            fullname,
            email,
            password,
            contact,

        })
        res.status(201).send(createdseller);
    });
};

module.exports=router;