const mongoose=require('mongoose');

const foodSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:Number,
    image:{type:String},
    category:{type:String,required:true},


}
,
{versionKey:false})

const FoodModel=mongoose.model('food',foodSchema);


module.exports=FoodModel