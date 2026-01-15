import HeroSection from '@/components/HeroSection';
import SkillsProjection from '@/components/SkillsProjection';
import ProjectsShowcase from '@/components/ProjectsShowcase';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SkillsProjection />
      <ProjectsShowcase />
    </main>
  );
};

export default Index;
