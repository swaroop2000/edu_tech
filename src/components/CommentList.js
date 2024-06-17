import React, { useState, useEffect } from 'react';
import { fetchComments } from '../utils/api';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideoComments = async () => {
      try {
        console.log("comments");
        const commentsData = await fetchComments(videoId);
        setComments(commentsData.comments); // Assuming API response returns an object with 'comments' array
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchVideoComments();
  }, [videoId]);

  return (
    <div className="max-w-4xl px-10 py-16 mx-auto bg-gray-100 bg-white min-w-screen">
      <h3 className="text-2xl font-bold text-left text-gray-800 sm:text-center">All comments on this post</h3>
      <div className="mt-10">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
          >
            <a href="#" className="flex items-center mt-6 mb-6 mr-6">
              <img
                src="https://avatars.githubusercontent.com/u/71964085?v=4"
                alt="avatar"
                className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
              />
            </a>
            <div>
              <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By {comment.user_id}</h3>
              <p className="text-sm font-bold text-gray-300">{new Date(comment.created_at).toLocaleString()}</p>
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
