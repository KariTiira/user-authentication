import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import Register from './pages/register'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

function App() {
const token = localStorage.getItem("token")
    return (
        <Router>
            <div>
                <nav className='navbar'>
                    <ul>
                        <li className='navbar-link navbar-link-home'><Link to="/">Home</Link></li>
                        {token ? (
                        <>
                            {/** Tämä renderöidään jos ollaan kirjautuneena sisäänn */}
                            <li className='navbar-link'><Link to="/profile">Profile</Link></li>
                        </>
                        ) : (
                        <>
                            {/** Tämä renderöidään jos ei olla kirjautuneena sisään */}
                            <li className='navbar-link'><Link to="/login">Login</Link></li>
                            <li className='navbar-link'><Link to="/register">Register</Link></li>
                        </>
                        )}
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register"  element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App
