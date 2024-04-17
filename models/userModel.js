const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,validate:[function(email) {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email)
    }, "Please fill a valid email address"]},
    password:{type:String,required:true},
    role:{type:Boolean,default:false}
    
})

const UserModel=mongoose.model('User',userSchema);


module.exports=UserModel
