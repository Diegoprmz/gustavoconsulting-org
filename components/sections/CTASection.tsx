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
    <section id="contacto" style={{ background: '#3D6B50', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(248,244,238,0.6)', marginBottom: '24px' }}>
              Únete a la misión
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, color: '#F8F4EE', lineHeight: 1.1 }}>
              Únete a la misión<br />
              de educar y{' '}
              <em style={{ color: '#F8F4EE', fontStyle: 'italic', fontWeight: 400 }}>liderar</em><br />
              para el bien común
            </h2>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
                      padding: '15px 20px',
                      background: 'rgba(248,244,238,0.12)',
                      border: '1px solid rgba(248,244,238,0.25)',
                      borderRight: 'none',
                      color: '#F8F4EE',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13px',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '15px 28px',
                      background: '#C4922A',
                      border: 'none',
                      color: '#fff',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#D4A843')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#C4922A')}
                  >
                    Suscribirme
                  </button>
                </form>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '24px 0' }}>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(248,244,238,0.2)' }} />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'rgba(248,244,238,0.4)', letterSpacing: '0.1em' }}>o</span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(248,244,238,0.2)' }} />
                </div>

                <a
                  href="mailto:contacto@gustavo.consulting"
                  className="btn-ghost-white"
                  style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                >
                  Agenda una conversación →
                </a>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '40px', border: '1px solid rgba(248,244,238,0.2)', textAlign: 'center' }}
              >
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontStyle: 'italic', color: '#F8F4EE', marginBottom: '8px' }}>
                  ¡Gracias por sumarte!
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'rgba(248,244,238,0.6)' }}>
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
