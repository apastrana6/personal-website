import HeroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen overflow-x-hidden overscroll-none">
      <div className="space-y-16">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
