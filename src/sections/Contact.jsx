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
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-[#040816] via-[#050b1d] to-[#030712] text-white py-24 px-6"
    >

      {/* Subtle glow — matches other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-x-1/3 top-1/3 h-40 bg-fuchsia-500/5 rounded-full blur-[100px]" />
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
         
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-cyan-300/30 via-blue-300/20 to-transparent ml-4" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-base md:text-lg font-medium mb-14 max-w-xl"
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
          className="flex flex-col gap-4"
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
              className="group flex items-center gap-5 px-6 py-5 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-cyan-950/10 hover:border-cyan-300/35 hover:bg-white/10 transition-all duration-300"
            >
              

              {/* Icon */}
              <span className="text-cyan-300 group-hover:text-white transition-colors duration-300 text-lg">
                {contact.icon}
              </span>

              {/* Text */}
              <div className="flex-1">
                <span className="block text-gray-100 group-hover:text-white text-base md:text-lg font-semibold transition-colors duration-300">
                  {contact.label}
                </span>
                <span className="text-gray-400 text-sm md:text-base ml-0 font-mono group-hover:text-cyan-200 transition-colors duration-300">
                  {contact.sub}
                </span>
              </div>

              {/* Arrow — subtle */}
              <span className="text-white/20 group-hover:text-cyan-300 text-base transition-all duration-300 group-hover:translate-x-1 inline-block">
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