const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');

app.use(express.json());
app.use(cors);

mongoose.connect("mongodb+srv://qyork:Caddie5587@cluster0.fqy0m.mongodb.net/Roommate-App?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err)
            res.json(err);
        else {
            res.json(result);
        }
    });
});

app.get("/getUser", (req, res) => {
    UserModel.findOne({ username: req.body.username }, (err, result) => {
        if (err)
            res.json(err);
        else {
            res.json(result);
        }
    });
});

app.post("/addRoomie", (req, res) => {
    console.log("req.body", req.body);
    var _id = req.body._id;

    var currentUser = {
        name: req.body.name,
        username: req.body.username,
        roomies: req.body.newRoomie,
        matches: req.body.matches,
        preferences: req.body.preferences,
    };

    UserModel.findByIdAndUpdate(_id, currentUser, { new: true }, function(
        err,
        currentUser
      ) {
        if (err) {
          console.log("err", err);
          res.status(500).send(err);
        } else {
          console.log("success");
          res.send(currentUser);
        }
      });
});

app.post("/removeRoomie", (req, res) => {
});

app.post("/updatePreferences", (req, res) => {
});


// Server handles working with DB and Client Side. I can getUsers from DB and also post new users added from client.
// when client logs in with email and password, we get those attributes, look for them in the DB, and update accordingly
// if client is new (not in DB), we add them to the DB and load a default view of the app (asking them to answer questions on RoommateFinder and an empty ChoreList)
// if client exists, we load app based on their chore list and roommate questions. based on their answers, we pull diff users from the DB and load them to RoommateFinder

// server gets a new event with login, gets email and pw, looks for user, and sends info back to the client side on how to render.
// this may eliminate a need for reg manager.

// what classes need access to DB: ChoreManager for adding and deleting chores from user list, RoommateManager for displaying possible roommates based off Users questions

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user)
});


app.listen(3001, () => {
    console.log("Server is running")
});
