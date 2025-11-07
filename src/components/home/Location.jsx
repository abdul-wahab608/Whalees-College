import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Location component
 *
 * Usage:
 * <Location address="Whales College, Lahore" />
 * or
 * <Location lat={31.5204} lng={74.3587} />
 *
 * This component uses a simple Google Maps embed (no API key required).
 * If you want a fully interactive map (markers, custom styles, event handlers)
 * use the `@react-google-maps/api` package and a Google Maps JavaScript API key.
 */

const Location = ({
  address = 'Whales College',
  lat,
  lng,
  zoom = 15,
  height = '56.25%',
  embedUrl,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const query = lat && lng ? `${lat},${lng}` : encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`;

  // If user passed an embedUrl (either the full iframe HTML or the src URL),
  // normalize it to the iframe src value.
  let finalSrc = mapSrc;
  if (embedUrl) {
    const asString = String(embedUrl);
    // If the user pasted a full iframe tag, extract the src attribute
    const match = asString.match(/src\s*=\s*"([^"]+)"/i);
    finalSrc = match ? match[1] : asString;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Come Meet Us
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Visit our campus or get in touch with us
          </motion.p>
        </motion.div>

        {/* Map and Form Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Location</h3>
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <div className="relative" style={{ height: '500px' }}>
                <iframe
                  title="Whales College location"
                  src={finalSrc}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Open in Google Maps
              </a>
            </p>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+92 300 1234567"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Address:</span> {address}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> info@whalescollege.edu
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Phone:</span> (555) 123-4567
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};export default Location;
