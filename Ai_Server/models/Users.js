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

export const Users=mongoose.model("Users",userSchema)
