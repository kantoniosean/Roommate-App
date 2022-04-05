import React from 'react';
import LoginPage from './front-end/LoginPage';
import ChoreList from './front-end/ChoreList';
import RoommateFinder from './front-end/RoommateFinder';
import Settings from './front-end/Settings';
import RegistrationPage from './front-end/RegistrationPage';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
     <div className="App">
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/RegistrationPage" element={<RegistrationPage />} />
            <Route path="/ChoreList" element={<ChoreList />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/RoommateFinder" element={<RoommateFinder />} />
        </Routes>
     </div>
    )
}

export default App;
