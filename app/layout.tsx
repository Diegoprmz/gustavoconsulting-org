import type { Metadata } from 'next';
import { Fraunces, Raleway, JetBrains_Mono } from 'next/font/google';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Grain from '@/components/ui/Grain';
import ConferenceBackdrop from '@/components/ui/ConferenceBackdrop';
import Loader from '@/components/ui/Loader';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal'],
  display: 'swap',
});

const raleway = Raleway({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
    <html lang="es" className={`${fraunces.variable} ${raleway.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Loader />
        <ConferenceBackdrop />
        <Grain />
        <SmoothScroll>
          <div className="page-frame">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
