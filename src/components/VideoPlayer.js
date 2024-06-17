

// import React, { useState } from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';
// import VideoForm from './VideoForm';

// const VideoPlayer = ({ video, userId, onClose }) => {
//   const [reloadComments, setReloadComments] = useState(false); // State to trigger CommentList reload
//   const [showEditForm, setShowEditForm] = useState(false);
//   const handleCommentSubmit = () => {
//     // Toggle reloadComments state to trigger CommentList reload
//     setReloadComments(prevState => !prevState);
//   };
//   const handleEditClick = () => {
//     setShowEditForm(true);
//   };

//   const handleCloseEditForm = () => {
//     setShowEditForm(false);
//   };

//   const handleVideoUpdated = (updatedVideo) => {
//     // Handle updating the video state or any other necessary actions
//     console.log('Video updated:', updatedVideo);
//     setShowEditForm(false); // Close the edit form after successful update
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-left justify-left z-50 overflow-auto">
//       <div className="relative w-full h-full max-w-screen-md p-8 bg-white rounded-lg shadow-lg flex flex-col">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-2 text-gray-800 hover:text-gray-600 focus:outline-none z-10"
//         >
//           <svg
//             className="w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M6.343 5.636a1 1 0 011.414 0L12 10.586l4.243-4.95a1 1 0 111.414 1.415L13.414 12l4.243 4.95a1 1 0 01-1.414 1.415L12 13.414l-4.243 4.95a1 1 0 01-1.414-1.415L10.586 12 6.343 7.05a1 1 0 010-1.414z" />
//           </svg>
//         </button>
//         <div className="relative flex-1">
//           <video className="w-full h-full object-contain" controls autoPlay>
//             <source src={video.video_url} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

      

//         <div className="mt-4">
//           <h2 className="text-gray-800 text-xl font-semibold">{video.title}</h2>
//           <p className="text-gray-600 text-sm">{video.description}</p>
//         </div>
//         <div className="mt-4 flex-1 overflow-auto">
//           <CommentForm userId={userId} videoId={video.id} onSubmit={handleCommentSubmit} />
//         </div>
//       </div>
//       <div className="fixed top-0 right-0 w-0.45 h-full bg-white shadow-lg overflow-y-auto">
//         <CommentList key={reloadComments} videoId={video.id} /> {/* Key prop to force re-render on state change */}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;



import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import VideoForm from './VideoForm';

const VideoPlayer = ({ video, userId, onClose }) => {
  const [reloadComments, setReloadComments] = useState(false); // State to trigger CommentList reload
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(video);

  const handleCommentSubmit = () => {
    // Toggle reloadComments state to trigger CommentList reload
    setReloadComments(prevState => !prevState);
  };

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
  };

  const handleVideoUpdated = (updatedVideo) => {
    // Handle updating the video state or any other necessary actions
    // console.log('Video updated:', updatedVideo);
    
    alert('Video updated successfully!');
    // Reload the page to reflect the updated video details
    
    setShowEditForm(false); // Close the edit form after successful update
    // window.location.reload();
    setCurrentVideo(updatedVideo);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-left justify-left z-50 overflow-auto">
      <div className="relative w-full h-full max-w-screen-md p-8 bg-white rounded-lg shadow-lg flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-2 text-gray-800 hover:text-gray-600 focus:outline-none z-10"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.343 5.636a1 1 0 011.414 0L12 10.586l4.243-4.95a1 1 0 111.414 1.415L13.414 12l4.243 4.95a1 1 0 01-1.414 1.415L12 13.414l-4.243 4.95a1 1 0 01-1.414-1.415L10.586 12 6.343 7.05a1 1 0 010-1.414z" />
          </svg>
        </button>
        <div className="relative flex-1">
          <video className="w-full h-full object-contain" controls autoPlay>
            <source src={video.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex items-center justify-between mt-4">
  <div>
    <h2 className="text-gray-800 text-xl font-semibold">{currentVideo.title}</h2>
    <p className="text-gray-600 text-sm">{currentVideo.description}</p>
  </div>
  <button
    onClick={handleEditClick}
    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
  >
    Edit Video
  </button>
</div>
        <div className="mt-4 flex-1 overflow-auto">
          <CommentForm userId={userId} videoId={video.id} onSubmit={handleCommentSubmit} />
        </div>
      </div>
      <div className="fixed top-0 right-0 w-0.45 h-full bg-white shadow-lg overflow-y-auto">
        <CommentList key={reloadComments} videoId={video.id} /> {/* Key prop to force re-render on state change */}
      </div>

      {showEditForm && (
        <VideoForm
          userId={userId}
          initialVideo={video}
          onCloseModal={handleCloseEditForm}
          onVideoCreated={handleVideoUpdated}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
