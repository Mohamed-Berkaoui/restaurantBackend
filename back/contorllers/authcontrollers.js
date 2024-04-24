const userModel = require("../models/userModel");
const asyncHundler = require("../utils/asyncHundler");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');

const register =asyncHundler(async (req, res) => {
 const valres=validationResult(req);
 if(valres.isEmpty()){
    const hashedPassword=await bcrypt.hash(req.body.password, 10);
        const newUser = await userModel.create({...req.body,password:hashedPassword});
        res.json(newUser);
    }
else{
    res.status(404).json({status:"fail",message:valres.array()})}
})

    const login =asyncHundler(async (req, res) => {
        const { email, password } = req.body;
        const user = await userModel.findOne({email:email});

        if (!user) {
             res.status(404).json({status:"fail",message:"user not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
             res.status(404).json({status:"fail",message:"password not match"});
        }
        // jwt.sign({user_id},"key",{expiresIn:"1h"}, (err, token) => {
            
        //     res.json(token);
        // })
     
         const token=await jwt.sign({user:user._id,},"kugsdkjdhmljdsùmmvev5",{expiresIn:"1h"})
        res.json(token);
    })

    module.exports={register,login}