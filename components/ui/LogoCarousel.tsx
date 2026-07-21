'use client';

import Image from 'next/image';

export type LogoItem = { name: string; src?: string };

function initials(name: string) {
  return name
    .replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ. ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

function Tile({ name, src }: LogoItem) {
  return (
    <div
      style={{
        width: '128px',
        height: '128px',
        flexShrink: 0,
        // Paper-colored card, not dark-transparent — most institutional logos are dark
        // marks meant for a light background, so this is what keeps every logo legible
        // regardless of its own color, instead of relying on a filter to "lighten" it.
        background: '#F1E9DA',
        border: '1px solid rgba(33,26,20,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        position: 'relative',
        transition: 'transform 0.25s, box-shadow 0.25s',
      }}
      className="logo-tile"
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          width={88}
          height={88}
          unoptimized={src.endsWith('.svg')}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          className="logo-tile-img"
        />
      ) : (
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: '22px',
            color: 'rgba(33,26,20,0.3)',
          }}
          className="logo-tile-mono"
        >
          {initials(name)}
        </span>
      )}
    </div>
  );
}

export default function LogoCarousel({ items }: { items: LogoItem[] }) {
  const loop = [...items, ...items];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* fade edges so the loop point isn't a hard cut */}
      <div style={{ position: 'absolute', inset: '0 auto 0 0', width: '64px', background: 'linear-gradient(to right, #211A14, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: '0 0 0 auto', width: '64px', background: 'linear-gradient(to left, #211A14, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div className="logo-marquee-track" style={{ display: 'flex', gap: '14px', width: 'max-content', willChange: 'transform' }}>
        {loop.map((item, i) => (
          <Tile key={`${item.name}-${i}`} {...item} />
        ))}
      </div>

      <style>{`
        .logo-marquee-track {
          animation: logo-marquee 16s linear infinite;
        }
        .logo-marquee-track:hover {
          animation-play-state: paused;
        }
        .logo-tile:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }
        .logo-tile:hover .logo-tile-mono {
          color: #A83E23;
        }
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
