import './RoommateFinder.css';
import { useState, useEffect } from 'react';
import Axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'
import { logDOM } from '@testing-library/react';

function RoommateFinder() {
  const[listOfMatches, setListOfMatches] = useState([]);
  const[roomieUsername, setRoomieUsername] = useState("");
  const[matchData, setMatchData] = useState([]); //possibly a little too complicated to get match data for all matches

/*  useEffect(() => {
    Axios.get("http://localhost:3001/getMatches").then((response) => {
      setListofMatches(response.data);
    })
    Axios.get("http://localhost:3001/getMatchData").then((response) => {
      setMatchData(response.data);
    })
  }, []);
*/

  const addRoomie = () => {
    /*setRoomieUsername(event.target.value);
    Axios.post("http://localhost:3001/addRoommate", {
      roomieUsername
    }).then((response) => { */
      alert("ROOMIE ADDED"); 
    //}}); 
  };

  return(
    <body style={{backgroundColor:'#F26666'}}> 
      <img src='https://cdn.discordapp.com/attachments/953028681272549426/953860160688902154/Roomie.png' alt="logo" height="80"></img>
      <br></br><br></br><br></br>

      {/* {listOfMatches.map((match) => { */}
      {/*   return (*/} 
              <Card class="rounded" style={{ width:'15rem', color: '#F2EFE4', backgroundColor:'#F28D8D'}}>
                <Card.Img src="https://www.kindpng.com/picc/m/73-732812_girl-png-clipart-cute-girl-clipart-transparent-png.png" alt="test"></Card.Img>
                <Card.Body  class="card text-center" style={{backgroundColor:'#F28D8D'}}>
                  <Card.Title><br></br>Roomie Name{/* {match.name} */}</Card.Title>
                  <br></br>
                  <Card.Text>You matched in:<br></br>{/* {match.data} */}hobbies, major, & games</Card.Text>
                  <br></br>
                </Card.Body>
                <Button class="rounded" variant="outline-danger" onClick={addRoomie}>Add Roomie!</Button>
              </Card>
            {/* }); /*}
        {/* })} */}
    </body>
  );
}

export default RoommateFinder;
