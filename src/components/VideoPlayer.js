import React from 'react';

const VideoPlayer = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      <div className="max-w-5xl mx-auto h-full flex items-center">
        <div className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
          <video width="1920" height="1080" loop controls autoPlay>
            <source src={video.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={onClose} className="absolute top-4 right-4 text-white">Close</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
