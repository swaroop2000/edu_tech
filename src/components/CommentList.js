import React, { useState, useEffect } from 'react';
import { fetchComments } from '../utils/api';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideoComments = async () => {
      try {
        const commentsData = await fetchComments(videoId);
        setComments(commentsData.comments); // Assuming API response returns an object with 'comments' array
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchVideoComments();
  }, [videoId]);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div>
              <strong>User:</strong> {comment.user_id}
            </div>
            <div>
              <strong>Comment:</strong> {comment.content}
            </div>
            <div>
              <strong>Created At:</strong> {new Date(comment.created_at).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
