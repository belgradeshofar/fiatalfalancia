'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function MainPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen text-white">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* MetaPolis Center Title */}
      <div className="relative flex flex-col items-center justify-center text-center min-h-[40vh] px-6">
        <motion.h1
          className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#0066FF] drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MetaPolis Center
        </motion.h1>
      </div>

      {/* Clickable "Our Work" Section */}
      <motion.div
        className="mt-10 text-center backdrop-blur-xl bg-white/10 p-10 rounded-lg shadow-lg border border-white/20 max-w-5xl mx-auto text-white 
                   cursor-pointer transition transform hover:scale-105 hover:shadow-xl hover:shadow-[#00FFA3]/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={() => router.push('/en/main/expertise')}
      >
        <h2 className="text-3xl font-semibold text-[#00FFA3]">Our Work</h2>
        <p className="text-gray-300 mt-2">
          Combining technology, research, and strategic development.
        </p>
      </motion.div>

      {/* Clickable Sections */}
      <div className="grid grid-cols-2 gap-10 text-center max-w-5xl mx-auto mt-12">
        {[
          {
            title: 'Digital Strategies',
            desc: 'Developing digital solutions, AI applications, and smart automation.',
            path: '/en/main/digitalne-strategije',
          },
          {
            title: 'Media & Research',
            desc: 'Investigative journalism, multimedia and data-driven analysis of key societal issues.',
            path: '/en/main/mediji-i-istrazivanja',
          },
          {
            title: 'Political & Social Analytics',
            desc: 'Predicting trends and creating strategic insights.',
            path: '/en/main/politicke-i-drustvene-analize',
          },
          {
            title: 'Sustainable Projects',
            desc: 'Merging technology and sustainability for long-term impact.',
            path: '/en/main/odrzivi-razvoj',
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
            onClick={() => router.push(item.path)}
          >
            <h2 className="text-2xl font-semibold text-[#00FFA3]">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Subtler "Contact Us" CTA */}
      <motion.div
        className="mx-auto mt-6 text-center pb-10 max-w-xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-gray-300">
          If you would like to learn more about our projects or collaborate with us,
          <motion.button
            className="ml-2 px-3 py-1 text-sm font-medium text-black bg-[#00FFA3]
                       rounded hover:bg-[#06e696] transition"
            onClick={() => router.push('/en/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            contact us
          </motion.button>.
        </p>
      </motion.div>
    </div>
  );
}
