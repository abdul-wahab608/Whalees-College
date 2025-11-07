/**
 * Application-wide constants
 * Centralized configuration for magic numbers, timing, and UI values
 */

// Carousel & Gallery Settings
export const CAROUSEL = {
  DEFAULT_CARD_WIDTH: 300,
  GAP: 16,
  SCROLL_SPEED: 6,
  AUTO_SLIDE_INTERVAL: 3000, // ms
};

// Animation Timings
export const ANIMATION = {
  FLOAT_DURATION: 3, // seconds
  TRANSITION_DURATION: 0.6,
  STAGGER_DELAY: 0.05,
};

// UI Opacity Values
export const OPACITY = {
  WATERMARK: 0.05,
  MODAL_BACKDROP: 0.5,
  HOVER_OVERLAY: 0.4,
};

// Z-Index Layers (for consistency)
export const Z_INDEX = {
  WATERMARK: 50,
  CONTENT: 10,
  STICKY_HEADER: 50,
  MODAL: 70,
};

// API Configuration (prepared for backend integration)
export const API = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  ENDPOINTS: {
    FACULTY: '/api/faculty',
    NEWS: '/api/news',
    BLOG: '/api/blog',
    DEAN: '/api/dean',
    TESTIMONIALS: '/api/testimonials',
    GALLERY: '/api/gallery',
    CONTACT: '/api/contact',
  },
  TIMEOUT: 10000, // ms
};

const constants = {
  CAROUSEL,
  ANIMATION,
  OPACITY,
  Z_INDEX,
  API,
};

export default constants;
