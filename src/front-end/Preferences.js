
import React, { useState, useEffect } from 'react';
import Axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Preferences() {
  const updatePreferences = () => {
    var answers = document.getElementsByTagName("input");
    var preferences = Array.from(answers);
    
    Axios.post("http://localhost:3001/updatePreferences", {
      preferences
    }).then((response) => {
    alert("PREFERENCES UPDATED"); 
    }); 
  }

  return(
    <div className="Settings" style={{backgroundColor:'#F26666'}}>
      <img src='https://cdn.discordapp.com/attachments/953028681272549426/953860160688902154/Roomie.png' alt="logo" height="50"></img>

      <div class="row col-5">
      <h4 class="fw-bold text-center mt-3"> </h4>

      <form style={{color:"#F2C4C4"}}>
        <p class="fw-bold">Are you looking to rent a house?</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifHouse" id="house" />
          <label class="form-check-label" for="house">
            Yes
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifHouse" id="notHouse" />
          <label class="form-check-label" for="notHouse">
            No
          </label>
        </div>
      </form>

      <form style={{color:"#F2C4C4"}}>
        <p class="fw-bold">Are you looking to rent an apartment?</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifApt" id="apt" />
          <label class="form-check-label" for="apt">
            Yes
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifApt" id="notApt" />
          <label class="form-check-label" for="notApt">
            No
          </label>
        </div>
      </form>

      <form style={{color:"#F2C4C4"}}>
        <p class="fw-bold">Are you okay with pets?</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifPets" id="pets" />
          <label class="form-check-label" for="pets">
            Yes
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifPets" id="pets" />
          <label class="form-check-label" for="noPets">
            No
          </label>
        </div>
      </form>
  
      <form style={{color:"#F2C4C4"}}>
        <p class="fw-bold">Do you drink?</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifDrinker" id="drinker" />
          <label class="form-check-label" for="drinker">
            Yes
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifDrinker" id="nonDrinker" />
          <label class="form-check-label" for="nonDrinker">
            No
          </label>
        </div>
      </form>

      <form style={{color:"#F2C4C4"}}>
        <p class="fw-bold">Do you smoke?</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifSmoker" id="smoker" />
          <label class="form-check-label" for="smoker">
            Yes
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifSmoker" id="nonSmoker" />
          <label class="form-check-label" for="nonSmoker">
            No
          </label>
        </div>
      </form>

      <form style={{color:"#F2C4C4"}}>
        <p class="fw-bold">Are you okay with having people over?</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifPartier" id="partier" />
          <label class="form-check-label" for="partier">
            Yes
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifPartier" id="nonPartier" />
          <label class="form-check-label" for="nonPartier">
            No
          </label>
        </div>
      </form>

      <form style={{color:"#F2C4C4"}}>
        <p class="fw-bold">Are you a morning person?</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifMornings" id="mornings" />
          <label class="form-check-label" for="mornings">
            Yes
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifMornings" id="nonMornings" />
          <label class="form-check-label" for="nonMornings">
            No
          </label>
        </div>
      </form>

      <form style={{color:"#F2C4C4"}}>
        <p class="fw-bold">Are you a night owl?</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifNights" id="nights" />
          <label class="form-check-label" for="mornings">
            Yes
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="ifNights" id="nonNights" />
          <label class="form-check-label" for="nonNights">
            No
          </label>
        </div>
      </form>
      </div>

    <Button class="rounded" variant="outline-light" onClick={updatePreferences}> <a href="/RoommateFinder"></a>Submit</Button>
  </div>
  );
}

export default Preferences;
