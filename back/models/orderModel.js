const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    foods:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}],
    user_Id:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    status:{type:String,enum:['pending','done',"canceled"],default:'pending'},

},{timestamps:true})

const orderModel=mongoose.model('order',orderSchema);

module.exports=orderModel