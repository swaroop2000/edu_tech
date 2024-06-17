
import React, { useRef, useState, useEffect } from 'react';
import { fetchVideosByUserId } from '../utils/api';
import Joyride from 'react-joyride';
import VideoForm from './VideoForm';
import VideoPlayer from './VideoPlayer';
import logo from '../assets/LOGO_ICON.png';
import logo_b from '../assets/FULL_LOGO_WHITE.png';



const VideoCard = ({ video, onVideoSelect }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    try {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Error playing video:', error);
          });
        }
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    try {
      if (videoRef.current && isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error pausing video:', error);
    }
  };
  

  const handleClick = () => {
    onVideoSelect(video);
  };
  

  return (
    <div
      className="w-full md:w-0.95 p-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="wrap-video relative">
        <video
          ref={videoRef}
          className="object-cover h-96 w-full bg-black"
          loop
          muted
        >
          <source src={video.video_url} type="video/mp4" />
        </video>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-12 h-12 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={handleClick}
            >
              <path d="M17.5 12L10 18V6l7.5 6zm-12 6h-3v-12h3v12zm14-12h-3v12h3v-12z" />
            </svg>
          </div>
        )}
      </div>
      <div className="pt-4 grid grid-cols-6 gap-4">
        <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
          {video.title}
        </span>
        <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
        <div className="col-end-7 col-span-2 text-sm text-black-900 uppercase flex justify-end">{video.num_comments} Comments</div>
        </span>
      </div>
      <span className="block text-slate-400 text-xs uppercase font-mono">
        {video.description}
      </span>
    </div>
  );
};



const VideoList = ({ userId, onVideoSelect }) => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [run, setRun] = useState(true);

  const fetchUserVideos = async () => {
    try {
      const videosData = await fetchVideosByUserId(userId);
      setVideos(videosData.videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
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

  const handleVideoCreated = (createdVideo) => {
    fetchUserVideos();
    alert('Video uploaded successfully!');
    closeModal();
  };
  const handleVideoSelect = (video) => {
    handleJoyrideStop();
    setSelectedVideo(video);
  };

  const handleCloseVideoPlayer = () => {
    setSelectedVideo(null);
    fetchUserVideos(); 
  };

  const handleJoyrideStop = () => {
    setRun(false);
  };


  const steps = [
    {
      target: '#count',
      content:( <div>
	  Count of Videos you uploaded
	</div>)
    },
    {
      target: '#add',
      content:( <div>
	  Use this button to upload a new video
	</div>)
    },
    {
      target: '.video-card:first-child', 
      content: 'Click the below to access the videos you uploaded along with comments.',
    },
  ];

  return (
    
    <div className="flex-grow px-4 overflow-auto">
       
      <div className="bg-indigo-900 py-4 px-4">
      <div className="flex items-center justify-center mb-4">
      
          <img src={logo} alt="Logo" className="w-40 h-40 mr-4" />
          <h2 className="text-white text-5xl font-black uppercase">Edu Videos Dashboard</h2>
        </div>
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

        {successMessage && (
          <div className="alert alert-success text-center mb-4">
            {successMessage}
          </div>
        )}
    
        <div className="mt-12">
       
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
         
          <br></br>
      
            <div  id = "count"  className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                  <path fillRule="evenodd" d="M10.5 17.5l7-5.5-7-5.5v11z" />
                </svg>
              </div>
              
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Videos</p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{videos.length}</h4>
              </div>
            </div>
            <button id = "add" className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-indigo-500 text-lg font-bold text-white flex items-center justify-center" onClick={() => {
                openModal();
                handleJoyrideStop();
              }}>
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              ADD Video
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {videos.length === 0 ? (
          <h3 className="text-white text-3xl font-black uppercase text-center mb-4">
            You have not added any videos yet.<br />
            Use the above button to add the video.
          </h3>
        ) : (
          videos.map((video, index) => (
            <div key={video.id} className={`video-card ${index === 0 ? 'first-child' : ''}`}>
            <VideoCard key={video.id} video={video} onVideoSelect={handleVideoSelect} />
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <VideoForm userId={userId} onCloseModal={closeModal} onVideoCreated={handleVideoCreated} />
      )}
       {selectedVideo && <VideoPlayer video={selectedVideo} userId={userId} onClose={handleCloseVideoPlayer} />}

       <div className="flex justify-center">
  <img src={logo_b} alt="Logo" className="w-200 h-150 m-4" />
</div>
    </div>
  );
};

export default VideoList;
