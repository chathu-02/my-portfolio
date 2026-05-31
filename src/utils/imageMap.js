// Build-time map of images to their resolved URLs using Vite's glob import.
// This ensures images referenced by filename (e.g. "Jewellary/j1.png" or "components/stat/stat1.jpg")
// resolve correctly both in dev and after build/deploy.

const images = {
  // assets under src/assets
  ...Object.fromEntries(
    Object.entries(import.meta.glob('/src/assets/**', { eager: true, as: 'url' }))
      .map(([k, v]) => [k, v])
  ),
  // components images under src/components
  ...Object.fromEntries(
    Object.entries(import.meta.glob('/src/components/**', { eager: true, as: 'url' }))
      .map(([k, v]) => [k, v])
  ),
}

export function getImageUrl(name) {
  if (!name) return ''
  // Try src/assets/<name>
  const a = `/src/assets/${name}`
  if (images[a]) return images[a]

  // Try src/<name> (for components/...)
  const b = `/src/${name}`
  if (images[b]) return images[b]

  // Try exact key fallback (some glob keys might differ)
  if (images[name]) return images[name]

  // Last resort: if name already looks like an absolute/public path, return as-is
  if (name.startsWith('/')) return name

  // Not found — return empty string so <img> won't break
  return ''
}

export default getImageUrl
