'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cards = [
  {
    num: '01',
    title: 'Formación y educación',
    desc: 'Programas, conferencias, talleres y recursos educativos diseñados para elevar el nivel del liderazgo en México y LATAM.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L1 9l11 6 11-6-11-6zM1 9v6M5 11v6c0 1.5 3 3 7 3s7-1.5 7-3v-6"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Mentoría y talento',
    desc: 'Apoyo personalizado a estudiantes, jóvenes profesionistas y futuros líderes que buscan crecer con propósito.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/>
        <path d="M16 11a4 4 0 010 5.2"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Liderazgo con impacto',
    desc: 'Promoción de líderes comprometidos con sus comunidades, capaces de generar cambio real y sostenible.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l4-4 4 4 4-6 4 2"/><circle cx="19" cy="7" r="2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Conocimiento común',
    desc: 'Publicaciones, investigaciones e iniciativas de valor social que democratizan el acceso al conocimiento estratégico.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
    ),
  },
];

function Card({ card, delay }: { card: typeof cards[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className="initiative-card"
      style={{ padding: '40px 36px 36px', position: 'relative', overflow: 'hidden', cursor: 'default' }}
    >
      {/* Ghost number */}
      <span style={{
        position: 'absolute', top: '-12px', right: '16px',
        fontFamily: 'var(--font-playfair)', fontSize: '120px', fontWeight: 800,
        color: 'rgba(255,255,255,0.035)', lineHeight: 1, userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {card.num}
      </span>

      {/* Icon box */}
      <div style={{
        width: '48px', height: '48px',
        border: '1px solid rgba(196,146,42,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '28px',
      }}>
        {card.icon}
      </div>

      <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 600, color: '#fff', lineHeight: 1.25, marginBottom: '14px' }}>
        {card.title}
      </h3>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', marginBottom: '24px' }}>
        {card.desc}
      </p>
      <a href="#contacto" style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 500, color: '#C4922A', textDecoration: 'none', letterSpacing: '0.06em', transition: 'letter-spacing 0.2s' }}>
        Conocer más →
      </a>
    </motion.div>
  );
}

export default function Iniciativas() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="iniciativas" style={{ background: '#1B2A4A', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#C4922A', marginBottom: '16px' }}>
            Cuatro pilares
          </p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, maxWidth: '600px', margin: '0 auto' }}>
            Para transformar la sociedad
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          {cards.map((card, i) => (
            <div key={card.num} style={{ borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
              <Card card={card} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
