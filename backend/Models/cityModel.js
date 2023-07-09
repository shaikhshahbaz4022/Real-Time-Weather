const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    userID : String,
    visitedcities : Array
})
const CityModel = mongoose.model("city",citySchema)
module.exports = CityModel