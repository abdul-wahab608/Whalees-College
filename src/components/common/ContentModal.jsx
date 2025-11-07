import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "./Icons";

const ContentModal = ({ open, onClose, title, image, subtitle, children, actions }) => {
  const closeBtnRef = useRef(null);

  // Escape to close and focus close on open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop captures outside clicks */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={onClose}
            aria-label="Close modal by clicking backdrop"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="content-modal-title"
            className="absolute inset-0 flex items-center justify-center p-4"
            initial={{ scale: 0.96, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 p-2 rounded-full bg-white/80 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <IconX className="h-5 w-5 text-gray-700" />
              </button>

              {image && (
                <div className="relative h-56 md:h-72 w-full overflow-hidden">
                  <img src={image} alt={title || "cover image"} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              )}

              <div className="p-6 md:p-8">
                {title && (
                  <h3 id="content-modal-title" className="text-2xl md:text-3xl font-bold text-gray-900">
                    {title}
                  </h3>
                )}
                {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}

                <div className="mt-4 prose prose-blue max-w-none">
                  {children}
                </div>

                {actions && <div className="mt-6 flex items-center gap-3">{actions}</div>}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentModal;
