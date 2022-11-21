import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Subscription from './pages/Subscription';
import ManageMusic from './pages/ManageMusic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route path="Register/*" element={<Register />} />
        <Route path="subscription/*" element={<Subscription />} />
        <Route path="manage-music/*" element={<ManageMusic />} />
      </Routes>
    </Router>
  );
}

export default App;
