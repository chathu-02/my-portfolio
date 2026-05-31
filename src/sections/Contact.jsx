import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'

export default function Contact() {
  const container = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  return (
    <section id="contact" className="section scroll-mt-24 bg-black text-white py-20 px-6">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="container mx-auto max-w-4xl text-center">
        {/* Title & Lead */}
        <motion.h2 variants={item} className="text-3xl md:text-3xl font-bold mb-4">GET IN TOUCH</motion.h2>
        <motion.p variants={item} className="text-lg text-gray-400 mb-12">Let’s talk.</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Direct Contact details with Icons */}
          <motion.div variants={item} className="space-y-6 text-left">
          </motion.div>

          {/* Buttons with Icons */}
          <motion.div variants={item} className="flex flex-col space-y-4">
            <a 
              className="btn flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition" 
              href="mailto:chathuhewamaramage@gmail.com"
            >
              <motion.span whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                <FaEnvelope />
              </motion.span>
              Email Me
            </a>
            
            <a
              className="btn btn--ghost flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-black py-3 px-6 rounded transition"
              href="https://www.linkedin.com/in/chathumi-hewamaramage-a65719267/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.span whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                <FaLinkedin size={20} />
              </motion.span>
              LinkedIn
            </a>

            <a
              className="btn btn--ghost flex items-center justify-center gap-2 border border-gray-600 text-gray-400 hover:border-white hover:text-white py-3 px-6 rounded transition"
              href="https://github.com/chathu-02"
              target="_blank"
              rel="noreferrer"
            >
              <motion.span whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                <FaGithub size={20} />
              </motion.span>
              GitHub
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}