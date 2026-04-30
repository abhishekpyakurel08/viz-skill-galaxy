import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image?: string;
  gif?: string;
  dateRange?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'ATS Nepal – Vehicle & Parking System',
    description: 'A responsive vehicle tracking and parking alert system (freelance) with an intuitive interface designed for real-time usability. Built with React + Vite for fast UI performance; focused on responsiveness and overall system usability.',
    // image: '/images/ats-nepal.jpg', // Add project screenshot
    // gif: '/images/ats-nepal.gif', // Add project demo GIF
    dateRange: 'Jan 2024 - Feb 2024',
    technologies: ['React', 'Vite', 'TailwindCSS'],
    liveUrl: 'https://github.com/thomasabhi/ATS-NEPAL',
    githubUrl: 'https://github.com/thomasabhi/ATS-NEPAL',
  },
  {
    title: 'Amipal Hospital Website',
    description: 'A complete hospital management website for Amipal Hospital using Next.js 15 + Payload CMS 3 for scalable content and backend management. Modern, responsive UI with TailwindCSS and Shadcn UI; enhanced UX with smooth animations via Framer Motion.',
    // image: '/images/amipal.jpg', // Add project screenshot
    // gif: '/images/amipal.gif', // Add project demo GIF
    dateRange: 'April 2026 - Present',
    technologies: ['Next.js 15', 'Payload CMS 3', 'TailwindCSS', 'Framer Motion'],
    liveUrl: 'https://amipal.vercel.app/en',
    githubUrl: 'https://github.com/thomasabhi',
  },
];

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="relative min-h-screen w-full py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[150px]" />
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
            className="inline-block text-xs md:text-sm font-display tracking-[0.3em] text-muted-foreground uppercase mb-4"
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
            className="inline-flex items-center gap-2 px-8 py-4 font-display font-semibold text-sm uppercase tracking-wider text-foreground border border-border rounded-lg hover:border-primary hover:bg-secondary transition-all"
          >
            View All Projects
            <span className="text-primary">→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-border pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-border pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-border pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-border pointer-events-none" />
    </section>
  );
};

export default ProjectsShowcase;
