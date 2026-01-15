import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'Short description of your first project. Replace this with details about your actual project.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://yourproject1.com',
    githubUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project Two',
    description: 'Short description of your second project. Replace this with details about your actual project.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://yourproject2.com',
    githubUrl: 'https://github.com/yourusername/project2',
  },
];

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="relative min-h-screen w-full py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs md:text-sm font-display tracking-[0.3em] text-primary/70 uppercase mb-4"
          >
            Featured Work
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            <span className="text-foreground">My </span>
            <span className="text-gradient-neon">Projects</span>
          </h2>
          
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work. Each project represents a unique challenge
            and demonstrates different aspects of my technical expertise.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 font-display font-semibold text-sm uppercase tracking-wider text-foreground border border-primary/50 rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
          >
            View All Projects
            <span className="text-primary">→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-secondary/30 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-secondary/30 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-secondary/30 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-secondary/30 pointer-events-none" />
    </section>
  );
};

export default ProjectsShowcase;
