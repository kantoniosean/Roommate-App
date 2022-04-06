import React from 'react';
import LoginPage from './front-end/LoginPage';
import ChoreList from './front-end/ChoreList';
import RoommateFinder from './front-end/RoommateFinder';
import Preferences from './front-end/Preferences';
import RegistrationPage from './front-end/RegistrationPage';
import Settings from "./front-end/Settings";
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
     <div className="App">
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/RegistrationPage" element={<RegistrationPage />} />
            <Route path="/ChoreList" element={<ChoreList />} />
            <Route path="/Preferences" element={<Preferences />} />
            <Route path="/RoommateFinder" element={<RoommateFinder />} />
            <Route path="/Settings" element={<Settings />} />
        </Routes>
     </div>
    )
}

export default App;
