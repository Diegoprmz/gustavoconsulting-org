'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMagnetic } from '@/components/hooks/useMagnetic';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.fromTo('.masthead-bar', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0)
      .fromTo(photoRef.current, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.1 }, 0.15)
      .fromTo('.hero-headline .reveal-line', { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.1 }, 0.25)
      .fromTo('.hero-index', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.5')
      .fromTo('.hero-cta', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-clip', { opacity: 0, y: 16, rotate: -4 }, { opacity: 1, y: 0, rotate: -2, duration: 0.7 }, '-=0.3')
      .fromTo('.hero-badge', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
  }, { scope });

  return (
    <section ref={scope} id="misión" style={{ position: 'relative', background: '#F1E9DA', paddingTop: '28px' }}>

      {/* Masthead strip */}
      <div className="masthead-bar px-6 md:px-20" style={{
        borderTop: '1px solid rgba(33,26,20,0.18)',
        borderBottom: '1px solid rgba(33,26,20,0.18)',
        paddingTop: '11px',
        paddingBottom: '11px',
        marginBottom: '40px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(33,26,20,0.72)' }}>
          <span>Fundación Gustavo Consulting</span>
          <span>México — LATAM</span>
          <span>Educación · Liderazgo · Impacto</span>
        </div>
      </div>

      <div className="grid md:grid-cols-12 px-6 md:px-20" style={{ gap: '32px', alignItems: 'stretch', paddingBottom: '64px' }}>

        {/* Left — mixed-scale headline + CTA (7 of 12 cols) — stretched + space-between so the
            CTA row anchors to the photo's bottom edge instead of leaving a blank gap below it */}
        <div className="md:col-span-7" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span aria-hidden className="hero-index" style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            fontSize: 'clamp(80px, 11vw, 176px)',
            lineHeight: 1,
            color: 'rgba(33,26,20,0.06)',
            position: 'absolute',
            top: '-40px',
            left: '-10px',
            zIndex: 0,
            userSelect: 'none',
          }}>
            01
          </span>

          <h1 className="hero-headline" style={{ position: 'relative', zIndex: 1, marginBottom: '44px' }}>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.12em' }}>
              <span className="reveal-line" style={{
                display: 'block', opacity: 0,
                fontFamily: 'var(--font-serif)', fontWeight: 500,
                fontSize: 'clamp(32px, 3.6vw, 52px)', color: '#211A14',
                lineHeight: 1.2, letterSpacing: '-0.01em',
              }}>
                Educación y
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.12em' }}>
              <span className="reveal-line" style={{
                display: 'block', opacity: 0,
                fontFamily: 'var(--font-serif)', fontWeight: 700,
                fontSize: 'clamp(44px, 6.4vw, 100px)', color: '#A83E23',
                lineHeight: 1.15, letterSpacing: '-0.02em',
              }}>
                liderazgo
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.12em' }}>
              <span className="reveal-line" style={{
                display: 'block', opacity: 0,
                fontFamily: 'var(--font-serif)', fontWeight: 500,
                fontSize: 'clamp(28px, 3.2vw, 46px)', color: '#211A14',
                lineHeight: 1.25, letterSpacing: '-0.01em',
              }}>
                al servicio de la sociedad
              </span>
            </span>
          </h1>

          <div className="hero-cta" style={{ display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'wrap', opacity: 0 }}>
            <a ref={ctaRef} href="#iniciativas" className="btn-solid" style={{ textDecoration: 'none', willChange: 'transform' }}>
              Conoce la fundación
            </a>
            <a
              href="#iniciativas"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.04em',
                color: 'rgba(33,26,20,0.55)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(33,26,20,0.2)',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#A83E23'; e.currentTarget.style.borderColor = '#A83E23'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(33,26,20,0.55)'; e.currentTarget.style.borderColor = 'rgba(33,26,20,0.2)'; }}
            >
              Ver iniciativas →
            </a>
          </div>
        </div>

        {/* Right — duotone framed portrait (5 of 12 cols) */}
        <div className="md:col-span-5" style={{ position: 'relative' }}>
          <div
            ref={photoRef}
            style={{
              position: 'relative',
              aspectRatio: '4 / 5',
              border: '1px solid #211A14',
              overflow: 'hidden',
              background: '#211A14',
            }}
          >
            <Image
              src="/assets/gustavo.jpeg"
              alt="Gustavo Martínez Pellón"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              style={{ objectFit: 'cover', objectPosition: 'center 22%', filter: 'grayscale(1) contrast(1.08)' }}
            />
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: '#A83E23', mixBlendMode: 'multiply', opacity: 0.28 }} />
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: '#211A14', mixBlendMode: 'multiply', opacity: 0.15 }} />
          </div>

          {/* Credibility badge, overlapping the top-right of the frame */}
          <div className="hero-badge" style={{
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            background: '#A83E23',
            padding: '10px 16px',
            rotate: '2deg',
            boxShadow: '4px 4px 0 rgba(33,26,20,0.18)',
            opacity: 0,
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#F1E9DA',
              whiteSpace: 'nowrap',
            }}>
              Autor · Customer Centricity
            </p>
          </div>

          {/* Clipped pull-quote, overlapping the frame like a cutout */}
          <div className="hero-clip" style={{
            position: 'absolute',
            left: '-32px',
            bottom: '-28px',
            maxWidth: '230px',
            background: '#F1E9DA',
            border: '1px solid #211A14',
            padding: '18px 20px',
            transform: 'rotate(-2deg)',
            boxShadow: '6px 6px 0 rgba(33,26,20,0.08)',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: 1.5,
              color: '#211A14',
            }}>
              "Lo que he dedicado toda la vida, ahora al servicio de la sociedad."
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#A83E23',
              marginTop: '10px',
            }}>
              — G. Martínez Pellón
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
