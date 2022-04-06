import { useState, useEffect } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, CardGroup } from 'react-bootstrap'

function Settings() {
    const [listOfRoomies, setListOfRoomies] = useState([]);
    const[_id, set_id] = useState("");
    const[name, setName] = useState("");
    const[username, setUsername] = useState("");
    const[exRoomie, setExRoomie] = useState([]);
    const[preferences, setPreferences] = useState([]);
    
    var currentUser = {  "_id": "624cce80ce757e25629f9879",  "name": "Erin",  "username": "eejohnson",  "roomies": [],  "matches": [    "Pedro"  ],  "preferences": [    "hobbies",    "games"  ]};
    
    useEffect(() => {
        Axios.get("http://localhost:3001/getRoomies").then((response) => {
            setListOfRoomies(response.data);
        })
    }, []);

    const removeRoomie = () => {
        Axios.post("http://localhost:3001/removeRoomie", {
            _id,
            name,
            username,
            exRoomie,
            preferences
        }).then((response) => {
          alert("ROOMIE REMOVED");
        });
       };  
    
    return (
      <div className="Settings" style={{backgroundColor:'#F26666'}}>
        <img src="https://cdn.discordapp.com/attachments/953028681272549426/953860160688902154/Roomie.png" alt="logo" height="75"></img>
        <br></br><br></br><br></br>

        <CardGroup>
            {listOfRoomies.map((roomie) => {
                return (
                    <div>
                        <Card border="danger" class="rounded" style={{ width:'15rem', color: '#F2EFE4', backgroundColor:'#F28D8D'}}>
                            <Card.Img src="https://www.kindpng.com/picc/m/73-732812_girl-png-clipart-cute-girl-clipart-transparent-png.png" alt="test"></Card.Img>
                            <Card.Body  class="card text-center" style={{backgroundColor:'#F28D8D'}}>
                                <Card.Title><br></br>{roomie.name}</Card.Title>
                            </Card.Body>
                            <Button data-toggle="tooltip" data-placement="top" title={roomie.preferences} variant="outline-danger" onClick={(e1) => {
                                setExRoomie(roomie.name);
                                set_id(currentUser._id);
                                setName(currentUser.name);
                                setUsername(currentUser.username);
                                setPreferences(currentUser.preferences);
                                alert("ROOMIE SELECTED: " + user.name);
                            }}>Select Roomie!</Button>
                        </Card>
                    </div>
                );
            })}
        </CardGroup>
        <br></br>

        <div class="col-md-12 text-center">
            <Button style={{borderRadius: '12px'}} variant="danger" onClick={removeRoomie}>Remove Roomie</Button>
        </div>

        <div>
            <Button style={{borderRadius: '12px', position: 'absolute', right: 5, top: 5}} variant="danger" onClick={(e2) => {
                e2.preventDefault();
                window.location.href='/ChoreList';
            }}>Open Chore List</Button>
        </div>
      </div>
    );
}
export default Settings;
