import Navbar        from '@/components/sections/Navbar';
import Hero          from '@/components/sections/Hero';
import Fundador      from '@/components/sections/Fundador';
import Iniciativas   from '@/components/sections/Iniciativas';
import Impacto            from '@/components/sections/Impacto';
import AlcanceGeografico  from '@/components/sections/AlcanceGeografico';
import Estadisticas       from '@/components/sections/Estadisticas';
import Instituciones      from '@/components/sections/Instituciones';
import Participar    from '@/components/sections/Participar';
import CTASection    from '@/components/sections/CTASection';
import Footer        from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Fundador />
        <Iniciativas />
        <Impacto />
        <AlcanceGeografico />
        <Estadisticas />
        <Instituciones />
        <Participar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
