const mongoose=require('mongoose');

const favoriteSchema=mongoose.Schema({
    foods:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}],
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user"}

})

const favoriteModel=mongoose.model('favorite',favoriteSchema);


module.exports=favoriteModel


