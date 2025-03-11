'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function MainPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');

  // Dummy data for projects – in practice, these can be replaced with real data
  const projects = [
    {
      id: 1,
      title: 'Together for Nature',
      category: 'ecology',
      description: 'Local environmental initiatives and campaigns to protect nature.',
    },
    {
      id: 2,
      title: 'Voice of the Community',
      category: 'community',
      description: 'Raising awareness and empowering citizens to actively drive change.',
    },
    {
      id: 3,
      title: 'New Media, New Stories',
      category: 'media',
      description: 'Supporting independent journalists and creatives in telling authentic stories.',
    },
    {
      id: 4,
      title: 'Supporting Rural Areas',
      category: 'community',
      description: 'Initiatives to improve living conditions in smaller communities.',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="font-inter text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-screen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video-people-nature.mp4" type="video/mp4" />
          <source src="/video-people-nature.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            For a world where every voice is heard. <br />
            For communities building a sustainable future. <br />
            For change that starts with us.
          </motion.h1>
          <motion.p
            className="text-white text-lg mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            MetaPolis Center supports people who create a better world.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4">
            <motion.button
              className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/donations')}
            >
              Support Our Work
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-blue-300 text-gray-800 rounded-full hover:bg-blue-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/initiatives')}
            >
              Get Involved in Initiatives
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-purple-300 text-gray-800 rounded-full hover:bg-purple-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/partnership')}
            >
              Become a Partner
            </motion.button>
          </div>
          {/* New SR link below the CTA buttons */}
          <div className="mt-4">
            <span
              onClick={() => router.push('/')}
              className="text-white cursor-pointer hover:underline"
            >
              SR
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT THE ASSOCIATION – MISSION & VISION */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About the Association</h2>
          <p className="text-center text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Our mission is simple – to empower people and communities. Through education, support, and activism, we help local initiatives grow.
            We connect people who want to change the world and provide them with the tools to do so.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 20l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-500 mb-2">Empowering Citizens</h3>
              <p className="text-gray-700 text-sm">Supporting education and community networking.</p>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 20l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Environmental Protection</h3>
              <p className="text-gray-700 text-sm">Sustainable development and local environmental campaigns.</p>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 20l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-500 mb-2">Support for Independent Initiatives</h3>
              <p className="text-gray-700 text-sm">Backing media and activists to create change.</p>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 20l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Connecting Activists</h3>
              <p className="text-gray-700 text-sm">Networking volunteers, organizations, and experts.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Our projects empower communities, protect nature, and support independent media.
          </p>
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-4 py-2 rounded-full ${
                filter === 'all' ? 'bg-green-300 text-gray-800' : 'bg-white text-gray-700'
              } transition`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                filter === 'ecology' ? 'bg-green-300 text-gray-800' : 'bg-white text-gray-700'
              } transition`}
              onClick={() => setFilter('ecology')}
            >
              Ecology
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                filter === 'community' ? 'bg-green-300 text-gray-800' : 'bg-white text-gray-700'
              } transition`}
              onClick={() => setFilter('community')}
            >
              Community
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                filter === 'media' ? 'bg-green-300 text-gray-800' : 'bg-white text-gray-700'
              } transition`}
              onClick={() => setFilter('media')}
            >
              Media
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => router.push(`/projects/${project.id}`)}
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
              onClick={() => router.push('/projects')}
            >
              Find Initiatives
            </motion.button>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Partners</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            We believe in the power of unity. We collaborate with organizations, local initiatives, and individuals who want to make a difference.
            If you share our values, join us!
          </p>
          <div className="flex justify-center">
            <motion.button
              className="px-6 py-3 bg-purple-300 text-gray-800 rounded-full hover:bg-purple-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/partnership')}
            >
              Become a Partner
            </motion.button>
          </div>
        </div>
      </section>

      {/* DONATIONS SECTION */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Donations</h2>
          <p className="mb-12 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Every contribution makes a difference. Your donations help people organize, have their voices heard, and launch initiatives that bring about real change.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <motion.div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex-1" whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-bold text-green-500">Creating Initiatives</h3>
              <p className="mt-4 text-gray-700">Supports new projects and ideas.</p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex-1" whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-bold text-green-500">Workshops & Trainings</h3>
              <p className="mt-4 text-gray-700">Enables the organization of educational events.</p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex-1" whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-bold text-green-500">Support for Activists</h3>
              <p className="mt-4 text-gray-700">Helps independent media and activists be heard.</p>
            </motion.div>
          </div>
          <motion.button
            className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/donations')}
          >
            Support Us Now
          </motion.button>
        </div>
      </section>

      {/* VOLUNTEERS & COLLABORATORS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Volunteers & Collaborators</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            We all can contribute to change. If you believe in the power of unity and want to be part of initiatives that make a difference, join us!
            Everyone can contribute – with their knowledge, skills, or simply their support.
          </p>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300" placeholder="Your name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300" placeholder="Your email address" />
              </div>
              <div className="mb-4">
                <label htmlFor="interest" className="block text-gray-700 mb-2">Area of Interest</label>
                <select id="interest" className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300">
                  <option value="">Select an area</option>
                  <option value="ecology">Ecology</option>
                  <option value="community">Community</option>
                  <option value="media">Media</option>
                </select>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                Get Involved
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
