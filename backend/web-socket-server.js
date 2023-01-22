const socket = require("socket.io");
const jwt = require("./src/middlewares/jwt-web-socket")
const webSocketServer = (server) => {
    const io = socket(server);
    io.use(jwt);
    io.on('connection', (socket) => {

    });
}

module.exports = webSocketServer;
