const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://qyork:Caddie5587@cluster0.fqy0m.mongodb.net/Roommate-App?retryWrites=true&w=majority"

);

app.listen(3001, () => {
    console.log("Server is running")
});