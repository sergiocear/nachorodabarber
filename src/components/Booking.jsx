import { motion } from 'framer-motion'

export default function Booking() {
  return (
    <section id="booking" style={{ padding: '0 24px', maxWidth: '100%' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{
          position: 'relative', overflow: 'hidden', borderRadius: 8,
          padding: '80px 48px', textAlign: 'center',
          background: 'linear-gradient(135deg, #1a0a05 0%, #0f0f0f 50%, #1a0500 100%)',
          border: '1px solid rgba(230,60,30,0.2)',
        }}>

        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, rgba(230,60,30,0.08) 0%, transparent 70%)'
        }} />
        <div style={{ position: 'absolute', top: -1, left: '10%', right: '10%', height: '2px', background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />
        <div style={{ position: 'absolute', bottom: -1, left: '10%', right: '10%', height: '2px', background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: 'var(--accent)', letterSpacing: '0.4em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: 16 }}>Sin esperas</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: 16 }}>RESERVA TU CITA</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 48, maxWidth: 460, margin: '0 auto 48px', lineHeight: 1.8 }}>
            Elige el día y la hora que mejor te venga.<br />Rápido, fácil y sin llamadas.
          </p>
          <motion.a href="https://book.squareup.com/appointments/594ndfk5pp0tqz/location/LZ7XDYABNAW6C/services" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 12px 50px rgba(230,60,30,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block', border: '2px solid var(--accent)', color: 'var(--white)',
              background: 'var(--accent)', padding: '16px 56px',
              fontFamily: 'var(--font-display)', fontSize: '1.4rem',
              letterSpacing: '0.1em', borderRadius: 2,
              boxShadow: '0 8px 30px rgba(230,60,30,0.3)'
            }}>
            VER DISPONIBILIDAD
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}