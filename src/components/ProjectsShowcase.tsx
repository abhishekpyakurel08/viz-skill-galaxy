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
    title: '3D Portfolio Experience',
    description: 'An immersive portfolio website featuring interactive 3D skill visualization, animated transitions, and a futuristic cyberpunk aesthetic built with React Three Fiber.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    technologies: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI-Powered Dashboard',
    description: 'A real-time analytics dashboard with AI-driven insights, featuring dynamic data visualization, predictive analytics, and an intuitive user interface.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and a modern shopping experience optimized for conversions.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media App',
    description: 'A feature-rich social platform with real-time messaging, media sharing, and engagement analytics. Built for scale with microservices architecture.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    technologies: ['React Native', 'GraphQL', 'AWS', 'WebSocket', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'DevOps Automation Tool',
    description: 'A comprehensive CI/CD pipeline management tool with automated testing, deployment strategies, and infrastructure monitoring capabilities.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    technologies: ['Go', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Creative Design Studio',
    description: 'A web-based design tool with real-time collaboration, vector editing, and AI-assisted design suggestions for rapid prototyping.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'Canvas API', 'WebGL', 'Firebase', 'OpenAI'],
    liveUrl: '#',
    githubUrl: '#',
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
