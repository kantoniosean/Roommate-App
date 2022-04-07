const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    roomies: {
        type: Array,
        required: false,
    },
    preferences: {
        type: Array,
        required: true
    },
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;
