import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const links = [
  { to: 'gallery', label: 'Galería' },
  { to: 'booking', label: 'Reservas' },
  { to: 'reviews', label: 'Reseñas' },
  { to: 'location', label: 'Ubicación' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: scrolled ? '12px 24px' : '20px 24px',
        background: scrolled || menuOpen ? 'rgba(10,10,10,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(230,60,30,0.2)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <img src="/images/logo.png" alt="Nacho Roda Barber"
          style={{ height: 40, display: 'block', filter: 'drop-shadow(0 0 10px rgba(230,60,30,0.3))' }} />

        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.to} to={l.to} smooth duration={700}
              style={{ cursor: 'none', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', transition: 'color 0.3s' }}
              onMouseOver={e => e.target.style.color = 'var(--white)'}
              onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
              {l.label}
            </Link>
          ))}
          <a href="https://book.squareup.com/appointments/594ndfk5pp0tqz/location/LZ7XDYABNAW6C/services" target="_blank" rel="noopener noreferrer"
            style={{
              background: 'var(--accent)', color: 'var(--black)',
              padding: '8px 20px', fontFamily: 'var(--font-display)',
              fontSize: '0.95rem', letterSpacing: '0.1em', borderRadius: 2,
              transition: 'all 0.3s', boxShadow: '0 0 20px rgba(230,60,30,0.2)'
            }}>
            RESERVAR
          </a>
        </div>

        <button onClick={() => setMenuOpen(o => !o)} className="nav-hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}>
          <span style={{ display: 'block', width: 24, height: 2, background: 'var(--white)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'var(--white)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'var(--white)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      <div style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(10,10,10,0.98)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        {links.map((l, i) => (
          <Link key={l.to} to={l.to} smooth duration={700}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 8vw, 3rem)',
              letterSpacing: '0.1em', color: 'var(--white)', cursor: 'pointer',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `transform 0.4s ease ${i * 0.07}s, opacity 0.4s ease ${i * 0.07}s`,
              opacity: menuOpen ? 1 : 0,
            }}>
            {l.label}
          </Link>
        ))}
        <a href="https://book.squareup.com/appointments/594ndfk5pp0tqz/location/LZ7XDYABNAW6C/services" target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            background: 'var(--accent)', color: 'var(--black)',
            padding: '14px 48px', fontFamily: 'var(--font-display)',
            fontSize: '1.3rem', letterSpacing: '0.1em', borderRadius: 2,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `transform 0.4s ease ${links.length * 0.07}s, opacity 0.4s ease ${links.length * 0.07}s`,
            opacity: menuOpen ? 1 : 0,
          }}>
          RESERVAR CITA
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}