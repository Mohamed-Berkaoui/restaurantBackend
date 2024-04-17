
const express = require("express");
const { addFavorite, getFavorite, updateFavorite, deleteFavorite } = require("../contorllers/favoriteControllers");



const favoriteRouter=express.Router()




favoriteRouter.post("/", addFavorite);
favoriteRouter.get("/:id",getFavorite);
favoriteRouter.put("/:id",updateFavorite );
favoriteRouter.delete("/:id",deleteFavorite );
  
     module.exports=favoriteRouter