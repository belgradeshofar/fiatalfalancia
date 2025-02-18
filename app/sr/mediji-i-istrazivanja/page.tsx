'use client';
import { motion } from 'framer-motion';

export default function MediaResearchPage() {
  return (
    <div className="relative min-h-screen text-white bg-[#101820] px-6 py-12">
      {/* Hero Sekcija */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-[#00FFA3] drop-shadow-lg">
          Mediji & Istraživanja
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Snaga istraživačkog novinarstva i multimedije u razotkrivanju istine.
        </p>
      </motion.div>

      {/* Opis oblasti */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
        {[
          {
            title: "Istraživačko Novinarstvo",
            desc: "Naš tim koristi podatke, intervjue i napredne analitičke metode kako bi otkrio važne društvene i političke priče. Fokusirani smo na transparentnost, odgovornost i objektivnost."
          },
          {
            title: "Multimedijalni Pristup",
            desc: "Povezujemo tekst, video, interaktivne infografike i animacije kako bismo kreirali moćne priče koje angažuju publiku i podstiču promene."
          },
          {
            title: "Analiza Podataka",
            desc: "Kroz napredne tehnike obrade podataka, prepoznajemo trendove, kreiramo vizuelne prikaze i omogućavamo bolju interpretaciju kompleksnih informacija."
          },
          {
            title: "Digitalna Sigurnost i Fact-Checking",
            desc: "Obezbeđujemo alate i tehnike za proveru činjenica, zaštitu izvora i osiguranje integriteta informacija u digitalnom prostoru."
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

      {/* CTA Sekcija */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Želite da sarađujemo?</h2>
        <p className="text-gray-300 mt-2 text-lg">Kontaktirajte nas kako bismo zajedno kreirali istraživačke projekte.</p>
        <motion.button 
          className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#00FFA3] to-[#0066FF] rounded-lg shadow-lg transition transform hover:scale-110"
          onClick={() => console.log("Kontakt stranica (dodaj rutu)") }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Kontakt
        </motion.button>
      </motion.div>
    </div>
  );
}
