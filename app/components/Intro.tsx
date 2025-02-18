'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Intro({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(onFinish, 5000);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <motion.div
      className="h-screen w-screen flex justify-center items-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onFinish}
    >
      <Image 
        src="/metapolis-logo.png" 
        alt="Metapolis Center Logo" 
        width={600} 
        height={600} 
        className="object-contain" 
      />
    </motion.div>
  );
}
