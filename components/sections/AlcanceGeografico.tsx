'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

const LatamMap = dynamic(() => import('@/components/map/LatamMap'), { ssr: false, loading: () => (
  <div style={{ width: '100%', aspectRatio: '4/3', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>Cargando mapa…</span>
  </div>
)});

const barData = [
  { country: 'México',        n: 12 },
  { country: 'Perú',          n: 5  },
  { country: 'Guatemala',     n: 2  },
  { country: 'Colombia',      n: 1  },
  { country: 'Argentina',     n: 1  },
  { country: 'Chile',         n: 1  },
  { country: 'EE.UU.',        n: 1  },
];

const stats = [
  { n: '8+',   label: 'Países' },
  { n: '21+',  label: 'Instituciones' },
  { n: '50+',  label: 'Ciudades' },
  { n: '30+',  label: 'Años' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: 'rgba(15,28,54,0.96)', border: '1px solid rgba(196,146,42,0.3)', padding: '8px 14px' }}>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: '#C4922A', fontWeight: 600 }}>
        {payload[0].value} institución{payload[0].value > 1 ? 'es' : ''}
      </p>
    </div>
  );
}

export default function AlcanceGeografico() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#0F1C36', padding: '100px 0 80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C4922A', marginBottom: '14px' }}>
            Presencia regional
          </p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
            México y América Latina
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.45)', marginTop: '16px', maxWidth: '520px', margin: '16px auto 0', lineHeight: 1.7 }}>
            Más de tres décadas de presencia activa en universidades, empresas y organizaciones a lo largo de toda la región.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '0', marginBottom: '56px', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          {stats.map(({ n, label }, i) => (
            <div
              key={label}
              style={{
                flex: 1,
                padding: '24px 0',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                maxWidth: '200px',
              }}
            >
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, color: '#C4922A', lineHeight: 1 }}>{n}</p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '6px' }}>{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Map + Chart */}
        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* Map — 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-3"
            style={{ border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}
          >
            <div style={{ padding: '8px 8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '20px', alignItems: 'center', paddingBottom: '8px', paddingLeft: '16px' }}>
              {[
                { color: '#C4922A', label: 'México (sede principal)' },
                { color: '#2A5080', label: 'Presencia activa' },
                { color: '#243B5E', label: 'Colaboraciones' },
              ].map(({ color, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', background: color, flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>{label}</span>
                </div>
              ))}
            </div>
            <LatamMap />
          </motion.div>

          {/* Bar chart — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="md:col-span-2"
          >
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '24px' }}>
              Instituciones por país
            </p>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={barData}
                layout="vertical"
                margin={{ left: 0, right: 32, top: 0, bottom: 0 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="country"
                  width={80}
                  tick={{ fontFamily: 'var(--font-inter)', fontSize: 11, fill: 'rgba(255,255,255,0.55)', fontWeight: 400 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="n" radius={[0, 2, 2, 0]} barSize={14}>
                  {barData.map((entry, i) => (
                    <Cell key={i} fill={i === 0 ? '#C4922A' : 'rgba(255,255,255,0.12)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Country list */}
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {barData.map(({ country, n }, i) => (
                <div key={country} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: i === 0 ? '#C4922A' : 'rgba(255,255,255,0.5)', fontWeight: i === 0 ? 600 : 400 }}>
                    {country}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: `${(n / 12) * 60}px`, height: '2px', background: i === 0 ? '#C4922A' : 'rgba(255,255,255,0.15)', borderRadius: '2px', transition: 'width 0.8s ease' }} />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: i === 0 ? '#C4922A' : 'rgba(255,255,255,0.3)', minWidth: '14px', textAlign: 'right' }}>{n}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
