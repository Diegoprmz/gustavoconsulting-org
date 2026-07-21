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
    <section style={{ background: '#F1E9DA', padding: '120px 0' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 5vw, 72px)',
            fontWeight: 500,
            color: '#211A14',
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            marginBottom: '72px',
            maxWidth: '560px',
          }}
        >
          Tres formas de sumarse a la misión
        </motion.h2>

        {/* Editorial horizontal rows — no card boxes */}
        {ways.map((w, i) => (
          <motion.div
            key={w.num}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="participar-row grid grid-cols-1 md:grid-cols-[120px_1fr_28px] gap-3 md:gap-10 items-start md:items-center"
            style={{
              padding: '36px 0',
              borderTop: '1px solid rgba(33,26,20,0.14)',
              borderBottom: i === ways.length - 1 ? '1px solid rgba(33,26,20,0.14)' : 'none',
              cursor: 'default',
              transition: 'padding-left 0.35s cubic-bezier(0.65,0,0.35,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.paddingLeft = '16px'; }}
            onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px'; }}
          >
            <div className="flex md:block gap-3">
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#A83E23',
                marginBottom: '6px',
              }}>
                {w.num}
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(33,26,20,0.62)',
              }}>
                {w.label}
              </p>
            </div>

            <div>
              <h3 className="participar-title" style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(22px, 2.4vw, 32px)',
                fontWeight: 600,
                color: '#211A14',
                marginBottom: '10px',
                lineHeight: 1.15,
                transition: 'color 0.3s',
              }}>
                {w.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'rgba(33,26,20,0.75)',
                maxWidth: '560px',
              }}>
                {w.desc}
              </p>
            </div>

            <span className="participar-arrow hidden md:inline-block" style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '20px',
              color: 'rgba(33,26,20,0.4)',
              justifySelf: 'end',
              transition: 'transform 0.3s, color 0.3s',
            }}>
              →
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        .participar-row:hover .participar-title { color: #A83E23; }
        .participar-row:hover .participar-arrow { color: #A83E23; transform: translateX(4px); }
      `}</style>
    </section>
  );
}
