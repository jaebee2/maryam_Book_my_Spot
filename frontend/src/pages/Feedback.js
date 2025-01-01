import React, { useState } from 'react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit feedback to the backend
    const feedback = { rating, comments };
    fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then(() => {
        alert('Feedback submitted');
        setRating(0);
        setComments('');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Leave Feedback</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-600">Rating (1 to 5)</label>
            <input
              type="number"
              min="1"
              max="5"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Comments</label>
            <textarea
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
