import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">BookMySpot</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/admin" className="text-white hover:text-gray-300">Admin</Link>
          <Link to="/bookings" className="text-white hover:text-gray-300">Bookings</Link>
          <Link to="/feedback" className="text-white hover:text-gray-300">Feedback</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
          <Link to="/owner" className="text-white hover:text-gray-300">Owner</Link>
          <Link to="/search-results" className="text-white hover:text-gray-300">Search Results</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
