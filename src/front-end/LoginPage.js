import React, { useEffect, useState } from 'react';
import logo from './media/Roomie.png';
import pic from './media/roommates.jpg';
import './style.css';
import './RegistrationPage.js';
import Axios from "axios";
import '../back-end/User';
import mongoose from 'mongoose';
const UserModel = require('../back-end/models/Users');

function LoginPage() {

    const [user, setUser] = useState([]);
    const [inputVal, setInputVal] = useState('');

    let user1 = (userId) => {
        UserModel.findOne({ id : userId }, (error, data) => {
            if (error)
                console.log(error)
            else
                console.log(data)
        })
        setUser(user1);
    }

    return (
        <>
        <img src={logo} className="logos" alt="Logo" />
        <div className='text-read'>
            <h2 className='header-one'>Welcome to Roomie!</h2>
            <form>
            <label>enter id: </label>
            <input 
            type="id" id='id' value = {inputVal} onChange = {e =>
            setInputVal(e.target.value)}>
            </input>
            <button type='submit' onClick = {user1(inputVal)}> Submit </button>
            <br></br>
            <br></br>
            <label>enter password: </label>
            <input type="password" />
            <br></br>
            <br></br>
            <input className="acc-button" type="submit" id="button" value="Login" />
            </form>
            <h4>Don't have an account? <a href='/RegistrationPage'><u>Sign Up</u></a></h4>
        </div>
        <img src={pic} className='picture' alt="picture"/>
        </>
    )
}

export default LoginPage