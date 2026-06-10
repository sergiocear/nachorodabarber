import { motion } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'

const photos = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const itemWidth = isMobile ? 100 : 33.333
  const maxIndex = isMobile ? photos.length - 1 : photos.length - 3

  const prev = useCallback(() => setCurrent(i => Math.max(0, i - 1)), [])
  const next = useCallback(() => setCurrent(i => Math.min(maxIndex, i + 1)), [maxIndex])

  const touchStartX = useRef(null)

  return (
    <section id="gallery">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <p style={{ color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 10 }}>Nuestro trabajo</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-display)' }}>GALERÍA</h2>
        </div>
      </motion.div>

      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6 }}
        onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          if (touchStartX.current === null) return
          const diff = touchStartX.current - e.changedTouches[0].clientX
          if (diff > 40) next()
          else if (diff < -40) prev()
          touchStartX.current = null
        }}>

        <div style={{
          display: 'flex',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: `translateX(-${current * itemWidth}%)`
        }}>
          {photos.map((src, i) => (
            <a key={i} href="https://www.instagram.com/nachorodabarber/" target="_blank" rel="noopener noreferrer"
              style={{ minWidth: `${itemWidth}%`, height: isMobile ? 480 : 280, flexShrink: 0, padding: '0 6px', display: 'block' }}>
              <img src={src} alt={`Corte de pelo barbería Nacho Roda Barber Infiesto Asturias ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 4 }} />
            </a>
          ))}
        </div>

        <button onClick={prev} disabled={current === 0}
          style={{
            position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(10,10,10,0.7)', border: '1px solid rgba(255,255,255,0.15)',
            color: 'var(--white)', width: 48, height: 48, borderRadius: '50%',
            fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(8px)', transition: 'all 0.3s',
            opacity: current === 0 ? 0.3 : 1
          }}>
          ‹
        </button>

        <button onClick={next} disabled={current === maxIndex}
          style={{
            position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(10,10,10,0.7)', border: '1px solid rgba(255,255,255,0.15)',
            color: 'var(--white)', width: 48, height: 48, borderRadius: '50%',
            fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(8px)', transition: 'all 0.3s',
            opacity: current === maxIndex ? 0.3 : 1
          }}>
          ›
        </button>

        <div style={{
          position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 8
        }}>
          {photos.map((_, i) => (
            <button key={i} onClick={() => setCurrent(Math.min(i, maxIndex))} style={{
              width: i === current ? 24 : 8, height: 6,
              borderRadius: 4, border: 'none', cursor: 'pointer',
              background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.3s', padding: 0
            }} />
          ))}
        </div>
      </div>

      <motion.a href="https://www.instagram.com/nachorodabarber/" target="_blank" rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
          marginTop: 16, padding: '20px 32px', borderRadius: 6,
          background: 'linear-gradient(135deg, #1a0a05 0%, #0f0f0f 50%, #1a0500 100%)',
          border: '1px solid rgba(230,60,30,0.2)',
          textDecoration: 'none', transition: 'all 0.3s',
        }}
        onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent)'}
        onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(230,60,30,0.2)'}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="var(--accent)" stroke="none"/>
        </svg>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.1em', color: 'var(--white)' }}>
          VER MÁS EN INSTAGRAM
        </span>
        <span style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
          @nachorodabarber →
        </span>
      </motion.a>
    </section>
  )
}