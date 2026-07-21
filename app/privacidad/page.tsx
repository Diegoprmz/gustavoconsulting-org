import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad — Fundación Gustavo Consulting',
  description: 'Aviso de privacidad integral conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).',
};

export default function Privacidad() {
  return (
    <main style={{ background: '#F5F5F5', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px' }}>

        {/* Back */}
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
          Aviso de Privacidad
        </p>

        <h1 style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, color: '#243A4D', lineHeight: 1.05, marginBottom: '16px' }}>
          Protección de Datos Personales
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
            Para ejercer sus derechos ARCO o presentar cualquier consulta relacionada con este aviso, escríbanos a{' '}
            <a href="mailto:contacto@gustavo.consulting" style={{ color: '#6A8F7B', textDecoration: 'none', fontWeight: 500 }}>
              contacto@gustavo.consulting
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

const sections = [
  {
    title: 'I. Identidad y domicilio del Responsable',
    content: [
      'Fundación Gustavo Consulting (en adelante "la Fundación" o "el Responsable") con domicilio en Ciudad de México, México, es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.',
      'Puede contactarnos en: contacto@gustavo.consulting',
    ],
  },
  {
    title: 'II. Datos personales que recabamos',
    content: [
      'Para las finalidades descritas en este aviso, recabamos los siguientes datos personales:',
      '• Datos de identificación: nombre completo.',
      '• Datos de contacto: dirección de correo electrónico.',
      '• Datos de uso: páginas visitadas, tiempo de permanencia, idioma del navegador y dirección IP (datos que no permiten identificación directa).',
      'No recabamos datos personales sensibles en el sentido del artículo 3, fracción VI de la LFPDPPP.',
    ],
  },
  {
    title: 'III. Finalidades del tratamiento',
    content: [
      'Sus datos personales son utilizados para las siguientes finalidades primarias (necesarias para cumplir la relación con usted):',
      '• Enviar comunicaciones, boletines informativos y actualizaciones sobre las actividades de la Fundación.',
      '• Dar respuesta a sus consultas, comentarios o solicitudes.',
      '• Gestionar su participación en eventos, programas o iniciativas de la Fundación.',
      'Finalidades secundarias (no necesarias, pero que contribuyen a mejorar nuestros servicios):',
      '• Análisis estadístico de la audiencia para mejorar los contenidos del sitio web.',
      'Si no desea que sus datos sean tratados para las finalidades secundarias, puede manifestarlo escribiendo a contacto@gustavo.consulting.',
    ],
  },
  {
    title: 'IV. Transferencia de datos',
    content: [
      'La Fundación no comparte, vende ni transfiere sus datos personales a terceros sin su consentimiento, salvo en los casos previstos por el artículo 37 de la LFPDPPP: obligaciones legales, protección de intereses vitales, o cuando sea necesario para la ejecución de un contrato.',
      'Podemos compartir información anonimizada y agregada (sin posibilidad de identificación) con aliados estratégicos o proveedores de servicios tecnológicos que actúan como encargados del tratamiento bajo instrucciones estrictas de confidencialidad.',
    ],
  },
  {
    title: 'V. Derechos ARCO',
    content: [
      'Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercerlos, envíe una solicitud a contacto@gustavo.consulting indicando:',
      '• Nombre completo y correo electrónico con el que se registró.',
      '• Descripción clara del derecho que desea ejercer.',
      '• Documentos que acrediten su identidad (copia de identificación oficial).',
      'Atenderemos su solicitud en un plazo máximo de 20 días hábiles contados desde la fecha de recepción.',
    ],
  },
  {
    title: 'VI. Mecanismo para revocar el consentimiento',
    content: [
      'En cualquier momento puede revocar el consentimiento otorgado para el tratamiento de sus datos, siempre que no lo impida una disposición legal. Para ello, envíe un correo a contacto@gustavo.consulting con el asunto "Revocación de consentimiento".',
      'La revocación no tendrá efectos retroactivos y no afectará los tratamientos realizados con anterioridad a su solicitud.',
    ],
  },
  {
    title: 'VII. Uso de cookies y tecnologías de rastreo',
    content: [
      'Este sitio web puede utilizar cookies de sesión y persistentes con el fin de mejorar la experiencia de navegación, medir el desempeño del sitio y personalizar contenidos.',
      'Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una. Sin embargo, algunas funcionalidades del sitio pueden no operar correctamente sin ellas.',
    ],
  },
  {
    title: 'VIII. Cambios al aviso de privacidad',
    content: [
      'La Fundación se reserva el derecho de modificar este aviso en cualquier momento para reflejar cambios legislativos, en nuestras prácticas de privacidad o por otras razones operativas. Cualquier modificación será publicada en esta misma página con la fecha de actualización correspondiente.',
      'Le recomendamos revisar periódicamente este aviso. El uso continuado de nuestros servicios después de cualquier modificación implica la aceptación de los cambios.',
    ],
  },
  {
    title: 'IX. Autoridad competente',
    content: [
      'Si considera que sus derechos no han sido debidamente atendidos, puede acudir al Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) en www.inai.org.mx.',
    ],
  },
];
