// import React, { useId, useState } from 'react';
// import { createComment } from '../utils/api';

// const CommentForm = ({ videoId }) => {
//   const [content, setContent] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createComment(videoId,useId, { content });
//       setSuccessMessage('Comment posted successfully!');
//       setContent('');
//     } catch (error) {
//       setError('Failed to post comment. Please try again.');
//       console.error('Error posting comment:', error);
//     }
//   };

//   return (
//     <div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto">
//       <div className="w-full mt-16 md:mt-0">
//         <form onSubmit={handleSubmit} className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
//           <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
//             placeholder="Write your comment"
//             rows="5"
//             required
//           />
//           <input
//             type="submit"
//             value="Submit comment"
//             className="w-full text-white px-4 py-3 bg-blue-500 rounded-lg"
//           />
//         </form>
//         {error && <p className="text-red-500">{error}</p>}
//         {successMessage && <p className="text-green-500">{successMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default CommentForm;


import React, { useState } from 'react';
import { createComment } from '../utils/api';

const CommentForm = ({ videoId, userId }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComment(videoId,userId, { content });
      setSuccessMessage('Comment posted successfully!');
      setContent('');
      window.alert('Comment posted successfully!');
    } catch (error) {
      setError('Failed to post comment. Please try again.');
      console.error('Error posting comment:', error);
      window.alert('Failed to post comment. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto">
      <div className="w-full mt-16 md:mt-0">
        <form onSubmit={handleSubmit} className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
          <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Write your comment"
            rows="5"
            required
          />
          <input
            type="submit"
            value="Submit comment"
            className="w-full text-white px-4 py-3 bg-blue-500 rounded-lg"
          />
        </form>
        {/* Remove displaying error and success messages as <p> elements */}
      </div>
    </div>
  );
};

export default CommentForm;
