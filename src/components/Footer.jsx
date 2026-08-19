import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp, FaMapMarkerAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#02050e] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Top glowing gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">
        {/* Main compact row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          
          {/* Brand & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="inline-block group mb-1">
              <h2 className="text-xl md:text-2xl font-black tracking-[0.2em] uppercase text-white">
                CHATHUMI<span className="text-cyan-400 group-hover:text-blue-400 transition-colors">.</span>
              </h2>
            </a>
            <p className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
              Full Stack Developer | QA Automation
            </p>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:chathuhewamaramage@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-red-400/60 hover:bg-red-500/10 text-gray-400 hover:text-red-400 flex items-center justify-center transition-all duration-200"
            >
              <SiGmail size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/chathumi-hewamaramage-a65719267/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-blue-400/60 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 flex items-center justify-center transition-all duration-200"
            >
              <FaLinkedin size={15} />
            </a>

            <a
              href="https://github.com/chathu-02"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-white/60 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
            >
              <FaGithub size={15} />
            </a>
          </div>
        </div>

        {/* Bottom compact copyright & location bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <span>© {year} <span className="text-gray-300 font-semibold">Chathumi Hewamaramage</span>. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-400">
              <FaMapMarkerAlt className="text-emerald-400 text-[11px]" /> Mawanella, Sri Lanka 🇱🇰
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.1] hover:border-cyan-400/40 hover:bg-white/[0.08] text-gray-400 hover:text-cyan-300 transition-all duration-200 cursor-pointer"
            >
              <span>Top</span>
              <FaArrowUp className="text-[9px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
