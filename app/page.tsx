import Navbar        from '@/components/sections/Navbar';
import Hero          from '@/components/sections/Hero';
import Fundador      from '@/components/sections/Fundador';
import Iniciativas   from '@/components/sections/Iniciativas';
import Impacto       from '@/components/sections/Impacto';
import Instituciones from '@/components/sections/Instituciones';
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
        <Instituciones />
        <Participar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
