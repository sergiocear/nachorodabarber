import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const move = (e) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 20)
      setMouseY((e.clientY / window.innerHeight - 0.5) * 20)
    }
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('mousemove', move)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section id="hero" ref={ref} style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: 'clamp(80px, 12vw, 120px) clamp(16px, 4vw, 32px) 0', maxWidth: '100%',
      background: 'var(--black)',
      position: 'relative', overflow: 'hidden'
    }}>

      {/* Logo SVG real de fondo con parallax */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)`,
        width: 'clamp(300px, 65vw, 860px)',
        opacity: 0.12,
        pointerEvents: 'none', userSelect: 'none',
        filter: 'invert(1)',
        mixBlendMode: 'screen',
      }}>
        <img src="/images/logo.svg" alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* Círculo de luz */}
      <motion.div
        animate={{ x: mouseX, y: mouseY }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{
          position: 'absolute', width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(230,60,30,0.08) 0%, transparent 70%)',
          borderRadius: '50%', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)', pointerEvents: 'none'
        }} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        style={{ maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ color: 'var(--accent)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: 20 }}>
          Barbería · Infiesto, Asturias
        </motion.p>

        <div style={{ overflow: 'hidden', marginBottom: 8 }}>
          <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 7.5rem)', lineHeight: 0.95 }}>
            NACHO
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 8 }}>
          <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 7.5rem)', lineHeight: 0.95, color: 'var(--accent)' }}>
            RODA
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 32 }}>
          <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 7.5rem)', lineHeight: 0.95 }}>
            BARBER
          </motion.h1>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
          style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: 48, lineHeight: 1.8 }}>
          Cortes con carácter. Estilo propio.<br />Tu cita, cuando quieras.
        </motion.p>

        <motion.a href="https://squareup.com/appointments/REEMPLAZA" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block', background: 'var(--accent)', color: 'var(--white)',
            padding: '16px 48px', fontFamily: 'var(--font-display)', fontSize: '1.3rem',
            letterSpacing: '0.1em', borderRadius: 2,
            boxShadow: '0 8px 40px rgba(230,60,30,0.35)'
          }}>
          RESERVAR CITA
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
      </motion.div>
    </section>
  )
}