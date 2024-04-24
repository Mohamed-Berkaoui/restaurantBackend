
const express = require("express");
const { addFavorite, getFavorite, updateFavorite, deleteFavorite } = require("../contorllers/favoriteControllers");
const checkToken = require("../middelwares/checkToken");



const favoriteRouter=express.Router()


favoriteRouter.use(checkToken)

favoriteRouter.post("/", addFavorite);
favoriteRouter.get("/:id",getFavorite);
favoriteRouter.put("/:id",updateFavorite );
favoriteRouter.delete("/:id",deleteFavorite );
  
     module.exports=favoriteRouter