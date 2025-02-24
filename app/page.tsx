'use client';
import { motion } from 'framer-motion';

export default function UnderConstruction() {
  const variants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
    },
  };

  return (
    <div 
      className="h-screen w-screen flex flex-col justify-center items-center text-center p-4"
      style={{ backgroundColor: '#151d27', color: '#ffffff' }}
    >
      <motion.h1 
        className="text-3xl md:text-5xl font-bold"
        variants={variants}
        animate="pulse"
      >
        🚀 Website Under Construction / ajt je u izradi
      </motion.h1>
      <p className="mt-4 text-lg md:text-xl opacity-80">
        We are working on something amazing. Stay tuned! / Radimo na nečemu sjajnom. Ostanite uz nas!
      </p>
    </div>
  );
}
