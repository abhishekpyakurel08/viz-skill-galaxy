import { ThemeProvider } from '@/components/ThemeProvider';
import HeroSection from '@/components/HeroSection';
import SkillsShowcase from '@/components/SkillsShowcase';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';

const Index = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <MobileNav />
        <HeroSection />
        <SkillsShowcase />
        <ExperienceSection />
        <ProjectsShowcase />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;
