import { motion } from "framer-motion";

const features = [
  {
    title: "What We Offer",
    text: "For us integrity in our words and acts for solving the problems of students take precedence over anything.",
  },
  {
    title: "Core Values",
    text: "For us integrity in our words and acts for solving the problems of students take precedence over anything.",
  },
  {
    title: "Philosophy",
    text: "The continuing philosophy of WAHAJ HUSSAIN’S in its eleven years existence is to facilitate both the students and teachers communities with a cohesive educational framework and conducive ambiance.",
  },
];

const FeatureSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              whileHover={{ rotateX: 8, rotateY: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
