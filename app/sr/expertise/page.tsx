'use client';
import { motion } from 'framer-motion';

export default function ExpertisePage() {
  return (
    <div className="relative min-h-screen text-white bg-[#101820] px-6 py-12">
      {/* Hero sekcija */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-[#00FFA3] drop-shadow-lg">
          Naše Delovanje
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Spajamo inovacije, istraživanja i strategije kako bismo oblikovali bolju digitalnu i društvenu budućnost.
        </p>
      </motion.div>

      {/* Grid sa detaljnim opisima ekspertiza */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
        {[
          {
            title: "Digitalne Strategije",
            desc: "Naš tim razvija prilagođene digitalne strategije za organizacije, omogućavajući im da se prilagode modernim tehnološkim promenama. Kroz napredne web platforme, veštačku inteligenciju i inovativne digitalne alate, pomažemo klijentima da optimizuju svoje procese i poboljšaju korisničko iskustvo."
          },
          {
            title: "Mediji & Istraživanja",
            desc: "Kombinujemo analitičke metode i istraživačko novinarstvo kako bismo osvetlili ključna društvena i ekološka pitanja. Naši medijski projekti uključuju dubinske analize, vizuelne prikaze podataka i multimedijalne kampanje koje podižu svest i informišu širu javnost."
          },
          {
            title: "Političke i Društvene Analize",
            desc: "Uz pomoć velikih skupova podataka i prediktivne analitike, analiziramo društvene i političke trendove. Naš cilj je razvoj strategija koje omogućavaju donosiocima odluka da prepoznaju ključne faktore i donesu informisane odluke zasnovane na podacima."
          },
          {
            title: "Ekološki Projekti",
            desc: "Povezujemo ekologiju i tehnologiju kroz održive projekte koji koriste IoT sisteme, daljinsko praćenje i digitalnu analitiku za očuvanje životne sredine. Razvijamo rešenja koja podržavaju zelenu tranziciju i pomažu organizacijama da smanje svoj ekološki otisak."
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

      {/* Kontakt CTA */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Zainteresovani ste za saradnju?</h2>
        <p className="text-gray-300 mt-2 text-lg">Kontaktirajte nas kako bismo zajedno razvili strateška rešenja.</p>
        <motion.button 
          className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#00FFA3] to-[#0066FF] rounded-lg shadow-lg transition transform hover:scale-110"
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
