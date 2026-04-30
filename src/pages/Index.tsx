import HeroSection from '@/components/HeroSection';
import SkillsShowcase from '@/components/SkillsShowcase';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <MobileNav />
      <HeroSection />
      <SkillsShowcase />
      <ExperienceSection />
      <ProjectsShowcase />
      <Footer />
    </main>
  );
};

export default Index;
