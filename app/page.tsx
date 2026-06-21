import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { StudiesSection } from "@/components/sections/studies-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { BackToTopButton } from "@/components/layout/back-to-top-button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <StudiesSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <BackToTopButton />
      <SiteFooter />
    </>
  );
}
