import './RoommateFinder.css';
import { useEffect, useState } from 'react';
import Axios from "axios";
import Parse from 'parse/dist/parse.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'

function RoommateFinder() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const[_id, set_id] = useState("");
  const[name, setName] = useState("");
  const[username, setUsername] = useState("");
  const[newRoomies, setNewRoomies] = useState([]);
  const[matches, setMatches] = useState([]);
  const[preferences, setPreferences] = useState([]);

  {/*const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    return currentUser;
  };*/}

  {/*currently have it populating cards for all users, need to work on doing it for only currentUser's matches*/}
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    })
  }, []);

  {/*need to test with actual currentUser, but it works with dummy data*/}
  var currentUser = {  "_id": "622e91374138d42808b0b68d",  "name": "Erin",  "username": "eejohnson",  "roomie": [],  "matches": [    "Pedro"  ],  "preferences": [    "hobbies",    "games"  ]};
  
  const addRoomie = () => {
    alert("clicked");
    Axios.post("http://localhost:3001/addRoomie", {
      _id,
      name,
      username,
      newRoomies,
      matches,
      preferences
    }).then((response) => { 
      alert("ROOMIE ADDED"); 
    });
  };

  return (
    <div className="App" style={{backgroundColor:'#F26666'}}>
      <img src="https://cdn.discordapp.com/attachments/953028681272549426/953860160688902154/Roomie.png" alt="logo" height="50"></img>
      <br></br><br></br><br></br>

      <div className='usersDisplay'>
        {listOfUsers.map((user) => {
          return (
            <div>
            <Card class="rounded" style={{ width:'15rem', color: '#F2EFE4', backgroundColor:'#F28D8D'}}>
              <Card.Img src="https://www.kindpng.com/picc/m/73-732812_girl-png-clipart-cute-girl-clipart-transparent-png.png" alt="test" height="150"></Card.Img>
              <Card.Body  class="card text-center" style={{backgroundColor:'#F28D8D'}}>
                <Card.Title><br></br>{user.name}</Card.Title>
              </Card.Body>
              <Button data-toggle="tooltip" data-placement="top" title={user.preferences} class="rounded" variant="outline-danger" onClick={(event) => {
                setNewRoomies(user.name);
                set_id(currentUser["_id"]);
                setName(currentUser["name"]);
                setUsername(currentUser["username"]);
                setMatches(currentUser["matches"]);
                setPreferences(currentUser["preferences"]);
                alert("ROOMIE SELECTED: " + user.name);}}>Select Roomie!</Button>
            </Card>
          </div>
        );
      })}
      </div>

      <div>
        <Button class="rounded" variant="outline-light" onClick={addRoomie}>Update Roomies</Button>
      </div>
    </div>
  );
}

export default RoommateFinder;
