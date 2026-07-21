export default function MaskLine({ children, className = 'reveal-line' }: { children: React.ReactNode; className?: string }) {
  return (
    <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em' }}>
      {/* paddingBottom gives descenders (g, j, p, y) room so the overflow:hidden mask
          doesn't clip them — Fraunces' descenders are tall.
          opacity:0 (not transform) is the pre-JS hidden state — if GSAP's yPercent tween
          ever fails to run, the fallback fade-in still guarantees the text isn't stuck invisible. */}
      <span className={className} style={{ display: 'block', opacity: 0 }}>
        {children}
      </span>
    </span>
  );
}
