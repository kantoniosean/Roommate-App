const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

mongoose.connect("mongodb+srv://qyork:Caddie5587@cluster0.fqy0m.mongodb.net/Roommate-App?retryWrites=true&w=majority"

);

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
});

app.listen(3001, () => {
    console.log("Server is running")
});