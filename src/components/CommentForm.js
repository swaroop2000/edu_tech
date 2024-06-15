import React, { useState } from 'react';
import { createComment } from '../utils/api';

const CommentForm = ({ videoId }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComment(videoId, { content });
      setSuccessMessage('Comment posted successfully!');
      setContent('');
    } catch (error) {
      setError('Failed to post comment. Please try again.');
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Enter your comment..."
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
};

export default CommentForm;
