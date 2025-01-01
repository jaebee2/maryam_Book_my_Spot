import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Here you would authenticate the user (e.g., check username/password against your DB)
    // For simplicity, let's assume if the username is 'admin' they are an admin
    if (username === 'admin') {
      login(username, 'admin');
      navigate('/admin'); // Redirect to admin page
    } else if (username === 'driver') {
      login(username, 'driver');
      navigate('/search-results'); // Redirect to search results for a driver
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300"
        />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white">Login</button>
      </form>
    </div>
  );
};

export default Login;
