import { motion } from 'framer-motion'
import { useState } from 'react'

const photos = Array(6).fill('/images/barber.jpg')

export default function Gallery() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="gallery" style={{ position: 'relative' }}>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p style={{ color: 'var(--accent)', letterSpacing: '0.3em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: 8 }}>Nuestro trabajo</p>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: 4 }}>GALERÍA</h2>
        <div style={{ width: 60, height: 2, background: 'var(--accent)', marginBottom: 48 }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
        {photos.map((src, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
            onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            style={{
              overflow: 'hidden', borderRadius: 4, background: 'var(--gray-mid)',
              position: 'relative',
              gridColumn: 'span 1',
              gridRow: 'span 1',
              height: 260,
            }}>
            <motion.img src={src} alt={`Trabajo ${i + 1}`}
              animate={{ scale: hovered === i ? 1.06 : 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <motion.div animate={{ opacity: hovered === i ? 1 : 0 }} transition={{ duration: 0.3 }}
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(230,60,30,0.4), transparent)',
                pointerEvents: 'none'
              }} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}