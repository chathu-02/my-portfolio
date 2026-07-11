import React from 'react';
import profileImg from '../assets/Gemini_Generated_Image_nvtgqmnvtgqmnvtg.png'; 
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#030712] text-white overflow-hidden">

      {/* Subtle static glow — no particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Label — Brittany Chiang style */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent ml-4" />
        </motion.div>

        {/* 3 Column Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >

          {/* Column 1 - IMAGE */}
          <motion.div variants={fadeLeft} className="flex justify-center md:justify-start">
            <div className="relative group w-fit">
              {/* Hover border effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />
              {/* Offset box — Brittany Chiang signature style */}
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <img
                src={profileImg}
                alt="Chathumi Hewamaramage"
                className="relative rounded-2xl w-64 shadow-2xl object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Column 2 - ABOUT ME */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group bg-[#111] border border-white/5 hover:border-cyan-400/30 rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
          >
            {/* Top accent line */}
            <div className="w-8 h-0.5 bg-cyan-400 mb-5 group-hover:w-16 transition-all duration-300" />

            <h3 className="text-base font-semibold text-cyan-400 mb-4 font-mono">
              // who am i
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
              I am a dedicated IT undergraduate at the Sri Lanka Institute of Information Technology (SLIIT),
              specializing in <span className="text-white font-semibold">Full Stack Web Development</span>. I build scalable, user-focused applications using
              the <span className="text-white font-semibold">MERN stack</span>, <span className="text-white font-semibold">Next.js</span>, and <span className="text-white font-semibold">Spring Boot</span>, with a strong emphasis on writing clean, maintainable code.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
              I approach development with a <span className="text-white font-semibold">Quality Assurance</span> mindset, ensuring applications are reliable
              and production-ready through structured testing, API validation, and real-world scenario analysis.
              I am also actively exploring <span className="text-white font-semibold">Generative AI</span> and <span className="text-white font-semibold">cloud-based systems</span>.
            </p>

            <ul className="flex flex-col gap-3 text-sm">
              {[
                'Based in Sri Lanka 🇱🇰',
                'Open to internships & collaborations',
                'Passionate about clean code & good UX'
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="text-cyan-400 text-xs">▹</span>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - EDUCATION */}
          <motion.div
            variants={fadeRight}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group bg-[#111] border border-white/5 hover:border-blue-400/30 rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <div>
              {/* Top accent line */}
              <div className="w-8 h-0.5 bg-blue-400 mb-5 group-hover:w-16 transition-all duration-300" />

              <h3 className="text-base font-semibold text-blue-400 mb-6 font-mono">
                   Education
              </h3>

              <div className="flex flex-col gap-8">

                {/* SLIIT */}
                <div className="relative pl-5 border-l border-cyan-400/40 group-hover:border-cyan-400/80 transition-colors duration-300">
                  <span className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <div className="flex items-start justify-between flex-wrap gap-1 mb-1">
                    <span className="text-white font-medium text-sm leading-snug">
                      BSc (Hons) in Information Technology
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mb-1.5">SLIIT — Sri Lanka</p>
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full">
                    Undergraduate
                  </span>
                </div>

                {/* A/L */}
                <div className="relative pl-5 border-l border-blue-400/40 group-hover:border-blue-400/80 transition-colors duration-300">
                  <span className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <div className="flex items-start justify-between flex-wrap gap-1 mb-1">
                    <span className="text-white font-medium text-sm leading-snug">
                      G.C.E Advanced Level
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mb-1.5">Technology Stream</p>
                  <span className="text-xs text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-0.5 rounded-full">
                    2022
                  </span>
                </div>

              </div>
            </div>

            {/* Download Button */}
            <motion.a
              href="/CHATHUMI%20HEWAMARAMAGEnew.pdf"
              download
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-white group/btn transition-colors duration-300"
            >
              <span className="w-8 h-px bg-cyan-400 group-hover/btn:w-12 transition-all duration-300" />
              Download Resume
              <span className="text-xs">↗</span>
            </motion.a>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;