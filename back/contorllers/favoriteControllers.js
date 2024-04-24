const favoriteModel = require("../models/favoriteModel");
const asyncHundler = require("../utils/asyncHundler");


  
    const addFavorite=asyncHundler ( async (req, res) => {
      const newFAvorite = await favoriteModel.create(req.body);
      res.json(newFAvorite);
    })

    const getFavorite=  asyncHundler(async (req, res) => {
    
          const favorite = await favoriteModel.findById(req.params.id).populate({path:"foods",model:"food"})
      
          if (!favorite) {
            return res.status(404).json({status:"fail",message:"favorite list  not found"});
          }
          res.json(favorite);
        } )

      const updateFavorite=asyncHundler(async (req, res) => {
      const favorite = await favoriteModel.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
         }); 
         res.json(favorite) 
     
       })

       const deleteFavorite= asyncHundler(async (req, res) => {
        const favorite = await favoriteModel.findByIdAndDelete(req.params.id,  {
           new: true,
         }); 
         res.json(favorite) 
      
       })
  module.exports={addFavorite,getFavorite,updateFavorite,deleteFavorite}