// frontend/src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI } from '../utils/api';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'driver' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchAPI('/auth/register', 'POST', formData);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="driver">Driver</option>
          <option value="owner">Parking Owner</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
