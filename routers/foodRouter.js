
const express = require("express");
const FoodModel = require("../models/foodModel");
const { getFoods, addFood, findFood, updateFood, deleteFood } = require("../contorllers/foodControllers");
const checkToken = require("../middelwares/checkToken");
const checkAdmin = require("../middelwares/checkAdmin");

const foodRouter=express.Router()



foodRouter.get("/", getFoods);
foodRouter.post("/",checkToken ,checkAdmin ,addFood);
foodRouter.get("/:id",findFood);
foodRouter.put("/:id",updateFood );
foodRouter.delete("/:id",deleteFood );
  
     module.exports=foodRouter