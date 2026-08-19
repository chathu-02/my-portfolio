import React from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt2 } from 'react-icons/hi'; 
import { useActiveSection } from '../utils/useActiveSection';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ onMenuClick, onHireClick }) => {
  const activeSection = useActiveSection();

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

        <nav className="hidden md:flex items-center gap-1 px-2 py-1 rounded-md" style={{ backgroundColor: 'var(--bg)' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive ? '#93c5fd' : '#d1d5db',
                }}
              >
                {link.label}

                {/* Animated underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-5 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #3b82f6, #22d3ee)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}

          <button
            onClick={onHireClick}
            className="ml-4 text-xs font-mono font-semibold text-cyan-300 hover:text-white px-3.5 py-1.5 rounded-full border border-cyan-400/30 hover:border-cyan-400/80 bg-cyan-400/10 hover:bg-cyan-400/20 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            Hire Me
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Header;
