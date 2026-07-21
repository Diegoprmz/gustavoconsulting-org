'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import LogoCarousel, { type LogoItem } from '@/components/ui/LogoCarousel';

// Only institutions with a confirmed real logo — the rest (EGADE, UFM, UAB, UIC, EPG)
// come back in once their official marks are sourced.
const logos: LogoItem[] = [
  { name: 'Anáhuac', src: '/assets/logos/anahuac.svg' },
  { name: 'ITAM', src: '/assets/logos/itam.svg' },
  { name: 'Ibero', src: '/assets/logos/ibero.svg' },
  { name: 'La Salle', src: '/assets/logos/la-salle.svg' },
  { name: 'UNAM', src: '/assets/logos/unam.svg' },
  { name: 'Tec de Monterrey', src: '/assets/logos/tec-monterrey.svg' },
  { name: 'UNITEC', src: '/assets/logos/unitec.png' },
  { name: 'UVM', src: '/assets/logos/uvm.svg' },
  { name: 'USIL', src: '/assets/logos/usil.jpg' },
  { name: 'UNMSM', src: '/assets/logos/unmsm.svg' },
  { name: 'HSBC', src: '/assets/logos/hsbc.svg' },
  { name: 'Ford', src: '/assets/logos/ford.svg' },
  { name: 'Coppel', src: '/assets/logos/coppel.svg' },
  { name: 'ADO', src: '/assets/logos/ado.svg' },
  // Background removed with Python/Pillow from the gustavo-consulting-cms source assets —
  // no clean vector version of either exists on Commons.
  { name: 'Fandeli', src: '/assets/logos/fandeli.png' },
  { name: 'Alimás', src: '/assets/logos/alimas.png' },
];

export default function Instituciones() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#211A14', padding: '80px 0' }}>
      <div className="px-6 md:px-20" style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 600,
            color: '#F1E9DA',
            letterSpacing: '-0.015em',
            marginBottom: '40px',
          }}
        >
          Instituciones y empresas donde ha colaborado
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <LogoCarousel items={logos} />
      </motion.div>
    </section>
  );
}
