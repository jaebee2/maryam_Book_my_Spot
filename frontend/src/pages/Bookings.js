import React, { useState, useEffect } from 'react';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from backend
    fetch('/api/bookings')
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const cancelBooking = (id) => {
    // Call the backend to cancel the booking
    fetch(`/api/bookings/cancel/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then(() => setBookings(bookings.filter((booking) => booking.id !== id)));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Your Bookings</h2>
        <div>
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
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="border px-4 py-2">{booking.spotName}</td>
                  <td className="border px-4 py-2">{booking.location}</td>
                  <td className="border px-4 py-2">${booking.price}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 text-white py-1 px-4 rounded"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Cancel
                    </button>
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

export default Bookings;
