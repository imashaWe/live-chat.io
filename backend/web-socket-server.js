const socket = require("socket.io");
const jwt = require("./src/middlewares/jwt-web-socket")
const webSocketServer = (server) => {
    const io = socket(server);
    io.use(jwt);
    io.on('connection', (socket) => {
      //  console.log(socket);
        socket.onAny((event, ...args) => {
            console.log(event, args);
        });
    });
}

module.exports = webSocketServer;
