import React from "react";
import { motion } from "framer-motion";

/**
 * YouTube Video Button Component
 * A reusable button that can be placed anywhere to trigger a video modal
 * 
 * @param {function} onClick - Callback when button is clicked
 * @param {string} title - Button text/title
 * @param {string} variant - Style variant: 'primary', 'secondary', 'minimal', 'badge'
 * @param {string} size - Size: 'small', 'medium', 'large'
 */
const YouTubeVideoButton = ({ 
  onClick, 
  title = "Watch Video", 
  variant = "primary",
  size = "medium",
  icon = true 
}) => {
  
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer";
  
  const variantClasses = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    minimal: "text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline",
    badge: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105",
  };
  
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-5 py-2.5 text-base",
    large: "px-7 py-3.5 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      whileHover={{ scale: variant === 'minimal' ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
      <span>{title}</span>
    </motion.button>
  );
};

export default YouTubeVideoButton;
