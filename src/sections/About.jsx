import React from 'react';
import profileImg from '../assets/Gemini_Generated_Image_nvtgqmnvtgqmnvtg.png'; 
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black text-white transition-colors duration-300">
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Side */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={profileImg} 
              alt="Chathumi Hewamaramage" 
              className="relative rounded-2xl w-64 md:w-80 shadow-2xl object-cover border-4 border-white dark:border-gray-800"
            />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a dedicated IT undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), specializing in Full Stack Web Development. I build scalable, user-focused applications using the MERN stack, Next.js, and Spring Boot, with a strong emphasis on writing clean, maintainable code.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I approach development with a Quality Assurance mindset, ensuring applications are reliable and production-ready through structured testing, API validation, and real-world scenario analysis. My experience includes designing RESTful APIs, working with databases such as MongoDB and PostgreSQL, and developing responsive user interfaces. I am also actively exploring areas like Generative AI and cloud-based systems to build more intelligent and scalable solutions.

          </p>

          {/* CV Download Button */}
          <div className="mt-8">
            <a
              href="/CHATHUMI%20HEWAMARAMAGEnew.pdf"
              download
              className="inline-block bg-gray-900 dark:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-blue-700 transition-shadow shadow-sm"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;