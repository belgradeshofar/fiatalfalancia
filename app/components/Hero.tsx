// app/components/Hero.tsx
'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Kontejner sa 3 slike iz public foldera */}
      <div className="absolute inset-0 flex">
        <div className="relative flex-1">
          <Image
            src="/fiat.jpg"
            alt="Luxury Fiat"
            fill
            style={{ objectFit: 'cover' }}
            quality={80}
            className="filter blur-sm"
          />
        </div>
        <div className="relative flex-1">
          <Image
            src="/alfa-romeo.jpg"
            alt="Luxury Alfa Romeo"
            fill
            style={{ objectFit: 'cover' }}
            quality={80}
            className="filter blur-sm"
          />
        </div>
        <div className="relative flex-1">
          <Image
            src="/lancia.jpg"
            alt="Luxury Lancia"
            fill
            style={{ objectFit: 'cover' }}
            quality={80}
            className="filter blur-sm"
          />
        </div>
      </div>
      {/* Tamni overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* Centralni sadržaj sa animacijom */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl mb-4">
          Polovni delovi. Premium iskustvo.
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-8">
          Specijalizovani za Fiat, Alfa Romeo i Lancia
        </p>
        <a 
          href="#contact" 
          className="bg-white text-black py-3 px-8 rounded-full hover:bg-gray-200 transition"
        >
          Potražite deo
        </a>
      </motion.div>
    </section>
  )
}
