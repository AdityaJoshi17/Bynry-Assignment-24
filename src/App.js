import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import { Navbar } from 'react-bootstrap';
import Navigation from './components/Navbar/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profiles } from './pages/Profiles';
import { UserProfile } from './pages/UserProfile';
import Login from './components/Login/Login';
import ProfilesData from './components/profileCards/ProfilesData';
import { Profiles2 } from './pages/Profiles2';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div>
          <Navigation />
          <div id="logout">
            <h1>Welcome, {user.username}</h1>
            <p>Role: {user.role}</p>
            <button onClick={() => setUser(null)}>Logout</button>
          </div>

          <Router>
            <Routes>
              {user.role === 'admin' ? (
                <Route exact path="/" element={<Profiles />} />
              ) : (
                <Route exact path="/" element={<Profiles2 />} />
              )}
              <Route path="/user/:userId" element={<UserProfile />} />
              
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;