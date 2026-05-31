import React from 'react';
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

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

          <ul className="flex flex-col gap-4">
            <li><a href="#home" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-200 hover:text-blue-200">Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-200 hover:text-blue-200">About</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-200 hover:text-blue-200">Projects</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-200 hover:text-blue-200">Skills</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-200 hover:text-blue-200">Contact</a></li>
          </ul>

          <a href="mailto:chathuhewamaramage@gmail.com?subject=Hire%20Inquiry" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">Let's Talk</a>
        </aside>
      </div>
    </>
  )
}