
import React, { useState, useEffect } from 'react';
import { createVideo, updateVideo } from '../utils/api';

const VideoForm = ({ userId, onCloseModal, onVideoCreated, initialVideo }) => {
  // State variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

// Effect to set form fields when initialVideo changes
  useEffect(() => {
    if (initialVideo) {
      setTitle(initialVideo.title);
      setDescription(initialVideo.description);
      setUrl(initialVideo.video_url);
      setVideoPreviewUrl(initialVideo.video_url);
    }
  }, [initialVideo]);

// Handle URL change to update video preview
  const handleUrlChange = (e) => {
    const videoUrl = e.target.value;
    setUrl(videoUrl);
    setVideoPreviewUrl(videoUrl);
  };

// Handle video play
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

// Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (initialVideo) {
// Update existing video        
        const updatedVideo = { video_id: initialVideo.id, title, description };
        await updateVideo(updatedVideo.video_id, updatedVideo);
        onVideoCreated(updatedVideo); 
      } else {
// Create new video        
        const newVideo = { title, description, video_url: url, user_id: userId };
        const createdVideo = await createVideo(newVideo);
        onVideoCreated(createdVideo);
      }

// Reset form fields and close modal
      setTitle('');
      setDescription('');
      setUrl('');
      onCloseModal();
    } catch (error) {
      console.error('Error saving video:', error);
    } finally {
      setIsLoading(false);
      setVideoPreviewUrl('');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">{initialVideo ? 'Edit Video' : 'Add New Video'}</h1>
        
 {/* Form */}        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">

{/* Title input */}            
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter title"
              required
            />
          </div>

{/* Description textarea */}          
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter description"
              required
            ></textarea>
          </div>

{/* Video URL input */}          
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Video URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={handleUrlChange}
              disabled={!!initialVideo} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter video URL"
              required={!initialVideo}
            />

{/* Video preview */}            
            {videoPreviewUrl && (
              <div className="mt-4">
                <video
                  className="w-full rounded-md shadow-sm"
                  src={videoPreviewUrl}
                  autoPlay
                  muted
                  loop
                  onClick={handleVideoPlay}
                />
              </div>
            )}
          </div>

{/* Buttons: Cancel and Submit */}          
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={onCloseModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading || !title || !description || (!initialVideo && !url)}
            >
              {isLoading ? 'Saving...' : initialVideo ? 'Update Video' : 'Add Video'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoForm;
