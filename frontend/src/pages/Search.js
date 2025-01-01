import React, { useState } from 'react';

const Search = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (!location) {
      alert('Please enter a location.');
      return;
    }
    // Handle search logic here, e.g., send a GET request to the backend to fetch spots by location
    console.log('Searching for parking spots in', location);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Search for Parking Spots</h2>
        <div className="mb-4">
          <label className="block text-gray-600">Enter Location (City or Postcode)</label>
          <input
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., New York"
            required
          />
        </div>
        <button onClick={handleSearch} className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
