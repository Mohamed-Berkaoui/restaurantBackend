const UserModel = require("../models/userModel");
const asyncHundler = require("../utils/asyncHundler");

const checkAdmin = asyncHundler(async(req, res, next) => {
const user= await UserModel.findById(req.user)
if(!user){
    return res.status(404).json({status:"fail",message:"user not found"})
}

if(user.role===false){
    return res.status(404).json({status:"fail",message:"you are not admin"})
}

next()
})

module.exports = checkAdmin