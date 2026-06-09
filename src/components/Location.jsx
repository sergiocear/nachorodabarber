import { MapPin, Clock } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
      <div>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: 32 }}>DÓNDE<br />ESTAMOS</h2>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24, alignItems: 'flex-start' }}>
          <MapPin color="var(--accent)" size={20} style={{ marginTop: 3, flexShrink: 0 }} />
          <div>
            <p style={{ fontWeight: 500, marginBottom: 4 }}>Dirección</p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>C/ Covadonga, 10<br />33530 Infiesto, Asturias</p>
            <a href="tel:+34985711894" style={{ color: 'var(--accent)', fontSize: '0.88rem', fontWeight: 500, marginTop: 8, display: 'inline-block', transition: 'opacity 0.2s' }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}>
            985 711 894
          </a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <Clock color="var(--accent)" size={20} style={{ marginTop: 3, flexShrink: 0 }} />
          <div>
            <p style={{ fontWeight: 500, marginBottom: 8 }}>Horario</p>
            {[
              ['Lunes – Jue', '9:30–13:30 / 15:30–19:30'],
              ['Viernes',     '9:30–19:30'],
              ['Sábado',      'Cerrado'],
              ['Domingo',     'Cerrado'],
            ].map(([day, hours]) => (
              <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: 32, marginBottom: 6 }}>
                <span style={{ color: 'var(--text-muted)' }}>{day}</span>
                <span style={{ color: hours === 'Cerrado' ? 'var(--text-muted)' : 'var(--white)' }}>{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderRadius: 8, overflow: 'hidden', height: 320, background: 'var(--gray-mid)' }}>
        <iframe
          title="Ubicación Nacho Roda Barber"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.4050181537036!2d-5.36620982507435!3d43.347637972141975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd363fc5413da1f7%3A0xf7f08ec6e2a10061!2sC.%20Covadonga%2C%2010%2C%2033530%20Infiesto%2C%20Asturias!5e0!3m2!1ses!2ses!4v1780739457424!5m2!1ses!2ses"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}