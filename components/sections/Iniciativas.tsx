'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaskLine from '@/components/ui/MaskLine';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const items = [
  {
    num: '01',
    title: 'Formación y educación',
    desc: 'Programas, conferencias, talleres y recursos educativos diseñados para elevar el nivel del liderazgo en México y LATAM.',
  },
  {
    num: '02',
    title: 'Mentoría y talento',
    desc: 'Apoyo personalizado a estudiantes, jóvenes profesionistas y futuros líderes que buscan crecer con propósito.',
  },
  {
    num: '03',
    title: 'Liderazgo con impacto',
    desc: 'Promoción de líderes comprometidos con sus comunidades, capaces de generar cambio real y sostenible.',
  },
  {
    num: '04',
    title: 'Conocimiento común',
    desc: 'Publicaciones, investigaciones e iniciativas de valor social que democratizan el acceso al conocimiento estratégico.',
  },
];

export default function Iniciativas() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.iniciativas-title .reveal-line',
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.09,
        scrollTrigger: { trigger: scope.current, start: 'top 75%' },
      }
    );

    gsap.utils.toArray<HTMLElement>('.iniciativa-row').forEach((row) => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 88%' } });
      tl.fromTo(row.querySelector('.row-rule'), { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power3.out' })
        .fromTo(row.querySelector('.row-num'), { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.6 }, '-=0.5')
        .fromTo(row.querySelector('.row-body'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
    });
  }, { scope });

  return (
    <section ref={scope} id="iniciativas" style={{ background: '#211A14', padding: '100px 0' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header — offset right, breaks the left-aligned rhythm of the section around it */}
        <div style={{ marginBottom: '64px', marginLeft: 'auto', maxWidth: '640px', textAlign: 'right' }}>
          <h2 className="iniciativas-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 5vw, 76px)',
            fontWeight: 600,
            lineHeight: 1.02,
            color: '#F1E9DA',
            letterSpacing: '-0.02em',
          }}>
            <MaskLine>Cuatro frentes</MaskLine>
            <MaskLine>de trabajo</MaskLine>
          </h2>
        </div>

        {/* Numbered editorial rows — huge mono numerals, alternating indent */}
        {items.map((item, i) => (
          <div
            key={item.num}
            className={`iniciativa-row group grid grid-cols-1 md:grid-cols-[0.9fr_1.4fr] gap-3 md:gap-12 py-7 md:py-11 ${i % 2 !== 0 ? 'md:pl-[8%]' : ''}`}
            style={{
              position: 'relative',
              borderBottom: i === items.length - 1 ? '1px solid rgba(241,233,218,0.08)' : 'none',
              transition: 'padding-left 0.4s cubic-bezier(0.65,0,0.35,1)',
              cursor: 'default',
            }}
            onMouseEnter={e => { if (window.innerWidth >= 768) e.currentTarget.style.paddingLeft = i % 2 === 0 ? '16px' : `calc(8% + 16px)`; }}
            onMouseLeave={e => { e.currentTarget.style.paddingLeft = ''; }}
          >
            <span
              className="row-rule"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'rgba(241,233,218,0.08)',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
              }}
            />

            <span className="row-num" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'rgba(241,233,218,0.14)',
              lineHeight: 1,
            }}>
              {item.num}
            </span>

            <div className="row-body">
              <h3
                className="row-title"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(22px, 2.6vw, 34px)',
                  fontWeight: 600,
                  color: '#F1E9DA',
                  marginBottom: '12px',
                  lineHeight: 1.15,
                  transition: 'color 0.4s',
                }}
              >
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: 1.82,
                color: 'rgba(241,233,218,0.45)',
                maxWidth: '480px',
              }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .iniciativa-row:hover .row-num { color: rgba(168,62,35,0.55) !important; }
        .iniciativa-row:hover .row-title { color: #A83E23 !important; }
      `}</style>
    </section>
  );
}
