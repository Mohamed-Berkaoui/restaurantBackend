const FoodModel = require("../models/foodModel");
const asyncHundler = require("../utils/asyncHundler");

const getFoods=asyncHundler(async (req, res) => {
    const foods = await FoodModel.find();
    res.status(500).json({status:"success",data:foods});
  })
  
    const addFood=asyncHundler ( async (req, res) => {
      const newFood = await FoodModel.create(req.body,);
      res.json(newFood);
    })

    const findFood=  asyncHundler(async (req, res) => {
    
          const food = await FoodModel.findById(req.params.id,{_id:0,image:0});
      
          if (!food) {
            return res.status(404).json({status:"fail",message:"food not found"});
          }
          res.json(food);
        } )

      const updateFood=async (req, res) => {
        try{ const food = await FoodModel.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
         }); 
         res.json(food) }
         catch(e){
             res.json(e.message)
         }
       }

       const deleteFood= async (req, res) => {
        try{ const food = await FoodModel.findByIdAndDelete(req.params.id,  {
           new: true,
         }); 
         res.json(food) }
         catch(e){
             res.json(e.message)
         }
       }
  module.exports={getFoods,addFood,findFood,updateFood,deleteFood}