

import React, { useState } from 'react';
import { createComment } from '../utils/api';

const CommentForm = ({ videoId, userId, onSubmit }) => {
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

// Call API to create a new comment      
      await createComment(videoId, userId, { content });

// Set success message and reset content      
      setSuccessMessage('Comment posted successfully!');
      setContent('');

// Call onSubmit callback to trigger parent component update          
      onSubmit(); 

// Display alert for successful comment submission  
      window.alert('Comment posted successfully!');
    } catch (error) {

// Handle error if comment submission fails      
      window.alert('Error posting comment:', error);
    }
  };

  return (
    <div className="max-w-4xl py-10 xl:px-5 flex justify-center mx-auto">
      <div className="w-full mt-16 md:mt-0">
        <form onSubmit={handleSubmit} className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
          <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>

{/* Textarea for entering comment content */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-indigo-500 focus:outline-none"
            placeholder="Write your comment"
            rows="4"
            required
          />

{/* Submit button */}          
          <input
            type="submit"
            value="Submit comment"
            className="w-full text-white px-4 py-3 bg-indigo-500 rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
