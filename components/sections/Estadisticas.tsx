'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const activities = [
  {
    value: 45,
    color: '#A83E23',
    title: 'Educación ejecutiva',
    desc: 'Cátedra en 21+ universidades e instituciones de México y América Latina — EGADE, ITAM, Anáhuac, Ibero, UNAM y más.',
  },
  {
    value: 35,
    color: '#211A14',
    title: 'Consultoría estratégica',
    desc: 'Acompañamiento estratégico a empresas de todos los tamaños — desde HSBC, Ford y Coppel hasta empresas familiares en crecimiento.',
  },
  {
    value: 20,
    color: '#5C7A5A',
    title: 'Consejería empresarial',
    desc: 'Participación en consejos de administración y advisory boards, aportando visión estratégica centrada en el cliente.',
  },
];

export default function Estadisticas() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#F1E9DA', padding: '80px 0', borderTop: '1px solid rgba(33,26,20,0.12)' }}>
      <div className="px-6 md:px-10" style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '50px' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 700,
            color: '#211A14',
            lineHeight: 1.15,
            maxWidth: '560px',
          }}>
            30 años, <span style={{ color: '#A83E23' }}>tres dimensiones</span> de impacto
          </h2>
        </motion.div>

        {/* Activity rows — editorial typographic layout */}
        <div>
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.13 }}
              className="grid grid-cols-1 md:grid-cols-[88px_1fr] gap-2 md:gap-10 items-start py-9"
              style={{
                borderTop: '1px solid rgba(33,26,20,0.1)',
                borderBottom: i === activities.length - 1 ? '1px solid rgba(33,26,20,0.1)' : 'none',
              }}
            >
              {/* Percentage — large typographic anchor */}
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(38px, 4vw, 54px)',
                fontWeight: 800,
                color: a.color,
                lineHeight: 1,
                paddingTop: '2px',
              }}>
                {a.value}%
              </p>

              {/* Content */}
              <div>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#211A14',
                  marginBottom: '12px',
                  letterSpacing: '0.01em',
                }}>
                  {a.title}
                </p>

                {/* Thin progress bar */}
                <div style={{ height: '2px', background: 'rgba(33,26,20,0.08)', marginBottom: '14px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${a.value}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.35 + i * 0.15, ease: 'easeOut' }}
                    style={{ height: '100%', background: a.color }}
                  />
                </div>

                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(33,26,20,0.65)',
                  lineHeight: 1.75,
                }}>
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
