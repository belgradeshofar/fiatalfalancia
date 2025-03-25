'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function ZajednoZaPrirodu() {
  const router = useRouter();
  const [filter, setFilter] = useState('svi');

  // Dummy podaci za projekte – u praksi se mogu zameniti stvarnim podacima
  const projects = [
    {
      id: 1,
      title: 'Dosije Priroda',
      category: 'ekologija',
      description: 'Ekološko istraživačko novinarstvo i aktivizam.',
      link: 'https://dosijepriroda.org', // link ka sajtu
    },
    {
      id: 2,
      title: 'Zeleni Šakal',
      category: 'ekologija',
      description: 'Edukacija i zaštita prirode.',
      link: 'https://www.facebook.com/zelenisakal', // link ka FB stranici
    },
  ];

  const filteredProjects =
    filter === 'svi' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="font-inter text-gray-800">
      {/* HERO SEKCIJA */}
      <section className="relative h-screen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video-nature-action.mp4" type="video/mp4" />
          <source src="/video-nature-action.webm" type="video/webm" />
          Vaš pregledač ne podržava video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Priroda nam daje sve. <br />
            Na nama je da je sačuvamo.
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <motion.button
              className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/projekti')}
            >
              Pogledaj naše projekte
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-blue-300 text-gray-800 rounded-full hover:bg-blue-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/prijava')}
            >
              Uključi se u akciju
            </motion.button>
          </div>
        </div>
      </section>

      {/* SEKCIJA PROJEKATA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Naše Ekološke Inicijative</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ovde možete pronaći najvažnije ekološke projekte vođene ili podržane od strane Metapolis Centra. 
            Saznajte više o našim inicijativama i kako možete učestvovati.
          </p>
          {/* Dugmad za filter */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-4 py-2 rounded-full ${
                filter === 'svi' ? 'bg-green-300 text-gray-800' : 'bg-white text-gray-700'
              } transition`}
              onClick={() => setFilter('svi')}
            >
              Svi
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                filter === 'ekologija' ? 'bg-green-300 text-gray-800' : 'bg-white text-gray-700'
              } transition`}
              onClick={() => setFilter('ekologija')}
            >
              Ekologija
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold text-green-500 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
                {/* Klik otvara eksterni link */}
                <motion.button
                  className="mt-4 px-4 py-2 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Saznaj više
                </motion.button>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
              onClick={() => setFilter('svi')}
            >
              Prikaži sve
            </button>
          </div>
        </div>
      </section>

      {/* PRIČE IZ PRIRODE (GALERIJA) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Priče iz prirode</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Pogledajte slike i video materijale sa naših akcija – pre i posle, iz terena, i priče volontera.
          </p>
          {/* Jednostavan slider – horizontalno scrollanje */}
          <div className="overflow-x-auto flex space-x-4 py-4">
            <img
              src="/image1.jpg"
              alt="Borba protiv divljih deponija"
              className="h-64 rounded-xl shadow-md"
              loading="lazy"
            />
            <img
              src="/image2.jpg"
              alt="Akcije skupljanja smeća"
              className="h-64 rounded-xl shadow-md"
              loading="lazy"
            />
            <img
              src="/image3.jpg"
              alt="Delovanje na terenu"
              className="h-64 rounded-xl shadow-md"
              loading="lazy"
            />
            <img
              src="/image4.jpg"
              alt="Volonterski rad"
              className="h-64 rounded-xl shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* KAKO POMOĆI? */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Kako pomoći?</h2>
          <p className="mb-12 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Vaša podrška je ključna. Možete doprineti na tri načina:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <motion.div
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition flex-1"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-green-500">Donacije</h3>
              <p className="mt-4 text-gray-700">
                Finansijski podržite naše projekte.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition flex-1"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-green-500">Volontiranje</h3>
              <p className="mt-4 text-gray-700">
                Pridružite se terenskim akcijama i pomozite na licu mesta.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition flex-1"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-green-500">Partnerstva</h3>
              <p className="mt-4 text-gray-700">
                Udružite se s nama u zajedničkim ekološkim inicijativama.
              </p>
            </motion.div>
          </div>
          <motion.button
            className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/donacije')}
          >
            Doniraj sada
          </motion.button>
        </div>
      </section>

      {/* KONTAKT I PRIDRUŽI SE */}
      <section id="contactForm" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Kontakt & Pridruži se</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Imate pitanje ili želite da se uključite? Pošaljite nam poruku i mi ćemo vas kontaktirati.
          </p>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Ime i Prezime
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300"
                  placeholder="Vaše ime i prezime"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300"
                  placeholder="Vaša email adresa"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Poruka
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-300"
                  placeholder="Vaša poruka ili pitanje"
                  rows={4}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                Pošalji
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
