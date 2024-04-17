const express = require("express");
const connectDb = require("./utils/DbConnection");
const foodRouter= require("./routers/foodRouter")
const mongoose=require('mongoose');
const favoriteRouter= require("./routers/favoriteRouter");
const authRouter = require("./routers/authRouter");

const app = express();
connectDb();

app.use(express.json());

app.use('/api/auth',authRouter);
app.use("/api/foods",foodRouter);


app.use('/api/favorites',favoriteRouter)



//error handeling
app.all('*', (req, res) => {
    res.status(404).send('Page not found');
})
app.use((err,req, res,next) => {
    res.json({status:"error",message:err.message})
})




mongoose.connection.once('open', () => {

    app.listen(8000, () => {
        console.log('server is running on port 8000');
    })
})
 