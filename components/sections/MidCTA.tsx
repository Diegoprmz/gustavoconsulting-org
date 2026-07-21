'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagnetic } from '@/components/hooks/useMagnetic';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MidCTA() {
  const scope = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);

  useGSAP(() => {
    gsap.fromTo(
      '.midcta-inner',
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: scope.current, start: 'top 88%' } }
    );
  }, { scope });

  return (
    <div ref={scope} style={{ background: '#F1E9DA', borderTop: '1px solid rgba(33,26,20,0.12)', borderBottom: '1px solid rgba(33,26,20,0.12)' }}>
      <div
        className="midcta-inner px-6 md:px-20"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '32px',
          paddingBottom: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(18px, 2vw, 24px)',
          color: '#211A14',
          letterSpacing: '-0.01em',
        }}>
          ¿Quieres llevar educación de calidad a tu organización?
        </p>
        <a
          ref={ctaRef}
          href="#contacto"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#A83E23',
            textDecoration: 'none',
            borderBottom: '1px solid #A83E23',
            paddingBottom: '3px',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          Agenda una conversación →
        </a>
      </div>
    </div>
  );
}
