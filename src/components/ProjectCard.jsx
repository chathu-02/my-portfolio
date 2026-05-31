import React from 'react'
import ImageModal from './ImageModal'

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
    // If the path references components (e.g. "components/stat/.."), load from /src/<path>.
    // Otherwise assume images live in /src/assets/<name> (covers "Jewellary/...", "personal tasker/...", etc.).
    let path = `/src/assets/${name}`
    if (name.startsWith('components/')) {
      path = `/src/${name}`
    }
    try {
      return new URL(encodeURI(path), import.meta.url).href
    } catch (e) {
      return encodeURI(path)
    }
  }

  const handleOpen = (i = 0) => {
    setStartIndex(i)
    setOpen(true)
  }

  return (
    <article className="card cursor-pointer" onClick={() => (images.length ? handleOpen(0) : null)}>
      {images && images.length > 0 && (
        <div className="card__thumb mb-4">
          <img src={src(images[0])} alt={`${title}-thumb`} className="w-full h-40 object-cover rounded" />
        </div>
      )}

      <div className="card__body">
        {category ? <p className="card__meta">{category}</p> : null}
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>

        {tech.length > 0 ? (
          <ul className="tags" aria-label="Technologies">
            {tech.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {github || live ? (
        <div className="card__links" aria-label="Project links">
          {live ? (
            <a className="card__link" href={live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              Live
            </a>
          ) : null}
          {github ? (
            <a className="card__link" href={github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              GitHub
            </a>
          ) : null}
        </div>
      ) : null}

      {open && <ImageModal images={images} start={startIndex} onClose={() => setOpen(false)} />}
    </article>
  )
}
