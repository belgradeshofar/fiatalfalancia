'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const variants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
    },
    warp: {
      rotate: [0, 720],           // Dve pune rotacije
      scale: [1, 0.5, 0],          // Postepeno smanjenje veličine
      opacity: [1, 0.5, 0],        // Blag fade out do potpunog nestajanja
      filter: ['blur(0px)', 'blur(4px)', 'blur(20px)'], // Efekat zamućenja
      transition: { duration: 0.5 }, // Brza animacija
    },
  };

  return (
    <div 
      className="h-screen w-screen flex justify-center items-center"
      style={{ backgroundColor: '#151d27' }}
      onClick={handleClick}
    >
      <motion.div
        className="cursor-pointer"
        variants={variants}
        animate={clicked ? 'warp' : 'pulse'}
        onAnimationComplete={(definition) => {
          if (definition === 'warp') {
            router.push('/language');
          }
        }}
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
