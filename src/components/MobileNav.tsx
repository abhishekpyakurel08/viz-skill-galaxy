import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderGit2, Wrench } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'Skills', href: '#skills', icon: Wrench },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed mobile header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden ${
          isScrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border/50' : ''
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-lg font-display font-bold text-gradient-neon">
            AP
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center border border-border"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu content */}
            <motion.nav
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-50 bg-card border-l border-border lg:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-6">
                <div className="flex-1 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-foreground hover:bg-secondary transition-colors min-h-[56px]"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Bottom info */}
                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Contact</p>
                  <a
                    href="mailto:abhishekpyakurel01@gmail.com"
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    abhishekpyakurel01@gmail.com
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header on mobile */}
      <div className="h-14 lg:hidden" />
    </>
  );
};

export default MobileNav;
