'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { n: '30+',   label: 'Años de trayectoria directiva' },
  { n: '21+',   label: 'Universidades e instituciones en LATAM' },
  { n: 'LATAM', label: 'Alcance regional' },
  { n: '1°',    label: 'Libro publicado: Customer Centricity' },
];

export default function Impacto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#F8F4EE', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center" ref={ref}>

          {/* Left — title */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="gold-rule" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#1B2A4A', lineHeight: 1.2 }}>
              Una vida entera<br />
              construyendo{' '}
              <em style={{ color: '#3D6B50', fontStyle: 'italic', fontWeight: 400 }}>esta fundación</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(44,44,44,0.7)', marginTop: '24px', maxWidth: '380px' }}>
              Tres décadas de presencia en aulas ejecutivas, salas de consejo y organizaciones de toda América Latina.
            </p>
          </motion.div>

          {/* Right — stats 2x2 */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(27,42,74,0.08)' }}>
              {stats.map(({ n, label }, i) => (
                <div
                  key={label}
                  style={{
                    background: '#F8F4EE',
                    padding: '36px 32px',
                  }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#C4922A', lineHeight: 1, marginBottom: '8px' }}
                  >
                    {n}
                  </motion.p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 400, color: 'rgba(44,44,44,0.6)', lineHeight: 1.5 }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
