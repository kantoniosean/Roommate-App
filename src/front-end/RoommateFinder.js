import './UserCard.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, CardGroup } from 'react-bootstrap'
import './media/findRoomie.png';

function RoommateFinder() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const[_id, set_id] = useState("");
  const[name, setName] = useState("");
  const[username, setUsername] = useState("");
  const[newRoomie, setNewRoomie] = useState([]);
  const[matches, setMatches] = useState([]);
  const[preferences, setPreferences] = useState([]);
  const[currRoomies, setCurrRoomies] = useState([]);

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
  var currentUser = {  "_id": "624cce80ce757e25629f9879",  "name": "Erin",  "username": "eejohnson",  "roomies": [],  "matches": [    "Pedro"  ],  "preferences": [    "hobbies",    "games"  ]};
  var currUserPref = currentUser.preferences;
  
  const addRoomie = () => {
    Axios.post("http://localhost:3001/addRoomie", {
      _id,
      name,
      username,
      currRoomies,
      newRoomie,
      matches,
      preferences
    }).then((response) => { 
      alert("ROOMIE ADDED: " + newRoomie); 
    });
  };

  return (
    <div className="RoommateFinder" style={{backgroundColor:'#F26666'}}>
      <img src="./media/findRoomie" alt="logo" height="75"></img>
      <br></br>
      <h6 style={{ color: "#F2EFE4", fontFamily:'Monaco' }}>&nbsp; Add one at a time!</h6>
      <br></br><br></br>

      <CardGroup>
        {listOfUsers.map((user) => {
          var score = 0;

          for(var i = 0; i < currUserPref.length; i++){
            if(currUserPref[i] === user.preferences[i]){
              score++;
            }
          }
          
          return (
            <div>
            <Card border="danger" class="rounded" style={{ width:'15rem', color: '#F2EFE4', backgroundColor:'#F28D8D'}}>
              <Card.Img src="https://www.kindpng.com/picc/m/73-732812_girl-png-clipart-cute-girl-clipart-transparent-png.png" alt="test"></Card.Img>
              <Card.Body  class="card text-center" style={{backgroundColor:'#F28D8D'}}>
                <Card.Title><br></br>{user.name}</Card.Title>
              </Card.Body>
              {/* need to fix format for listing preferences */}
              <Button data-toggle="tooltip" data-placement="top" title={user.preferences} variant="outline-danger" onClick={(e1) => {
                setNewRoomie(user.name);
                set_id(currentUser._id);
                setName(currentUser.name);
                setUsername(currentUser.username);
                setMatches(currentUser.matches);
                setPreferences(currentUser.preferences);
                setCurrRoomies(currentUser.roomies);
                alert("ROOMIE SELECTED: " + user.name);
                }}>Select Roomie!</Button>
            </Card>
          </div>
        );
      })}
      </CardGroup>
      <br></br>

      <div class="col-md-12 text-center">
        <Button style={{borderRadius: '12px'}} variant="danger" onClick={addRoomie}>Update Roomies</Button>
      </div>

      <div>
        <Button style={{borderRadius: '12px', position: 'absolute', right: 5, top: 5}} variant="danger" onClick={(e2) => {
          e2.preventDefault();
          window.location.href='/ChoreList'; {/* not sure if this works /*}
        }}>Open Chore List</Button>
      </div>
      
      <div>
        <Button style={{borderRadius: '12px', position: 'absolute', right: 5, top: 50}} variant="danger" onClick={(e2) => {
          e2.preventDefault();
          window.location.href='/Settings';
        }}>Open Settings</Button>
      </div>

      <div>
        <Button style={{borderRadius: '12px', position: 'absolute', right: 5, top: 95}} variant="danger" onClick={(e2) => {
          e2.preventDefault();
          window.location.href='/Preferences';
        }}>Change Your Preferences!</Button>
      </div>
      
    </div>
  );
}

export default RoommateFinder;
