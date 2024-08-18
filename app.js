// server.js
const express = require('express');
const app = express();
const indexRouter = require("./routes/index");
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require("connect-flash");
const cookieParser = require('cookie-parser');
const path = require('path');
const sellerRouter = require("./routes/sellerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const signuploginRouter = require("./routes/index");

const uri = 'mongodb://localhost:27017/test';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

require('dotenv').config();


const db = require("./config/mongooseconnection");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
    cookie: { secure: false },
}));
app.use(flash());


app.use(express.static('FRONTEND'));
// app.use(express.static(path.join(__dirname,"FRONTEND")));
app.set("view engine","ejs");

app.use("/user",userRouter);
app.use("/seller",sellerRouter);
app.use("/product",productRouter);
app.use("/", indexRouter);
// app.use("/signuplogin",signuploginRouter);

app.listen(3000);