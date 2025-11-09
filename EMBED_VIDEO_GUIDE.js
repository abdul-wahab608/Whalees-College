/**
 * ====================================================================
 * EMBEDDED YOUTUBE VIDEOS - IMPLEMENTATION GUIDE
 * ====================================================================
 * 
 * This guide explains how to add YouTube video players to the homepage.
 * Videos are embedded directly on the page with native YouTube controls.
 * 
 * 
 * COMPONENT LOCATION:
 * ===================
 * src/components/common/YouTubeEmbed.jsx
 * 
 * 
 * CURRENT IMPLEMENTATION:
 * =======================
 * Three videos are currently embedded on the homepage:
 * 
 * 1. Campus Tour (After About Section - Left Aligned)
 *    - URL: https://youtu.be/kxw6sY-wZF0
 *    - Title: "Campus Tour"
 *    - Description: "Explore our beautiful campus and state-of-the-art facilities"
 * 
 * 2. Life at Whales (After Core Values Section - Left Aligned)
 *    - URL: https://youtu.be/WLJGEq0DH30
 *    - Title: "Life at Whales"
 *    - Description: "Discover the vibrant student life and community at Whales College"
 * 
 * 3. Career at Whales (After News Section - Right Aligned)
 *    - URL: https://youtu.be/HbzL95duqq8
 *    - Title: "Career at Whales"
 *    - Description: "Learn about career opportunities and professional development"
 * 
 * 
 * HOW TO ADD MORE VIDEOS:
 * =======================
 * 
 * 1. Import at top of HomePage.jsx (already done):
 *    import YouTubeEmbed from "../components/common/YouTubeEmbed";
 * 
 * 2. Add video section with proper alignment:
 * 
 * LEFT ALIGNED (default):
 * <section className="py-12 bg-white/80">
 *   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 *     <div className="max-w-4xl">
 *       <YouTubeEmbed
 *         videoUrl="YOUR_YOUTUBE_URL"
 *         title="Video Title"
 *         description="Video description (optional)"
 *       />
 *     </div>
 *   </div>
 * </section>
 * 
 * RIGHT ALIGNED:
 * <section className="py-12 bg-gray-50/80">
 *   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 *     <div className="max-w-4xl ml-auto">
 *       <YouTubeEmbed
 *         videoUrl="YOUR_YOUTUBE_URL"
 *         title="Video Title"
 *         description="Video description (optional)"
 *       />
 *     </div>
 *   </div>
 * </section>
 * 
 * CENTER ALIGNED:
 * <section className="py-12 bg-white/80">
 *   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 *     <div className="max-w-4xl mx-auto">
 *       <YouTubeEmbed
 *         videoUrl="YOUR_YOUTUBE_URL"
 *         title="Video Title"
 *         description="Video description (optional)"
 *       />
 *     </div>
 *   </div>
 * </section>
 * 
 * 
 * COMPONENT PROPS:
 * ================
 * videoUrl (required): 
 *   - YouTube video URL or video ID
 *   - Supported formats:
 *     • https://www.youtube.com/watch?v=VIDEO_ID
 *     • https://youtu.be/VIDEO_ID
 *     • https://www.youtube.com/embed/VIDEO_ID
 *     • VIDEO_ID (11-character ID only)
 * 
 * title (optional):
 *   - Displayed in blue header bar above video
 *   - If omitted, no header bar is shown
 * 
 * description (optional):
 *   - Subtitle text below title in header bar
 *   - Only shown if title is also provided
 * 
 * 
 * STYLING & ANIMATIONS:
 * =====================
 * - Automatic fade-in and slide-up animation on scroll (framer-motion)
 * - Responsive 16:9 aspect ratio
 * - Blue gradient header bar with white text
 * - White rounded container with shadow
 * - Semi-transparent section backgrounds (bg-white/80, bg-gray-50/80)
 * - Full mobile responsiveness
 * 
 * 
 * BACKGROUND ALTERNATION:
 * =======================
 * For visual variety, alternate between:
 * - bg-white/80 (white background)
 * - bg-gray-50/80 (light gray background)
 * 
 * The /80 opacity allows the watermark to show through.
 * 
 * 
 * ALIGNMENT CLASSES:
 * ==================
 * - Left: <div className="max-w-4xl"> (default)
 * - Right: <div className="max-w-4xl ml-auto">
 * - Center: <div className="max-w-4xl mx-auto">
 * 
 * 
 * NATIVE YOUTUBE FEATURES:
 * ========================
 * All standard YouTube controls work:
 * - Play/Pause button
 * - Volume control
 * - Progress bar
 * - Fullscreen mode
 * - Settings (quality, speed)
 * - Captions (if available)
 * - Share and Watch Later options
 * 
 * 
 * VIDEO THUMBNAIL:
 * ================
 * YouTube automatically provides the video thumbnail.
 * Thumbnail is shown until user clicks play.
 * 
 * 
 * EXTRACTING VIDEO ID:
 * ====================
 * The component automatically extracts the video ID from any valid
 * YouTube URL format. You don't need to manually extract the ID.
 * 
 * Example:
 * https://youtu.be/kxw6sY-wZF0?si=adWAQzDxCtvAYr7N
 * → Extracts: kxw6sY-wZF0
 * 
 * 
 * ERROR HANDLING:
 * ===============
 * If an invalid URL is provided, the component displays:
 * "Invalid YouTube URL - Please provide a valid YouTube video URL or ID"
 * 
 * 
 * PERFORMANCE:
 * ============
 * - Videos use YouTube's embed player (lightweight)
 * - Lazy loading enabled for better performance
 * - Only loads video player when scrolled into view
 * - No impact on initial page load time
 * 
 * 
 * BEST PRACTICES:
 * ===============
 * 1. Keep video titles concise (1-4 words)
 * 2. Add descriptive text in description prop
 * 3. Alternate background colors for visual hierarchy
 * 4. Use py-12 spacing between sections
 * 5. Limit to 3-5 videos per page for optimal UX
 * 6. Place videos after relevant content sections
 * 7. Test on mobile devices for responsiveness
 */
