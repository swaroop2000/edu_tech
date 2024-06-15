import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <VideoContext.Provider value={{ videos, selectedVideo, setSelectedVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
