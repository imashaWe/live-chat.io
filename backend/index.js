require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {expressjwt: jwt} = require("express-jwt");

// set up express app
const app = express();
const port = process.env.PORT || 4000;

// connect to mongodb
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

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
app.use('/auth', require('./src/routes/auth'));
app.use('/', require('./src/routes/api'));

// error handling middleware
app.use((e, req, res, next) => {
    res.status(422).send({
        status: false,
        message: e.message
    });
})

app.listen(port, () => {
    console.log(`server listening for requests at port:${port}`);
});
