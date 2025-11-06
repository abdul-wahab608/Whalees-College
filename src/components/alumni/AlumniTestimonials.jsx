import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialModal from "./TestimonialModal";
import { testimonialsData } from "./testimonialData";

const AlumniTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState(null);

  // Auto-slide every 3 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const testimonial = testimonialsData[index];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">
          Alumni Testimonials
        </h2>

        <div
          className="relative cursor-pointer select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setSelected(testimonial)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center min-h-[340px]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-gray-100 shadow-sm"
              />
              <p className="text-gray-600 italic leading-relaxed mb-6 max-w-xl">
                “{testimonial.text.slice(0, 180)}...”
              </p>
              <h3 className="text-lg font-semibold text-blue-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">
                Class of {testimonial.batch}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <TestimonialModal
          testimonial={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};

export default AlumniTestimonials;
