// const usermodel = require('../models/usermodel');
// // const router = express.Router();
// const bycrypt = require("bcrypt");
// const jwt=require("jsonwebtoken");
// const{generateToken}=require("../utils/generateToken");
// module.exports.registerUser= async function(req,res){
//     try{
//      let{email, password} = req.body;

//      let user=await usermodel.findOne({email:email});
//      if(user) return res.status(401).send(`
//         <html>
//             <head>
//                 <style>
//                     body { font-family: Arial, sans-serif; }
//                     .message { color: red; }
//                     p{
//                     text-align="centre";
//                     }
//                 </style>
//             </head>
//             <body>
//                 <p class="message">You already have an account, please login</p>
//             </body>
//         </html>
//     `);

 
//      bycrypt.genSalt(10, function(err,salt){
//          bycrypt.hash(password,salt, async function(err,hash){
//              if (err) return res.send(err.message);
//              else {
                 
//      let user=await usermodel.create({
//          email,
//          password:hash,
//      });
//      let token = generateToken(user);
//      res.cookie("token",token);
//      res.send("user created");
    
     
//       };
//          });
//      });
     
//     }
//     catch(err){
//      res.send(err.message);
//     }
//  };
//  module.exports.loginUser = async function(req,res){
//     let {email,password}=req.body;
//     let user = await usermodel.findOne({email:email});
//     if(!user) return res.send("Email or paswword incorrect");
//     bycrypt.compare(password,user.password, function(err,result){
//         if(result){
//             let token = generateToken(user);
//             res.cookie("token",token);
//             return res.redirect("/shop");
//         }
//         else {
//             return res.send("Email or paswword incorrect");
//         }
//     });

//  };


const usermodel = require('../models/usermodel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
    try {
        let { email, password } = req.body;

        let user = await usermodel.findOne({ email: email });
        if (user) return res.status(401).send(`
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                        .message { color: black; font-size: 2vw; text-align: center; }
                    </style>
                </head>
                <body>
                    <p class="message">You already have an account, please login</p>
                </body>
            </html>
        `);

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(`
                    <html>
                        <head>
                            <style>
                                body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                                .message { color: black; font-size: 2vw; text-align: center; }
                            </style>
                        </head>
                        <body>
                            <p class="message">${err.message}</p>
                        </body>
                    </html>
                `);
                else {
                    let user = await usermodel.create({
                        email,
                        password: hash,
                    });
                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send(`
                        <html>
                            <head>
                                <style>
                                    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                                    .message { color: black; font-size: 2vw; text-align: center; }
                                </style>
                            </head>
                            <body>
                                <p class="message">User created successfully</p>
                            </body>
                        </html>
                    `);
                }
            });
        });

    } catch (err) {
        res.send(`
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                        .message { color: black; font-size: 2vw; text-align: center; }
                    </style>
                </head>
                <body>
                    <p class="message">${err.message}</p>
                </body>
            </html>
        `);
    }
};

module.exports.loginUser = async function (req, res) {
    let { email, password } = req.body;
    let user = await usermodel.findOne({ email: email });
    if (!user) return res.send(`
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                    .message { color: black; font-size: 2vw; text-align: center; }
                </style>
            </head>
            <body>
                <p class="message">Email or password incorrect</p>
            </body>
        </html>
    `);
    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = generateToken(user);
            res.cookie("token", token);
            return res.redirect("/shop");
        } else {
            return res.send(`
                <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                            .message { color: black; font-size: 2vw; text-align: center; }
                        </style>
                    </head>
                    <body>
                        <p class="message">Email or password incorrect</p>
                    </body>
                </html>
            `);
        }
    });
};
// module.exports.logout=async function(req,res){
//     res.cookie("token","");
//     res.redirect("/login");
// };



 