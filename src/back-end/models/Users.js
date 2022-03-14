const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    results: {
        type: [String],
        required: false,
    },
    roommates: {
        type: [User],
        required: false,
    }

});