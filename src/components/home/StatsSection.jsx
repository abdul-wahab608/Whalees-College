import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const StatsSection = () => {
  // Data for enrollment growth
  const enrollmentData = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Student Enrollment',
        data: [800, 950, 1100, 1300, 1500, 1800],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Data for program distribution
  const programData = {
    labels: ['Computer Science', 'Business', 'Engineering', 'Arts', 'Sciences'],
    datasets: [
      {
        data: [35, 25, 20, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
      },
    ],
  };

  // Data for faculty research publications
  const researchData = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Research Publications',
        data: [45, 52, 68, 75, 90],
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#1f2937', // gray-800 for dark text on light bg
        },
      },
    },
    scales: {
      y: {
        ticks: { color: '#374151' }, // gray-700
        grid: { color: 'rgba(15,23,42,0.06)' },
      },
      x: {
        ticks: { color: '#374151' },
        grid: { color: 'rgba(15,23,42,0.06)' },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#1f2937',
        },
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-yellow-50 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          College Statistics Dashboard
        </motion.h2>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: '11+', label: 'Years of Excellence', icon: '🏛️' },
            { number: '1000+', label: 'Alumni Worldwide', icon: '🎓' },
            { number: '50+', label: 'Expert Faculty', icon: '👨‍🏫' },
            { number: '20+', label: 'Scholarship Programs', icon: '🏆' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-yellow-50 ring-1 ring-yellow-100 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enrollment Growth Chart */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Student Enrollment Growth</h3>
            <Line data={enrollmentData} options={chartOptions} />
          </motion.div>

          {/* Program Distribution Chart */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Program Distribution</h3>
            <Pie data={programData} options={pieOptions} />
          </motion.div>

          {/* Research Publications Chart */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Faculty Research Publications</h3>
            <Bar data={researchData} options={chartOptions} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
