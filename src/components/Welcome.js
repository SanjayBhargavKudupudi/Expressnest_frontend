import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import UserList from './UserList';
import UserProfile from './UserProfile';
import Feed from './Feed';
// import Login from './LoginComponent';
import '../App.css';

function Welcome({user, setLogout}) {
  return (
    <div>
      <Navbar setLogout={setLogout} />
      <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<UserProfile user={user} />} />
          <Route path="/admin" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default Welcome;
