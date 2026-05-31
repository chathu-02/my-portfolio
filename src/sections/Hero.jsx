import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpg';
import { stats } from '../data/stats';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#030712] overflow-visible px-6 pt-0.005"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute right-[-5%] bottom-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left flex flex-col justify-center gap-6">

          
            {/* Role badge placed above the name header */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 inline-block px-4 py-2 text-sm md:text-base font-bold tracking-[0.15em] text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/30 rounded-full"
            >
              Full Stack Developer | QA Enthusiast
            </motion.span>
<motion.div variants={item} className="space-y-2 mb-3">
            <p className="text-lg text-gray-400 font-medium">Hi, I'm</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                CHATHUMI
              </span>

              <br />

              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                HEWAMARAMAGE
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0"
          >
            I build scalable web applications and ensure high-quality software
            through modern development practices. Specializing in the
            <span className="text-white font-medium"> MERN Stack </span>
            and
            <span className="text-white font-medium"> Automated Testing</span>.
            {' '}
            <span className="text-cyan-300 font-semibold">So far, I've completed {stats.projects}+ projects.</span>
          </motion.p>

          {/* Show actual projects completed count under the description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full font-medium">
              Projects Completed: {stats.projects}+
            </span>
          </motion.div>

          
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={item}
          className="flex justify-center lg:justify-end transform lg:translate-x-[400px]"
        >
          <div className="relative overflow-hidden">
            {/* Profile Image (no frame) */}
            <img
              src={heroImage}
              alt="Chathumi Hewamaramage"
              className="relative w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;