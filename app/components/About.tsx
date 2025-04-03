// app/components/About.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="bg-black py-[100px] text-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-white text-4xl font-bold mb-6">Ko smo mi?</h2>
        <p className="text-gray-400 text-lg">
          Mi smo firma koja se bavi prodajom polovnih delova, testiranih i sigurnih,
          sa profesionalnim pristupom i reputacijom poverenja. Mi nismo običan auto otpad. Specijalizovani smo za Fiat, Alfa Romeo i Lancia vozila – svaki deo koji izađe iz našeg dvorišta detaljno je pregledan i testiran. Kod nas nema greške ni slučajnosti, već pouzdana rešenja koja štede vreme i novac.

Zato nam ljudi veruju i zato se vraćaju.
        </p>
      </motion.div>
    </section>
  )
}
