'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const chips = [
  'Anáhuac', 'EGADE', 'ITAM', 'Ibero', 'La Salle',
  'UNAM', 'Tec de Monterrey', 'UNITEC', 'UVM', 'UFM',
  'UAB', 'USIL', 'UNMSM', 'UIC', 'EPG',
  'HSBC', 'Ford', 'Coppel', 'ADO', 'Alimas', 'Fandeli',
];

export default function Instituciones() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#1B2A4A', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '28px' }}
        >
          Instituciones y empresas donde ha colaborado
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inst-strip"
        >
          {chips.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
              style={{
                flexShrink: 0,
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '2px',
                padding: '8px 16px',
                whiteSpace: 'nowrap',
                transition: 'border-color 0.2s, color 0.2s',
                cursor: 'default',
              }}
              whileHover={{ borderColor: 'rgba(196,146,42,0.5)', color: '#C4922A' }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
