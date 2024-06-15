// import React, { useState, useEffect } from 'react';
// import { fetchVideosByUserId } from '../utils/api'; // Assuming you have an API function to fetch videos

// const VideoCard = ({ video }) => {
//   return (
//     <div className="md:w-1/2 p-6">
//       <div className="relative">
//         <div className="wrap-video">
//           <video className="object-cover h-96 w-full bg-black" loop>
//             <source src={video.video_url} type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M17.5 12L10 18V6l7.5 6zm-12 6h-3v-12h3v12zm14-12h-3v12h3v-12z" />
//             </svg>
//           </div>
//         </div>
//         <div className="mt-4 grid grid-cols-6 gap-4">
//           <div className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">{video.title}</div>
//           <div className="col-end-7 col-span-2 text-sm text-gray-500 uppercase flex justify-end">{video.num_comments} Comments</div>
//         </div>
//         <div className="mt-1 text-gray-400 text-xs uppercase font-mono">{video.description}</div>
//       </div>
//     </div>
//   );
// };

// const VideoList = ({ userId, onVideoSelect }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchUserVideos = async () => {
//       try {
//         const videosData = await fetchVideosByUserId(userId); // Call your API function to fetch videos
//         setVideos(videosData.videos); // Assuming API response returns an object with 'videos' array
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     if (userId) {
//       fetchUserVideos();
//     }
//   }, [userId]);

//   return (
//     <div className="bg-black min-h-screen flex flex-col">
//       <div className="py-4 mx-auto">
//         <h2 className="text-white text-5xl font-black uppercase text-center mb-8">Your Videos</h2>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-white">Number of Videos: {videos.length}</p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Add New Video
//           </button>
//         </div>
//         <div className="gap-6 mx-4 md:flex">
//           {videos.map((video) => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoList;

// import React, { useState, useEffect } from 'react';
// import { fetchVideosByUserId } from '../utils/api'; // Assuming you have an API function to fetch videos

// const VideoCard = ({ video }) => {
//   return (
//     <div className="w-full md:w-1 lg:w-1/3 xl:w-1/2 p-5">
//       <div className="relative">
//         <div className="wrap-video">
//           <video className="object-cover h-96 w-full bg-black" loop>
//             <source src={video.video_url} type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M17.5 12L10 18V6l7.5 6zm-12 6h-3v-12h3v12zm14-12h-3v12h3v-12z" />
//             </svg>
//           </div>
//         </div>
//         <div className="mt-4 grid grid-cols-6 gap-4">
//           <div className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">{video.title}</div>
//           <div className="col-end-7 col-span-2 text-sm text-gray-500 uppercase flex justify-end">{video.num_comments} Comments</div>
//         </div>
//         <div className="mt-1 text-gray-400 text-xs uppercase font-mono">{video.description}</div>
//       </div>
//     </div>
//   );
// };

// const VideoList = ({ userId, onVideoSelect }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchUserVideos = async () => {
//       try {
//         const videosData = await fetchVideosByUserId(userId); // Call your API function to fetch videos
//         setVideos(videosData.videos); // Assuming API response returns an object with 'videos' array
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     if (userId) {
//       fetchUserVideos();
//     }
//   }, [userId]);

//   return (
//     <div className="bg-black max-h-screen flex flex-col">
//       <div className="py-2 mx-auto">
//         <h2 className="text-white text-5xl font-black uppercase text-center mb-8">Your Videos</h2>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-white">Number of Videos: {videos.length}</p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Add New Video
//           </button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
//   {videos.map((video) => (
//     <VideoCard key={video.id} video={video} />
//   ))}
// </div>

//       </div>
//     </div>
//   );
// };

// export default VideoList;
// import React, { useState, useEffect } from 'react';
// import { fetchVideosByUserId } from '../utils/api'; // Assuming you have an API function to fetch videos

// const VideoCard = ({ video }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 p-5">
//       <div className="relative">
//         <div className="wrap-video" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <video className="object-cover h-96 w-full bg-black" loop>
//             <source src={video.video_url} type="video/mp4" />
//           </video>
//           <div className={`absolute inset-0 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
//             <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M17.5 12L10 18V6l7.5 6zm-12 6h-3v-12h3v12zm14-12h-3v12h3v-12z" />
//             </svg>
//           </div>
//         </div>
//         <div className="mt-4 grid grid-cols-6 gap-4">
//           <div className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">{video.title}</div>
//           <div className="col-end-7 col-span-2 text-sm text-gray-500 uppercase flex justify-end">{video.num_comments} Comments</div>
//         </div>
//         <div className="mt-1 text-gray-400 text-xs uppercase font-mono">{video.description}</div>
//       </div>
//     </div>
//   );
// };

// const VideoList = ({ userId, onVideoSelect }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchUserVideos = async () => {
//       try {
//         const videosData = await fetchVideosByUserId(userId); // Call your API function to fetch videos
//         setVideos(videosData.videos); // Assuming API response returns an object with 'videos' array
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     if (userId) {
//       fetchUserVideos();
//     }
//   }, [userId]);

//   return (
//     <div className="bg-black min-h-screen flex flex-col">
//       <div className="py-2 mx-auto flex-grow">
//         <h2 className="text-white text-5xl font-black uppercase text-center mb-8">Your Videos</h2>
//         <div className="flex justify-between items-center mb-4 mx-4">
//           <p className="text-white">Number of Videos: {videos.length}</p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Add New Video
//           </button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-4">
//           {videos.map((video) => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoList;





// import React, { useState, useEffect } from 'react';
// import { fetchVideosByUserId } from '../utils/api'; // Assuming you have an API function to fetch videos

// const VideoCard = ({ video }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 p-5">
//       <div className="relative">
//         <div className="wrap-video" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <video className="object-cover h-96 w-full bg-black" loop>
//             <source src={video.video_url} type="video/mp4" />
//           </video>
//           <div className={`absolute inset-0 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
//             <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M17.5 12L10 18V6l7.5 6zm-12 6h-3v-12h3v12zm14-12h-3v12h3v-12z" />
//             </svg>
//           </div>
//         </div>
//         <div className="mt-4 grid grid-cols-6 gap-4">
//           <div className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">{video.title}</div>
//           <div className="col-end-7 col-span-2 text-sm text-gray-500 uppercase flex justify-end">{video.num_comments} Comments</div>
//         </div>
//         <div className="mt-1 text-gray-400 text-xs uppercase font-mono">{video.description}</div>
//       </div>
//     </div>
//   );
// };

// const VideoList = ({ userId, onVideoSelect }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchUserVideos = async () => {
//       try {
//         const videosData = await fetchVideosByUserId(userId); // Call your API function to fetch videos
//         setVideos(videosData.videos); // Assuming API response returns an object with 'videos' array
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     if (userId) {
//       fetchUserVideos();
//     }
//   }, [userId]);

//   return (
//     <div className="bg-black min-h-screen flex flex-col">
//   <div className="py-4 mx-auto flex-grow"> {/* Ensure this div has content that can expand */}
//     <h2 className="text-white text-5xl font-black uppercase text-center mb-8">Your Videos</h2>
//     <div className="flex justify-between items-center mb-4 mx-4">
//       <p className="text-white">Number of Videos: {videos.length}</p>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Add New Video
//       </button>
//     </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-4">
//       {videos.map((video) => (
//         <VideoCard key={video.id} video={video} />
//       ))}
//     </div>
//   </div>
// </div>

//   );
// };

// export default VideoList;

// import React, { useState, useEffect } from 'react';
// import { fetchVideosByUserId } from '../utils/api'; // Assuming you have an API function to fetch videos

// const VideoCard = ({ video }) => {
//   return (
//     <div className="w-full md:w-1/2 p-5">
//       <div className="relative">
//         <div className="wrap-video">
//           <video className="object-cover h-96 w-full bg-black" loop>
//             <source src={video.video_url} type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M17.5 12L10 18V6l7.5 6zm-12 6h-3v-12h3v12zm14-12h-3v12h3v-12z" />
//             </svg>
//           </div>
//         </div>
//         <div className="mt-4 grid grid-cols-6 gap-4">
//           <div className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">{video.title}</div>
//           <div className="col-end-7 col-span-2 text-sm text-gray-500 uppercase flex justify-end">{video.num_comments} Comments</div>
//         </div>
//         <div className="mt-1 text-gray-400 text-xs uppercase font-mono">{video.description}</div>
//       </div>
//     </div>
//   );
// };

// const VideoList = ({ userId, onVideoSelect }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchUserVideos = async () => {
//       try {
//         const videosData = await fetchVideosByUserId(userId); // Call your API function to fetch videos
//         setVideos(videosData.videos); // Assuming API response returns an object with 'videos' array
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     if (userId) {
//       fetchUserVideos();
//     }
//   }, [userId]);

//   return (
//     <div className="bg-black min-h-screen flex flex-col">
//       <div className="bg-black py-4 px-4"> {/* Added padding for spacing */}
//         <h2 className="text-white text-5xl font-black uppercase text-center mb-4">Your Videos</h2>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-white">Number of Videos: {videos.length}</p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Add New Video
//           </button>
//         </div>
//       </div>
//       <div className="flex-grow px-4"> {/* Added padding for spacing */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
//           {videos.map((video) => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoList;

import React, { useState, useEffect } from 'react';
import { fetchVideosByUserId } from '../utils/api'; // Adjust the path as necessary

const VideoCard = ({ video, onVideoSelect }) => {
  return (
    <div className="w-full md:w-1/2 p-5" onClick={() => onVideoSelect(video)}>
      <div className="relative">
        <div className="wrap-video">
          <video className="object-cover h-96 w-full" loop>
            <source src={video.video_url} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 12L10 18V6l7.5 6zm-12 6h-3v-12h3v12zm14-12h-3v12h3v-12z" />
            </svg>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">{video.title}</div>
          <div className="col-end-7 col-span-2 text-sm text-gray-500 uppercase flex justify-end">{video.num_comments} Comments</div>
        </div>
        <div className="mt-1 text-gray-400 text-xs uppercase font-mono">{video.description}</div>
      </div>
    </div>
  );
};

const VideoList = ({ userId, onVideoSelect }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchUserVideos = async () => {
      try {
        const videosData = await fetchVideosByUserId(userId); // Call your API function to fetch videos
        setVideos(videosData.videos); // Assuming API response returns an object with 'videos' array
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    if (userId) {
      fetchUserVideos();
    }
  }, [userId]);

  return (
    <div className="flex-grow px-4 overflow-auto">
      <div className="bg-indigo-900 py-4 px-4">
        <h2 className="text-white text-5xl font-black uppercase text-center mb-4">Your Videos</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-white">Number of Videos: {videos.length}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Video
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onVideoSelect={onVideoSelect} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
