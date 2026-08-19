import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpg';
import { stats } from '../data/stats';
import {
  SiReact, SiNextdotjs, SiMongodb,
  SiNodedotjs, SiMysql, SiPhp, SiPostman
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbTestPipe } from 'react-icons/tb';

/* ───── Tech icons for hero section ───── */
const heroTechIcons = [
  { name: 'React',    icon: SiReact,     color: '#61DAFB', floatDuration: 3.0 },
  { name: 'Next.js',  icon: SiNextdotjs, color: '#FFFFFF', floatDuration: 3.5 },
  { name: 'Node.js',  icon: SiNodedotjs, color: '#339933', floatDuration: 2.8 },
  { name: 'MongoDB',  icon: SiMongodb,   color: '#47A248', floatDuration: 3.2 },
  { name: 'Java',     icon: FaJava,      color: '#ED8B00', floatDuration: 3.6 },
  { name: 'PHP',        icon: SiPhp,       color: '#777BB4', floatDuration: 2.9 },
  { name: 'MySQL',      icon: SiMysql,     color: '#4479A1', floatDuration: 3.4 },
  { name: 'Playwright', icon: TbTestPipe,   color: '#2EAD33', floatDuration: 3.1 },
  { name: 'Postman',    icon: SiPostman,    color: '#FF6C37', floatDuration: 2.7 },
];

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
          className="absolute left-[-20%] top-[-20%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-600/20 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute right-[-10%] bottom-[-20%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-purple-600/15 blur-[120px]"
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
            Full Stack Developer | QA Automation
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
          </motion.p>

          {/* Show actual projects completed count under the description */}
          <motion.div
            variants={item}
            className="flex gap-6 justify-center md:justify-start"
          >
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-cyan-300">{stats.projects}+</p>
              <p className="text-sm md:text-base text-gray-300 font-mono">Projects</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-blue-300">2+</p>
              <p
                className="text-sm md:text-base text-gray-300 font-mono tracking-tighter"
                style={{ wordSpacing: '-0.16em' }}
              >
                Dev Experience
              </p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-sky-300">10+</p>
              <p className="text-sm md:text-base text-gray-300 font-mono">Technologies</p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT IMAGE + FLOATING TECH ICONS */}
        <motion.div variants={item} className="hidden md:flex flex-col items-center lg:items-end transform lg:translate-x-[400px]">
          <div className="relative">
            {/* Profile Image */}
            <img
              src={heroImage}
              alt="Chathumi Hewamaramage"
              className="relative w-48 h-48 md:w-[420px] md:h-[420px] object-cover rounded-full"
            />
          </div>

          {/* Floating Tech Icons below the image */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-[420px]">
            {heroTechIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.12, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: tech.floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full border cursor-default group"
                  style={{
                    borderColor: `${tech.color}30`,
                    background: `${tech.color}10`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <tech.icon
                    className="text-base group-hover:scale-125 transition-transform duration-300"
                    style={{ color: tech.color }}
                  />
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

