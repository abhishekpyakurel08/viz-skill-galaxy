import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  gif?: string;
  dateRange?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, gif, dateRange, technologies, liveUrl, githubUrl, index }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[380px] sm:h-[400px] perspective-1000"
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
            {/* Project image / GIF - only render if image exists */}
            {image && (
              <>
                <div className="relative w-full h-48 overflow-hidden">
                  {/* Static image (default) */}
                  <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered && gif ? 'opacity-0' : 'opacity-100'}`}
                    loading="lazy"
                  />
                  {/* GIF on hover */}
                  {gif && (
                    <img
                      src={gif}
                      alt={`${title} preview`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                    />
                  )}
                </div>
                {/* Gradient overlay */}
                <div className="absolute top-48 inset-x-0 h-24 bg-gradient-to-t from-background via-background/90 to-transparent" />
              </>
            )}
            
            {/* Subtle hover effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none bg-primary/5"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className={`${image ? 'absolute bottom-0 left-0 right-0' : 'relative h-full flex flex-col justify-center'} p-6`}>
              {/* Date range */}
              {dateRange && (
                <p className="text-xs text-muted-foreground/70 mb-2">{dateRange}</p>
              )}
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground mb-2 line-clamp-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 sm:line-clamp-2 mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
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
              {/* Action buttons */}
              <div className="flex flex-wrap gap-2">
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 px-3 py-2 sm:py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border text-xs font-medium hover:bg-muted transition-colors min-h-[44px]"
                  >
                    <Github className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">Source</span>
                    <span className="sm:hidden">GitHub</span>
                  </motion.a>
                )}
                {liveUrl && (
                  <motion.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 px-3 py-2 sm:py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                    Live
                  </motion.a>
                )}
              </div>
            </div>

            {/* Flip hint - hidden on mobile */}
            <div className="hidden sm:flex absolute top-4 right-4 text-xs text-muted-foreground/60 items-center gap-1">
              <span>Click to flip</span>
              <motion.span
                animate={{ rotateY: [0, 180, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ↻
              </motion.span>
            </div>
          </div>

          {/* Border */}
          <div className="absolute inset-0 rounded-2xl border border-border pointer-events-none" />
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl glass-panel p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-4 text-glow">
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
