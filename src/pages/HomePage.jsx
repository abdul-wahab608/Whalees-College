import React from "react";
import Navbar from "../components/Navbar"; // Non-functional placeholder navbar
import HeroSection from "../components/home/HeroSection";
import About from "../components/home/About";
import CoreValues from "../components/home/CoreValues";
import Faculty from "../components/home/Faculty";
import FeatureSection from "../components/home/FeatureSection";
import News from "../components/home/News";
import GallerySection from "../components/home/Gallery";
import TopPerformers from "../components/home/TopPerformers";
import Announcements from "../components/home/Announcements";
import AlumniTestimonials from "../components/alumni/AlumniTestimonials";
import StatsSection from "../components/home/StatsSection";
import Dean from "../components/home/Dean";
import Location from "../components/home/Location";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="shadow-sm bg-white sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <About />
      </section>

      {/* Faculty Section (inserted below About, before Core Values) */}
      <section id="faculty" className="bg-white">
        <Faculty />
      </section>

      {/* Core Values Section */}
      <section id="core-values">
        <CoreValues />
      </section>

      {/* News Section (Blog + News) */}
      <section id="news" className="bg-white">
        <News />
      </section>

      {/* Feature Section */}
      <section id="features" className="py-16 bg-gray-50">
        <FeatureSection />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <GallerySection />
      </section>

      {/* Top Performers Section */}
      <section id="top-performers" className="py-16 bg-gray-50">
        <TopPerformers />
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-16 bg-white">
        <Announcements />
      </section>

      {/* Alumni Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
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
      <section id="location" className="bg-white">
        {/* render large map above footer (60vh) - Whales College Karachi */}
        <Location 
          lat={24.9075918} 
          lng={67.1217672} 
          zoom={17} 
          height="60vh"
          address="E, 73 Gulshan, Block 7 Gulshan-e-Iqbal, Karachi, 75290"
        />
      </section>

      {/* Footer */}
      <footer id="footer" className="mt-auto bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
