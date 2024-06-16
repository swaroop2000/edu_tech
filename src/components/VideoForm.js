// import React, { useState } from 'react';
// import { createVideo } from '../utils/api';

// const VideoForm = ({ userId, onCloseModal, onVideoCreated }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [url, setUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // State to manage loading state

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const newVideo = { title, description, url, user_id: userId };
//       const createdVideo = await createVideo(newVideo);
//       onVideoCreated(createdVideo);
//       setTitle('');
//       setDescription('');
//       setUrl('');
//       onCloseModal(); // Close modal after successful submission
//     } catch (error) {
//       console.error('Error creating video:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Add New Video</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter title"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows="3"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter description"
//               required
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="url" className="block text-sm font-medium text-gray-700">
//               Video URL
//             </label>
//             <input
//               type="url"
//               id="url"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter video URL"
//               required
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="mr-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
//               onClick={onCloseModal}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Adding...' : 'Add Video'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VideoForm;


// import React, { useState, useEffect } from 'react';
// import { createVideo } from '../utils/api';

// const VideoForm = ({ userId, onCloseModal, onVideoCreated }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [url, setUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // State to manage loading state
//   const [previewUrl, setPreviewUrl] = useState(''); // State to store video preview URL

//   useEffect(() => {
//     if (url) {
//       fetchVideoPreview(url);
//     } else {
//       setPreviewUrl('');
//     }
//   }, [url]);

//   const fetchVideoPreview = async (videoUrl) => {
//     try {
//       // Assuming you have a function to fetch video metadata from the URL
//       // This could involve making an API call to the video hosting service
//       const videoPreviewUrl = await getVideoPreview(videoUrl);
//       setPreviewUrl(videoPreviewUrl);
//     } catch (error) {
//       console.error('Error fetching video preview:', error);
//       setPreviewUrl(''); // Clear preview URL on error
//     }
//   };

//   const getVideoPreview = async (videoUrl) => {
//     // Replace with logic to fetch video metadata from videoUrl
//     // Example: fetching thumbnail from YouTube or Vimeo
//     // Here's a placeholder for direct video URL previews
//     return `https://img.youtube.com/vi/${extractVideoId(videoUrl)}/mqdefault.jpg`;
//   };

//   const extractVideoId = (videoUrl) => {
//     // Extract video ID from YouTube or Vimeo URL
//     // Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ, return 'dQw4w9WgXcQ'
//     // This is a simplified example and should be adapted based on supported video services
//     const match = videoUrl.match(/(?:youtu(?:\.be|be\.com)\/(?:.*v(?:\/|=)|(?:.*\/)?)([^"&?\/\s]{11}))/);
//     return match ? match[1] : null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const newVideo = { title, description, url, user_id: userId };
//       const createdVideo = await createVideo(newVideo);
//       onVideoCreated(createdVideo);
//       setTitle('');
//       setDescription('');
//       setUrl('');
//       setPreviewUrl(''); // Clear preview URL after submission
//       onCloseModal(); // Close modal after successful submission
//     } catch (error) {
//       console.error('Error creating video:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Add New Video</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter title"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows="3"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter description"
//               required
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="url" className="block text-sm font-medium text-gray-700">
//               Video URL
//             </label>
//             <input
//               type="url"
//               id="url"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter video URL"
//               required
//             />
//             {previewUrl && (
//               <div className="mt-2">
//                 <img src={previewUrl} alt="Video Preview" className="max-w-full h-auto rounded-lg" />
//               </div>
//             )}
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="mr-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
//               onClick={onCloseModal}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Adding...' : 'Add Video'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VideoForm;

// import React, { useState } from 'react';
// import { createVideo } from '../utils/api';

// const VideoForm = ({ userId, onCloseModal, onVideoCreated }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [url, setUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // State to manage loading state
//   const [videoPreviewUrl, setVideoPreviewUrl] = useState('');
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handleUrlChange = (e) => {
//     const videoUrl = e.target.value;
//     setUrl(videoUrl);
//     // Set video preview URL to enable auto-playing
//     setVideoPreviewUrl(videoUrl);
//   };

//   const handleVideoPlay = () => {
//     setIsVideoPlaying(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
  
//     try {
//       const newVideo = { title, description, video_url: url, user_id: userId };
//       const createdVideo = await createVideo(newVideo);
//       createdVideo();
//       onVideoCreated(); // Update parent component or perform any necessary action
  
//       // Clear form fields and close modal
//       setTitle('');
//       setDescription('');
//       setUrl('');
//       onCloseModal(); // Ensure this function properly closes the modal
      
//       // Optionally, you may want to update the video list if `onVideoCreated` doesn't handle this
//       // Example: refetch the list of videos
//       // fetchUserVideos(); // Assuming you have a function to refetch videos in VideoList.js
  
//     } catch (error) {
//       console.error('Error creating video:', error);
//     } finally {
//       setIsLoading(false);
//       setVideoPreviewUrl(''); // Clear video preview after submission, if applicable
//     }
//   };
  


//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Add New Video</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter title"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows="3"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter description"
//               required
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="url" className="block text-sm font-medium text-gray-700">
//               Video URL
//             </label>
//             <input
//               type="url"
//               id="url"
//               value={url}
//               onChange={handleUrlChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter video URL"
//               required
//             />
//             {/* Video Preview */}
//             {videoPreviewUrl && (
//               <div className="mt-4">
//                 <video
//                   className="w-full rounded-md shadow-sm"
//                   src={videoPreviewUrl}
//                   autoPlay
//                   muted
//                   loop
//                   onClick={handleVideoPlay}
//                 />
//               </div>
//             )}
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="mr-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
//               onClick={onCloseModal}
//             >
//               Cancel
//             </button>
//             <button
//   type="submit"
//   className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//   disabled={isLoading || !title || !description || !url}
// >
//   {isLoading ? 'Adding...' : 'Add Video'}
// </button>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VideoForm;

import React, { useState } from 'react';
import { createVideo } from '../utils/api';

const VideoForm = ({ userId, onCloseModal, onVideoCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleUrlChange = (e) => {
    const videoUrl = e.target.value;
    setUrl(videoUrl);
    setVideoPreviewUrl(videoUrl);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const newVideo = { title, description, video_url: url, user_id: userId };
      const createdVideo = await createVideo(newVideo);
      onVideoCreated(createdVideo);

      setTitle('');
      setDescription('');
      setUrl('');
      onCloseModal();
    } catch (error) {
      console.error('Error creating video:', error);
    } finally {
      setIsLoading(false);
      setVideoPreviewUrl('');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Video</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Video URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={handleUrlChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter video URL"
              required
            />
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
              disabled={isLoading || !title || !description || !url}
            >
              {isLoading ? 'Adding...' : 'Add Video'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoForm;


