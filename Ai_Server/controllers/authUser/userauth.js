import mongoose from "mongoose"
import { Users } from "../../models/Users.js"
import dotenv from "dotenv"
dotenv.config()
import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import { generateJWToken } from "../../utils/generateJWToken.js"


export const signup=async(req,res)=>{
  console.log("singup hitting in userauth in contorleers")
   console.log(req.body,"in signup")
   const valid=process.env.VALID_USERS;
   console.log(valid,"validuser")
  try{
   const {name,age,email,password,phone}=req.body
   console.log(email,"email")
   console.log(age,"age")

  // const isValidUser=await Users.findOne({email})
  const isValidUser=await mongoose.connection.collection(valid).findOne({email})
  console.log(isValidUser,"isvaliduser")
  if(!isValidUser){
     return res.status(400).json({message:"is not register in database Enviorment"})
  }

  //is validuser check user is exist in db or not
    const isExistUser=await Users.find({email})
    console.log(isExistUser,"IsExistUser")
    if(isExistUser==null){
       return res.status(401).json({message:"users alredy existed"})
    }
    //to becrypt password for securty //s=aaa random string balencd value =10 and 2^10 and 1024 so h1=passord+s ....
    req.body.password=await bcrypt.hash(password,10)
    const newUser=await Users.create(req.body)
    console.log(newUser,"newuser")
    res.status(201).json({message:"created User",newUser})


  }catch(err){
    console.log(err,"err")
    res.status(500).json({message:err.message})
  }
}

export const login=async(req,res)=>{
   console.log("loging is done by connteroless")

   //tke email and password
   const body=req.body;
   console.log(body,"body")
    const {email,password}=req.body

    //if
    try{
       if(!email||!password){
       return res.status(400).json("required email and password")
     }


   //if exist in db
    
   const existUser=await Users.find({email})
   console.log(existUser,"existuser")
   
   
   if(existUser.length==0){
        console.log("user not existed in db")
       return res.status(401).json({message:"user not Exist in database"})
   }


   const userpassword=existUser[0].password;
   const id=existUser[0]._id.toString();
   console.log(id,"id",typeof id)

   const userDetails={
       name:existUser[0].name,
       age:existUser[0].age,
       email:existUser[0].email,
       phone:existUser[0].phone
   }
   console.log(userDetails)

   //if hash password compare
    const match=await bcrypt.compare(password,userpassword)
    console.log(match,"password match")

    if(!match){
      return res.status(401).json({message:"incorrectPassword"})
    }
    

    

   //genreaate jwt token
   const access_secreat_key="Access_Secreat_Key"
    
    const token=generateJWToken({id,email},access_secreat_key)
    console.log(token,"token")

   //send response
   if(!token){
       return res.status(403).json({message:"token is not generaated"})
   }
   return res.status(200).json({message:"authirized user",token,userDetails})
    }catch(err){
       console.log(err,"err")
       return res.status(500).json({message:err.message})
    }
}