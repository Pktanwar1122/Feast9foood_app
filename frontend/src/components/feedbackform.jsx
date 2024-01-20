import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of feedback (e.g., sending to server)
    console.log("Feedback submitted:", feedback);
  };

  return (
    <div className="max-w-md w-full mx-auto border-1 border-black p-6 bg-slate-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Provide Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="feedback"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Feedback
          </label>
          <textarea
            id="feedback"
            rows="4"
            className="w-full border border-slate-700 bg-slate-200 rounded-md py-2 px-3 text-sm text-gray-700 focus:outline-none focus:ring focus:border-blue-800"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="We'd love to hear your feedback"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
