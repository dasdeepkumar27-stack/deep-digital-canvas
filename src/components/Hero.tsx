import { ArrowRight, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroVideo from '@/assets/hero-bg.mp4';
import MagneticButton from './motion/MagneticButton';
import AnimatedCounter from './motion/AnimatedCounter';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ease = [0.22, 1, 0.36, 1] as const;
  const viewport = { once: false, amount: 0.2, margin: '-10% 0px -10% 0px' };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-end">
      {/* Cinematic video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Gradient overlays for readability — keeps face area clean, darkens bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />

      {/* Content — pushed to bottom (lower third safe zone), left aligned, never overlapping face */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-16 pt-[60vh] sm:pt-[62vh] lg:pt-[64vh]">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="inline-block px-4 py-2 bg-primary/15 backdrop-blur-md border border-primary/30 text-primary-foreground rounded-full text-sm font-medium mb-5"
          >
            Performance Marketer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
          >
            Hello, I'm <span className="gradient-text">Deep Kumar Das</span>
            <motion.span
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, delay: 0.45, ease }}
              className="block text-2xl sm:text-3xl mt-3 text-foreground/80 font-medium"
            >
              Google Ads & Meta Ads Specialist
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="text-xl sm:text-2xl text-foreground/75 mt-4 font-medium"
          >
            Performance Marketing Intern at <span className="text-primary font-semibold">GOADSLIVE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="text-lg text-foreground/70 mt-6 mb-8 leading-relaxed max-w-2xl"
          >
            I build and optimize Google Ads & Meta Ads campaigns that drive measurable results. From keyword research and audience targeting to ad copywriting and conversion tracking — I focus on improving CTR, reducing CPC, and maximizing ROI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="flex gap-8 mb-8"
          >
            {[
              { target: 5, suffix: '+', label: 'Certifications' },
              { target: 10, suffix: '+', label: 'Projects' },
              { target: 3, suffix: '+', label: 'Platforms' },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="text-3xl font-bold gradient-text">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 1.0, ease }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton>
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('#projects')}
                className="btn-hero group inline-flex items-center justify-center"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </MagneticButton>
            <MagneticButton>
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/resume')}
                className="btn-outline inline-flex items-center justify-center backdrop-blur-md"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </motion.button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
