// frontend/src/pages/Bookings.js
import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../utils/api';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await fetchAPI('/bookings', 'GET', null, token);
        setBookings(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <p>{booking.spot.location}</p>
            <p>From: {booking.startTime}</p>
            <p>To: {booking.endTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
