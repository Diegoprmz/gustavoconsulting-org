'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section id="contacto" style={{ background: '#A83E23', padding: '120px 0' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-center">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              fontWeight: 500,
              color: '#F1E9DA',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}>
              Únete a la misión<br />
              de educar y liderar<br />
              para el bien común
            </h2>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {!sent ? (
              <>
                <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0' }}>
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    aria-label="Correo electrónico"
                    style={{
                      flex: 1,
                      padding: '14px 20px',
                      background: 'rgba(241,233,218,0.1)',
                      border: '1px solid rgba(241,233,218,0.2)',
                      borderRight: 'none',
                      color: '#F1E9DA',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13px',
                      fontWeight: 300,
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '14px 28px',
                      background: '#211A14',
                      border: 'none',
                      color: '#F1E9DA',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'opacity 0.2s',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Suscribirme
                  </button>
                </form>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '20px 0' }}>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(241,233,218,0.15)' }} />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', color: 'rgba(241,233,218,0.3)', letterSpacing: '0.1em' }}>o</span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(241,233,218,0.15)' }} />
                </div>

                <a
                  href="mailto:contacto@gustavo.consulting"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '12px',
                    fontWeight: 400,
                    letterSpacing: '0.06em',
                    color: 'rgba(241,233,218,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F1E9DA')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,233,218,0.55)')}
                >
                  Agenda una conversación →
                </a>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '40px 0' }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '24px', color: '#F1E9DA', marginBottom: '8px' }}>
                  ¡Gracias por sumarte!
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300, color: 'rgba(241,233,218,0.55)' }}>
                  Pronto estarás en contacto con la fundación.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
