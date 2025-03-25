"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function GlasZajednicePage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Hero sekcija */}
      <section className="relative h-screen w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/dreamer.mp4" // Preuzmite video sa https://www.pexels.com/video/dreamer-27410743/ i postavite ga u public/videos folder
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-bold mb-4"
          >
            Glas zajednice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-xl md:text-2xl mb-8"
          >
            Pokret za aktivne i snažne lokalne zajednice
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={scrollToForm}
            className="bg-blue-600 text-white py-3 px-8 rounded shadow hover:bg-blue-700 transition duration-300"
          >
            Pridruži se pokretu
          </motion.button>
        </div>
      </section>

      {/* Sekcija "O projektu" */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-8"
          >
            O projektu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto leading-relaxed text-gray-700"
          >
            Projekat "Glas zajednice" je mnogo više od obične platforme – on je pulsirajuće srce modernih lokalnih zajednica. 
            Ova jedinstvena inicijativa nastala je s ciljem da transformiše način na koji komuniciramo, delimo ideje i sarađujemo. 
            Zamislite mesto gde se svaki glas računa, gde se kreativnost slavi i gde svaka misao postaje pokretačka snaga za promene u društvu. 
            Naša vizija je da stvorimo digitalni dom koji spaja ljude različitih generacija, interesovanja i talenata, te ih inspiriše da zajedno grade bolju budućnost. 
            Kroz bogat sadržaj, interaktivne elemente i pažljivo osmišljene vizuelne detalje, "Glas zajednice" pruža vam prostor za izražavanje, učenje i povezivanje. 
            Ako verujete da svaka ideja ima moć da pokrene revoluciju i želite da budete deo ove neverovatne avanture, pozivamo vas da se priključite. 
            Vaša podrška i učešće su ključni – ostavite nam poruku putem kontakt forme ispod i zakoračimo zajedno ka novom dobu zajedništva.
          </motion.p>
        </div>
      </section>

      {/* Sekcija "Priče učesnika" */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Priče učesnika
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Ana Petrović",
                testimonial:
                  "Ovaj projekat mi je otvorio oči i pokazao da svaka ideja, ma koliko mala bila, može promeniti svet.",
              },
              {
                name: "Marko Ilić",
                testimonial:
                  "Inspirativno iskustvo koje nas povezuje i motiviše da zajedno gradimo bolje sutra.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.testimonial}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcija "Pridruži se" (kontakt forma) */}
      <section className="py-16 bg-white px-4" ref={formRef}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Pridruži se
          </motion.h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ime
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Poruka
              </label>
              <textarea
                required
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded shadow hover:bg-blue-700 transition duration-300"
            >
              Pošalji prijavu
            </motion.button>
          </form>
        </div>
      </section>
    </main>
  );
}
