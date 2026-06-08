import { motion } from 'framer-motion'
import { useState } from 'react'

const photos = Array(6).fill('/images/barber.jpg')

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + photos.length) % photos.length)
  const next = () => setCurrent(i => (i + 1) % photos.length)

  return (
    <section id="gallery">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <p style={{ color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 10 }}>Nuestro trabajo</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-display)' }}>GALERÍA</h2>
        </div>
        <a href="https://www.instagram.com/nachorodabarber/" target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', transition: 'color 0.3s' }}
          onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
          Ver más en Instagram →
        </a>
      </motion.div>

      {/* Carrusel */}
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6 }}
        onTouchStart={e => e.currentTarget._touchX = e.touches[0].clientX}
        onTouchEnd={e => {
          const diff = e.currentTarget._touchX - e.changedTouches[0].clientX
          if (diff > 50) next()
          if (diff < -50) prev()
        }}>

        {/* Fotos */}
        <div style={{ display: 'flex', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)', transform: `translateX(-${current * 33.333}%)` }}>
          {photos.map((src, i) => (
            <a key={i} href="https://www.instagram.com/nachorodabarber/" target="_blank" rel="noopener noreferrer"
              style={{ minWidth: '33.333%', height: 280, flexShrink: 0, padding: '0 6px', display: 'block' }}>
              <img src={src} alt={`Trabajo ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 4 }} />
            </a>
          ))}
        </div>

        {/* Botón anterior */}
        <button onClick={prev} style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(10,10,10,0.7)', border: '1px solid rgba(255,255,255,0.15)',
          color: 'var(--white)', width: 48, height: 48, borderRadius: '50%',
          fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)', transition: 'all 0.3s'
        }}
          onMouseOver={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
          onMouseOut={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}>
          ‹
        </button>

        {/* Botón siguiente */}
        <button onClick={next} style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(10,10,10,0.7)', border: '1px solid rgba(255,255,255,0.15)',
          color: 'var(--white)', width: 48, height: 48, borderRadius: '50%',
          fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)', transition: 'all 0.3s'
        }}
          onMouseOver={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
          onMouseOut={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}>
          ›
        </button>

        {/* Puntos indicadores */}
        <div style={{
          position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 8
        }}>
          {photos.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? 24 : 8, height: 6,
              borderRadius: 4, border: 'none', cursor: 'pointer',
              background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.3s', padding: 0
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}