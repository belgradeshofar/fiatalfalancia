"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function GlasZajednicePage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Hero sekcija sa video pozadinom */}
      <section className="relative h-screen w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/Dreamer.mp4"
        />
        {/* Tamni overlay preko videa */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Tekst i dugme */}
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
            className="text-white text-xl md:text-2xl mb-8 max-w-2xl"
          >
            Pokret za aktivne i snažne lokalne zajednice
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={scrollToForm}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Pridruži se pokretu
          </motion.button>
        </div>
      </section>

      {/* Sekcija "O projektu" */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
          >
            O projektu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            <span className="block mb-6">
              <strong>„Glas zajednice“</strong> nije obična platforma – to je digitalni dom za sve koji veruju u moć zajedništva, kreativnosti i promene.
            </span>
            <span className="block mb-6">
              Ovo je prostor gde svaka ideja može postati pokret, a svaki glas – iskra koja osvetljava put ka pravednijem društvu.
            </span>
            <span className="block mb-6">
              Naš cilj je da povežemo generacije, inspirišemo nove vizije i omogućimo saradnju kroz inovativne formate, snažan dizajn i autentičnu energiju zajednice.
            </span>
            <span className="block mb-6">
              Ako osećaš da je vreme za novu vrstu povezivanja – ne čekaj. Ovo je tvoj poziv da se uključiš.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
            >
              Pridruži se pokretu
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sekcija "Naša misija, vizija, ciljevi" */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Naša misija, vizija i ciljevi
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-100 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Misija</h3>
              <p className="text-gray-600 leading-relaxed">
                Ujediniti ljude različitih pozadina, podstaći kreativnu razmenu ideja i omogućiti svima da zajedno grade budućnost zasnovanu na solidarnosti i inovacijama.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-100 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Vizija</h3>
              <p className="text-gray-600 leading-relaxed">
                Postati pokretačka sila promena u lokalnim zajednicama širom regiona, stvarajući prostor gde je svaki glas važan i svaka ideja vredna ostvarenja.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-100 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Ciljevi</h3>
              <p className="text-gray-600 leading-relaxed">
                Kreirati platformu koja inspiriše, edukuje i povezuje – mesto gde se svako oseća dobrodošlo i spremno da svojim angažovanjem doprinese opštem dobru.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sekcija "Pridruži se" (kontakt forma) */}
      <section className="relative py-16 bg-gray-50 px-4" ref={formRef}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-8 text-gray-800"
          >
            Pridruži se
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
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
                rows={4}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >
              Pošalji prijavu
            </motion.button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
