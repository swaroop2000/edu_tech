

// import React, { useRef, useState, useEffect } from 'react';
// import CommentForm from './CommentForm';
// import CommentList from './CommentList';

// const VideoPlayer = ({ video, onClose }) => {
//   const videoRef = useRef(null);
//   const [controlsVisible, setControlsVisible] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     if (modalOpen && videoRef.current) {
//       videoRef.current.play();
//     } else if (videoRef.current) {
//       videoRef.current.pause();
//     }

//     return () => {
//       if (videoRef.current) {
//         videoRef.current.pause();
//       }
//     };
//   }, [modalOpen]);

//   useEffect(() => {
//     setModalOpen(true);
//   }, []);

//   const handlePlayPause = () => {
//     if (videoRef.current) {
//       if (!videoRef.current.paused) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//     }
//   };

//   const showControls = () => {
//     setControlsVisible(true);
//     setTimeout(() => {
//       setControlsVisible(false);
//     }, 3000);
//   };

//   return (
//     <div className="relative font-inter antialiased">
//       <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
//         <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
//           <div className="flex justify-center">
//             <div>
//               {modalOpen && (
//                 <>
//                   <div
//                     className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
//                     onClick={onClose}
//                   ></div>
//                   <div
//                     id="modal"
//                     className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
//                     role="dialog"
//                     aria-modal="true"
//                     onMouseMove={showControls}
//                     onKeyDown={(e) => e.key === 'Escape' && onClose()}
//                   >
//                     <div className="max-w-5xl mx-auto h-full flex items-center">
//                       <div className="relative w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
//                         <video
//                           ref={videoRef}
//                           width="1920"
//                           height="1080"
//                           loop
//                           controls
//                           onClick={handlePlayPause}
//                         >
//                           <source src={video.video_url} type="video/mp4" />
//                           Your browser does not support the video tag.
//                         </video>
//                         {controlsVisible && (
//                           <>
//                             <button
//                               onClick={onClose}
//                               className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full px-3 py-1"
//                             >
//                               X
//                             </button>
//                             <button
//                               onClick={handlePlayPause}
//                               className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 rounded-full px-3 py-1"
//                             >
//                               {videoRef.current && !videoRef.current.paused ? 'Pause' : 'Play'}
//                             </button>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="mt-8">
//             <CommentList videoId={video.id} />
//             <CommentForm videoId={video.id} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default VideoPlayer;



// Good implementation ********************************************

// import React from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';

// const VideoPlayer = ({ video, onClose }) => {


 

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50 overflow-auto">
//       <div className="relative w-full h-full max-w-screen-md p-4 bg-white rounded-lg shadow-lg">
//         <div className="relative">
//           <button onClick={onClose}
//             className="absolute top-4 right-4 text-gray-800"  
//           >
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M6.343 5.636a1 1 0 011.414 0L12 10.586l4.243-4.95a1 1 0 111.414 1.415L13.414 12l4.243 4.95a1 1 0 01-1.414 1.415L12 13.414l-4.243 4.95a1 1 0 01-1.414-1.415L10.586 12 6.343 7.05a1 1 0 010-1.414z" />
//             </svg>
//           </button>
//           <video className="w-full " controls autoPlay>
//           {/* <video className="absolute inset-0 w-full h-full object-cover" controls autoPlay> */}
//             <source src={video.video_url} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="mt-4">
         
        
//           <h2 className="text-gray-800 text-xl font-semibold">{video.title}</h2>
//           <p className="text-gray-600 text-sm">{video.description}</p>
//           <CommentList videoId={video.id} />
//           <CommentForm videoId={video.id} />
         
//         </div>
        
        
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;






// Fully working dont bother

// import React from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';

// const VideoPlayer = ({ video, onClose }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50 overflow-auto">
//       <div className="relative w-full h-full max-w-screen-md p-8 bg-white rounded-lg shadow-lg">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-2 text-gray-800 hover:text-gray-600 focus:outline-none"
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
//         <div className="relative">
//           <video className="w-full h-full object-contain" controls autoPlay>
//             <source src={video.video_url} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="mt-4">
//           <h2 className="text-gray-800 text-xl font-semibold">{video.title}</h2>
//           <p className="text-gray-600 text-sm">{video.description}</p>
//           <CommentList videoId={video.id} />
//           <CommentForm videoId={video.id} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;




import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const VideoPlayer = ({ video, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-3/4 h-full bg-black bg-opacity-90 flex items-left justify-left z-50 overflow-auto">
      
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
        <div className="mt-4">
          <h2 className="text-gray-800 text-xl font-semibold">{video.title}</h2>
          <p className="text-gray-600 text-sm">{video.description}</p>
         
        </div>
        <div className="mt-4 flex-1 overflow-auto">
        <CommentForm videoId={video.id} />
          </div>
        
      
      </div>
      <div className="fixed top-0 right-0 w-0.45 h-full bg-white shadow-lg overflow-y-auto">
        <CommentList videoId={video.id} />
      </div>
   
      
    </div>
  );
};

export default VideoPlayer;


// import React from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';

// const VideoPlayer = ({ video, onClose }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50 overflow-auto">
//       <div className="relative w-full max-w-screen-md p-8 bg-white rounded-lg shadow-lg flex">
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
//         <div className="ml-8 flex-1 overflow-auto">
//           <div className="mt-4">
//             <h2 className="text-gray-800 text-xl font-semibold">{video.title}</h2>
//             <p className="text-gray-600 text-sm">{video.description}</p>
//           </div>
//           <div className="mt-4">
//             <CommentForm videoId={video.id} />
//           </div>
//         </div>
//       </div>
//       <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg overflow-y-auto">
//         <CommentList videoId={video.id} />
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

