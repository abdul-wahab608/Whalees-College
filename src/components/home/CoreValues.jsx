import React from "react";
import { motion } from "framer-motion";

const CoreValues = () => {
  const features = [
    {
      title: "Our Mission",
      description:
        "To empower students with knowledge, skills, and values through innovative education, fostering global leaders who contribute meaningfully to society.",
      icon: "🎯",
      points: [
        "Excellence in Education",
        "Student-Centered Learning",
        "Continuous Innovation",
        "Global Perspective"
      ]
    },
    {
      title: "Our Vision",
      description:
        "To be a leading institution of higher education, recognized globally for academic excellence, innovative research, and nurturing future leaders.",
      icon: "🔭",
      points: [
        "Global Recognition",
        "Research Excellence",
        "Innovative Programs",
        "Industry Integration"
      ]
    },
    {
      title: "Core Values",
      description:
        "Our foundation is built on strong principles that guide our actions and shape our community's character and culture.",
      icon: "⭐",
      points: [
        "Integrity & Ethics",
        "Academic Excellence",
        "Diversity & Inclusion",
        "Social Responsibility"
      ]
    }
  ];

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Building Excellence Through Values
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our commitment to excellence is reflected in our mission, vision, and core values
            that shape every aspect of our institution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.points.map((point, idx) => (
                  <motion.li
                    key={point}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreValues;
