import jwt from "jsonwebtoken"



export const generateJWToken=(payload,key)=>{
    
    const token=jwt.sign(payload,key,{ expiresIn: "1d" })
    return token;
}