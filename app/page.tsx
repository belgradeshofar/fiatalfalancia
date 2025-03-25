'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function MainPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('svi');

  // Dummy podaci za projekte – u praksi se mogu zameniti stvarnim podacima
  const projects = [
    {
      id: 1,
      title: 'Zajedno za prirodu',
      category: 'ekologija',
      description: 'Lokalne ekološke inicijative i kampanje za očuvanje prirode.',
    },
    {
      id: 2,
      title: 'Glas zajednice',
      category: 'društvo',
      description: 'Podizanje svesti i osnaživanje građana da aktivno učestvuju u promenama.',
    },
    {
      id: 3,
      title: 'Novi mediji, nove priče',
      category: 'mediji',
      description: 'Podrška nezavisnim novinarima i kreativcima u pričanju istinitih priča.',
    },
    {
      id: 4,
      title: 'Podrška ruralnim sredinama',
      category: 'društvo',
      description: 'Inicijative za unapređenje životnih uslova u manjim zajednicama.',
    },
  ];

  const filteredProjects =
    filter === 'svi' ? projects : projects.filter((p) => p.category === filter);

  // Funkcija za automatsko skrolovanje do kontakt forme
  const scrollToContact = () => {
    const contactSection = document.getElementById("contactForm");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-inter text-gray-800">
      {/* HERO SEKCIJA */}
      <section className="relative h-screen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video-people-nature.mp4" type="video/mp4" />
          <source src="/video-people-nature.webm" type="video/webm" />
          Vaš pregledač ne podržava video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Za svet u kojem se svi glasovi čuju. <br />
            Za zajednice koje grade održivu budućnost. <br />
            Za promene koje dolaze od nas.
          </motion.h1>
          <motion.p
            className="text-white text-lg mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Metapolis Centar podržava ljude koji stvaraju bolji svet.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4">
            <motion.button
              className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/donacije')}
            >
              Podrži naš rad
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-blue-300 text-gray-800 rounded-full hover:bg-blue-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToContact}
            >
              Uključi se u inicijative
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-purple-300 text-gray-800 rounded-full hover:bg-purple-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToContact}
            >
              Postani partner
            </motion.button>
          </div>
          {/* Novi ENG link ispod dugmića */}
          <div className="mt-4">
            <span
              onClick={() => router.push('/engleski')}
              className="text-white cursor-pointer hover:underline"
            >
              ENG
            </span>
          </div>
        </div>
      </section>

      {/* SEKCIJA O UDRUŽENJU – MISIJA I VIZIJA */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">O Udruženju</h2>
          <p className="text-center text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Naša misija je jednostavna – osnaživanje ljudi i zajednica. Kroz edukaciju, podršku i aktivizam, pomažemo lokalnim inicijativama da rastu.
            Povezujemo ljude koji žele da menjaju svet i dajemo im alate da to i učine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 20l9-5-9-5-9 5 9 5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12l9-5-9-5-9 5 9 5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-500 mb-2">Osnaživanje građana</h3>
              <p className="text-gray-700 text-sm">Podrška edukaciji i umrežavanju zajednice.</p>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 20l9-5-9-5-9 5 9 5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12l9-5-9-5-9 5 9 5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Zaštita životne sredine</h3>
              <p className="text-gray-700 text-sm">Održivi razvoj i lokalne ekološke kampanje.</p>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 20l9-5-9-5-9 5 9 5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12l9-5-9-5-9 5 9 5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-500 mb-2">Podrška nezavisnim inicijativama</h3>
              <p className="text-gray-700 text-sm">Podrška medijima i aktivistima za stvaranje promena.</p>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 20l9-5-9-5-9 5 9 5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12l9-5-9-5-9 5 9 5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Povezivanje aktivista</h3>
              <p className="text-gray-700 text-sm">Umrežavanje volontera, organizacija i stručnjaka.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEKCIJA PROJEKATA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projekti</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Naši projekti osnažuju zajednice, štite prirodu i podržavaju nezavisne medije.
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
            <button
              className={`px-4 py-2 rounded-full ${
                filter === 'društvo' ? 'bg-green-300 text-gray-800' : 'bg-white text-gray-700'
              } transition`}
              onClick={() => setFilter('društvo')}
            >
              Društvo
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                filter === 'mediji' ? 'bg-green-300 text-gray-800' : 'bg-white text-gray-700'
              } transition`}
              onClick={() => setFilter('mediji')}
            >
              Mediji
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => router.push(`/projekti/${project.id}`)}
              >
                <h3 className="text-2xl font-semibold text-green-500 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <motion.button
              className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/projekti')}
            >
              Pronađite inicijative
            </motion.button>
          </div>
        </div>
      </section>

      {/* SEKCIJA PARTNERA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Partneri</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Verujemo u moć zajedništva. Sarađujemo sa organizacijama, lokalnim inicijativama i ljudima koji žele da naprave promenu.
            Ako delimo iste vrednosti, pridružite nam se!
          </p>
          <div className="flex justify-center">
            <motion.button
              className="px-6 py-3 bg-purple-300 text-gray-800 rounded-full hover:bg-purple-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToContact}
            >
              Postani partner
            </motion.button>
          </div>
        </div>
      </section>

      {/* SEKCIJA DONACIJA */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Donacije</h2>
          <p className="mb-12 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Svaka podrška pravi razliku. Vaše donacije pomažu ljudima da se organizuju, da se njihov glas čuje i da se pokrenu inicijative koje donose stvarne promene.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <motion.div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex-1" whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-bold text-green-500">Kreiranje inicijativa</h3>
              <p className="mt-4 text-gray-700">Podržava nove projekte i ideje.</p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex-1" whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-bold text-green-500">Edukacije i radionice</h3>
              <p className="mt-4 text-gray-700">Omogućava organizaciju edukativnih događaja.</p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex-1" whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-bold text-green-500">Podrška aktivistima</h3>
              <p className="mt-4 text-gray-700">Pomaže nezavisnim medijima i aktivistima da budu saslušani.</p>
            </motion.div>
          </div>
          <motion.button
            className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/donacije')}
          >
            Podržite nas sada
          </motion.button>
        </div>
      </section>

      {/* SEKCIJA VOLONTERA I SARADNIKA – KONTAKT FORMA */}
      <section id="contactForm" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Volonteri i Saradnici</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Svi možemo doprineti promenama. Ako verujete u snagu zajedništva i želite da budete deo inicijativa koje prave razliku, pridružite nam se!
            Svako može doprineti – svojim znanjem, veštinama ili samo podrškom.
          </p>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Ime</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300" placeholder="Vaše ime" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300" placeholder="Vaša email adresa" />
              </div>
              <div className="mb-4">
                <label htmlFor="interest" className="block text-gray-700 mb-2">Oblast interesovanja</label>
                <select id="interest" className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300">
                  <option value="">Izaberite oblast</option>
                  <option value="ekologija">Ekologija</option>
                  <option value="društvo">Društvo</option>
                  <option value="mediji">Mediji</option>
                </select>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                Uključi se
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
