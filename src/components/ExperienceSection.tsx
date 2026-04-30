import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Amipal Hospital Baglung, Nepal Website Project',
  
    period: 'April 2026 - Present',
    description: [
      'Built a complete hospital management website for Amipal Hospital using Next.js 15 + Payload CMS 3 for scalable content and backend management.',
      'Designed a modern, responsive UI with TailwindCSS and Shadcn UI; enhanced UX with smooth animations via Framer Motion.',
      'Implemented modules for staff, services, gallery, and contact management; focused on performance optimization, clean architecture, and maintainable code.',
      'Collaborated with the development team using Git-based workflows, including code review and branch management.'
    ],
    technologies: ['Next.js 15', 'Payload CMS 3', 'TailwindCSS', 'Shadcn UI', 'Framer Motion']
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'Tecobit Technology Pvt. Ltd.',
    period: 'Jan 2026 - Present',
    description: [
      'Gaining hands-on experience with the full MERN stack (MongoDB, Express.js, React.js, Node.js) in a professional software development environment.',
      'Contributing to real-world projects — building and maintaining REST APIs, React components, and database schemas under mentor guidance.'
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs']
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative min-h-screen w-full py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-20" />
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
            className="inline-block text-[10px] sm:text-xs md:text-sm font-display tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            My Journey
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold px-2">
            <span className="text-foreground">Experience & </span>
            <span className="text-gradient-neon">Involvement</span>
          </h2>
        </motion.div>

        {/* Experience timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl group hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary group-hover:bg-muted transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground md:text-right">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 pl-3 sm:pl-4 md:pl-16">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pl-3 sm:pl-4 md:pl-16">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-border pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-border pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-border pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-border pointer-events-none" />
    </section>
  );
};

export default ExperienceSection;
