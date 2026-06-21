'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ways = [
  {
    num: '01',
    label: 'Aprende',
    title: 'Accede al conocimiento',
    desc: 'Participa en nuestros programas educativos, conferencias magistrales, talleres especializados y recursos formativos abiertos al público.',
  },
  {
    num: '02',
    label: 'Conecta',
    title: 'Únete a la red',
    desc: 'Forma parte de una comunidad de líderes, académicos y profesionistas comprometidos con la educación y el desarrollo social en LATAM.',
  },
  {
    num: '03',
    label: 'Impulsa',
    title: 'Apoya la misión',
    desc: 'Contribuye como aliado estratégico, patrocinador o colaborador institucional para ampliar el alcance e impacto de la fundación.',
  },
];

export default function Participar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#F8F4EE', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#C4922A', marginBottom: '14px' }}>
            Cómo sumarse
          </p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 700, color: '#1B2A4A', lineHeight: 1.2, maxWidth: '480px' }}>
            Tres formas de sumarse a la misión
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0" style={{ border: '1px solid rgba(27,42,74,0.12)' }}>
          {ways.map((w, i) => (
            <motion.div
              key={w.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{
                padding: '44px 36px',
                borderRight: i < 2 ? '1px solid rgba(27,42,74,0.12)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Ghost number */}
              <span style={{
                position: 'absolute', top: '-8px', right: '12px',
                fontFamily: 'var(--font-playfair)', fontSize: '100px', fontWeight: 800,
                color: 'rgba(27,42,74,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
              }}>
                {w.num}
              </span>

              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C4922A', marginBottom: '12px' }}>
                {w.num}&nbsp;&nbsp;{w.label}
              </p>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 600, color: '#1B2A4A', lineHeight: 1.3, marginBottom: '16px' }}>
                {w.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(44,44,44,0.65)' }}>
                {w.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
