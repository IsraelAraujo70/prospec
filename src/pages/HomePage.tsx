import { useCallback } from 'react';
import { FullPageScroll } from '../components/FullPageScroll';
import { HeroSection } from '../containers/HeroSection';
import { ServicesSection } from '../containers/ServicesSection';
import { AboutSection } from '../containers/AboutSection';
import { TeamSection } from '../containers/TeamSection';
import { ContactSection } from '../containers/ContactSection';
import { Navigation } from '../components/Navigation';

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