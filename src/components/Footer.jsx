export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--gray-mid)', padding: '40px 32px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 16
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--accent)' }}>
        NACHO RODA BARBER
      </span>

      <a href="https://www.instagram.com/nachorodabarber/" target="_blank" rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', transition: 'color 0.2s' }}
        onMouseOver={e => e.currentTarget.style.color = 'var(--white)'}
        onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
        {/* Icono Instagram SVG — sin depender de lucide-react */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
        @nachorodabarber
      </a>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Nacho Roda Barber
      </p>
    </footer>
  )
}