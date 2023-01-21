require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const {expressjwt: jwt} = require("express-jwt");

// set up express app
const app = express();
const port = process.env.PORT || 4000;

// connect to mongodb
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

// set up CORS middleware
app.use(cors());

// set up jwt middleware
app.use(
    jwt({
        secret: process.env.ACCESS_TOKEN_SECRET,
        algorithms: ["HS256"],
    }).unless({path: ["/auth/login", '/auth/register']})
);

// set up body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/auth', require('./src/routes/auth.routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404).json({
        message: "No such route exists"
    })
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
        message: "Internal server error"
    })
});

app.listen(port, () => {
    console.log(`server listening for requests at port:${port}`);
});