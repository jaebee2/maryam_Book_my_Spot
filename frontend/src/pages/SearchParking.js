import React, { useState } from 'react';

const SearchParking = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Fetch available spots from backend based on the location
    fetch(`/api/search-parking?location=${location}`)
      .then((res) => res.json())
      .then((data) => console.log('Found parking spots:', data));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Search for Parking</h2>
        <div>
          <input
            type="text"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location (e.g., city, postcode)"
          />
          <button
            onClick={handleSearch}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchParking;
