import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, index }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[400px] perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          rotateX: isHovered && !isFlipped ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full">
            {/* Project image */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: 'inset 0 0 60px hsl(var(--primary) / 0.2)',
              }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 text-muted-foreground">
                    +{technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Flip hint */}
            <div className="absolute top-4 right-4 text-xs text-muted-foreground/60 flex items-center gap-1">
              <span>Click to flip</span>
              <motion.span
                animate={{ rotateY: [0, 180, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ↻
              </motion.span>
            </div>
          </div>

          {/* Border glow */}
          <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl glass-panel p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-4 neon-text">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>
            
            <div className="space-y-3">
              <h4 className="text-xs font-display uppercase tracking-wider text-primary/80">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg bg-muted/50 text-foreground/80 border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-primary/50 text-foreground font-semibold text-sm hover:bg-primary/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                Source
              </motion.a>
            )}
          </div>

          {/* Flip back hint */}
          <div className="absolute top-4 right-4 text-xs text-muted-foreground/60">
            Click to flip back
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
