import React from "react";
import { motion } from "framer-motion";

/**
 * NewsItem - Atomic presentational component for news article card
 * @param {Object} item - News item data object
 * @param {Function} onOpen - Handler when card is clicked
 */
const NewsItem = ({ item, onOpen }) => {
  return (
    <motion.button
      onClick={() => onOpen(item)}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-6 text-left shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Floating Badge */}
      <motion.span
        className="absolute -top-3 -right-3 z-10 rounded-full bg-green-500 px-4 py-1 text-xs font-semibold text-white shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        News
      </motion.span>

      {/* Image */}
      {item.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            className="h-40 sm:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
        {item.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{item.summary}</p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-xs text-gray-500">
        {item.category && (
          <span className="rounded bg-green-200 px-2 py-1 font-medium text-green-800">
            {item.category}
          </span>
        )}
        {item.date && <span>{item.date}</span>}
      </div>
    </motion.button>
  );
};

export default NewsItem;
