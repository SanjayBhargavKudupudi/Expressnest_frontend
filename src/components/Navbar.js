import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({setLogout}) => {

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user's authenticated state from storage
        // setUser(null); // Reset user state
        setLogout(true)
    };

    return (
        <nav className='navbar'>
            <h1>Expressnest</h1>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/">
                <button type='button' onClick={handleLogout}>Logout</button>
            </Link>
            {/* Include authentication status and log in/out options */}
        </nav>
    );
};

export default Navbar;
