import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench,
  GitBranch,
  Layers
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript (ES6+)', 'TypeScript'],
    color: 'text-yellow-500',
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Framer Motion', 'Shadcn UI'],
    color: 'text-blue-500',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Payload CMS 3'],
    color: 'text-green-500',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'Mongoose', 'Payload CMS Integration'],
    color: 'text-emerald-500',
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'PNPM', 'Vercel', 'Self-hosting'],
    color: 'text-purple-500',
  },
  {
    title: 'Core Concepts',
    icon: Layers,
    skills: ['REST APIs', 'JWT Authentication', 'OOP', 'MVC Pattern', 'Basic System Design'],
    color: 'text-orange-500',
  },
];

const SkillsShowcase = () => {
  return (
    <section id="skills" className="relative min-h-screen w-full py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[10px] sm:text-xs md:text-sm font-display tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            Technical Expertise
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold px-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient-neon">Skills</span>
          </h2>
          
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive overview of my technical skills and technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-5 sm:p-6 rounded-2xl group hover:border-primary/40 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-secondary group-hover:bg-muted transition-colors">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border text-xs sm:text-sm font-medium hover:bg-muted hover:border-primary/30 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <GitBranch className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Always learning and exploring new technologies
            </span>
          </div>
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

export default SkillsShowcase;
