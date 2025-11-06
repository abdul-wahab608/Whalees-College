    import React, { useState, useEffect } from "react";
    import { motion, AnimatePresence } from "framer-motion";

    const GallerySection = () => {
    // Store image paths from public/assets/images/
    const images = Array.from({ length: 8 }, (_, i) => `/assets/images/gallery${i + 1}${i < 2 ? '.jpg' : '.jpeg'}`);
    
    // Separate center images and rotating images
    const centerImages = [images[2], images[5]]; // gallery3 and gallery6
    const rotatingImages = [images[0], images[1], images[4], images[3], images[6], images[7]];
    
    // State to track current rotation position
    const [currentRotation, setCurrentRotation] = useState(0);

    // Calculate positions for hexagon layout
    const getHexPosition = (index, totalPositions = 6) => {
        const angle = ((index + currentRotation) % totalPositions) * (2 * Math.PI / totalPositions);
        const radius = 280; // Increased radius to 2px for more spacing from center
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
        };
    };

    // Rotate images every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentRotation(prev => (prev + 1) % 6);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-10">Gallery</h2>

            <div className="relative max-w-5xl mx-auto min-h-[600px] flex items-center justify-center">
                {/* Center images container */}
                <div className="absolute z-10 flex gap-4">
                    {centerImages.map((src, index) => (
                        <motion.div
                            key={`center-${index}`}
                            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer w-48 h-48"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <img
                                src={src}
                                alt={`Center image ${index + 1}`}
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Rotating images */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {rotatingImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-36 h-36 overflow-hidden rounded-xl shadow-md cursor-pointer"
                            animate={{
                                x: getHexPosition(index).x,
                                y: getHexPosition(index).y,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{ scale: 1.05, zIndex: 20 }}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        </motion.section>
    );
    };

    export default GallerySection;
