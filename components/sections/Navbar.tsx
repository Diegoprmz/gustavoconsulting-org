'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { useMagnetic } from '@/components/hooks/useMagnetic';

const links = ['Misión', 'Iniciativas', 'Trayectoria', 'Publicaciones', 'Contacto'];

function NavLink({ label }: { label: string }) {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      style={{
        position: 'relative',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'rgba(241,233,218,0.55)',
        textDecoration: 'none',
        transition: 'color 0.25s',
        paddingBottom: '3px',
      }}
      className="group"
      onMouseEnter={e => (e.currentTarget.style.color = '#F1E9DA')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,233,218,0.55)')}
    >
      {label}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: '1px',
          width: '100%',
          background: '#A83E23',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s cubic-bezier(0.65,0,0.35,1)',
        }}
        className="nav-underline"
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.3);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40);
    setHidden(y > 220 && y > lastY.current && !menuOpen);
    lastY.current = y;
  });

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: hidden ? 0.4 : 0.7, ease: [0.65, 0, 0.35, 1] }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#211A14',
        borderBottom: scrolled ? '1px solid rgba(241,233,218,0.1)' : '1px solid rgba(241,233,218,0.06)',
        transition: 'border-color 0.4s',
      }}
    >
      <div className="px-4 md:px-12" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Brand */}
          <a href="#" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '7px', height: '7px', background: '#A83E23', flexShrink: 0 }} />
            <span>
              <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '16px', color: '#F1E9DA', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Fundación Gustavo Consulting
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(241,233,218,0.5)', marginTop: '2px' }}>
                Educación · Liderazgo · Impacto Social
              </p>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap: '36px', alignItems: 'center' }}>
            {links.map((l) => (
              <div
                key={l}
                onMouseEnter={e => {
                  const el = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                  if (el) el.style.transform = 'scaleX(1)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                  if (el) el.style.transform = 'scaleX(0)';
                }}
              >
                <NavLink label={l} />
              </div>
            ))}
            <a
              ref={ctaRef}
              href="#contacto"
              className="btn-solid"
              style={{ textDecoration: 'none', padding: '10px 22px', fontSize: '10px', willChange: 'transform' }}
            >
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
                    background: '#F1E9DA',
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
            style={{ overflow: 'hidden', background: '#211A14', borderTop: '1px solid rgba(241,233,218,0.08)' }}
          >
            <div className="px-4" style={{ paddingTop: '24px', paddingBottom: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(241,233,218,0.7)', textDecoration: 'none' }}
                >
                  {l}
                </motion.a>
              ))}
              <a href="#contacto" className="btn-solid" style={{ textAlign: 'center', marginTop: '8px' }}>
                Participa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
