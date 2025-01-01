// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import SearchParking from './pages/SearchParking';
import Bookings from './pages/Bookings';
import Admin from './pages/Admin';
import Feedback from './pages/Feedback';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<SearchParking />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  </Router>
);

export default App;
