'use client';
import { motion } from 'framer-motion';

export default function MainPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Video kao pozadina */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay za bolju čitljivost teksta */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* MetaPolis Center Naslov */}
      <div className="relative flex flex-col items-center justify-center text-center min-h-[40vh] px-6">
        <motion.h1
          className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#0066FF] drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MetaPolis Center
        </motion.h1>
      </div>

      {/* Sekcija "Naša Ekspertiza" */}
      <motion.div 
        className="mt-10 text-center backdrop-blur-xl bg-white/10 p-10 rounded-lg shadow-lg border border-white/20 max-w-5xl mx-auto text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Naše Delovanje</h2>
        <p className="text-gray-300 mt-2">Spoj tehnologije, istraživanja i društvenih strategija.</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-10 text-center max-w-5xl mx-auto mt-12">
        {[
          { title: "Digitalne Strategije", desc: "Razvoj web platformi, digitalna transformacija i AI inovacije." },
          { title: "Mediji & Istraživanja", desc: "Istraživačko novinarstvo i analize ključnih društvenih pitanja." },
          { title: "Političke i Društvene Analize", desc: "Predviđanje društvenih trendova i donošenje strateških odluka." },
          { title: "Ekološki Projekti", desc: "Održivi razvoj i ekološke inicijative kroz tehnologiju." }
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
      </div>

      {/* Kontakt Sekcija */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Povežimo se</h2>
        <p className="text-gray-300 mt-2">Imate ideju, projekat ili želite stratešku analizu? Kontaktirajte nas.</p>
        <motion.button 
          className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#00FFA3] to-[#0066FF] rounded-lg shadow-lg transition transform hover:scale-110"
          onClick={() => console.log("Kontakt stranica (dodaj rutu)")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Kontakt
        </motion.button>
      </motion.div>
    </div>
  );
}
