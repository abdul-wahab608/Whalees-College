import React, { createContext, useContext, useState } from "react";

/**
 * Video Context for managing YouTube video modal state globally
 * Allows any component to trigger a video modal from anywhere in the app
 */
const VideoContext = createContext();

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};

export const VideoProvider = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const openVideo = (videoUrl, title) => {
    setCurrentVideo({ url: videoUrl, title });
  };

  const closeVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <VideoContext.Provider value={{ currentVideo, openVideo, closeVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
