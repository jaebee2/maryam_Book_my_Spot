// frontend/src/pages/Admin.js
import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../utils/api';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('token');
        const [usersData, spotsData] = await Promise.all([
          fetchAPI('/admin/users', 'GET', null, token),
          fetchAPI('/admin/spots', 'GET', null, token),
        ]);
        setUsers(usersData);
        setSpots(spotsData);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchAdminData();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email} - {user.role}</li>
        ))}
      </ul>
      <h3>Parking Spots</h3>
      <ul>
        {spots.map((spot) => (
          <li key={spot.id}>{spot.location} - {spot.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
