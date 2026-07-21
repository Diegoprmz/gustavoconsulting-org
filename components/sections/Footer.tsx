'use client';
import Link from 'next/link';

export default function Footer() {
  const cols = [
    {
      heading: 'Iniciativas',
      items: ['Formación y educación', 'Mentoría y talento', 'Liderazgo social', 'Conocimiento común'],
    },
    {
      heading: 'Fundación',
      items: ['Misión', 'El fundador', 'Trayectoria', 'Publicaciones'],
    },
    {
      heading: 'Contacto',
      items: ['contacto@gustavo.consulting', 'Ciudad de México, México', 'LinkedIn', 'Participa'],
    },
  ];

  return (
    <footer style={{ background: '#211A14' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '80px' }}>
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              fontWeight: 500,
              color: '#F1E9DA',
              lineHeight: 1.3,
              marginBottom: '12px',
            }}>
              Fundación<br />Gustavo Consulting
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(241,233,218,0.45)',
              marginBottom: '28px',
            }}>
              Educación · Liderazgo · Impacto Social
            </p>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(241,233,218,0.55)',
              maxWidth: '200px',
            }}>
              Conocimiento al servicio de la sociedad.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#A83E23',
                marginBottom: '20px',
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: 'rgba(241,233,218,0.65)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F1E9DA')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,233,218,0.65)')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(241,233,218,0.06)', marginTop: '60px' }}>
        <div className="px-6 md:px-20" style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '24px', paddingBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', fontWeight: 300, color: 'rgba(241,233,218,0.25)' }}>
            © 2025 Fundación Gustavo Consulting. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Aviso de privacidad', href: '/privacidad' },
              { label: 'Términos de uso', href: '/terminos' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', fontWeight: 300, color: 'rgba(241,233,218,0.25)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(241,233,218,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,233,218,0.25)')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
