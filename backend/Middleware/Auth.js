const jwt = require('jsonwebtoken');
require("dotenv").config()


function Auth(req,res,next){
    const token = req.headers?.authorization
    if(token){
        const decoded = jwt.verify(token, process.env.SECRET);
        if(decoded){
            // console.log(decoded);
            req.body.userID = decoded.userID
            req.preffered_city = decoded.preffered_city
            req.userID = decoded.userID
            next()
        }else{
            return res.status(401).send({"msg":"Invalid User"})
        }
    }else{
      return   res.status(401).send({"msg":"Please Login again"})
    }

}
module.exports = Auth