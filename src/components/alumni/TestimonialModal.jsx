import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const TestimonialModal = ({ testimonial, onClose }) => {
  if (!testimonial) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-blue-900 text-center mb-1">
          {testimonial.name}
        </h3>
        <p className="text-gray-500 text-sm text-center mb-3">
          Class of {testimonial.batch}
        </p>
        <p className="text-gray-700 text-center leading-relaxed mb-3">
          “{testimonial.text}”
        </p>
        {testimonial.status && (
          <p className="text-gray-500 text-sm text-center italic">
            {testimonial.status}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TestimonialModal;
