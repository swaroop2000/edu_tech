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


// Working

// import React, { useState, useEffect } from 'react';
// import { fetchVideosByUserId } from '../utils/api'; // Adjust the path as necessary

// const VideoCard = ({ video, onVideoSelect }) => {
//   return (
//     <div className="w-full md:w-1/2 p-5" onClick={() => onVideoSelect(video)}>
//       <div className="relative">
//         <div className="wrap-video">
//           <video className="object-cover h-96 w-full" loop>
//             <source src={video.video_url} type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
//     <div className="flex-grow px-4 overflow-auto">
//       <div className="bg-indigo-900 py-4 px-4">
//         <h2 className="text-white text-5xl font-black uppercase text-center mb-4">Your Videos</h2>
        
//         <div class="mt-12">
//       <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
//         <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//           <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
//               <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
//               <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd"></path>
//               <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
//             </svg>
//           </div>
//           <div class="p-4 text-right">
//             <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Videos</p>
//             <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{videos.length}</h4>
//           </div>
          
//           </div>
//           <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-indigo-500 text-lg font-bold text-white flex items-center justify-center">
//   <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//     <path fill-rule="evenodd" d="M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z" clip-rule="evenodd" />
//   </svg>
//   ADD Video
//   <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
// </button>

//         </div>
        
//         </div>




        
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {videos.map((video) => (
//           <VideoCard key={video.id} video={video} onVideoSelect={onVideoSelect} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoList;


import React, { useState, useEffect } from 'react';
import { fetchVideosByUserId } from '../utils/api'; // Adjust the path as necessary
import VideoForm from './VideoForm'; // Adjust the path as necessary

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
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-grow px-4 overflow-auto">
      <div className="bg-indigo-900 py-4 px-4">
        <h2 className="text-white text-5xl font-black uppercase text-center mb-4">Your Videos</h2>
        
        <div className="mt-12">
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
  <path fillRule="evenodd" d="M10.5 17.5l7-5.5-7-5.5v11z" />
</svg>

              </div>
              <div class="p-4 text-right">
                <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Videos</p>
                <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{videos.length}</h4>
              </div>
            </div>
            <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-indigo-500 text-lg font-bold text-white flex items-center justify-center"onClick={openModal} >
   <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
     <path fill-rule="evenodd" d="M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z" clip-rule="evenodd" />
   </svg>
   ADD Video
   <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onVideoSelect={onVideoSelect} />
        ))}
      </div>

      {isModalOpen && (
        <VideoForm userId={userId} onCloseModal={closeModal} onVideoCreated={(createdVideo) => {
          // Implement any logic after video creation if needed
          console.log('Created Video:', createdVideo);
        }} />
      )}
    </div>
  );
};

export default VideoList;
