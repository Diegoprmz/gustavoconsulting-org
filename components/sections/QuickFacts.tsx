'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const facts = [
  { label: 'Trayectoria', value: '30+ años' },
  { label: 'Instituciones', value: '21+' },
  { label: 'Países', value: '8+' },
  { label: 'Alcance', value: 'LATAM' },
];

export default function QuickFacts() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.fact-item',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, delay: 0.1, ease: 'power2.out' }
    );
  }, { scope });

  return (
    <div ref={scope} style={{ background: '#211A14', borderBottom: '1px solid rgba(241,233,218,0.1)' }}>
      <div className="px-6 md:px-20 grid grid-cols-2 md:flex gap-y-5" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {facts.map(({ label, value }) => (
          <div
            key={label}
            className="fact-item quickfacts-item"
            style={{
              flex: '1 1 160px',
              padding: '20px 24px 20px 0',
              display: 'flex',
              alignItems: 'baseline',
              gap: '10px',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '18px',
              fontWeight: 600,
              color: '#A83E23',
              letterSpacing: '-0.01em',
            }}>
              {value}
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(241,233,218,0.5)',
            }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .quickfacts-item { border-left: 1px solid rgba(241,233,218,0.12); padding-left: 24px; }
        .quickfacts-item:first-child { border-left: none; padding-left: 0; }
        @media (max-width: 767px) {
          .quickfacts-item:nth-child(odd) { border-left: none; padding-left: 0; }
          .quickfacts-item:nth-child(n+3) { border-top: 1px solid rgba(241,233,218,0.12); padding-top: 16px; }
        }
      `}</style>
    </div>
  );
}
