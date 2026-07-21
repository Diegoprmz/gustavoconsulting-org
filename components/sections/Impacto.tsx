'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaskLine from '@/components/ui/MaskLine';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { n: '30+',   label: 'Años de trayectoria directiva', offset: 0 },
  { n: '21+',   label: 'Universidades e instituciones en LATAM', offset: 28 },
  { n: 'LATAM', label: 'Alcance regional', offset: -8 },
  { n: '1°',    label: 'Libro publicado: Customer Centricity', offset: 20 },
];

export default function Impacto() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.impacto-title .reveal-line',
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: scope.current, start: 'top 75%' } }
    );
    gsap.fromTo('.impacto-sub', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, scrollTrigger: { trigger: scope.current, start: 'top 75%' } });

    gsap.utils.toArray<HTMLElement>('.impacto-stat').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.1, scrollTrigger: { trigger: el, start: 'top 92%' } }
      );
    });
  }, { scope });

  return (
    <section ref={scope} style={{ background: '#F1E9DA', padding: '90px 0', borderTop: '1px solid rgba(33,26,20,0.12)' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ maxWidth: '520px', marginBottom: '60px' }}>
          <h2 className="impacto-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(34px, 4.5vw, 60px)',
            fontWeight: 600,
            color: '#211A14',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}>
            <MaskLine>Una vida entera construyendo</MaskLine>
            <MaskLine>esta fundación</MaskLine>
          </h2>
          <p className="impacto-sub" style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 300,
            lineHeight: 1.82,
            color: 'rgba(33,26,20,0.55)',
            maxWidth: '400px',
            opacity: 0,
          }}>
            Tres décadas de presencia en aulas ejecutivas, salas de consejo y organizaciones de toda América Latina.
          </p>
        </div>

        {/* Skyline stat row on desktop (staggered baselines) — plain stacked list on mobile,
            since the translateY offsets only make sense in a single horizontal row. */}
        <div className="grid grid-cols-1 md:flex md:flex-nowrap gap-5 md:gap-1">
          {stats.map(({ n, label, offset }, i) => (
            <div
              key={label}
              className={`impacto-stat ${i > 0 ? 'impacto-stat-divided' : ''}`}
              style={{
                flex: '1 1 220px',
                paddingRight: '16px',
                ['--stat-offset' as string]: `${offset}px`,
              } as React.CSSProperties}
            >
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(30px, 3.6vw, 46px)',
                fontWeight: 600,
                color: i === 0 ? '#A83E23' : '#211A14',
                lineHeight: 1,
                marginBottom: '14px',
                letterSpacing: '-0.02em',
              }}>
                {n}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgba(33,26,20,0.5)',
                lineHeight: 1.5,
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .impacto-stat { transform: translateY(var(--stat-offset, 0px)); }
          .impacto-stat-divided { border-left: 1px solid rgba(33,26,20,0.12); padding-left: 28px; }
        }
      `}</style>
    </section>
  );
}
