import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => (
  <section
    id="hero"
    className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 overflow-hidden"
  >
    <motion.div
      className="absolute top-10 left-1/4 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-12 right-1/3 w-64 h-64 bg-red-300/10 rounded-full blur-2xl"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 6, repeat: Infinity, delay: 2 }}
    />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 text-center max-w-2xl"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Welcome to{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-white">
          CryptRem
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Your all-in-one crypto companion: trade, track, and transform your digital assets with unparalleled speed and security.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-lg bg-red-300 text-black font-medium shadow-md transition"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: 'rgba(255,229,229,0.1)' }}
          className="px-6 py-3 rounded-lg border border-red-300 text-red-300 font-medium transition"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  </section>
);

export default Hero;
 