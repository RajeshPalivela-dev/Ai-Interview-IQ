import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
      name:{
          type:String,
          required:true,

      },
      email:{
         type:String,
         required:true,
         unique:true,
      },
      password:{
         type:String,
         required:true,
         unique:true,
         min:8,

      },

      age:{
          type:Number,
          min:18,
          max:80,
      },
      phone:{
          type:String,
      }
      
})

export const User=mongoose.model("User",userSchema)
