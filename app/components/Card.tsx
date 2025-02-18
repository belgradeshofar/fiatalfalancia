'use client';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  desc: string;
}

export default function Card({ title, desc }: CardProps) {
  return (
    <motion.div 
      className="p-6 rounded-lg backdrop-blur-xl bg-white/10 shadow-lg border border-white/20 text-white card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-300 text-sm mt-2">{desc}</p>
    </motion.div>
  );
}
