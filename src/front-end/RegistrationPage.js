import React from 'react'
import logo from './media/Roomie.png'
import './style.css'

function RegistrationPage() {
    return(
        <>
        <img src={logo} className="logos" alt="logo" />
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