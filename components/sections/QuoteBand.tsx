'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaskLine from '@/components/ui/MaskLine';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function QuoteBand() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.quoteband-text .reveal-line',
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: scope.current, start: 'top 70%' },
      }
    );
  }, { scope });

  return (
    <section ref={scope} style={{ background: '#211A14', padding: '90px 0' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 className="quoteband-text" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: 500,
          lineHeight: 1.25,
          color: '#F1E9DA',
          letterSpacing: '-0.015em',
        }}>
          <MaskLine>El conocimiento tiene su mayor valor</MaskLine>
          <MaskLine>cuando se pone al servicio de la</MaskLine>
          <MaskLine>sociedad, no solo de las corporaciones.</MaskLine>
        </h2>
      </div>
    </section>
  );
}
