import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaHome, FaUserAlt, FaLaptopCode, FaTools, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useActiveSection } from '../utils/useActiveSection';

const navLinks = [
  { id: 'home', label: 'Home', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUserAlt },
  { id: 'projects', label: 'Projects', icon: FaLaptopCode },
  { id: 'skills', label: 'Skills', icon: FaTools },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

export default function Navbar({ isOpen, onClose, onHireClick }) {
  const activeSection = useActiveSection();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Slide-in Drawer Sidebar from Right */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute right-0 top-0 h-full w-[290px] bg-[#050b18] border-l border-white/[0.08] shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto"
          >
            {/* Top Glowing Gradient Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 pointer-events-none" />

            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div>
                  <a 
                    href="#home" 
                    onClick={onClose}
                    className="text-xl font-black tracking-[0.2em] uppercase text-white"
                  >
                    CHATHUMI<span className="text-cyan-400">.</span>
                  </a>
                  <p className="text-[11px] font-mono text-gray-400 mt-0.5">
                    Full Stack Developer
                  </p>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close navigation"
                  className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] transition-all cursor-pointer"
                >
                  <IoClose size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={onClose}
                      className={`relative flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-400/10 font-semibold border border-cyan-400/25 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                          : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <Icon className={`text-base ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                      <span>{link.label}</span>

                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Hire Me / Action Button */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    onClose();
                    if (onHireClick) onHireClick();
                  }}
                  className="w-full py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  }}
                >
                  <FaPaperPlane className="text-[11px]" /> Hire Me / Let's Talk
                </button>
              </div>
            </div>

            {/* Drawer Bottom - Socials & Location */}
            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-3">
                Connect With Me
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:chathuhewamaramage@gmail.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-red-400/60 hover:bg-red-500/10 text-gray-400 hover:text-red-400 flex items-center justify-center transition-all"
                >
                  <SiGmail size={15} />
                </a>

                <a
                  href="https://www.linkedin.com/in/chathumi-hewamaramage-a65719267/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-blue-400/60 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 flex items-center justify-center transition-all"
                >
                  <FaLinkedin size={15} />
                </a>

                <a
                  href="https://github.com/chathu-02"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-white/60 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
                >
                  <FaGithub size={15} />
                </a>
              </div>

              <p className="text-[11px] font-mono text-gray-500 mt-4">
                📍 Mawanella, Sri Lanka 🇱🇰
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}