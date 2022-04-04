const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');
const http = require('http');

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
    UserModel.findOne({ id: userId }, (err, result) => {
        if (err)
            res.json(err);
        else {
            res.json(result);
        }
    });
});

var currentUser, roomies = [], id; //global vars

//front-end login page should setCurrentUser upon logIn when user enters id
app.get("/setCurrentUser", (req, res) => {
    currentUser = UserModel.find({"id": req.body});
    
    var json = JSON.parse(currentUser);
    roomies = json["Roomies"];
    id = json["id"];
});

//to be used when frontend needs to access current user (after login)
app.get("/getCurrentUser", (req, res) => {
    res.json(currentUser);
});

//to be used when frontend needs to acces current user's current roomies' JSON objects
app.get("/getRoomies", (req, res) => {
    roomies = req.body; //front-end sends string array of currentUser's current roommates
    
    var roomieList = []; //storage for JSON objects of all current roomie's
    
    for(var i = 0; i < roomies.length; i++){
        var temp = UserModel.find({"id": roomies[i]}); //finds current roomie's JSON object in database
        roomieList.push(temp); 
    }
    
    res.json(roomieList); //send front-end list of all current roommate's JSON objects
});

//to be used when front-end needs list of currentUser's matches' JSON objects - same algorithm as getRoomies
app.get("/getMatches", (req, res) => {
    /*let [users] = UserModel.find({}, (err, result) => {
        if (err)
            return null
    }); */
    // users = RoommateManager.matchingUserScores(users);
    
    var matches = req.body; //front-end sends string array of currentUser's matches
    var matchList = []; 
    
    for(var i = 0; i < matches.length; i++){
        var temp = UserModel.find({"id": matches[i]});
        matchList.push(temp);
    }
    res.json(matchList);
});

app.post("/addRoomie", (req, res) => {
    const newRoomie = req.body; //front-end will send JSON user object of newRoomie
    
    let json = JSON.parse(newRoomie); 
    let newRoomieId = json["id"]; //get id field 
    let [newRoomieRoomies] = json["Roomies"]; //get roomie field
    
    //update currentUser's roomies
    roomies.push(newRoomieId); 
    UserModel.insertOne({"id": id}, {"Roomies": roomies});
    
    //update newRoomie's roomies
    newRoomieRoomies.push(id);
    UserModel.insertOne({"id": newRoomie}, {"Roomies": newRoomieRoomies});
        
    // const roommateInfo = req.body;
    // have roommate finder send current user so we know who to add roommate to
    // let u = currUser; 
    // let roommate = new User(roommateInfo.firstName, roommateInfo.lastName, roommateInfo.id, roommateInfo.email, null, null, null);
    // decide on creating User in front end or back end
    // u.addRoommate(roommate);
});

app.post("/removeRoomie", (req, res) => {
    var removeRoomie = req.body; //front-end sends current roomie JSON object 
    
    var json = JSON.parse(removeRoomie);
    let removeRoomieID = json["id"];
    let [removeRoomieRoomies] = json["Roomies"];
    
    for(var i = 0; i < roomies.length; i++){ 
        if (roomies[i] === removeRoomieId) { 
            roomies.splice(i, 1); 
        }
    }
    for(var i = 0; i < removeRoomieRoomies.length; i++){
        if(removeRoomieRoomies[i] === id){
            removeRoomieRoomies.splice(i, 1);
        }
    }
    UserModel.insertOne({"id": id}, {"Roomies": roomies});
    UserModel.insertOne({"id": removeRoomieID}, {"Roomies": removeRoomieRoomies});
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
