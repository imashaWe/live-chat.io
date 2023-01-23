const socket = require("socket.io");
const jwt = require("../middlewares/jwt-web-socket")

module.exports  = (server) => {
    const io = socket(server);
    io.use(jwt);
    io.on('connection', (socket) => {
        socket.onAny((event, ...args) => {
            console.log(event, args);
        });
    });
}

