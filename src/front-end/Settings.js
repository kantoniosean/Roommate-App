import React from 'react'
import './RoommateFinder'
import logo from './media/Roomie.png'
import './back-end/models/Users.js'
import './back-end/Preferances.js'
import { Button } from 'react-bootstrap';

function Settings() {

    const removeRoomie = () => {
        /*Axios.post("http://localhost:3001/removeRoomie", {
          roomies
        }).then((response) => {
          alert("ROOMIE REMOVED");
        });*/
       };  
    
    return (
        <>
        <img src={logo} className="logos" alt="Logo" />
        <h3>Your ID: </h3>
        <h3>Your Roommates: </h3>
        <Button class="rounded" variant="outline-light" onClick={removeRoomie}>Remove Movie</Button>
        </>
    )
}
export default Settings;