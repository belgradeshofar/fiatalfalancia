'use client';
import { motion } from 'framer-motion';

export default function DigitalStrategies() {
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
          Digitalne Strategije
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Inovativna rešenja za digitalnu transformaciju i održiv razvoj organizacija.
        </p>
      </motion.div>

      {/* Sadržaj sekcije */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
        {[
          {
            title: "Razvoj Web i Mobilnih Platformi",
            desc: "Kreiramo moćne digitalne alate, prilagođene potrebama klijenata. Naše rešenja omogućavaju organizacijama da efikasno upravljaju sadržajem, angažuju korisnike i optimizuju poslovne procese."
          },
          {
            title: "Veštačka Inteligencija u Strategiji",
            desc: "Integracija AI modela za automatizaciju, analizu podataka i personalizaciju korisničkog iskustva postaje ključni deo digitalnih strategija. Pomažemo organizacijama da iskoriste AI na najbolji način."
          },
          {
            title: "Kibernetička Sigurnost",
            desc: "Naša ekspertiza u zaštiti podataka, enkripciji i upravljanju pretnjama omogućava sigurno digitalno okruženje za korisnike i organizacije."
          },
          {
            title: "Big Data Analitika",
            desc: "Upotrebom naprednih alata za analizu velikih podataka, pomažemo organizacijama da razumeju svoje korisnike, predvide trendove i donesu informisane strateške odluke."
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
      
      {/* CTA */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Kontaktirajte nas</h2>
        <p className="text-gray-300 mt-2 text-lg">Razvijamo digitalne strategije koje donose rezultate.</p>
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
