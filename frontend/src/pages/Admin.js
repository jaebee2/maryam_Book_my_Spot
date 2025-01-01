import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch users and parking spot listings from backend
    fetch('/api/admin/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch('/api/admin/listings')
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Admin Dashboard</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-medium text-gray-700 mb-4">Users</h3>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-2xl font-medium text-gray-700 mb-4">Parking Listings</h3>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="border px-4 py-2">Spot Name</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{listing.name}</td>
                  <td className="border px-4 py-2">{listing.location}</td>
                  <td className="border px-4 py-2">${listing.price}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-red-500 text-white py-1 px-4 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
