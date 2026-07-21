import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos de Uso — Fundación Gustavo Consulting',
  description: 'Términos y condiciones de uso del sitio web de Fundación Gustavo Consulting.',
};

export default function Terminos() {
  return (
    <main style={{ background: '#F5F5F5', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px' }}>

        <Link href="/" style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#6A8F7B',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '48px',
        }}>
          ← Regresar al inicio
        </Link>

        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#6A8F7B', marginBottom: '16px' }}>
          Términos y Condiciones
        </p>

        <h1 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, color: '#243A4D', lineHeight: 1.05, marginBottom: '16px' }}>
          Términos de Uso
        </h1>

        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 400, color: 'rgba(51,51,51,0.5)', marginBottom: '56px' }}>
          Última actualización: julio de 2025
        </p>

        <div style={{ borderTop: '1px solid rgba(36,58,77,0.1)', paddingTop: '40px' }}>
          {sections.map((s) => (
            <div key={s.title} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '22px', fontWeight: 600, color: '#243A4D', marginBottom: '14px', lineHeight: 1.2 }}>
                {s.title}
              </h2>
              {s.content.map((p, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(51,51,51,0.8)', marginBottom: i < s.content.length - 1 ? '14px' : '0' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(36,58,77,0.1)', marginTop: '48px', paddingTop: '32px' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300, color: 'rgba(51,51,51,0.5)', lineHeight: 1.7 }}>
            Para cualquier duda, escríbanos a{' '}
            <a href="mailto:contacto@gustavo.consulting" style={{ color: '#6A8F7B', textDecoration: 'none', fontWeight: 500 }}>
              contacto@gustavo.consulting
            </a>
            . Consulte también nuestro{' '}
            <Link href="/privacidad" style={{ color: '#6A8F7B', textDecoration: 'none', fontWeight: 500 }}>
              Aviso de Privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

const sections = [
  {
    title: 'I. Aceptación de los términos',
    content: [
      'Al acceder y utilizar el sitio web de Fundación Gustavo Consulting (en adelante "el Sitio"), usted acepta quedar vinculado por los presentes Términos de Uso. Si no está de acuerdo con alguna de las disposiciones aquí establecidas, le pedimos que se abstenga de utilizar el Sitio.',
    ],
  },
  {
    title: 'II. Descripción del servicio',
    content: [
      'El Sitio es operado por Fundación Gustavo Consulting con domicilio en Ciudad de México, México. Su propósito es difundir información sobre las actividades, programas e iniciativas de la Fundación en materia de educación, liderazgo e impacto social.',
      'La Fundación se reserva el derecho de modificar, suspender o discontinuar, de manera temporal o permanente, el Sitio o cualquiera de sus secciones con o sin previo aviso.',
    ],
  },
  {
    title: 'III. Propiedad intelectual',
    content: [
      'Todos los contenidos del Sitio —incluyendo, sin limitación, textos, imágenes, logotipos, íconos, gráficos, videos y código fuente— son propiedad de la Fundación o de sus licenciantes y están protegidos por las leyes mexicanas e internacionales de propiedad intelectual.',
      'Queda prohibida la reproducción, distribución, modificación o uso comercial de cualquier contenido sin el consentimiento previo y por escrito de la Fundación.',
    ],
  },
  {
    title: 'IV. Uso permitido',
    content: [
      'Usted puede acceder al Sitio para uso personal y no comercial. Se permite compartir enlaces al Sitio y citar fragmentos de contenido con la debida atribución a Fundación Gustavo Consulting.',
      'Queda prohibido: (a) usar el Sitio para fines ilegales; (b) intentar obtener acceso no autorizado a sistemas o datos; (c) publicar contenido difamatorio, obsceno o que viole derechos de terceros; (d) utilizar sistemas automatizados (bots, scrapers) sin autorización expresa.',
    ],
  },
  {
    title: 'V. Suscripción y comunicaciones',
    content: [
      'Al suscribirse a nuestro boletín informativo, usted otorga su consentimiento para recibir comunicaciones por correo electrónico relacionadas con las actividades de la Fundación.',
      'Puede cancelar su suscripción en cualquier momento mediante el enlace incluido en cada correo o escribiendo a contacto@gustavo.consulting con el asunto "Cancelar suscripción".',
    ],
  },
  {
    title: 'VI. Limitación de responsabilidad',
    content: [
      'El Sitio y sus contenidos se proporcionan "tal cual" y "según disponibilidad". La Fundación no garantiza que el Sitio esté libre de errores, interrupciones o virus.',
      'En ningún caso la Fundación será responsable por daños directos, indirectos, incidentales, especiales o consecuentes derivados del uso o imposibilidad de uso del Sitio, incluso si ha sido advertida de la posibilidad de dichos daños.',
    ],
  },
  {
    title: 'VII. Enlaces a terceros',
    content: [
      'El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para conveniencia del usuario. La Fundación no controla ni avala el contenido de dichos sitios y no asume responsabilidad alguna por su contenido o prácticas de privacidad.',
    ],
  },
  {
    title: 'VIII. Legislación aplicable y jurisdicción',
    content: [
      'Estos Términos de Uso se rigen e interpretan de conformidad con las leyes vigentes en los Estados Unidos Mexicanos. Para la resolución de cualquier controversia derivada de los presentes términos, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles en razón de su domicilio presente o futuro.',
    ],
  },
  {
    title: 'IX. Modificaciones',
    content: [
      'La Fundación se reserva el derecho de actualizar estos Términos de Uso en cualquier momento. Los cambios serán efectivos desde su publicación en el Sitio. El uso continuado del Sitio después de cualquier modificación constituye la aceptación de los nuevos términos.',
    ],
  },
];
