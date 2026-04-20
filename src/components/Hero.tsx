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

  const leftBase = 0.05;
  const rightBase = 0.45;
  const bottomBase = 0.8;

  return (
    <>
      {/* ===================== MOBILE LAYOUT (clean stacked, auto height) ===================== */}
      <section id="home" className="lg:hidden relative w-full bg-background">
        {/* Image at top */}
        <div className="w-full aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-background">
          <video
            className="w-full h-full object-cover object-top"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>

        {/* Stacked content */}
        <div className="px-5 py-8 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-2 bg-primary/30 backdrop-blur-md border border-primary/50 text-primary-foreground rounded-full text-sm font-medium mb-4 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
            Performance Marketer
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">
            Hello, I'm <span className="gradient-text">Deep Kumar Das</span>
            <span className="block text-xl sm:text-2xl mt-2 text-foreground/80 font-medium">
              Google Ads & Meta Ads Specialist
            </span>
          </h1>

          <h2 className="text-base sm:text-lg text-foreground/75 mt-3 font-medium">
            Performance Marketing Intern at <span className="text-primary font-semibold">GOADSLIVE</span>
          </h2>

          <p className="text-base text-foreground/70 leading-relaxed mt-4 w-full">
            I build and optimize Google Ads & Meta Ads campaigns that drive measurable results. From keyword research and audience targeting to ad copywriting and conversion tracking — I focus on improving CTR, reducing CPC, and maximizing ROI.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-6 justify-center">
            {[
              { target: 5, suffix: '+', label: 'Certifications' },
              { target: 10, suffix: '+', label: 'Projects' },
              { target: 3, suffix: '+', label: 'Platforms' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} delay={0} duration={0.9} />
                </div>
                <p className="text-xs text-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full mt-6">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-hero group inline-flex items-center justify-center w-full"
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/resume')}
              className="btn-outline inline-flex items-center justify-center backdrop-blur-md w-full"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* ===================== DESKTOP LAYOUT (unchanged) ===================== */}
      <section className="hidden lg:flex h-screen relative overflow-hidden items-end">
        {/* Cinematic video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover [object-position:center_30%]"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />

        <div className="relative z-10 w-full pb-8 pt-[36vh]">
          <div className="grid grid-cols-12 gap-0 items-start">
            {/* LEFT */}
            <div className="col-span-5 text-left pl-[80px]">
              <motion.span
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: leftBase, ease }}
                className="inline-block px-4 py-2 bg-primary/30 backdrop-blur-md border border-primary/50 text-primary-foreground rounded-full text-sm font-medium mb-5 shadow-[0_0_15px_rgba(var(--primary),0.3)]"
              >
                Performance Marketer
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, delay: leftBase + 0.12, ease }}
                className="text-6xl font-bold leading-tight text-foreground"
              >
                Hello, I'm <span className="gradient-text">Deep Kumar Das</span>
                <motion.span
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: leftBase + 0.22, ease }}
                  className="block text-3xl mt-3 text-foreground/80 font-medium"
                >
                  Google Ads & Meta Ads Specialist
                </motion.span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, delay: leftBase + 0.32, ease }}
                className="text-2xl text-foreground/75 mt-4 font-medium"
              >
                Performance Marketing Intern at <span className="text-primary font-semibold">GOADSLIVE</span>
              </motion.h2>
            </div>

            {/* Spacer */}
            <div className="col-span-2" />

            {/* RIGHT */}
            <div className="col-span-5 flex justify-end pr-[80px]">
              <motion.p
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: rightBase, ease }}
                className="text-lg text-foreground/70 leading-relaxed max-w-md text-right"
              >
                I build and optimize Google Ads & Meta Ads campaigns that drive measurable results. From keyword research and audience targeting to ad copywriting and conversion tracking — I focus on improving CTR, reducing CPC, and maximizing ROI.
              </motion.p>
            </div>
          </div>

          {/* CENTER BOTTOM */}
          <div className="mt-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: bottomBase, ease }}
              className="flex gap-14 mb-5 justify-center"
            >
              {[
                { target: 5, suffix: '+', label: 'Certifications' },
                { target: 10, suffix: '+', label: 'Projects' },
                { target: 3, suffix: '+', label: 'Platforms' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} delay={0.1} duration={0.9} />
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: bottomBase + 0.1, ease }}
              className="flex flex-row gap-4 justify-center"
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
    </>
  );
};

export default Hero;
