'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

export default function MainPage() {
  const router = useRouter();

  // Inicijalizacija tsparticles
  const particlesInit = useCallback(async (main: any) => {
    await loadFull(main);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: 'transparent' },
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { speed: 0.6 },
            links: { enable: true, color: '#00FFA3', opacity: 0.5 },
            color: { value: '#00FFA3' },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-55"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* MetaPolis Center Title */}
      <div className="relative flex flex-col items-center justify-center text-center min-h-[40vh] px-6">
        <motion.h1
          className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#0066FF] drop-shadow-lg neon-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MetaPolis Center
        </motion.h1>
      </div>

      {/* Clickable "Naše Delovanje" Section */}
      <motion.div
        className="mt-10 text-center backdrop-blur-xl bg-white/10 p-10 rounded-lg shadow-lg border border-white/20 max-w-5xl mx-auto text-white 
                   cursor-pointer transition transform hover:scale-105 hover:shadow-xl hover:shadow-[#00FFA3]/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={() => router.push('/sr/expertise')}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Naše Delovanje</h2>
        <p className="text-gray-300 mt-2">
          Spoj tehnologije, istraživanja i društvenih strategija.
        </p>
      </motion.div>

      {/* Clickable Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center max-w-5xl mx-auto mt-12 pb-16">
        {[
          {
            title: 'Digitalne Strategije',
            desc: 'Razvoj web platformi, digitalna transformacija i AI inovacije.',
            route: '/sr/digitalne-strategije',
          },
          {
            title: 'Mediji & Istraživanja',
            desc: 'Istraživačko novinarstvo, multimedija i analize ključnih društvenih pitanja.',
            route: '/sr/mediji-i-istrazivanja',
          },
          {
            title: 'Političke i Društvene Analize',
            desc: 'Predviđanje društvenih trendova i donošenje strateških odluka.',
            route: '/sr/politicke-i-drustvene-analize',
          },
          {
            title: 'Održivi Razvoj',
            desc: 'Ekološki projekti i inicijative.',
            route: '/sr/odrzivi-razvoj',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg backdrop-blur-xl bg-white/10 shadow-lg border border-white/20
                       transition transform hover:scale-105 hover:shadow-xl hover:shadow-[#00FFA3]/50
                       text-white cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            onClick={() => router.push(item.route)}
          >
            <h2 className="text-2xl font-semibold text-[#00FFA3]">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Diskretniji "Kontakt" CTA */}
      <motion.div
        className="mx-auto mt-6 text-center pb-10 max-w-xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-gray-300">
          Ukoliko želite da saznate više o našim projektima ili sarađujete sa nama,
          <motion.button
            className="ml-2 px-3 py-1 text-sm font-medium text-black bg-[#00FFA3]
                       rounded hover:bg-[#06e696] transition"
            onClick={() => router.push('/sr/kontakt')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            kontaktirajte nas
          </motion.button>.
        </p>
      </motion.div>
    </div>
  );
}
