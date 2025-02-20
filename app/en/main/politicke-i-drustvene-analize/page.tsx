'use client';
import { motion } from 'framer-motion';

export default function PoliticalSocialAnalysisPage() {
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
        <source src="/politika.mp4" type="video/mp4" />
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
            Political & Social Analysis
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Utilizing data-driven insights to shape informed policies and societal strategies.
          </p>
        </motion.div>

        {/* Detailed Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
          {[
            {
              title: "Big Data & Predictive Analytics",
              desc: "We analyze large datasets to predict political trends and anticipate social movements, ensuring evidence-based decision-making."
            },
            {
              title: "Public Policy Strategy",
              desc: "We develop strategic frameworks to assist policymakers in making informed decisions based on public sentiment and analytical insights."
            },
            {
              title: "Social Sentiment Monitoring",
              desc: "By analyzing social media, online discussions, and surveys, we provide in-depth insights into public opinion and emerging narratives."
            },
            {
              title: "Strategic Communication",
              desc: "We craft data-backed narratives that effectively communicate key messages to stakeholders, ensuring clarity and impact."
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
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2 className="text-3xl font-semibold text-[#00FFA3]">Want to leverage data for better decision-making?</h2>
          <p className="text-gray-300 mt-2 text-lg">Contact us to collaborate on high-impact analytical projects.</p>
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
    </div>
  );
}
