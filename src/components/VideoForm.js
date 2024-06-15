import React, { useState } from 'react';
import { createVideo } from '../utils/api';

const VideoForm = ({ onVideoCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVideo = { title, description, url, user_id: 'your_name_snake_case' };
    const createdVideo = await createVideo(newVideo);
    onVideoCreated(createdVideo);
    setTitle('');
    setDescription('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="url"
        placeholder="Video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default VideoForm;
