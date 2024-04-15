const express = require("express");
const connectDb = require("./utils/DbConnection");
const foodRouter= require("./routers/foodRouter")
const mongoose=require('mongoose');

const app = express();
connectDb();

app.use(express.json());

// get all foods
app.use("/api/foods",foodRouter);



//error handeling

app.use((err,req, res) => {
    res.json({status:"error",message:err.message,code:err.code})
})


app.all('*', (req, res) => {
    res.status(404).send('Page not found');
})

mongoose.connection.once('open', () => {

    app.listen(8000, () => {
        console.log('server is running on port 8000');
    })
})
 