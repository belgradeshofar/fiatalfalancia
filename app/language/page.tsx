'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LanguageSelection() {
  const router = useRouter();

  return (
    <div 
      className="h-screen w-screen flex flex-col justify-center items-center text-white"
      style={{ backgroundColor: '#151d27' }}
    >
      {/* Animirani naslov "Choose Your Language" */}
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: '#1bffa8' }}
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Choose Your Language
      </motion.h1>

      {/* Slike pored jedna druge */}
      <motion.div
        className="flex gap-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        {/* Continue in English */}
        <motion.div
          className="cursor-pointer rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ["0px 0px 15px #1bffa8", "0px 0px 30px #1bffa8", "0px 0px 15px #1bffa8"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          onClick={() => router.push('/en/main')} // Vodi na englesku verziju
          style={{ borderRadius: '50%', padding: '10px' }} // Okrugli glow efekat
        >
          <Image 
            src="/continue.png" 
            alt="Continue in English" 
            width={150} 
            height={150} 
            className="rounded-full"
          />
        </motion.div>

        {/* Nastavite na srpskom */}
        <motion.div
          className="cursor-pointer rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ["0px 0px 15px #1bffa8", "0px 0px 30px #1bffa8", "0px 0px 15px #1bffa8"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          onClick={() => router.push('/sr/main')} // Vodi na srpsku verziju
          style={{ borderRadius: '50%', padding: '10px' }} // Okrugli glow efekat
        >
          <Image 
            src="/nastavite.png" 
            alt="Nastavite na srpskom" 
            width={150} 
            height={150} 
            className="rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Animirani tekst "Odaberite jezik" */}
      <motion.h1 
        className="text-4xl font-bold mt-12 text-center"
        style={{ color: '#1bffa8' }}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
      >
        Odaberite jezik
      </motion.h1>
    </div>
  );
}
