import React from "react";
import { motion } from "framer-motion";

/**
 * Individual faculty card component
 * Presentational component - displays faculty member info
 */
const FacultyCard = ({ item, onOpen }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(item)}
    className="group w-[88%] xs:w-64 sm:w-72 md:w-80 flex-shrink-0 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
    whileHover={{ y: -4 }}
    aria-label={`Open details for ${item.name}`}
  >
  <div className="relative h-40 sm:h-44 w-full overflow-hidden">
      <img
        src={item.photo}
        alt={`${item.name} portrait`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
      <p className="text-sm text-blue-700 font-medium">{item.title}</p>
      <p className="text-xs text-gray-500 mt-1">{item.department}</p>
      <p className="text-sm text-gray-600 mt-3 line-clamp-2">{item.bio}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">Exp: {item.experience}+ yrs</span>
        <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
          View Profile
        </span>
      </div>
    </div>
  </motion.button>
);

export default FacultyCard;
