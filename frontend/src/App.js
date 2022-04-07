import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './LoginPage';
//import ChoreList from './ChoreList';
import RoommateFinder from './RoommateFinder';
import Preferences from './Preferences';
import RegistrationPage from './RegistrationPage';
import Settings from "./Settings";

function App() {
    return (
     <div className="App">
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/RegistrationPage" element={<RegistrationPage />} />
            {/*<Route path="/ChoreList" element={<ChoreList />} />*/}
            <Route path="/Preferences" element={<Preferences />} />
            <Route path="/RoommateFinder" element={<RoommateFinder />} />
            <Route path="/Settings" element={<Settings />} />
        </Routes>
     </div>
    )
}

export default App;