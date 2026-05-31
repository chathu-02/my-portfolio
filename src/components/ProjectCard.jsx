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
      className="card cursor-pointer p-4 bg-transparent hover:bg-white/2 rounded-lg h-full flex flex-col"
      onClick={() => (images.length ? handleOpen(0) : null)}
    >
      {images && images.length > 0 && (
        <div className="card__thumb mb-4">
          <img src={src(images[0])} alt={`${title}-thumb`} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded" />
        </div>
      )}

      <div className="card__body flex-1">
        {category ? <p className="card__meta text-sm text-gray-400 mb-1">{category}</p> : null}
        <h3 className="card__title text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="card__desc text-sm text-gray-300 mb-3 line-clamp-3">{description}</p>

        {tech.length > 0 ? (
          <ul className="tags flex flex-wrap gap-2 mb-3" aria-label="Technologies">
            {tech.map((t) => (
              <li key={t} className="tag text-xs px-2 py-1 bg-white/5 rounded">
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {github || live ? (
        <div className="card__links mt-3 flex gap-3" aria-label="Project links">
          {live ? (
            <a
              className="card__link text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded"
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
              className="card__link text-sm border border-white/10 hover:bg-white/5 text-white py-2 px-3 rounded"
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
