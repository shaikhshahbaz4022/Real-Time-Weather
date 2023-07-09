const express = require('express');
const cityRouter = express.Router()
const axios = require('axios');

const Auth = require('../Middleware/Auth');
const redis = require('../connections/Redis');
const CityModel = require('../Models/cityModel');
require("dotenv").config()
const KEY = process.env.WEATHER_KEY




cityRouter.get("/", Auth, async (req, res) => {
    const city = req.query.city || req.preffered_city
    //city=pune
    try {
        let chacheddata = await redis.get(city+req.userID)//for perticular user search city
        if (chacheddata) {
            console.log("from redis");
            return res.status(201).send(chacheddata)
        } else {

            const result = await axios.get(`https://api.weatherapi.com/v1/current.json?KEY=a2076fb69e0f4319a5e120017232904&q=${city}`)
            let weatherData = result.data
            // console.log(weatherData);
            redis.set(city+req.userID, JSON.stringify(weatherData),"EX",60*30)


            await CityModel.findOneAndUpdate({userID:req.userID},{
                userID : req.userID,
                $push : {visitedcities:city}//push in visited city array
            },{upsert:true,new:true,setDefaultsOnInsert:true})
            console.log("from axios");
            res.status(201).send(weatherData)
        }

    } catch (error) {
        res.status(401).send({ "msg": error.message })
    }

})

cityRouter.get("/getdata",Auth,async (req,res)=>{
     
    const data = await CityModel.findOne({userID:req.userID})
    console.log(data);
    res.send(data)
})

module.exports = cityRouter