import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import facultyData from "../../data/faculty";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const FacultyCard = ({ item, onOpen }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(item)}
    className="group w-72 flex-shrink-0 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
    whileHover={{ y: -4 }}
    aria-label={`Open details for ${item.name}`}
  >
    <div className="relative h-44 w-full overflow-hidden">
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
        <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">View Profile</span>
      </div>
    </div>
  </motion.button>
);

const Modal = ({ open, onClose, item }) => {
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
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
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
                className="absolute right-4 top-4 p-2 rounded-full bg-white/80 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <XMarkIcon className="h-5 w-5 text-gray-700" />
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

const Faculty = () => {
  const list = useMemo(() => facultyData, []);
  const scrollerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scrollByCards = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width : 300;
    const gap = 16; // tailwind gap-4
    const amount = (cardWidth + gap) * (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  // keyboard left/right on container
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") scrollByCards(1);
      if (e.key === "ArrowLeft") scrollByCards(-1);
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [scrollByCards]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Faculty"
          subtitle="Meet the educators and mentors guiding our students toward excellence."
        />

        <div className="relative">
          {/* Left button */}
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>

          {/* Right button */}
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>

          <div
            ref={scrollerRef}
            tabIndex={0}
            className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50"
          >
            <div className="flex gap-4 sm:gap-6">
              {list.map((item) => (
                <div key={item.id} data-card>
                  <FacultyCard item={item} onOpen={setSelected} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} item={selected} />
    </section>
  );
};

export default Faculty;