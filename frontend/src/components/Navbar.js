import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex  space-x-6 text-white">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/search" className="hover:underline">Search Parking</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/bookings" className="hover:underline">My Bookings</Link></li>
            <li><Link to="/feedback" className="hover:underline">Feedback</Link></li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
