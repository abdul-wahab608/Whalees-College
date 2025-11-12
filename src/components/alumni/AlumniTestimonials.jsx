import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialModal from "./TestimonialModal";
import { testimonialsData } from "./testimonialData";

const AlumniTestimonials = () => {
  const [index, setIndex] = useState(0); // primary index, second card uses index+1
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

  const first = testimonialsData[index];
  const second = testimonialsData[(index + 1) % testimonialsData.length];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Alumni Testimonials</h2>
          <p className="mt-2 text-sm text-gray-600">Real journeys. Real voices.</p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* First card */}
          <div
            className="relative cursor-pointer select-none"
            onClick={() => setSelected(first)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={first.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center min-h-[360px] hover:shadow-xl transition-shadow"
              >
                <img
                  src={first.image}
                  alt={first.name}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-gray-100 shadow-sm"
                />
                <p className="text-gray-600 italic leading-relaxed mb-6 max-w-sm">
                  “{first.text.slice(0, 160)}...”
                </p>
                <h3 className="text-lg font-semibold text-blue-900">{first.name}</h3>
                <p className="text-gray-500 text-sm">Class of {first.batch}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Second card */}
          <div
            className="relative cursor-pointer select-none"
            onClick={() => setSelected(second)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={second.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center min-h-[360px] hover:shadow-xl transition-shadow"
              >
                <img
                  src={second.image}
                  alt={second.name}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-gray-100 shadow-sm"
                />
                <p className="text-gray-600 italic leading-relaxed mb-6 max-w-sm">
                  “{second.text.slice(0, 160)}...”
                </p>
                <h3 className="text-lg font-semibold text-blue-900">{second.name}</h3>
                <p className="text-gray-500 text-sm">Class of {second.batch}</p>
              </motion.div>
            </AnimatePresence>
          </div>
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
