import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/variants";

const TestimonialsSection = () => (
  <section className="bg-gray-50 py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-800 mb-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Latest Testimonials
      </motion.h2>
      <motion.p
        className="text-gray-700 text-lg leading-relaxed"
        variants={fadeInUp}
      >
        “WHALES COLLEGE was a tremendous experience for me. The faculty is
        outstanding and very cooperative. Two years of my life here were the
        best of all. The teachers are more like a family.”
        <br />
        <strong>— Faiza Batool (Batch - 2013)</strong>
      </motion.p>
    </div>
  </section>
);

export default TestimonialsSection;
