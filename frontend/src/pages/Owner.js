import React, { useState } from 'react';

const Owner = () => {
  const [spotName, setSpotName] = useState('');
  const [spotLocation, setSpotLocation] = useState('');
  const [spotPrice, setSpotPrice] = useState('');
  const [spotAvailability, setSpotAvailability] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the logic to save the parking spot in the database
    const newSpot = {
      spotName,
      spotLocation,
      spotPrice,
      spotAvailability,
    };
    console.log('New Spot Created:', newSpot);
    // Here, you would send a POST request to your backend to save the spot in the database
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">List Your Parking Spot</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Spot Name</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={spotName}
              onChange={(e) => setSpotName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Spot Location</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={spotLocation}
              onChange={(e) => setSpotLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Price per Hour</label>
            <input
              type="number"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={spotPrice}
              onChange={(e) => setSpotPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Availability (e.g. 9AM-5PM)</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={spotAvailability}
              onChange={(e) => setSpotAvailability(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            List Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default Owner;
