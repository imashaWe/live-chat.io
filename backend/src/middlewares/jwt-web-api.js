const {expressjwt: jwt} = require("express-jwt");

const jwtWebApi = jwt({
    secret: process.env.ACCESS_TOKEN_SECRET,
    algorithms: ["HS256"],
}).unless({path: ["/auth/login", '/auth/register']});

module.exports = jwtWebApi;
