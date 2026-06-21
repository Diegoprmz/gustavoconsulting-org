import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fundacion.gustavo.consulting'),
  title: 'Fundación Gustavo Consulting — Educación y Liderazgo Social',
  description:
    'Fundación dedicada a la educación, el liderazgo y el impacto social en México y América Latina. Gustavo Martínez Pellón.',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Fundación Gustavo Consulting',
    title: 'Fundación Gustavo Consulting — Educación y Liderazgo Social',
    description:
      'Treinta años de experiencia directiva convertidos en una misión social. Educación y liderazgo al servicio de la sociedad.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
