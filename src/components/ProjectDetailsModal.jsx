import React from 'react'
import { motion } from 'framer-motion'
import { getImageUrl } from '../utils/imageMap'

export default function ProjectDetailsModal({ project, onClose }) {
  const [index, setIndex] = React.useState(0)
  const isAuraGem = project.id === 4

  const auraGemHighlights = [
    'Secure sign-up and customer authentication',
    'Ready-made product shopping and custom jewelry requests',
    'Reference image upload for personalized designs',
    'Automatic invoice generation after order confirmation',
    'Bank transfer payment flow based on invoice details',
    'Intelligent craftsman assignment and earnings tracking',
  ]

  const auraGemWorkflow = [
    'Customer signs in and selects a product or custom request.',
    'The platform creates an invoice after checkout.',
    'Customer completes payment through bank transfer.',
    'The order is assigned to an available craftsman.',
    'Craftsman completes the work and updates status.',
    'Admin monitors orders, revenue, and exports PDF reports.',
  ]

  React.useEffect(() => {
    if (!project) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, project])

  React.useEffect(() => {
    setIndex(0)
  }, [project])

  if (!project) return null

  const images = project.images || []
  const hasImages = images.length > 0
  const currentImage = hasImages ? getImageUrl(images[index]) : ''

  const goPrev = () => {
    setIndex((current) => (current - 1 + images.length) % images.length)
  }

  const goNext = () => {
    setIndex((current) => (current + 1) % images.length)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-slate-950/85 p-3 backdrop-blur-md sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`relative flex h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07111f] shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:h-auto sm:max-h-[calc(100vh-2rem)] sm:rounded-3xl ${isAuraGem ? 'max-w-6xl flex-col' : 'max-w-7xl flex-col'}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]" />
        <div className={`relative flex-1 min-h-0 overflow-y-auto ${isAuraGem ? 'lg:overflow-y-auto' : 'lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:overflow-hidden'}`}>
          <div className={`relative border-b border-white/10 bg-black/20 ${isAuraGem ? 'lg:border-b border-white/10' : 'lg:border-b-0 lg:border-r'}`}>
            {hasImages ? (
              <div className={`relative flex min-h-64 items-center justify-center bg-[#050b16] p-4 sm:min-h-80 ${isAuraGem ? 'lg:min-h-112 lg:p-6' : 'lg:min-h-full lg:h-full lg:p-5'}`}>
                <img
                  src={currentImage}
                  alt={`${project.title} preview ${index + 1}`}
                  className={`max-h-[34vh] w-full rounded-2xl border border-white/10 object-contain shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:max-h-[42vh] ${isAuraGem ? 'lg:max-h-96' : 'lg:max-h-[56vh]'}`}
                />

                {images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-slate-900"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-slate-900"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                ) : null}

                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-medium tracking-[0.2em] text-cyan-200 backdrop-blur-sm">
                  {index + 1} / {images.length}
                </div>
              </div>
            ) : (
              <div className="flex min-h-64 items-center justify-center p-8 text-center sm:min-h-80 lg:min-h-full lg:h-full">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Project Preview</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">No screenshots available</h3>
                  <p className="mt-2 max-w-md text-sm text-slate-300">
                    This project still has full details, technologies, and links ready for review.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className={`relative flex min-h-0 flex-col gap-4 p-5 sm:p-6 ${isAuraGem ? 'lg:p-6 xl:p-8' : 'lg:overflow-y-auto lg:p-6 xl:p-7'}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                {project.category ? (
                  <p className="text-xs font-mono uppercase tracking-[0.28em] text-cyan-300/90">
                    {project.category}
                  </p>
                ) : null}
                <h2 id="project-details-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl xl:text-4xl">
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              {project.description}
            </p>

            {isAuraGem ? (
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-cyan-200/80 sm:text-xs">
                      Key Features
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                      Aura Gem – Custom Jewelry E-Commerce Platform
                    </h3>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    Client Project
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">Role</p>
                    <p className="mt-1 text-sm font-semibold text-white">Full-Stack Developer</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">Focus</p>
                    <p className="mt-1 text-sm font-semibold text-white">Custom Orders</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">Reports</p>
                    <p className="mt-1 text-sm font-semibold text-white">Revenue PDF Export</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {auraGemHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/10 px-4 py-3"
                    >
                      <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                      <span className="text-sm leading-6 text-slate-300 sm:text-[0.98rem]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {project.tech?.length ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
                  Tech Stack
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <li
                      key={techItem}
                      className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-100 sm:px-3 sm:text-sm"
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {isAuraGem ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 lg:p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                  Working Flow
                </p>
                <ol className="mt-4 grid gap-3">
                  {auraGemWorkflow.map((step, stepIndex) => (
                    <li
                      key={step}
                      className="flex w-full items-start gap-3 rounded-2xl border border-white/5 bg-black/10 px-4 py-4"
                    >
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-200">
                        {stepIndex + 1}
                      </span>
                      <span className="text-sm leading-6 text-slate-300 sm:text-[0.98rem]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">Gallery</p>
                <p className="mt-1.5 text-base font-semibold text-white sm:mt-2 sm:text-lg">{images.length || 0} images</p>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">Browse screenshots without leaving the modal.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">Access</p>
                <p className="mt-1.5 text-base font-semibold text-white sm:mt-2 sm:text-lg">Live and source links</p>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">Open the demo or inspect the code directly.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Live Project
                </a>
              ) : null}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View GitHub
                </a>
              ) : null}
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
              >
                Close
              </button>
            </div>

            {hasImages && images.length > 1 ? (
              <div className="mt-auto pb-1">
                <p className="mb-2 text-[0.68rem] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">Thumbnails</p>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5">
                  {images.slice(0, 8).map((image, imageIndex) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setIndex(imageIndex)}
                      className={`overflow-hidden rounded-xl border transition ${
                        imageIndex === index
                          ? 'border-cyan-300 ring-2 ring-cyan-300/40'
                          : 'border-white/10 opacity-75 hover:opacity-100'
                      }`}
                      aria-label={`Show image ${imageIndex + 1}`}
                    >
                      <img
                        src={getImageUrl(image)}
                        alt={`${project.title} thumbnail ${imageIndex + 1}`}
                        className="h-14 w-full object-cover sm:h-16"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
