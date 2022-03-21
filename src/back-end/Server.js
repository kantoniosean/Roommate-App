const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');
const http = require('http');

app.use(express.json());
app.use(cors);

mongoose.connect("mongodb+srv://qyork:Caddie5587@cluster0.fqy0m.mongodb.net/Roommate-App?retryWrites=true&w=majority");

function getUsers() {
    app.get("/getUsers", (req, res) => {
        UserModel.find({}, (err, result) => {
            if (err)
                res.json(err);
            else
                res.json(result);
        });
    });
}

function getUser(userId) {
    app.get("/getUser", (req, res) => {
        UserModel.find({ id: userId }, (err, result) => {
            if (err)
                res.json(err);
            else
                res.json(result);
        });
    });
}

getUsers();
getUser("jdoe");

function login() {
    app.use('/login', (req, res) => {
        res.send({
            id: "qyork"
        });
    });
}

// TODO: Users model is done, still have to figure out how to use post from mongos api. 
// Incorporate methods in Server.js that other classes will use. Ex/ RegistrationManager will post new users to the DB and
// get current Users to see who is logging in. RegManager should be the only one using get, as it will pass the User object to
// other classes that need it. Later on ChoreManager will need to use post/edit to change Chores list in User's field.

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
});

app.listen(3001, () => {
    console.log("Server is running")
});

module.exports = { getUser }