'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LatamMap = dynamic(() => import('@/components/map/LatamMap'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', aspectRatio: '4/3', background: 'rgba(241,233,218,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'rgba(241,233,218,0.25)', letterSpacing: '0.1em' }}>Cargando…</span>
    </div>
  ),
});

const barData = [
  { country: 'México',    n: 12 },
  { country: 'Perú',      n: 5  },
  { country: 'Guatemala', n: 2  },
  { country: 'Colombia',  n: 1  },
  { country: 'Argentina', n: 1  },
  { country: 'Chile',     n: 1  },
  { country: 'EE.UU.',    n: 1  },
];

const stats = [
  { n: '8+',  label: 'Países' },
  { n: '21+', label: 'Instituciones' },
  { n: '50+', label: 'Ciudades' },
  { n: '30+', label: 'Años' },
];

export default function AlcanceGeografico() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#211A14', padding: '80px 0 64px' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1280px', margin: '0 auto' }} ref={ref}>

        {/* Header — left aligned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            fontWeight: 500,
            color: '#F1E9DA',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
          }}>
            México y América Latina
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            fontWeight: 300,
            color: 'rgba(241,233,218,0.4)',
            marginTop: '16px',
            maxWidth: '480px',
            lineHeight: 1.75,
          }}>
            Más de tres décadas de presencia activa en universidades, empresas y organizaciones a lo largo de toda la región.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            borderTop: '1px solid rgba(241,233,218,0.07)',
            borderBottom: '1px solid rgba(241,233,218,0.07)',
            marginBottom: '56px',
          }}
        >
          {stats.map(({ n, label }, i) => (
            <div
              key={label}
              style={{
                flex: 1,
                padding: '28px 0',
                textAlign: 'left',
                borderRight: i < stats.length - 1 ? '1px solid rgba(241,233,218,0.07)' : 'none',
                paddingLeft: i === 0 ? '0' : '32px',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 500,
                color: i === 0 ? '#A83E23' : '#F1E9DA',
                lineHeight: 1,
              }}>
                {n}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px',
                fontWeight: 500,
                color: 'rgba(241,233,218,0.3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '8px',
              }}>
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Map + Country list */}
        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* Map — 3/5 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-3"
            style={{ border: '1px solid rgba(241,233,218,0.06)', overflow: 'hidden' }}
          >
            <LatamMap />
          </motion.div>

          {/* Typographic country list — 2/5 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="md:col-span-2"
          >
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(241,233,218,0.25)',
              marginBottom: '24px',
            }}>
              Instituciones por país
            </p>

            {barData.map(({ country, n }, i) => (
              <div
                key={country}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(241,233,218,0.05)',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  fontWeight: i === 0 ? 500 : 300,
                  color: i === 0 ? '#F1E9DA' : 'rgba(241,233,218,0.4)',
                }}>
                  {country}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: `${(n / 12) * 72}px`,
                    height: '1px',
                    background: i === 0 ? '#A83E23' : 'rgba(241,233,218,0.12)',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: i === 0 ? '#A83E23' : 'rgba(241,233,218,0.2)',
                    minWidth: '20px',
                    textAlign: 'right',
                  }}>
                    {n}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
