import React from "react";
import Navbar from "../components/Navbar"; // Non-functional placeholder navbar
import HeroSection from "../components/home/HeroSection";
import About from "../components/home/About";
import CoreValues from "../components/home/CoreValues";
import Faculty from "../components/faculty/Faculty";
import FeatureSection from "../components/home/FeatureSection";
import News from "../components/news/News";
import GallerySection from "../components/home/Gallery";
import TopPerformers from "../components/home/TopPerformers";
import Announcements from "../components/home/Announcements";
import AlumniTestimonials from "../components/alumni/AlumniTestimonials";
import StatsSection from "../components/home/StatsSection";
import Dean from "../components/home/Dean";
import Location from "../components/home/Location";
import Footer from "../components/Footer";
import facultyData from "../data/faculty";
import blogPosts from "../data/blogPosts";
import newsItems from "../data/newsItems";

const HomePage = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50">
      {/* Marquee announcement above navbar */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white py-2 overflow-hidden relative z-50">
        <marquee behavior="scroll" direction="left" scrollamount="6" className="font-semibold text-sm">
          🎓 Admissions For 2025 are Open — Apply Now!
        </marquee>
      </div>

      {/* Navbar */}
      <header className="shadow-sm bg-white sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Watermark - positioned after navbar and before footer */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none fixed z-10"
          style={{
            backgroundImage: "url(/assets/images/logo1.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            backgroundPosition: "center center",
            opacity: 0.05,
            top: "80px", // Start after navbar
            left: 0,
            right: 0,
            bottom: "0", // Will be covered by footer
            height: "calc(100vh - 80px)",
          }}
        />

        {/* Main content with watermark */}
        <div className="relative z-20">      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50/80">
        <About />
      </section>

      {/* Faculty Section (inserted below About, before Core Values) */}
      <section id="faculty" className="bg-white/80">
        <Faculty facultyData={facultyData} />
      </section>

      {/* Core Values Section */}
      <section id="core-values">
        <CoreValues />
      </section>

      {/* News Section (Blog + News) */}
      <section id="news" className="bg-white/80">
        <News blogPosts={blogPosts} newsItems={newsItems} />
      </section>

      {/* Feature Section */}
      <section id="features" className="py-16 bg-gray-50/80">
        <FeatureSection />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white/80">
        <GallerySection />
      </section>

      {/* Top Performers Section */}
      <section id="top-performers" className="py-16 bg-gray-50/80">
        <TopPerformers />
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-16 bg-white/80">
        <Announcements />
      </section>

      {/* Alumni Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50/80">
        <AlumniTestimonials />
      </section>

      {/* Dean Section (above stats) */}
      <section id="dean">
        <Dean />
      </section>

      {/* Stats Section */}
      <section id="stats">
        <StatsSection />
      </section>

      {/* Location (large map) */}
      <section id="location" className="bg-white/80">
        {/* render large map above footer (60vh) - Whales College Karachi */}
        <Location 
          lat={24.9075918} 
          lng={67.1217672} 
          zoom={17} 
          height="60vh"
          address="E, 73 Gulshan, Block 7 Gulshan-e-Iqbal, Karachi, 75290"
        />
      </section>
        </div>
      </div>

      {/* Footer - outside watermark area */}
      <footer id="footer" className="mt-auto bg-gray-100 relative z-50">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
