import { motion } from 'framer-motion';
import { Target, BookOpen, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen w-full py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-[150px]" />
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
            className="inline-block text-[10px] sm:text-xs md:text-sm font-display tracking-[0.2em] sm:tracking-[0.3em] text-primary/70 uppercase mb-4"
          >
            Get To Know Me
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold px-2">
            <span className="text-foreground">Why </span>
            <span className="text-gradient-neon">Cloco Nepal Fellowship?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Why Fellowship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/20">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">My Motivation</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Computer Science undergraduate eager to bridge the gap between theory and real-world software development. Cloco Nepal&apos;s Fellowship Program is exactly the structured, mentor-guided environment I need to grow into a job-ready developer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I bring strong foundational knowledge in programming, a portfolio of self-driven projects, and the hunger to contribute meaningfully from day one.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-secondary/20">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-3 sm:pl-4">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">Computer Science Undergraduate</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Currently pursuing</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-3 sm:pl-4">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">High School Degree (Management Stream)</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">High School (+2 / NEB)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 glass-panel p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-accent/20">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">Core Competencies</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              'REST APIs',
              'JWT Authentication',
              'OOP',
              'MVC Pattern',
              'System Design',
              'Git & GitHub',
              'Postman',
              'Vercel Deploy'
            ].map((skill) => (
              <div key={skill} className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-center">
                <span className="text-sm text-foreground">{skill}</span>
              </div>
            ))}
          </div>
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

export default AboutSection;
