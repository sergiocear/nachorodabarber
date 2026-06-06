import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const initialReviews = [
  { name: 'Carlos M.', text: 'El mejor corte que me han hecho en años. Nacho sabe exactamente lo que hace.', stars: 5 },
  { name: 'Alejandro P.', text: 'Ambiente brutal, música buena y corte perfecto. Repetiré seguro.', stars: 5 },
  { name: 'Rodrigo F.', text: 'Muy profesional, te asesora bien y el resultado siempre es top.', stars: 5 },
]

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews)
  const [form, setForm] = useState({ name: '', text: '', stars: 5 })
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!form.name.trim() || !form.text.trim()) return
    setReviews(prev => [{ ...form }, ...prev])
    setForm({ name: '', text: '', stars: 5 })
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setOpen(false) }, 1800)
  }

  return (
    <section id="reviews">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p style={{ color: 'var(--accent)', letterSpacing: '0.3em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: 8 }}>Clientes</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: 4 }}>RESEÑAS</h2>
          <div style={{ width: 60, height: 2, background: 'var(--accent)' }} />
        </motion.div>
        <motion.button onClick={() => setOpen(o => !o)}
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          style={{
            background: 'transparent', border: '2px solid var(--accent)', color: 'var(--accent)',
            padding: '10px 28px', fontFamily: 'var(--font-display)', fontSize: '1rem',
            letterSpacing: '0.1em', borderRadius: 2, cursor: 'none'
          }}>
          {open ? 'CANCELAR' : '+ DEJAR RESEÑA'}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', marginBottom: 48 }}>
            <div style={{ background: 'var(--gray)', padding: 32, borderRadius: 6, border: '1px solid rgba(230,60,30,0.15)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.05em' }}>TU OPINIÓN</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {[1,2,3,4,5].map(n => (
                  <motion.span key={n} onClick={() => setForm(f => ({ ...f, stars: n }))}
                    whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                    style={{ fontSize: '1.6rem', cursor: 'none', color: n <= form.stars ? 'var(--accent2)' : 'var(--gray-mid)' }}>★</motion.span>
                ))}
              </div>
              <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Tu nombre"
                style={{ background: 'var(--gray-mid)', border: '1px solid transparent', borderRadius: 4, padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'transparent'} />
              <textarea value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                placeholder="Cuéntanos tu experiencia..." rows={3}
                style={{ background: 'var(--gray-mid)', border: '1px solid transparent', borderRadius: 4, padding: '12px 16px', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none', resize: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'transparent'} />
              <motion.button onClick={handleSubmit} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{
                  background: submitted ? '#2a7a2a' : 'var(--accent)', border: 'none', color: 'var(--white)',
                  padding: '12px 36px', fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                  letterSpacing: '0.1em', borderRadius: 2, cursor: 'none', alignSelf: 'flex-start',
                  transition: 'background 0.3s'
                }}>
                {submitted ? '✓ PUBLICADO' : 'PUBLICAR'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        <AnimatePresence>
          {reviews.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
              style={{ background: 'var(--gray)', padding: 28, borderRadius: 6, borderLeft: '3px solid var(--accent)', cursor: 'default' }}>
              <p style={{ color: 'var(--accent2)', marginBottom: 12, fontSize: '1.1rem', letterSpacing: 2 }}>{'★'.repeat(r.stars)}</p>
              <p style={{ color: 'var(--white)', lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic', fontSize: '0.95rem' }}>"{r.text}"</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.08em' }}>— {r.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}