const mongoose=require('mongoose');

const connectDb=()=>{
    mongoose.connect('mongodb+srv://mohamed:amV30jP09q5I61sw@cluster0.ghbjfij.mongodb.net/',{
        dbName:"restaurant",
    })
    .then(()=>{
        console.log('connected to database');
    }).catch(err=>{
        console.log(err);
    })
    }

    module.exports=connectDb