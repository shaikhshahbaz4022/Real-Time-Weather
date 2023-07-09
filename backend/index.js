const express = require('express');
const Connection = require('./connections/connection');
const userRouter = require('./Routes/user.Routes');
const cityRouter = require('./Routes/city.Routes');
const Auth = require('./Middleware/Auth');
const limiter = require('./Middleware/redis.limiter');
const app = express()
require("dotenv").config()
app.use(express.json())

app.use("/user",userRouter)
app.use(limiter)
app.use("/city",cityRouter)






app.listen(process.env.PORT, async () => {
    try {
        await Connection
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
    console.log("Connected to DB");
})