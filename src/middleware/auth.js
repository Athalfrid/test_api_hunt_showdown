const jwt = require('jsonwebtoken');
const {randomString} = require('../../config.json');

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, randomString);
        const userId = decodedToken.userId;

        req.auth = {
            userId: userId
        };
        next();
    }catch(error){
        res.status(401).json({error})
    }
}