const experss=require("express");
const { register, login } = require("../contorllers/authcontrollers");

const authRouter=experss.Router();


authRouter.post('/register',register);
authRouter.post('/login',login);




module.exports=authRouter