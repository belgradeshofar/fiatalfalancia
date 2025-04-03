// app/components/Contact.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-[100px]">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-white text-4xl font-bold text-center mb-8">
          Kontaktirajte nas
        </h2>
        
        {/* Veliki klikabilni broj telefona */}
        <div className="text-center mb-8">
          <a 
            href="tel:+381641593361"
            className="text-white font-bold text-5xl hover:underline"
          >
            064 1593361
          </a>
        </div>

        {/* Kratka poruka */}
        <p className="text-gray-300 text-center mb-8 text-xl">
          Zovite – ako imamo, ide odmah. Ako nemamo – nalazimo vam.
        </p>

        {/* Google Map – tačna lokacija */}
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.2655287093485!2d20.337401!3d44.795777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f2efc17e093%3A0x70eab7338df35305!2sFiat%20Alfa%20Lancia%20-%20Auto%20otpad!5e0!3m2!1ssr!2srs!4v1743642225905!5m2!1ssr!2srs"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Google Map - Fiat Alfa Lancia - Auto otpad"
          ></iframe>
        </div>

        {/* Dugme za poruku (link na WhatsApp) */}
        <div className="text-center">
          <a
            href="https://wa.me/381641593361"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black py-3 px-8 rounded-full hover:bg-gray-200 transition inline-block"
          >
            Pošalji poruku
          </a>
        </div>
      </motion.div>
    </section>
  )
}
