const API_BASE_URL = 'https://take-home-assessment-423502.uc.r.appspot.com/api';

// Function to create a new video
export const createVideo = async (videoData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/videos`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(videoData),
    });
    if (!response.ok) {
      throw new Error('Failed to create video');
    }
    return response.json();
  } catch (error) {
    console.error('Error creating video:', error);
    throw error;
  }
};

// Function to fetch videos by user ID
export const fetchVideosByUserId = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/videos?user_id=${userId}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

// Function to update a video
export const updateVideo = async (videoId, videoData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/videos`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        video_id: videoId,
        ...videoData
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to update video');
    }
    return response.json();
  } catch (error) {
    console.error('Error updating video:', error);
    throw error;
  }
};

// Function to create a new comment for a video
export const createComment = async (videoId, commentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/videos/comments`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        video_id: videoId,
        ...commentData
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to post comment');
    }
    return response.json();
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error;
  }
};

// Function to fetch comments for a video
export const fetchComments = async (videoId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/videos/comments?video_id=${videoId}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};
