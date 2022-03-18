import React from 'react';
import logo from './media/Roomie.png';
import pic from './media/roommates.jpg';
import './style.css';

function LoginPage() {
    return (
        <>
        <img src={logo} className="logos" alt="Logo" />
        <div className='text-read'>
        <h2 className='header-one'>Welcome to Roomie!</h2>
        <h2 className='header-one'>Sign up to join!</h2>
        <label>enter email: </label>
        <input type="text" />
        <br></br>
        <br></br>
        <label>enter password: </label>
        <input type="password" />
        <h4>Already have an account? <u>Login</u></h4>
        </div>
        <img src={pic} className='picture' alt="picture"/>
        </>
    )
}

export default LoginPage