import { useCallback } from 'react';
import { FullPageScroll } from '../components/FullPageScroll';
import { HeroSection } from '../containers/HeroSection';
import { ServicesSection } from '../containers/ServicesSection';
import { AboutSection } from '../containers/AboutSection';
import { TeamSection } from '../containers/TeamSection';
import { ContactSection } from '../containers/ContactSection';
import { Navigation } from '../components/Navigation';
import { SEO } from '../components/SEO';

export function HomePage() {
  const handleScrollDown = useCallback((sectionIndex: number) => {
    const fullpageApi = window.fullpage_api;
    if (fullpageApi) {
      fullpageApi.moveTo(sectionIndex + 1);
    }
  }, []);

  const handleLeave = (origin: number, destination: number, direction: string) => {
    console.log(`Leaving section ${origin + 1} to section ${destination + 1} in direction ${direction}`);
  };

  return (
    <>
      <SEO 
        title="Prospec Jr. | Empresa Júnior de Engenharia de Minas da UNIFAL-MG"
        description="A Prospec Jr. oferece consultoria e soluções para o setor de mineração, com expertise em ensaios laboratoriais, ensaios de campo e segurança do trabalho."
        keywords="Prospec Jr, empresa júnior, engenharia de minas, UNIFAL-MG, consultoria, mineração, ensaios laboratoriais, ensaios de campo, segurança do trabalho, Poços de Caldas"
      />
      <Navigation onNavigate={handleScrollDown} />
      <FullPageScroll
        anchors={['home', 'servicos', 'sobre', 'equipe', 'contato']}
        onLeave={handleLeave}
      >
        <HeroSection onScrollDown={() => handleScrollDown(1)} />
        <ServicesSection onViewAllServices={() => handleScrollDown(1)} />
        <AboutSection />
        <TeamSection onViewAllTeam={() => handleScrollDown(3)} />
        <ContactSection />
      </FullPageScroll>
    </>
  );
} 