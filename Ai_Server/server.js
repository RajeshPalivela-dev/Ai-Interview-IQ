import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
import dotenv from "dotenv";

dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jsonwebtoken from "jsonwebtoken"
import cookieParser from "cookie-parser";



const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URI).then(()=>{
      console.log("db connected")
}).catch((err)=>{
     console.log(err)
})
const port=process.env.PORT




app.listen(port,()=>{
      console.log(`server running on ${port}`)
})









