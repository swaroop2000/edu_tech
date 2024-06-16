// import React from 'react';

// const VideoPlayer = ({ video, onClose }) => {
//   if (!video) return null;

//   return (
//     <div className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6" role="dialog" aria-modal="true">
//       <div className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
//       <div className="max-w-5xl mx-auto h-full flex items-center">
//         <div className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
//           <video width="1920" height="1080" loop controls='true' autoPlay>
//             <source src={video.video_url} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <button onClick={onClose} className="absolute top-20 right-40 text-white">X</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({ video, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [modalOpen]);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const showControls = () => {
    setControlsVisible(true);
    setTimeout(() => {
      setControlsVisible(false);
    }, 3000);
  };

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div>
              {modalOpen && (
                <>
                  <div
                    className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                    onClick={onClose}
                  ></div>
                  <div
                    id="modal"
                    className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
                    role="dialog"
                    aria-modal="true"
                    onMouseMove={showControls}
                    onKeyDown={(e) => e.key === 'Escape' && onClose()}
                  >
                    <div className="max-w-5xl mx-auto h-full flex items-center">
                      <div className="relative w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                        <video
                          ref={videoRef}
                          width="1920"
                          height="1080"
                          loop
                          controls
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                          onClick={handlePlayPause}
                        >
                          <source src={video.video_url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        {controlsVisible && (
                          <>
                            <button
                              onClick={onClose}
                              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full px-3 py-1"
                            >
                              X
                            </button>
                            <button
                              onClick={handlePlayPause}
                              className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 rounded-full px-3 py-1"
                            >
                              {isPlaying ? 'Pause' : 'Play'}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPlayer;






// import React, { useState, useRef, useEffect } from 'react';

// const VideoPlayer = ({ video, onClose }) => {
//   const [showControls, setShowControls] = useState(false);
//   const videoRef = useRef(null);
//   let timeout;

//   // Function to show controls and reset timeout
//   const showVideoControls = () => {
//     setShowControls(true);
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       setShowControls(false);
//     }, 3000); // Hide controls after 3 seconds of inactivity
//   };

//   // Function to clear timeout and hide controls
//   const hideVideoControls = () => {
//     clearTimeout(timeout);
//     setShowControls(false);
//   };

//   // Toggle controls visibility based on mouse movement
//   const handleMouseMove = () => {
//     if (!showControls) {
//       showVideoControls();
//     }
//   };

//   // Handle mouse leaving the video area
//   const handleMouseLeave = () => {
//     hideVideoControls();
//   };

//   useEffect(() => {
//     // Ensure video is paused and reset when modal is closed
//     if (!showControls && videoRef.current) {
//       console.log('Heeere');
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   }, [showControls]);

//   if (!video) return null;

//   return (
//     <div className="fixed inset-0 z-[99999] flex justify-center items-center px-4 md:px-6 py-6" role="dialog" aria-modal="true">
//       <div className="fixed inset-0 z-[99998] bg-black bg-opacity-50 transition-opacity"></div>
//       <div
//         className="relative max-w-5xl mx-auto h-full flex items-center"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="relative w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
//           <video
//             ref={videoRef}
//             width="1920"
//             height="1080"
//             loop
//             controls={showControls}
//             autoPlay
//             className="w-full h-full"
//           >
//             <source src={video.video_url} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <button
//             onClick={onClose}
//             className={`absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center ${showControls ? '' : 'hidden'}`}
//           >
//             &times;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;


