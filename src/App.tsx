import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const renderButtons = () => {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="dashboard">Dashboard</Link></li>
            <li><Link to="/sobre">About</Link></li>
            <li><Link to="/login">LogIn</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
  return (
   <div></div>
  )
}

export default App;
