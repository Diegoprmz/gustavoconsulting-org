'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const credentials = [
  'Anáhuac', 'EGADE', 'ITAM', 'Tec de Monterrey',
  'UNAM', 'Ibero', 'La Salle', 'UNITEC', 'UVM',
  'UAB', 'UFM', 'USIL', '+15 instituciones',
];

function AnimSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Fundador() {
  return (
    <section
      id="trayectoria"
      style={{ background: '#F8F4EE', padding: '120px 0' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — name + credentials */}
          <AnimSection>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#C4922A', marginBottom: '28px' }}>
              El fundador
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(52px, 6vw, 88px)', fontWeight: 700, lineHeight: 0.9, color: '#1B2A4A', letterSpacing: '-0.03em', marginBottom: '40px' }}>
              Gustavo<br />
              <span style={{ fontWeight: 400, fontStyle: 'italic' }}>Martínez</span><br />
              Pellón
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {credentials.map((c) => (
                <span
                  key={c}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    color: '#1B2A4A',
                    border: '1px solid rgba(27,42,74,0.25)',
                    borderRadius: '2px',
                    padding: '5px 12px',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </AnimSection>

          {/* Right — statement paragraphs */}
          <AnimSection delay={0.15}>
            <div style={{ paddingTop: '8px' }}>
              <div className="quote-border" style={{ marginBottom: '36px' }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, color: '#2C2C2C' }}>
                  Durante más de tres décadas he tenido el privilegio de acompañar a empresas, ejecutivos y estudiantes en sus procesos de transformación estratégica. He impartido cátedra en más de 21 universidades en México y América Latina, y he asesorado a organizaciones de todos los tamaños — desde HSBC y Ford hasta empresas familiares en crecimiento.
                </p>
              </div>

              <div className="quote-border">
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, color: '#2C2C2C' }}>
                  Esta fundación nace de una convicción profunda: el conocimiento tiene su mayor valor cuando se pone al servicio de la sociedad, no solo de las corporaciones. Fundación Gustavo Consulting es el vehículo para llevar educación de calidad, mentoría genuina y liderazgo con impacto social a quienes más lo necesitan.
                </p>
              </div>

              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(27,42,74,0.1)' }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(27,42,74,0.4)', marginBottom: '4px' }}>
                  Autor
                </p>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontStyle: 'italic', color: '#1B2A4A' }}>
                  Customer Centricity — La estrategia que pone al cliente en el centro
                </p>
              </div>
            </div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}
