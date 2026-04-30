import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, Github } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      {/* Scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary blur-xl opacity-40" />
            <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-full border-4 border-border overflow-hidden bg-muted">
              <img
                src="/profile.png"
                alt="Abhishek Pyakurel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-full border border-dashed border-border"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-block text-[9px] sm:text-[10px] md:text-xs font-display tracking-[0.15em] sm:tracking-[0.2em] text-primary uppercase px-2 sm:px-3 py-1.5 sm:py-2 border border-border rounded-full bg-secondary/50">
            MERN Stack Developer | Fellowship Applicant
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
        >
          <span className="text-foreground">Hi, I'm</span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gradient-neon inline-block"
          >
            Abhishek Pyakurel
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed px-4"
        >
a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js) with a strong focus on building        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground px-4"
        >
          <a href="mailto:abhishekpyakurel01@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors min-h-[44px]">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="break-all">abhishekpyakurel01@gmail.com</span>
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a href="tel:+9779743223799" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +977-9743223799
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Kathmandu, Nepal
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <a href="https://github.com/abhishekpyakurel08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="group relative px-6 py-3 font-display font-semibold text-xs uppercase tracking-wider overflow-hidden rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View My Work
          </motion.button>

          <motion.a
            href="#skills"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-display font-semibold text-xs uppercase tracking-wider text-foreground border border-border rounded-lg hover:border-primary hover:bg-secondary transition-all"
          >
            Explore Skills
          </motion.a>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
              className="text-[10px] sm:text-xs text-muted-foreground/70 font-mono"
            >
              {tech}
              {index < 6 && <span className="mx-2 sm:mx-3 text-primary/50">•</span>}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary/60" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-border pointer-events-none" />
      <div className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-border pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-border pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-border pointer-events-none" />
    </section>
  );
};

export default HeroSection;
