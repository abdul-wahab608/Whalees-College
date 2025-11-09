import React from "react";
import { motion } from "framer-motion";

/**
 * Embedded YouTube Video Player Component
 * Displays a YouTube video player inline on the page
 * Users can play/pause directly in the embedded player
 * 
 * @param {string} videoUrl - YouTube video URL or ID
 * @param {string} title - Title displayed above the video
 * @param {string} description - Optional description below title
 */
const YouTubeEmbed = ({ videoUrl, title, description }) => {
  // Extract YouTube video ID from various URL formats
  const getYouTubeId = (url) => {
    if (!url) return null;
    
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-600 font-semibold">Invalid YouTube URL</p>
        <p className="text-sm text-red-500 mt-1">Please provide a valid YouTube video URL or ID</p>
      </div>
    );
  }

  // Embed URL with controls enabled
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <motion.div
      className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Title Section */}
      {title && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h3 className="text-white font-bold text-xl">{title}</h3>
          {description && (
            <p className="text-blue-100 text-sm mt-1">{description}</p>
          )}
        </div>
      )}

      {/* Video Player */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={title || "YouTube video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
};

export default YouTubeEmbed;
