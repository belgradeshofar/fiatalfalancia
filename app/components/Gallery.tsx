// app/components/Gallery.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryItems = [
  {
    src: '/pallets.jpg',
    alt: 'Delovi poređani po paletama',
    description: 'Dođite i pogledajte našu kolekciju spremnih za upotrebu.',
  },
  {
    src: '/car-parts.jpg',
    alt: 'Auto isečen u delovima',
    description: 'Široka ponuda polovnih delova.',
  },
  {
    src: '/worker.jpg',
    alt: 'Nasmejan radnik sa šrafcigerom',
    description: 'Naš stručni tim garantuje kvalitet.',
  },
]

export default function Gallery() {
  return (
    <section className="bg-black py-[100px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={80}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-gray-300 text-center mt-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
