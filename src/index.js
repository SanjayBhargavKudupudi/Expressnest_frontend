import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Importing global styles
import App from './App';  // Importing the main App component
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

ReactDOM.render(

  <BrowserRouter>
   
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);


// reportWebVitals();
