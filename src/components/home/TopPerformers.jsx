import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import topPerformers from '../../data/topPerformers';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } },
};

const TopPerformers = () => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const lastActiveRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            lastActiveRef.current = document.activeElement;
            modalRef.current?.focus();
        } else {
            lastActiveRef.current?.focus?.();
        }
    }, [isOpen]);

    useEffect(() => {
        const onKey = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') {
                setIsOpen(false);
                setSelected(null);
            }
            if (e.key === 'Tab') {
                const focusable = modalRef.current?.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
                if (!focusable || focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isOpen]);

    return (
        <motion.section
            className="py-16 bg-gradient-to-b from-white to-gray-50"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Top Performers</h2>
                    <p className="mt-2 text-gray-600">Celebrating students who achieved academic excellence and outstanding contributions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topPerformers.map((p) => (
                        <motion.div
                            key={p.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col"
                            variants={card}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-indigo-100">
                                    <img
                                        src={p.photo}
                                        alt={p.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                                    <p className="text-sm text-gray-500">{p.program} • Class of {p.year}</p>
                                </div>
                                <div className="ml-2">
                                    <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-medium px-2 py-1 rounded">Top</span>
                                </div>
                            </div>

                            <div className="mt-4 flex-1">
                                <p className="text-sm text-gray-700">{p.achievement}</p>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <button
                                    onClick={() => { setSelected(p); setIsOpen(true); }}
                                    aria-label={`View profile of ${p.name}`}
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    View Profile
                                </button>
                                <div className="text-sm text-gray-400">#{p.id}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && selected && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/40" onClick={() => { setIsOpen(false); setSelected(null); }} aria-hidden="true" />

                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="tp-modal-title"
                            aria-describedby="tp-modal-desc"
                            tabIndex={-1}
                            ref={modalRef}
                            className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 p-6 ring-1 ring-black/5"
                            initial={{ y: 24, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 20 } }}
                            exit={{ y: 24, opacity: 0, scale: 0.98 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={selected.photo} alt={selected.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 id="tp-modal-title" className="text-2xl font-bold text-gray-900">{selected.name}</h3>
                                    <p className="text-sm text-gray-500">{selected.program} • Class of {selected.year}</p>
                                    <p id="tp-modal-desc" className="mt-3 text-gray-700">{selected.achievement}</p>
                                    {selected.extra && <p className="mt-2 text-gray-600">{selected.extra}</p>}
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <button
                                        onClick={() => { setIsOpen(false); setSelected(null); }}
                                        aria-label="Close profile"
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                                                        <div className="mt-6 flex gap-3">
                                                                {selected.profileUrl ? (
                                                                    <a href={selected.profileUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">Visit profile</a>
                                                                ) : (
                                                                    <button type="button" className="text-sm text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">Visit profile</button>
                                                                )}
                                                                <button type="button" className="ml-auto inline-flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">Contact</button>
                                                        </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default TopPerformers;