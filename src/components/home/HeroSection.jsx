import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useReducedMotion } from "framer-motion";

const quotes = [
  "The main part of intellect education is not the acquisition of facts but learning how to make live.",
  "A gentleman is one who never hurts anyone’s feelings unintentionally.",
  "What we want is to see the child in pursuit of knowledge, and not knowledge in pursuit of the child. — George Bernard Shaw",
];

const quoteVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const prefersReduced = useReducedMotion();

  // background translate (subtle parallax)
  const bgX = useTransform(x, (v) => v * -18);
  const bgY = useTransform(y, (v) => v * -12);

  // heading 3D tilt
  const rotateY = useTransform(x, (v) => v * -8);
  const rotateX = useTransform(y, (v) => v * 6);

  // Auto change every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Manual change on click
  const handleClick = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const handlePointerMove = (e) => {
    if (prefersReduced) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handlePointerLeave = () => {
    if (prefersReduced) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* background image layer (parallax) */}
      <motion.div
        className="absolute inset-0"
        style={{ x: bgX, y: bgY }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px]" />
        <img
          src="/assets/images/admission.jpg"
          alt="Campus admission background"
          className="w-full h-full object-cover scale-105 opacity-50"
          style={{ willChange: 'transform', filter: 'blur(1.5px)' }}
        />
      </motion.div>

      {/* subtle overlay to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/15 to-white/20 pointer-events-none" />

      {/* Heading (3D tilt) */}
      <motion.h1
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg mb-6 tracking-tight"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Whales College
      </motion.h1>

      {/* Animated Quote + CTA */}
      <div className="relative z-10 w-full max-w-3xl cursor-pointer" onClick={handleClick}>
        <AnimatePresence mode="wait">
          <motion.p
            key={quotes[index]}
            className="text-lg md:text-2xl text-gray-900 font-semibold italic leading-relaxed mx-4 bg-white/40 backdrop-blur-sm rounded-2xl py-6 px-8 shadow-lg"
            variants={quoteVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            “{quotes[index]}”
          </motion.p>
        </AnimatePresence>

        {/* indicators + CTA grouped */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex space-x-2">
            {quotes.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-white w-3' : 'bg-white/40'
                }`}
                aria-hidden
              />
            ))}
          </div>

          <a
            href="https://whalescollege.edu.pk/loginForm.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label="Register now at Whales College"
          >
            <motion.button
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              whileTap={prefersReduced ? {} : { scale: 0.98 }}
              className="mt-3 sm:mt-0 inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Register Now
            </motion.button>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
