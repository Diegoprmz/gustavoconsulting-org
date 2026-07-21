'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaskLine from '@/components/ui/MaskLine';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Fundador() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    const trigger = { trigger: scope.current, start: 'top 78%' };

    gsap.timeline({ scrollTrigger: trigger, defaults: { ease: 'expo.out' } })
      .fromTo('.fundador-name .reveal-line', { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.09 })
      .fromTo('.fundador-role', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.45');

    gsap.utils.toArray<HTMLElement>('.fundador-para').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.12,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
      const rule = el.querySelector('.para-rule');
      if (rule) {
        gsap.fromTo(
          rule,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.7, ease: 'power2.out', delay: i * 0.12 + 0.1, scrollTrigger: { trigger: el, start: 'top 85%' } }
        );
      }
    });

    // Left column drifts slower than the right — subtle depth between the two grid tracks.
    // Desktop only: a scrub tween recalculates on every scroll pixel, which is real
    // continuous work best avoided on mobile where scroll now runs fully native.
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      gsap.to('.fundador-name-col', {
        y: -36,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    });
  }, { scope });

  return (
    <section ref={scope} id="trayectoria" style={{ background: '#F1E9DA', padding: '100px 0 90px', borderTop: '1px solid rgba(33,26,20,0.12)' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-start">

          {/* Left — name as typographic statement */}
          <div className="fundador-name-col md:-ml-8">
            <h2 className="fundador-name" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(64px, 8vw, 116px)',
              fontWeight: 700,
              lineHeight: 0.88,
              color: '#211A14',
              letterSpacing: '-0.03em',
              marginBottom: '40px',
            }}>
              <MaskLine>Gustavo</MaskLine>
              <MaskLine>Martínez</MaskLine>
              <MaskLine>Pellón</MaskLine>
            </h2>

            <p className="fundador-role" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#211A14',
              opacity: 0,
            }}>
              Catedrático · Consultor · Consejero
            </p>
          </div>

          {/* Right — bio paragraphs */}
          <div style={{ paddingTop: '8px' }}>
            <div className="fundador-para" style={{ marginBottom: '36px', position: 'relative', paddingLeft: '20px', opacity: 0 }}>
              <span className="para-rule" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'rgba(168,62,35,0.45)', transformOrigin: 'top', transform: 'scaleY(0)' }} />
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(33,26,20,0.72)',
              }}>
                Durante más de tres décadas he tenido el privilegio de acompañar a empresas, ejecutivos y estudiantes en sus procesos de transformación estratégica. He impartido cátedra en más de 21 universidades en México y América Latina, y he asesorado a organizaciones de todos los tamaños — desde HSBC y Ford hasta empresas familiares en crecimiento.
              </p>
            </div>

            <div className="fundador-para" style={{ position: 'relative', paddingLeft: '20px', opacity: 0 }}>
              <span className="para-rule" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'rgba(168,62,35,0.45)', transformOrigin: 'top', transform: 'scaleY(0)' }} />
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(33,26,20,0.72)',
              }}>
                Esta fundación nace de una convicción profunda: el conocimiento tiene su mayor valor cuando se pone al servicio de la sociedad, no solo de las corporaciones. Fundación Gustavo Consulting es el vehículo para llevar educación de calidad, mentoría genuina y liderazgo con impacto social a quienes más lo necesitan.
              </p>
            </div>

            <div className="fundador-para" style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(33,26,20,0.12)', opacity: 0 }}>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(33,26,20,0.4)',
                marginBottom: '6px',
              }}>
                Autor
              </p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px',
                fontWeight: 400,
                color: '#211A14',
                lineHeight: 1.4,
              }}>
                Customer Centricity — La estrategia que pone al cliente en el centro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
