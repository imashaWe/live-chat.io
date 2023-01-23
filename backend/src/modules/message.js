const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    roomID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Room',
    },
    senderID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    receiverID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Message', messageSchema);
