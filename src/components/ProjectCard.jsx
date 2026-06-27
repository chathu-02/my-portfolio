import React from 'react'
import ImageModal from './ImageModal'
import { getImageUrl } from '../utils/imageMap'

export default function ProjectCard({
  title,
  description,
  tech = [],
  category,
  github,
  live,
  images = [],
}) {
  const [open, setOpen] = React.useState(false)
  const [startIndex, setStartIndex] = React.useState(0)

  const src = (name) => {
    if (!name) return ''
    const url = getImageUrl(name)
    return url
  }

  const handleOpen = (i = 0) => {
    setStartIndex(i)
    setOpen(true)
  }

  return (
    <article
      className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/5"
      onClick={() => (images.length ? handleOpen(0) : null)}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {images && images.length > 0 && (
        <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10">
          <img
            src={src(images[0])}
            alt={`${title}-thumb`}
            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 md:h-52"
          />
        </div>
      )}

      <div className="relative z-10 flex flex-1 flex-col">
        {category ? (
          <p className="mb-2 text-xs font-mono uppercase tracking-[0.18em] text-cyan-300/80">{category}</p>
        ) : null}
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-4 text-sm leading-6 text-gray-300 line-clamp-3">{description}</p>

        {tech.length > 0 ? (
          <ul className="mb-4 flex flex-wrap gap-2" aria-label="Technologies">
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-colors duration-200 group-hover:border-white/20 group-hover:text-white"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {github || live ? (
        <div className="relative z-10 mt-auto flex gap-3 border-t border-white/10 pt-4" aria-label="Project links">
          {live ? (
            <a
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:bg-cyan-400"
              href={live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Live
            </a>
          ) : null}
          {github ? (
            <a
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/5"
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          ) : null}
        </div>
      ) : null}

      {open && <ImageModal images={images} start={startIndex} onClose={() => setOpen(false)} />}
    </article>
  )
}
