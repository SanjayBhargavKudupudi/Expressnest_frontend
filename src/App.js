// File: src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import Feed from './components/Feed';
import Login from './components/LoginComponent';
import './App.css';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Check if user is logged in (e.g., check local storage)
  //   const loggedInUser = localStorage.getItem('user');
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser) 
  //     setUser(foundUser);
  //   }
  // }, []);

  // const handleLogin = (userInfo) => {
  //   localStorage.setItem('user', JSON.stringify(userInfo)); // Persist user's authenticated state
  //   setUser(userInfo); // Update user state upon successful login
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem('user'); // Remove user's authenticated state from storage
  //   setUser(null); // Reset user state
  // };

  return (
    <>
      <Login />
    </>
  );
}

export default App;
