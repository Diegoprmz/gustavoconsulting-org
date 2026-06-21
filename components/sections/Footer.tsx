'use client';

export default function Footer() {
  const cols = [
    {
      heading: null,
      brand: true,
      items: [],
    },
    {
      heading: 'Iniciativas',
      brand: false,
      items: ['Formación y educación', 'Mentoría y talento', 'Liderazgo social', 'Conocimiento común'],
    },
    {
      heading: 'Fundación',
      brand: false,
      items: ['Misión', 'El fundador', 'Trayectoria', 'Publicaciones'],
    },
    {
      heading: 'Contacto',
      brand: false,
      items: ['contacto@gustavo.consulting', 'Ciudad de México, México', 'LinkedIn', 'Participa'],
    },
  ];

  return (
    <footer style={{ background: '#0F1C36' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px 0' }}>
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand column */}
          <div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '16px', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: '8px' }}>
              <span style={{ color: '#C4922A' }}>Fundación</span><br />
              Gustavo Consulting
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
              Educación · Liderazgo · Impacto Social
            </p>
            <div style={{ width: '32px', height: '1px', background: '#C4922A', marginBottom: '20px' }} />
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.4)', maxWidth: '200px' }}>
              Conocimiento al servicio de la sociedad.
            </p>
          </div>

          {/* Other columns */}
          {cols.slice(1).map((col) => (
            <div key={col.heading}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '13px',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#C4922A')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
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
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
            © 2025 Fundación Gustavo Consulting. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Aviso de privacidad', 'Términos de uso'].map((l) => (
              <a key={l} href="#" style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
