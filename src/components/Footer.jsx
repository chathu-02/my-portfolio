export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-gray-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-400">© {year} CHATHUMI. All rights reserved.</p>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#home" className="text-gray-300 hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
