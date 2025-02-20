'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SustainableDevelopmentPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Video kao pozadina */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover video-bg"
      >
        <source src="/eko-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay za bolju čitljivost teksta */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Glavni sadržaj */}
      <div className="relative z-10 px-6 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-[#00FFA3] drop-shadow-lg">
            Sustainable Development
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Combining environmental responsibility and technology for a greener future.
          </p>
        </motion.div>

        {/* Detailed Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
          {[
            {
              title: "Environmental Monitoring & AI",
              desc: "Using AI-driven analytics and IoT sensors, we monitor environmental changes in real-time and provide actionable insights."
            },
            {
              title: "Eco-Friendly Infrastructure",
              desc: "We develop digital tools and policy recommendations to promote green urban development and eco-conscious business practices."
            },
            {
              title: "Renewable Energy Solutions",
              desc: "Our team supports projects that integrate solar, wind, and other renewable energy sources into communities and businesses."
            },
            {
              title: "Sustainable Community Initiatives",
              desc: "We collaborate with local organizations to implement sustainability programs that foster responsible consumption and waste reduction."
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-lg bg-[#1B2735]/80 shadow-lg border border-white/20 transition transform hover:scale-105 text-white"
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
          className="mt-20 text-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link href="/">
            <motion.button 
              className="px-6 py-3 text-lg font-semibold text-white bg-gray-600 rounded-lg shadow-lg transition transform hover:scale-110 hover:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Back
            </motion.button>
          </Link>

          <motion.button 
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#00FFA3] to-[#0066FF] rounded-lg shadow-lg transition transform hover:scale-110"
            onClick={() => console.log("Contact Page (add route)")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
