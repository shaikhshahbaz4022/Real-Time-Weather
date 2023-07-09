const Redis = require('ioredis');
require("dotenv").config()
let configuration = {
    host: "redis-19442.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 19442,
    username: "default",
    password: process.env.password_redis,

};
const redis = new Redis(configuration)
module.exports = redis

