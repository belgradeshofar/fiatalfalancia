// pages/index.js

import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ManifestoSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Video pozadina */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
        Vaš pretraživač ne podržava video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Tekst + dugmad */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-8xl font-bold mb-4 animate-fadeInUp">
          NOVI MEDIJI,
        </h1>
        <h1 className="text-5xl md:text-8xl font-bold mb-4 animate-fadeInUp delay-200">
          NOVE PRIČE.
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold mb-8 animate-fadeInUp delay-400">
        </h1>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-transparent border border-white rounded hover:bg-white hover:text-black transition-all duration-300">
            Uči kroz priče
          </button>
          <button className="px-6 py-3 bg-transparent border border-white rounded hover:bg-white hover:text-black transition-all duration-300">
            Otkrij procese
          </button>
          <button className="px-6 py-3 bg-transparent border border-white rounded hover:bg-white hover:text-black transition-all duration-300">
            Kreiraj sa nama
          </button>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="py-20 px-4 md:px-20 bg-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Edukativni manifest */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl">Verujemo da su mediji alat za razumevanje sveta.</p>
          <p className="text-xl md:text-2xl">Nove generacije pričaju priče kroz zvuk, sliku i kod.</p>
          <p className="text-2xl md:text-3xl font-bold text-red-600">
            Učimo kako da gledamo, slušamo i delimo.
          </p>
          <p className="text-xl md:text-2xl">Spoj tehnologije i empatije stvara novu vrstu obrazovanja.</p>
          <p className="text-2xl md:text-3xl font-bold text-red-600">
            Kamera kao alat za dijalog. Zvuk kao most među svetovima.
          </p>
          <p className="text-xl md:text-2xl">
            Naši sadržaji povezuju kreativnost, zajednicu i učenje.
          </p>
        </div>
        {/* Kolaž fotografija */}
        <div className="grid grid-cols-2 gap-2">
          <img
            src="/Učenje.jpg"
            alt="Učenje"
            className="object-cover w-full h-full"
          />
          <img
            src= "/Kreativnost.jpg"
            alt="Kreativnost"
            className="object-cover w-full h-full"
          />
          <img
            src="/Zajednica.jpg"
            alt="Zajednica"
            className="object-cover w-full h-full"
          />
          <img
            src="/Medij.jpg"
            alt="Mediji"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 bg-black text-white">
      {/* Pozadinsko slovo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[20rem] opacity-10 font-bold">M</h1>
      </div>
      {/* Poziv na učešće */}
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Mediji nisu samo informacije.
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-8">
          Oni su način da učimo, da rastemo i da stvaramo zajedno.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-transparent border border-white rounded hover:bg-white hover:text-black transition duration-300">
            Kontaktiraj nas
          </button>
          <button className="px-6 py-3 bg-transparent border border-white rounded hover:bg-white hover:text-black transition duration-300">
            Prijavi se za radionicu
          </button>
        </div>
      </div>
    </section>
  );
}
