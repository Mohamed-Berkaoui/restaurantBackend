const experss=require("express");
const { register, login } = require("../contorllers/authcontrollers");
const {body}=require("express-validator");
const authRouter=experss.Router();


authRouter.post('/register',body("email").isEmail(),body("password").isLength({min:5}).isStrongPassword(),register);
authRouter.post('/login',login);




module.exports=authRouter