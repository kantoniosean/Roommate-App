const mongoose = require('mongoose');
const Chore = require('../Chore');
const User = require('../User');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    id: {
        type: String,
    },
    email: {
        type: String,
    },
    results: {
        type: [String],
    },
    roommates: {
        type: [User],
    },
    chores: {
        type: [Chore],
    },
    score: {
        type: Number
    }
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;