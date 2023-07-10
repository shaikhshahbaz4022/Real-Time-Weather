const express = require('express');
const Connection = require('./connections/connection');
const userRouter = require('./Routes/user.Routes');
const cityRouter = require('./Routes/city.Routes');
const Auth = require('./Middleware/Auth');
const limiter = require('./Middleware/redis.limiter');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');



const cors = require('cors');
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())




//<----> SWAGGER <---->//
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Weather Application',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:8080",
                description : "Weather-API-DOCS "
            }
        ]
    },
    apis: ["./Routes/*.js"]
}

//specifications
const swaggerspec = swaggerJsDoc(options)
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerspec))

app.use("/user", userRouter)
app.use(limiter)
app.use("/city", cityRouter)




app.listen(process.env.PORT, async () => {
    try {
        await Connection
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
    console.log("Connected to DB");
})