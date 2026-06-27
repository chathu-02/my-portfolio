import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contacts = [
  {
    icon: <FaEnvelope size={18} />,
    label: "Email Me",
    sub: "chathuhewamaramage@gmail.com",
    href: "mailto:chathuhewamaramage@gmail.com",
    mono: "email",
    external: false,
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    sub: "chathumi-hewamaramage",
    href: "https://www.linkedin.com/in/chathumi-hewamaramage-a65719267/",
    mono: "linkedin",
    external: true,
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    sub: "github.com/chathu-02",
    href: "https://github.com/chathu-02",
    mono: "github",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-[#030712] text-white py-24 px-6 overflow-hidden">

      {/* Subtle glow — matches other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-cyan-500/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-blue-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Section Label — matches About/Projects */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
         
          <h2 className="text-2xl md:text-3xl font-bold text-white">Get In Touch</h2>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent ml-4" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 text-sm font-mono mb-14"
        >
         Open to opportunities & collaborations
        </motion.p>

       
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
          className="flex flex-col gap-3"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-5 px-5 py-4 rounded-xl border border-white/5 hover:border-cyan-400/20 bg-white/2 hover:bg-white/4 transition-all duration-300"
            >
              

              {/* Icon */}
              <span className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                {contact.icon}
              </span>

              {/* Text */}
              <div className="flex-1">
                <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors duration-300">
                  {contact.label}
                </span>
                <span className="text-gray-600 text-xs ml-3 font-mono group-hover:text-gray-400 transition-colors duration-300">
                  {contact.sub}
                </span>
              </div>

              {/* Arrow — subtle */}
              <span className="text-white/10 group-hover:text-cyan-400 text-sm transition-all duration-300 group-hover:translate-x-1 inline-block">
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mt-16 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

       

      </div>
    </section>
  );
}