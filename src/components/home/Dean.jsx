import React from "react";
import { motion } from "framer-motion";
import dean from "../../data/dean";

const Dean = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-blue-100/60">
              <img
                src={dean.image}
                alt={`Portrait of ${dean.name}`}
                className="w-full h-[480px] object-cover object-center"
              />
              {/* Decorative overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
              {/* Floating badge */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 left-8"
              >
                <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg text-sm font-semibold">
                  Office of the Dean
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-3 flex flex-col"
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Dean's Message
              </h2>
              <p className="mt-2 text-sm font-medium text-blue-700">{dean.name}, {dean.title}</p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-700 leading-relaxed text-base md:text-lg space-y-5"
            >
              {dean.message.split(/\n\n+/).map((para, idx) => (
                <p key={idx} className="[text-wrap:balance]">
                  {para}
                </p>
              ))}
            </motion.div>
            {/* Adaptive growth: padding below to avoid overlap with floating badge on small screens */}
            <div className="mt-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dean;