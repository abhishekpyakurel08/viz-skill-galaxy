import { motion } from 'framer-motion';
import SkillsScene from './SkillsScene';

const SkillsProjection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none opacity-50" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 z-10 pt-8 md:pt-12"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-xs md:text-sm font-display tracking-[0.3em] text-primary/70 uppercase">
              Interactive Experience
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 text-4xl md:text-6xl lg:text-7xl font-display font-bold"
          >
            <span className="text-gradient-neon">3D Skills</span>
            <br />
            <span className="text-foreground">Projection</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto"
          >
            Explore my technical expertise through an immersive 3D visualization.
            <br className="hidden md:block" />
            <span className="text-primary/80">Hover or click</span> on the orbs to discover each skill.
          </motion.p>
        </div>
      </motion.div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 pt-48 md:pt-56">
        <SkillsScene />
      </div>

      {/* Bottom info panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-10 pb-6 md:pb-10"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {['React', 'Three.js', 'Tailwind', 'Framer Motion'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="glass-panel px-3 py-1.5 md:px-4 md:py-2"
              >
                <span className="text-xs md:text-sm font-medium text-primary/90">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-4 text-center text-xs text-muted-foreground/60"
          >
            Drag to rotate • Scroll to zoom • Click orbs for details
          </motion.p>
        </div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/30 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/30 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30 pointer-events-none" />
    </section>
  );
};

export default SkillsProjection;
