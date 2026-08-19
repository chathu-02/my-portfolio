import React from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useActiveSection } from '../utils/useActiveSection';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onHireClick }) {
  const [open, setOpen] = React.useState(false)
  const activeSection = useActiveSection();

  return (
    <>
      {/* Mobile hamburger - visible only on small screens */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black/30 backdrop-blur rounded-full text-white"
      >
        <HiMenuAlt2 size={22} />
      </button>

      {/* Sidebar - mobile only. Uses translate-x-full -> translate-x-0 for slide-in from right */}
      <div className={`fixed inset-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`}>
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-[#07122b] border-l border-gray-800 p-6 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between mb-6">
            <a href="#home" className="text-2xl font-extrabold tracking-wide text-white">CHATHUMI</a>
            <button onClick={() => setOpen(false)} className="p-1 rounded text-white hover:bg-white/5">
              <IoClose size={20} />
            </button>
          </div>

          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color: isActive ? '#93c5fd' : '#e5e7eb',
                      backgroundColor: isActive ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                    }}
                  >
                    {/* Left accent bar for active item */}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-nav-indicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full"
                        style={{
                          background: 'linear-gradient(180deg, #3b82f6, #22d3ee)',
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button 
            onClick={() => {
              setOpen(false);
              if (onHireClick) onHireClick();
            }}
            className="mt-6 w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-xl cursor-pointer shadow-lg shadow-blue-500/25 transition-all"
          >
            Hire Me / Let's Talk
          </button>
        </aside>
      </div>
    </>
  )
}