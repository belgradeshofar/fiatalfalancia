// app/components/Showcase.tsx
'use client'
import React from 'react'
import Image from 'next/image'

export default function Showcase() {
  return (
    <section className="relative w-full h-[500px]">
      {/* Slika se proteže preko cele sekcije */}
      <div className="absolute inset-0">
        <Image
          src="/fiat-monument.jpg" // putanja do slike u public folderu
          alt="Fiat Monument"
          fill
          style={{ objectFit: 'cover' }}
          className="filter brightness-75" // lagano zatamni sliku
        />
      </div>
      {/* Overlay (ako želiš još tamniji efekat) */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Sadržaj preko slike */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
        </h2>
      </div>
    </section>
  )
}
