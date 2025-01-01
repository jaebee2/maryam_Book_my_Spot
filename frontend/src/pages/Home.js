import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to BookMySpot!</h1>
      <p className="text-xl text-gray-600 mt-4">
        Your go-to platform for renting and booking parking spaces.
      </p>
      <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition">
        Explore Now
      </button>
    </div>
  );
};

export default Home;
