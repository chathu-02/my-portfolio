import React from 'react';
import { getImageUrl } from '../utils/imageMap'

export default function ImageModal({ images = [], start = 0, onClose }) {
  const [index, setIndex] = React.useState(start);

  if (!images || images.length === 0) return null;

  const src = (name) => {
    if (!name) return ''
    return getImageUrl(name)
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute top-6 right-6 text-white text-xl px-3 py-1 bg-black/40 rounded"
        aria-label="Close gallery"
      >
        ✕
      </button>

      <div className="max-w-4xl w-full">
        <div className="relative">
          <img
            src={src(images[index])}
            alt={`project-${index}`}
            className="w-full h-auto rounded-lg shadow-lg object-contain max-h-[70vh] mx-auto"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex((i) => (i - 1 + images.length) % images.length)
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex((i) => (i + 1) % images.length)
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className="text-center text-sm text-gray-300 mt-3">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
