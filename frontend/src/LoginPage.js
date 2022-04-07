import { useEffect, useState } from 'react';
import Axios from "axios";

import logo from './media/Roomie.png';
import pic from './media/roommates.jpg';

import './style.css';

import './RegistrationPage.js';

function LoginPage() {

    return (
        <>
        <img src={logo} alt="logo" height="75"></img>
        <div className='text-read'>
            <h2 className='header-one'>Welcome to Roomie!</h2>
            <form>
            <label>enter id: </label>
            <input type="id" id='id'></input>
            <button> Submit </button>
            <br></br>
            <br></br>
            <label>enter password: </label>
            <input type="password" />
            <br></br>
            <br></br>
            <input className="acc-button" type="submit" id="button" value="Login" />
            </form>
            <h4>Don't have an account? <a href='RegistrationPage.js'><u>Sign Up</u></a></h4>
        </div>
        <img src={pic} className='picture' alt="picture"/>
        </>
    );
}

export default LoginPage