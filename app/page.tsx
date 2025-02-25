'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const handleClick = () => {
    window.location.href = 'https://www.metapoliscenter.com/language';
  };

  return (
    <div 
      className="h-screen w-screen flex justify-center items-center"
      style={{ backgroundColor: '#151d27' }}
      onClick={handleClick}
    >
      <motion.div 
        className="cursor-pointer"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <Image 
          src="/metapolis-logo.png" 
          alt="Metapolis Center Logo" 
          width={700} 
          height={700} 
        />
      </motion.div>
    </div>
  );
}