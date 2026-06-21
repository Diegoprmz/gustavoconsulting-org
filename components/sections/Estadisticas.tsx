'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const activities = [
  {
    name: 'Educación ejecutiva',
    value: 45,
    color: '#1B2A4A',
    desc: 'Cátedra en 21+ universidades e instituciones de México y América Latina — EGADE, ITAM, Anáhuac, Ibero, UNAM y más.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L1 9l11 6 11-6-11-6z"/><path d="M5 11v6c0 1.5 3 3 7 3s7-1.5 7-3v-6"/>
      </svg>
    ),
  },
  {
    name: 'Consultoría estratégica',
    value: 35,
    color: '#C4922A',
    desc: 'Acompañamiento estratégico a empresas de todos los tamaños — desde HSBC, Ford y Coppel hasta empresas familiares en crecimiento.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    name: 'Consejería empresarial',
    value: 20,
    color: '#3D6B50',
    desc: 'Participación en consejos de administración y advisory boards, aportando visión estratégica centrada en el cliente.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20v-1a8 8 0 0116 0v1"/><path d="M17 12a4 4 0 010 4.5"/>
      </svg>
    ),
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomLabel({ cx, cy, midAngle, outerRadius, value }: any) {
  const RADIAN = Math.PI / 180;
  const r = outerRadius + 24;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central"
      style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', fill: 'rgba(44,44,44,0.7)', fontWeight: 500 }}>
      {value}%
    </text>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0];
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.1)', padding: '10px 16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 600, color: d.payload.color }}>{d.name}</p>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'rgba(44,44,44,0.6)', marginTop: '2px' }}>{d.value}% del tiempo</p>
    </div>
  );
}

export default function Estadisticas() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#F8F4EE', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C4922A', marginBottom: '14px' }}>
            Distribución de actividades
          </p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 700, color: '#1B2A4A', lineHeight: 1.15, maxWidth: '560px' }}>
            30 años,{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>tres dimensiones</em>{' '}
            de impacto
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Donut chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            <ResponsiveContainer width="100%" height={340}>
              <PieChart>
                <Pie
                  data={activities}
                  cx="50%"
                  cy="50%"
                  innerRadius={90}
                  outerRadius={130}
                  paddingAngle={3}
                  dataKey="value"
                  labelLine={false}
                  label={CustomLabel}
                  animationBegin={inView ? 0 : 99999}
                  animationDuration={900}
                >
                  {activities.map((a, i) => (
                    <Cell key={i} fill={a.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* Center label */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none' }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 800, color: '#1B2A4A', lineHeight: 1 }}>30+</p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(27,42,74,0.5)', marginTop: '4px' }}>años</p>
            </div>
          </motion.div>

          {/* Activity cards */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
          >
            {activities.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                style={{
                  padding: '28px 0',
                  borderBottom: i < activities.length - 1 ? '1px solid rgba(27,42,74,0.1)' : 'none',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                {/* Color swatch + icon */}
                <div style={{
                  width: '44px', height: '44px', background: a.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: a.name === 'Educación ejecutiva' ? '#fff' : '#fff',
                }}>
                  {a.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 600, color: '#1B2A4A' }}>
                      {a.name}
                    </p>
                    <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 800, color: a.color, lineHeight: 1 }}>
                      {a.value}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div style={{ height: '2px', background: 'rgba(27,42,74,0.08)', borderRadius: '2px', marginBottom: '10px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${a.value}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                      style={{ height: '100%', background: a.color, borderRadius: '2px' }}
                    />
                  </div>

                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300, color: 'rgba(44,44,44,0.65)', lineHeight: 1.7 }}>
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
