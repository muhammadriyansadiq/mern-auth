
const cors = require("cors")
const express = require("express");
const app = express()
const mongoose = require("mongoose");
const cookieParser  = require("cookie-parser");
app.use(cors({

  origin:'http://localhost:5174',
  credentials:true,
  methods: ["GET", "POST","PUT","DELETE","PATCH","HEAD"]

}))
// const {checkforauthenticationcookie} = require("./middleares/authentications.js")
mongoose
.connect('mongodb://127.0.0.1:27017/apnaconnection')
.then((e)=> console.log("mongo db connected"))

const path = require("path")
const PORT = 3000;
const userRoute = require("./src/routes/user");

// // middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())



app.listen(PORT, () => { 
    console.log("server running",PORT);

    }) 

app.use("/",userRoute)    

