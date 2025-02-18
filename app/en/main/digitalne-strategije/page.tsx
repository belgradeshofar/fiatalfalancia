'use client';
import { motion } from 'framer-motion';

export default function DigitalStrategiesPage() {
  return (
    <div className="relative min-h-screen text-white bg-[#101820] px-6 py-12">
      {/* Hero Section */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-[#00FFA3] drop-shadow-lg">
          Digital Strategies
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          We craft innovative digital solutions that transform businesses and organizations.
        </p>
      </motion.div>

      {/* Detailed Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
        {[
          {
            title: "AI & Automation",
            desc: "Implementing artificial intelligence and automation to optimize workflows, enhance efficiency, and drive innovation."
          },
          {
            title: "Web & Mobile Development",
            desc: "Building dynamic, responsive, and user-friendly web and mobile applications tailored to the needs of modern businesses."
          },
          {
            title: "Data-Driven Decision Making",
            desc: "Utilizing analytics and big data to provide actionable insights that guide strategic planning and execution."
          },
          {
            title: "Cybersecurity & Digital Trust",
            desc: "Ensuring secure digital environments with cutting-edge cybersecurity measures and trust-building mechanisms."
          }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="p-6 rounded-lg bg-[#1B2735] shadow-lg border border-white/20 transition transform hover:scale-105 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <h2 className="text-3xl font-semibold text-[#00FFA3]">{item.title}</h2>
            <p className="text-gray-300 text-lg mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Looking for a digital transformation?</h2>
        <p className="text-gray-300 mt-2 text-lg">Contact us to develop a tailored strategy for your organization.</p>
        <motion.button 
          className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#00FFA3] to-[#0066FF] rounded-lg shadow-lg transition transform hover:scale-110"
          onClick={() => console.log("Contact Page (add route)")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </motion.div>
    </div>
  );
}
