
import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import VideoForm from './VideoForm';
import Joyride from 'react-joyride';

const VideoPlayer = ({ video, userId, onClose }) => {
// State variables
const [reloadComments, setReloadComments] = useState(false); // State to trigger reload of comments
const [showEditForm, setShowEditForm] = useState(false); // State to control visibility of edit form
const [currentVideo, setCurrentVideo] = useState(video); // State to manage current video being viewed
const [run, setRun] = useState(true); // State to control Joyride tour visibility

// Handler to trigger comment submission and reload comments

  const handleCommentSubmit = () => {
    setReloadComments(prevState => !prevState);
  };

// Handler to show the edit form for the video  
  const handleEditClick = () => {
    setShowEditForm(true);
  };

// Handler to close the edit form

  const handleCloseEditForm = () => {
    setShowEditForm(false);
  };

 // Handler to update the video after editing
  const handleVideoUpdated = (updatedVideo) => {
    
    alert('Video updated successfully!');
    
    setShowEditForm(false); // Close the edit form
    setCurrentVideo(updatedVideo); // Update the current video state
  };

// Joyride steps for guiding through the VideoPlayer interface  
  const steps = [
    {
      target: '#edit',
      content:( <div>
	  Click this button to edit the Video title and description
	</div>)
    },
    {
      target: '#comment',
      content:( <div>
	  Add a comment to the this Video
	</div>)
    },
    
    {
      target: '#close', 
      content: ( <div>
        Click to close the Video Player and return to Dahboard
      </div>)
    }
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-left justify-left z-50 overflow-auto">

{/* Joyride component for guiding through the interface */}      
      <Joyride
          steps={steps}
          run={run}
          continuous
          showProgress
          showSkipButton
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
      <div className="relative w-full h-full max-w-screen-md p-8 bg-white rounded-lg shadow-lg flex flex-col">

 {/* Close button */}        
        <button id = "close"
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

{/* Video player */}        
        <div className="relative flex-1">
          <video className="w-full h-full object-contain" controls autoPlay>
            <source src={video.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

 {/* Video title and edit button */}
        <div className="flex items-center justify-between mt-4">
  <div>
    <h2 className="text-gray-800 text-xl font-semibold">{currentVideo.title}</h2>
    <p className="text-gray-600 text-sm">{currentVideo.description}</p>
  </div>
  <button id = "edit"
    onClick={handleEditClick}
    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
  >
    Edit Video
  </button>
</div>

 {/* Comment form section */}
        <div id = "comment" className="mt-4 flex-1 overflow-auto">
          <CommentForm userId={userId} videoId={video.id} onSubmit={handleCommentSubmit} />
        </div>
      </div>

{/* Comment list section */}      
      <div id = "comment_"className="fixed top-0 right-0 w-0.45 h-full bg-white shadow-lg overflow-y-auto">
        <CommentList key={reloadComments} videoId={video.id} /> 
      </div>

{/* Edit video form */}
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
