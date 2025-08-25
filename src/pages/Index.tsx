import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <HeroSection />
          <ScrollReveal direction="up" delay={0.2}>
            <AboutSection />
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.1}>
            <ExperienceSection />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <SkillsSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <ProjectsSection />
          </ScrollReveal>
          <ScrollReveal direction="down" delay={0.1}>
            <TestimonialsSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <ContactSection />
          </ScrollReveal>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;