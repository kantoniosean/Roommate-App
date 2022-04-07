import { useState, useEffect } from 'react';
import Axios from "axios";

import './style.css';

import logo from './media/Roomie.png';

function RegistrationPage() {
    return(
        <>
        <img src={logo} className="logo" alt="logo"></img>
        <form>
            <label>first name: </label>
            <input type="text" />
            <br></br>
            <br></br>
            <label>last name: </label>
            <input type="text" />
            <br></br>
            <br></br>
            <label>enter email: </label>
            <input type="email" />
            <br></br>
            <br></br>
            <label>enter password: </label>
            <input type="password" />
            <br></br>
            <br></br>
            <label>re-enter password: </label>
            <input type="password" />
            <br></br>
            <br></br>
            <input type="submit" value="Create Account"/>
        </form>
        </>
    )
}

export default RegistrationPage