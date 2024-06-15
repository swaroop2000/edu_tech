import React, { useState, useEffect } from 'react';
import { fetchVideosByUserId } from '../utils/api';

const VideoList = ({ userId, onVideoSelect }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchUserVideos = async () => {
      try {
        const videosData = await fetchVideosByUserId(userId);
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
    <div>
      <h3>Your Videos</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.id} onClick={() => onVideoSelect(video)}>
            <div>
              <strong>Title:</strong> {video.title}
            </div>
            <div>
              <strong>Description:</strong> {video.description}
            </div>
            <div>
              <strong>Video URL:</strong> <a href={video.video_url}>{video.video_url}</a>
            </div>
            <div>
              <strong>Number of Comments:</strong> {video.num_comments}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
