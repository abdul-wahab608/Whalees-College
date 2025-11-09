import React, { useState } from "react";
import { motion } from "framer-motion";
import YouTubeModal from "../common/YouTubeModal";

/**
 * Video Section Component - Example usage of YouTube Modal
 * Displays video thumbnails that open in a modal when clicked
 */
const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Example video data - replace with your actual YouTube links
  const videos = [
    {
      id: 1,
      title: "Campus Tour - Whales College",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your video
      thumbnail: "/assets/images/gallery1.jpg", // Or use YouTube thumbnail
      description: "Take a virtual tour of our beautiful campus",
    },
    {
      id: 2,
      title: "Student Life at Whales College",
      url: "https://youtu.be/dQw4w9WgXcQ", // Replace with your video
      thumbnail: "/assets/images/gallery2.jpg",
      description: "Discover what it's like to be a student here",
    },
    {
      id: 3,
      title: "Academic Excellence",
      url: "dQw4w9WgXcQ", // Can also use just the video ID
      thumbnail: "/assets/images/gallery3.jpeg",
      description: "Learn about our academic programs",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3">
            Watch Our Videos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get an inside look at life at Whales College
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 rounded-full p-4 transform scale-100 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {video.description}
                </p>
                <div className="mt-3 flex items-center text-blue-600 font-medium text-sm">
                  <span>Watch Video</span>
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* YouTube Modal */}
      <YouTubeModal
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url}
        title={selectedVideo?.title}
      />
    </section>
  );
};

export default VideoSection;
