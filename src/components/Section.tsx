import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  background?: 'primary' | 'secondary' | 'muted' | 'background' | 'accent';
}

export function Section({
  children,
  className = '',
  id,
  fullHeight = true,
  background = 'background',
}: SectionProps) {
  const backgroundClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    muted: 'bg-muted text-muted-foreground',
    background: 'bg-background text-background-foreground',
    accent: 'bg-accent text-accent-foreground',
  };

  return (
    <section
      id={id}
      className={`${fullHeight ? 'min-h-screen' : ''} ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4 py-16 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-full"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
} 