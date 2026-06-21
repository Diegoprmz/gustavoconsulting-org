'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Misión', 'Iniciativas', 'Trayectoria', 'Publicaciones', 'Contacto'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s, box-shadow 0.4s',
        background: scrolled ? 'rgba(27,42,74,0.97)' : 'rgba(27,42,74,0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 0 rgba(196,146,42,0.15)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Brand */}
          <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '17px', fontWeight: 600, color: '#fff', letterSpacing: '0.01em', lineHeight: 1.2 }}>
              Fundación Gustavo Consulting
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C4922A', marginTop: '2px' }}>
              Educación · Liderazgo · Impacto Social
            </p>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap: '36px', alignItems: 'center' }}>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C4922A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {l}
              </a>
            ))}
            <a href="#contacto" className="btn-ghost-gold" style={{ fontSize: '11px', padding: '10px 22px' }}>
              Participa
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            aria-label="Menú"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '1.5px',
                    background: '#fff',
                    transition: 'transform 0.25s, opacity 0.25s',
                    transform: menuOpen
                      ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                        : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                        : 'scaleX(0)'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', background: 'rgba(27,42,74,0.98)', borderTop: '1px solid rgba(196,146,42,0.15)' }}
          >
            <div style={{ padding: '20px 40px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                >
                  {l}
                </a>
              ))}
              <a href="#contacto" className="btn-ghost-gold" style={{ textAlign: 'center', marginTop: '8px' }}>
                Participa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
