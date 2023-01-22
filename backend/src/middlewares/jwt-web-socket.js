const socketJwtAuth = require('socketio-jwt-auth');
const User = require("../modules/user");

const jwtWebSocket = socketJwtAuth.authenticate({
    secret: process.env.ACCESS_TOKEN_SECRET,    // required, used to verify the token's signature
    algorithm: 'HS256'        // optional, default to be HS256
}, function (payload, done) {
    // done is a callback, you can use it as follows
    console.log(payload);
    User.findOne({id: payload.uid}, function (err, user) {
        if (err) {
            // return error
            return done(err);
        }
        if (!user) {
            // return fail with an error message
            return done(null, false, 'user does not exist');
        }
        // return success with a user info
        return done(null, user);
    });
});

module.exports = jwtWebSocket;
