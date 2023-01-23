require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jwtWeb = require("./src/middlewares/jwt-web-api");
const webSocketServer = require("./src/socket-server");
// set up express app
const app = express();
const port = process.env.PORT || 4000;

// connect to mongodb
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
console.log("Connected to MongoDB");
// set up CORS middleware
app.use(cors());

// set up jwt middleware
app.use(jwtWeb);

// set up body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/auth', require('./src/routes/auth.routes'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).json({
        message: "No such route exists"
    })
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: "Internal server error"
    })
});

const server = app.listen(port, () => {
    console.log(`server listening for requests at port:${port}`);
});

// setup web socket server
webSocketServer(server);

