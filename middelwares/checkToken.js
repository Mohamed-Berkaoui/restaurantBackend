const jwt=require('jsonwebtoken');  
const asyncHundler = require('../utils/asyncHundler');

const checkToken=asyncHundler(async(req,res,next)=>{
var token=req.headers.authorization  || req.headers.Authorization

if(!token){
    return res.status(401).json({status:"fail",message:"unauthorized"})
}

if(token.startsWith('Bearer ')){
    token=token.slice(7,token.length)
}
const isValid=await jwt.verify(token,"kugsdkjdhmljdsùmmvev5")
if(!isValid){
    return next({message:'invalid token'})
}
console.log(isValid);
req.user=isValid.user
next()
})

module.exports=checkToken