'use client';
import { motion } from 'framer-motion';

export default function PoliticalAnalysis() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Video kao pozadina */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/politika.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay za bolju čitljivost */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Sadržaj sekcije */}
      <div className="relative z-10 px-6 py-12">
        {/* Hero sekcija */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-[#00FFA3] drop-shadow-lg">
            Političke i Društvene Analize
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Razumevanje političkih procesa i društvenih fenomena kroz podatke i analitiku.
          </p>
        </motion.div>

        {/* Grid sa sadržajem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
          {[
            {
              title: "Prediktivna Analitika",
              desc: "Koristimo napredne analitičke alate i veštačku inteligenciju kako bismo predvideli političke i društvene promene."
            },
            {
              title: "Istraživanje Javnog Mnjenja",
              desc: "Analiziramo percepcije građana kroz ankete, fokus grupe i analizu digitalnih podataka."
            },
            {
              title: "Mapiranje Uticaja",
              desc: "Identifikujemo ključne aktere i mreže moći kroz analizu društvenih i političkih interakcija."
            },
            {
              title: "Izrada Strategija",
              desc: "Razvijamo strategije za organizacije, nevladine inicijative i donosioce odluka kako bi efikasno oblikovali društvene promene."
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
      </div>
    </div>
  );
}
