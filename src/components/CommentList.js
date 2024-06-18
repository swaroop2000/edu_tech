
import React, { useState, useEffect } from 'react';
import { fetchComments } from '../utils/api';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);


// Effect hook to fetch comments when videoId changes
  useEffect(() => {
// Fetch comments for the given videoId    
    const fetchVideoComments = async () => {
      try {

// Set the comments state with the fetched data
        const commentsData = await fetchComments(videoId);
        setComments(commentsData.comments);
      } catch (error) {

// Handle error if fetching comments fails        
        console.error('Error fetching comments:', error);
      }
    };

// Invoke fetchVideoComments function when videoId changes    
    fetchVideoComments();
  }, [videoId]); // Dependency array ensures useEffect runs when videoId changes

  return (
    <div className="px-10 py-16 mx-auto bg-gray-100 bg-white min-w-[640px] max-w-screen-sm">
      <h3 className="text-2xl font-bold text-left text-gray-800 sm:text-center">

{/* Conditional rendering based on the length of comments array */}        
      {comments.length > 0 ? 'All comments on this video' : 'No comments on this video'}
      </h3>
      <div className="mt-10">

{/* Iterate through comments array and render each comment */}
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow w-full"
          >
            <div>

{/* Display commenter's ID */}              
              <h3 className="text-lg font-bold text-indigo-500 sm:text-xl md:text-2xl">By {comment.user_id}</h3>

{/* Display timestamp when the comment was created */}              
              <p className="text-sm font-bold text-gray-300">{new Date(comment.created_at).toLocaleString()}</p>

{/* Display the content of the comment */}              
              <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                {comment.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
