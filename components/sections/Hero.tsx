'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY      = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY       = useTransform(scrollYProgress, [0, 0.55], ['0%', '-8%']);

  return (
    <section
      ref={ref}
      id="misión"
      className="hero-grid"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0F1C36 0%, #1B2A4A 55%, #223358 100%)',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      {/* Gold glow — upper right */}
      <div style={{
        position: 'absolute', top: '5%', right: '8%',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(196,146,42,0.14) 0%, transparent 68%)',
        animation: 'glow-pulse 5s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      {/* Green glow — lower left */}
      <div style={{
        position: 'absolute', bottom: '8%', left: '2%',
        width: '380px', height: '380px',
        background: 'radial-gradient(ellipse, rgba(61,107,80,0.18) 0%, transparent 68%)',
        animation: 'glow-pulse 6s ease-in-out infinite 1s',
        pointerEvents: 'none',
      }} />

      {/* ── Desktop ── */}
      <div className="hidden md:flex w-full" style={{ minHeight: '100vh' }}>

        {/* Left — 60% */}
        <motion.div
          style={{ opacity: textOpacity, y: textY, width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 64px 80px 80px', position: 'relative', zIndex: 2 }}
        >
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
              <div style={{ width: '36px', height: '1.5px', background: '#C4922A' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C4922A' }}>
                Fundación Gustavo Consulting
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(48px, 5.5vw, 84px)', lineHeight: 1.05, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '28px' }}
            >
              Educación y liderazgo<br />
              al servicio de<br />
              <em style={{ color: '#C4922A', fontStyle: 'italic', fontWeight: 400 }}>la sociedad</em>
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: '460px', marginBottom: '48px' }}
            >
              Treinta años de experiencia directiva convertidos en una misión social. Conocimiento, liderazgo y educación al servicio de México y América Latina.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <motion.a
                href="#iniciativas"
                className="btn-gold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ textDecoration: 'none' }}
              >
                Conoce la fundación
              </motion.a>
              <motion.a
                href="#iniciativas"
                className="btn-ghost-white"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ textDecoration: 'none' }}
              >
                Ver iniciativas →
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginTop: '80px' }}
            >
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
                Scroll
              </span>
              <div className="scroll-line" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right — 40% — photo */}
        <div style={{ width: '40%', position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ y: photoY, position: 'absolute', inset: 0, bottom: '-18%', zIndex: 2 }}>
            <Image
              src="/assets/gustavo.jpeg"
              alt="Gustavo Martínez Pellón — Fundador"
              fill
              className="object-cover object-center"
              priority
              sizes="40vw"
            />
            {/* Gradient overlay left */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(27,42,74,0.6) 0%, transparent 40%)', zIndex: 3 }} />
            {/* Gradient overlay bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(to top, rgba(15,28,54,0.95) 0%, transparent 100%)', zIndex: 3 }} />
          </motion.div>

          {/* Pull-quote */}
          <div style={{ position: 'absolute', bottom: '48px', left: '24px', right: '24px', zIndex: 4 }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(196,146,42,0.6)', marginBottom: '12px' }} />
            <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
              "Lo que he dedicado toda la vida, ahora al servicio de la sociedad."
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4922A', marginTop: '10px' }}>
              — Gustavo Martínez Pellón
            </p>
          </div>

          {/* Vertical rule left edge */}
          <div style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(196,146,42,0.25), transparent)', zIndex: 5 }} />
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="flex md:hidden flex-col w-full" style={{ minHeight: '100dvh' }}>
        {/* Photo top half */}
        <div style={{ position: 'relative', height: '50vh', overflow: 'hidden', flexShrink: 0 }}>
          <Image
            src="/assets/gustavo.jpeg"
            alt="Gustavo Martínez Pellón"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(27,42,74,0.3) 0%, rgba(15,28,54,0.9) 100%)', zIndex: 2 }} />
        </div>

        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ padding: '36px 24px 60px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '1.5px', background: '#C4922A' }} />
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C4922A' }}>
              Fundación Gustavo Consulting
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-playfair)', fontSize: '42px', lineHeight: 1.08, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '20px' }}
          >
            Educación y liderazgo al servicio de{' '}
            <em style={{ color: '#C4922A', fontStyle: 'italic', fontWeight: 400 }}>la sociedad</em>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', marginBottom: '32px' }}>
            Treinta años de experiencia directiva convertidos en una misión social.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#iniciativas" className="btn-gold" style={{ textDecoration: 'none', textAlign: 'center' }}>
              Conoce la fundación
            </a>
            <a href="#iniciativas" className="btn-ghost-white" style={{ textDecoration: 'none', textAlign: 'center' }}>
              Ver iniciativas →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
