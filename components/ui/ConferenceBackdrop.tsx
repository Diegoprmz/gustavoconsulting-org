import Image from 'next/image';

/**
 * Fixed venue backdrop visible in the page-frame gutters (see .page-frame in globals.css).
 * Toned to the ink/clay palette so it reads as atmosphere, not a competing color photo.
 */
export default function ConferenceBackdrop() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background: '#211A14',
      }}
    >
      <Image
        src="/assets/conferencia-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'grayscale(0.6) contrast(1.05) brightness(0.55)' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: '#A83E23', mixBlendMode: 'multiply', opacity: 0.22 }} />
      <div style={{ position: 'absolute', inset: 0, background: '#211A14', mixBlendMode: 'multiply', opacity: 0.45 }} />
    </div>
  );
}
