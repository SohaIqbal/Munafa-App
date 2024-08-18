
const express = require("express");
const path = require("path"); 
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const{registerUser,loginUser}=require("../controllers/authContoller");
const upload = require("../config/multer-config");
const productModel = require("../models/productmodel");
const sellermodel = require("../models/sellermodel");
const buyerdetsmodel = require("../models/buyerdetsmodel");
const sellerclientdetsmodel = require("../models/sellerclientdets");


router.get("/signuplogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../FRONTEND/signuplogin.html"));
});
router.get("/supplier", function(req, res) {
    res.sendFile(path.join(__dirname, "../FRONTEND/supplier.html"));

});
router.get("/shop",isloggedin, function(req, res) {
    res.sendFile(path.join(__dirname, "../FRONTEND/shop.html"));
    // let product = await productModel.find();
    // res.render("shop",{product});


});

router.get("/sellerprofile",function(req,res){
    res.sendFile(path.join(__dirname, "../FRONTEND/profile.html"));
});

router.get("/createproduct",function(req, res) {
        res.sendFile(path.join(__dirname, "../FRONTEND/createproduct.html"));
    })
router.post("/create", upload.single("product-file"), async function(req, res) {
   try {
    let {
        name,
        price,
        discount,
        }=req.body;
        
        let product = await productModel.create({
            image:req.file.buffer,
            name,
            price,
            discount,
        });
         res.send(product);
    
   } catch (err) {
    res.send(err.message);
    
   }
    });


router.post('/createseller'  ,upload.none(), async function(req, res) {
        try {
         let {
            name,
            email,
            address,
            city,
            contact,
            businessname,
            productlist,
            stock,
        } = req.body;
             
             let seller = await sellermodel.create({
                 name,
                 email,
                 address,
                 city,
                 contact,
                 businessname,
                 productlist,
                 stock,
             });
              res.send(seller);
         
        } catch (err) {
         res.send(err.message);
         
        }
         });
router.post("/buyerdets"  ,upload.none(), async function(req, res) {
        try {
             let {
                name,
                email,
                address,
                city,
                contact,
                postalcode
            } = req.body;
                 
            let buyerdets = await buyerdetsmodel.create({
                     name,
                     email,
                     address,
                     city,
                     contact,
                     postalcode
                 });
                  res.send(buyerdets);
             
            } catch (err) {
             res.send(err.message);
             
            }
             });
router.post("/sellerclientdets"  ,upload.none(), async function(req, res) {
                try {
                     let {
                        name,
                        email,
                        address,
                        city,
                        contact,
                        postalcode,
                        commission
                    } = req.body;
                         
                    let sellerclientdets = await sellerclientdetsmodel.create({
                             name,
                             email,
                             address,
                             city,
                             contact,
                             postalcode,
                             commission
                         });
                          res.send(sellerclientdets);
                     
                    } catch (err) {
                     res.send(err.message);
                     
                    }
                     });

router.post("/register",registerUser);
router.post("/login",loginUser);
module.exports = router;

