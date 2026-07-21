'use client';

import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function Loader() {
  const [done, setDone] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl.set('.loader-bar-fill', { scaleX: 0 })
      .to('.loader-bar-fill', { scaleX: 1, duration: 0.9, ease: 'power2.inOut' })
      .to('.loader-word', { opacity: 1, duration: 0.4 }, 0)
      .to('.loader-screen', { yPercent: -100, duration: 0.7, ease: 'expo.inOut', delay: 0.15 })
      .set('.loader-screen', { display: 'none' });
  });

  useEffect(() => {
    if (done) document.body.style.overflow = '';
  }, [done]);

  return (
    <div
      className="loader-screen"
      aria-hidden={done}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: '#211A14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}
    >
      <p className="loader-word" style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: 'clamp(20px, 2.4vw, 28px)',
        color: '#F1E9DA',
        letterSpacing: '-0.01em',
        opacity: 0,
      }}>
        Fundación Gustavo Consulting
      </p>
      <div style={{ width: '220px', height: '2px', background: 'rgba(241,233,218,0.15)', overflow: 'hidden' }}>
        <div className="loader-bar-fill" style={{ width: '100%', height: '100%', background: '#A83E23', transformOrigin: 'left' }} />
      </div>
    </div>
  );
}
