'use client';
import { motion } from 'framer-motion';

export default function ExpertisePage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/expertise-video.mp4" type="video/mp4" />
          <source src="/expertise-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Expertise Title */}
      <div className="relative flex flex-col items-center justify-center text-center min-h-[40vh] px-6">
        <motion.h1
          className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#0066FF] drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Expertise
        </motion.h1>
      </div>

      {/* Expertise Description */}
      <motion.div 
        className="mt-10 text-center backdrop-blur-xl bg-white/10 p-10 rounded-lg shadow-lg border border-white/20 max-w-5xl mx-auto text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Innovative Solutions for a Sustainable Future</h2>
        <p className="text-gray-300 mt-2">
          MetaPolis Center combines **technology, media, and research** to develop digital and social transformation strategies.
          Our expertise spans across multiple fields, ensuring cutting-edge solutions for complex challenges.
        </p>
      </motion.div>

      {/* Expertise Areas */}
      <motion.div 
        className="mt-10 grid grid-cols-2 gap-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {[
          { title: "Digital Transformation", desc: "We provide advanced solutions for AI integration, data analytics, and smart automation." },
          { title: "Media & Research", desc: "Investigative journalism and media analytics to unveil crucial societal and environmental issues." },
          { title: "Political & Social Analysis", desc: "Deep strategic insights to predict societal trends and shape policy-making processes." },
          { title: "Environmental Sustainability", desc: "Developing innovative projects that connect technology with ecological preservation." }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="p-6 rounded-lg backdrop-blur-xl bg-white/10 shadow-lg border border-white/20 transition transform hover:scale-105 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-[#00FFA3]">{item.title}</h2>
            <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action - Collaboration */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Collaborate With Us</h2>
        <p className="text-gray-300 mt-2">Looking for strategic insights or project collaboration? Contact us.</p>
        <motion.button 
          className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#00FFA3] to-[#0066FF] rounded-lg shadow-lg transition transform hover:scale-110"
          onClick={() => console.log("Add contact page route")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
}
