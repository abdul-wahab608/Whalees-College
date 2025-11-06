import React from "react";
import Navbar from "../components/Navbar"; // Non-functional placeholder navbar
import HeroSection from "../components/home/HeroSection";
import CoreValues from "../components/home/CoreValues";
import FeatureSection from "../components/home/FeatureSection";
import GallerySection from "../components/home/Gallery";
import TopPerformers from "../components/home/TopPerformers";
import Announcements from "../components/home/Announcements";
import AlumniTestimonials from "../components/alumni/AlumniTestimonials";
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

      {/* Core Values Section */}
      <section id="core-values">
        <CoreValues />
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

      {/* Footer */}
      <footer id="footer" className="mt-auto bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
