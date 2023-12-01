import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/">Logout</Link>
            {/* Include authentication status and log in/out options */}
        </nav>
    );
};

export default Navbar;
