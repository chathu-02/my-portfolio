import React from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt2 } from 'react-icons/hi'; 

const Header = ({ onMenuClick }) => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 py-3 px-6"
      style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors md:hidden"
            aria-label="Open Menu"
          >
            <HiMenuAlt2 size={26} />
          </button>

          <div>
            <motion.div 
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start"
            >
              <h1 className="text-lg md:text-xl font-black tracking-[0.2em] uppercase text-white">
                CHATHUMI<span className="text-blue-500">.</span>
              </h1>
            </motion.div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 px-2 py-1 rounded-md" style={{ backgroundColor: 'var(--bg)' }}>
          <a href="#home" className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors">Projects</a>
          <a href="#skills" className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors">Skills</a>
          <a href="#contact" className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors">Contact</a>

          <a
            href="mailto:chathuhewamaramage@gmail.com?subject=Hire%20Inquiry"
            className="ml-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Hire Me
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
