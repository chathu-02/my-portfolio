import React from 'react';

const Navbar = () => {
  return (
    <nav
      translate="no"
      className="notranslate fixed left-0 top-0 bottom-0 z-50 w-64 border-r p-6"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="flex flex-col h-full">
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wide text-white mb-6"
          aria-label="Go to home"
        >
          CHATHUMI
        </a>

        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="#home"
              className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-200 hover:text-blue-200 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="mailto:chathuhewamaramage@gmail.com?subject=Hire%20Inquiry&body=Hi%20Chathumi%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AThanks!"
          className="mt-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;