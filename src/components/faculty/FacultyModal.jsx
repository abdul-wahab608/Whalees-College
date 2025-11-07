import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "../common/Icons";

/**
 * Faculty member detail modal
 * Shows full profile when a faculty card is clicked
 */
const FacultyModal = ({ open, onClose, item }) => {
  // Close on escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={onClose}
          />
          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="faculty-modal-title"
            className="absolute inset-0 flex items-center justify-center p-4"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 p-2 rounded-full bg-white/80 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
              >
                <IconX className="h-5 w-5 text-gray-700" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-56 md:h-full">
                  <img
                    src={item.photo}
                    alt={`${item.name} portrait large`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 id="faculty-modal-title" className="text-2xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-blue-700 font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.department}</p>

                  <div className="mt-4 text-gray-700 leading-relaxed">{item.bio}</div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Qualifications</h4>
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                        {(item.qualifications || []).map((q, idx) => (
                          <li key={idx}>{q}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Achievements</h4>
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                        {(item.achievements || []).map((a, idx) => (
                          <li key={idx}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <a
                      href={`mailto:${item.email}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Email
                    </a>
                    <a
                      href={`tel:${item.phone}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FacultyModal;
