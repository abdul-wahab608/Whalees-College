import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Welcome to Whales College
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Dive into an ocean of knowledge and opportunities
                        </motion.p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left - Animated Whale Illustration */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                {/* Floating Whale */}
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [-2, 2, -2],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-2xl">
                                        {/* Whale Body */}
                                        <ellipse cx="120" cy="120" rx="90" ry="60" fill="url(#whaleGradient)" />
                                        <defs>
                                            <linearGradient id="whaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#8b5cf6" />
                                            </linearGradient>
                                        </defs>
                                        {/* Belly */}
                                        <ellipse cx="120" cy="135" rx="70" ry="45" fill="#bfdbfe" opacity="0.6" />
                                        {/* Fins */}
                                        <ellipse cx="180" cy="110" rx="25" ry="12" fill="#60a5fa" />
                                        <ellipse cx="60" cy="110" rx="22" ry="10" fill="#60a5fa" />
                                        {/* Eye */}
                                        <circle cx="150" cy="110" r="10" fill="white" />
                                        <circle cx="152" cy="112" r="6" fill="#1e293b" />
                                        <circle cx="154" cy="110" r="3" fill="white" />
                                        {/* Smile */}
                                        <path d="M130 140 Q140 150 150 140" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                                        {/* Tail */}
                                        <path d="M30 90 Q10 70 40 110 Q60 130 30 90" fill="#6366f1" />
                                        {/* Water spout */}
                                        <motion.path
                                            d="M120 60 Q115 30 120 20 M120 60 Q125 35 130 25"
                                            stroke="#60a5fa"
                                            strokeWidth="3"
                                            fill="none"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </svg>
                                </motion.div>

                                {/* Floating Bubbles */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-4 h-4 bg-blue-400/30 rounded-full"
                                        style={{
                                            left: `${20 + i * 15}%`,
                                            top: `${60 + (i % 3) * 10}%`,
                                        }}
                                        animate={{
                                            y: [-100, 0],
                                            opacity: [0, 1, 0],
                                            scale: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 3 + i * 0.5,
                                            repeat: Infinity,
                                            delay: i * 0.5,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Content Cards */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: "🎓",
                                    title: "Excellence in Education",
                                    description: "With over 11 years of proven excellence, we provide world-class education that shapes future leaders and innovators.",
                                    gradient: "from-blue-500 to-cyan-500",
                                },
                                {
                                    icon: "🌟",
                                    title: "Holistic Development",
                                    description: "We nurture not just academic brilliance but also character, creativity, and critical thinking skills.",
                                    gradient: "from-indigo-500 to-purple-500",
                                },
                                {
                                    icon: "🚀",
                                    title: "Future-Ready Skills",
                                    description: "Our curriculum prepares students for the challenges of tomorrow with cutting-edge programs and real-world experience.",
                                    gradient: "from-purple-500 to-pink-500",
                                },
                            ].map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    {/* Gradient Border */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="text-4xl">{card.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}