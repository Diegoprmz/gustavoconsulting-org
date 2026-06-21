'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, type Geography as GeoType } from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const PRESENCE: Record<string, { name: string; institutions: number; highlight: 'primary' | 'active' | 'light' }> = {
  '484': { name: 'México',          institutions: 12, highlight: 'primary' },
  '604': { name: 'Perú',            institutions: 5,  highlight: 'active'  },
  '320': { name: 'Guatemala',       institutions: 2,  highlight: 'active'  },
  '340': { name: 'Honduras',        institutions: 1,  highlight: 'light'   },
  '170': { name: 'Colombia',        institutions: 1,  highlight: 'light'   },
  '032': { name: 'Argentina',       institutions: 1,  highlight: 'light'   },
  '152': { name: 'Chile',           institutions: 1,  highlight: 'light'   },
  '840': { name: 'Estados Unidos',  institutions: 1,  highlight: 'light'   },
};

const CITIES = [
  { name: 'CDMX',           coords: [-99.13,  19.43] as [number, number], main: true  },
  { name: 'Guadalajara',    coords: [-103.35, 20.66] as [number, number], main: false },
  { name: 'Monterrey',      coords: [-100.32, 25.69] as [number, number], main: false },
  { name: 'Lima',           coords: [-77.04, -12.05] as [number, number], main: false },
  { name: 'Guat. City',     coords: [-90.53,  14.63] as [number, number], main: false },
  { name: 'Bogotá',         coords: [-74.07,   4.71] as [number, number], main: false },
  { name: 'Buenos Aires',   coords: [-58.38, -34.60] as [number, number], main: false },
];

const LATAM_IDS = new Set([
  '484','604','320','340','170','032','152','840','724',
  '076','862','218','591','558','188','222','600','858',
  '068','214','192','630','332','388','780','328',
]);

function getFill(id: string) {
  const p = PRESENCE[id];
  if (!p) return LATAM_IDS.has(id) ? '#1E3352' : '#252F3E';
  if (p.highlight === 'primary') return '#C4922A';
  if (p.highlight === 'active')  return '#2A5080';
  return '#243B5E';
}

export default function LatamMap() {
  const [tooltip, setTooltip] = useState<{ name: string; institutions: number; x: number; y: number } | null>(null);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [-80, 2], scale: 380 }}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup zoom={1} minZoom={0.8} maxZoom={4}>
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: GeoType[] }) =>
              geographies.map((geo: GeoType) => {
                const id = String(geo.id);
                const presence = PRESENCE[id];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFill(id)}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none', transition: 'fill 0.2s' },
                      hover:   { outline: 'none', fill: presence ? (presence.highlight === 'primary' ? '#D4A843' : '#3A6EA8') : '#2A3A50', cursor: presence ? 'pointer' : 'default' },
                      pressed: { outline: 'none' },
                    }}
                    onMouseEnter={(e: React.MouseEvent<SVGPathElement>) => {
                      if (presence) {
                        const rect = (e.target as SVGElement).closest('svg')!.getBoundingClientRect();
                        setTooltip({ name: presence.name, institutions: presence.institutions, x: e.clientX - rect.left, y: e.clientY - rect.top });
                      }
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              })
            }
          </Geographies>

          {CITIES.map((city) => (
            <Marker key={city.name} coordinates={city.coords}>
              <circle
                r={city.main ? 5 : 3}
                fill={city.main ? '#C4922A' : 'rgba(196,146,42,0.7)'}
                stroke="#fff"
                strokeWidth={city.main ? 1.5 : 1}
                style={{ filter: city.main ? 'drop-shadow(0 0 6px rgba(196,146,42,0.6))' : 'none' }}
              />
              {city.main && (
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '7px', fill: 'rgba(255,255,255,0.75)', letterSpacing: '0.05em' }}
                >
                  {city.name}
                </text>
              )}
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x + 12,
            top: tooltip.y - 12,
            background: 'rgba(15,28,54,0.96)',
            border: '1px solid rgba(196,146,42,0.3)',
            padding: '8px 14px',
            pointerEvents: 'none',
            backdropFilter: 'blur(8px)',
            zIndex: 10,
          }}
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>
            {tooltip.name}
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', color: '#C4922A' }}>
            {tooltip.institutions} institución{tooltip.institutions > 1 ? 'es' : ''}
          </p>
        </div>
      )}
    </div>
  );
}
