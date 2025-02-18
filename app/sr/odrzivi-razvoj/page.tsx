'use client';
import { motion } from 'framer-motion';

export default function SustainableDevelopment() {
  return (
    <div className="min-h-screen text-white bg-[#101820] px-6 py-12">
      {/* Hero sekcija */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-[#00FFA3] drop-shadow-lg">
          Održivi Razvoj
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Povezujemo ekologiju, inovacije i društvenu odgovornost za održivu budućnost.
        </p>
      </motion.div>

      {/* Grid sa sadržajem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
        {[
          {
            title: "Tehnološka Rešenja za Ekologiju",
            desc: "Korišćenje IoT sistema, daljinskog praćenja i digitalne analitike za zaštitu životne sredine."
          },
          {
            title: "Održivi Urbanizam",
            desc: "Razvoj koncepta pametnih gradova i integracija ekoloških politika u urbanističko planiranje."
          },
          {
            title: "Klimatske Inicijative",
            desc: "Razvijamo projekte koji pomažu kompanijama i organizacijama da smanje emisiju CO2 i pređu na obnovljive izvore energije."
          },
          {
            title: "Edukacija i Aktivizam",
            desc: "Podstičemo građane i kompanije na odgovorniji pristup zaštiti životne sredine kroz programe obuke i istraživačke projekte."
          }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="p-6 rounded-lg bg-[#1B2735] shadow-lg border border-white/20 transition transform hover:scale-105 text-white"
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
  );
}
