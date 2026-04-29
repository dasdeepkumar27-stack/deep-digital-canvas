import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Premium cinematic easing — Apple-style
const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const viewport = { once: true, margin: '-60px' } as const;
const baseDuration = 0.9;

export const FadeUp = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={viewport}
    transition={{ duration: baseDuration, delay, ease: premiumEase }}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={viewport}
    transition={{ duration: baseDuration, delay, ease: premiumEase }}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -48, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
    viewport={viewport}
    transition={{ duration: baseDuration, delay, ease: premiumEase }}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: 48, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
    viewport={viewport}
    transition={{ duration: baseDuration, delay, ease: premiumEase }}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={viewport}
    transition={{ duration: baseDuration, delay, ease: premiumEase }}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    transition={{ staggerChildren: 0.12, delayChildren: delay }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: Omit<AnimatedSectionProps, 'delay'>) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.85, ease: premiumEase },
      },
    }}
  >
    {children}
  </motion.div>
);
