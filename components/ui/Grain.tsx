// Small tiled noise pattern instead of a full-viewport SVG filter — a fixed,
// blend-mode layer sized to the whole page is expensive to repaint on every
// scroll frame; a 160px repeating tile costs the browser almost nothing.
const NOISE_TILE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
  "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>" +
  "<feColorMatrix type='saturate' values='0'/></filter>" +
  "<rect width='100%' height='100%' filter='url(%23n)'/></svg>";

export default function Grain() {
  return (
    <div
      aria-hidden
      className="hidden md:block"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
        opacity: 0.05,
        backgroundImage: `url("${NOISE_TILE}")`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
