import React from "react";
import { motion } from "framer-motion";

/**
 * BlogCard - Atomic presentational component for blog post card
 * @param {Object} post - Blog post data object
 * @param {Function} onOpen - Handler when card is clicked
 */
const BlogCard = ({ post, onOpen }) => {
  return (
    <motion.button
      onClick={() => onOpen(post)}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-left shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Floating Badge */}
      <motion.span
        className="absolute -top-3 -right-3 z-10 rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold text-white shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Blog
      </motion.span>

      {/* Image */}
      {post.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={post.image}
            alt={post.title}
            className="h-40 sm:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{post.excerpt}</p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-xs text-gray-500">
        {post.author && <span>By {post.author}</span>}
        {post.readTime && <span>• {post.readTime}</span>}
        {post.date && <span>• {post.date}</span>}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-blue-200 px-2 py-1 text-xs font-medium text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.button>
  );
};

export default BlogCard;
