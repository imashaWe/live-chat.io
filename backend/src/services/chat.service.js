const Room = require('../models/room.model');
const sendMessage = async (messageText, senderID, receiverID, roomID = null, io) => {
    if (!roomID) {
        roomID = await createRoom(senderID, receiverID);
    }
    const message = new Message({
        message: messageText,
        roomID: roomID,
        senderID: senderID,
        receiverID: receiverID
    });
    message.save();
    io.emit(roomID, message);
}

const createRoom = async (senderID, receiverID) => {
    const room = new Room({
        senderID: senderID,
        receiverID: receiverID
    });
    const res = await room.save();
    return res.id;
}

module.exports = {sendMessage}
