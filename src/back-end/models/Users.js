const mongoose = require('mongoose');
const chore = require('../Chore');

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
    }
    /*roommates: {
        type: [User],
        required: false,
    },
    chores: {
        type: [Chore],
        required: false,
    }*/
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;