// frontend/src/pages/SearchParking.js
import React, { useState } from 'react';
import { fetchAPI } from '../utils/api';

const SearchParking = () => {
  const [query, setQuery] = useState('');
  const [spots, setSpots] = useState([]);

  const searchSpots = async () => {
    try {
      const data = await fetchAPI(`/parking/search?location=${query}`);
      setSpots(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Search Parking</h2>
      <input
        type="text"
        placeholder="Enter location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchSpots}>Search</button>
      <ul>
        {spots.map((spot) => (
          <li key={spot.id}>
            <p>{spot.location}</p>
            <p>{spot.price} per hour</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchParking;
