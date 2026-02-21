import { ArrowRight, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import deepProfile from '@/assets/deep-profile-new.png';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl"
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
        animate={{ y: [0, -10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-6">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                Digital Marketing Specialist
              </motion.span>
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Hello, I'm{' '}
                <span className="gradient-text">Deep Kumar Das</span>
                <span className="block text-2xl sm:text-3xl mt-2 text-muted-foreground font-medium">Performance Creative Specialist</span>
              </motion.h1>
              <motion.h2
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-xl sm:text-2xl text-muted-foreground mt-4 font-medium"
              >
                Performance Marketing Intern at <span className="text-primary font-semibold">GOADSLIVE</span>
              </motion.h2>
            </div>
            
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              As a Performance Creative Specialist & Performance Marketing Intern at GOADSLIVE, I manage Meta Ads campaigns, optimize performance creatives, analyze ad metrics, and craft high-converting short-form video ads to improve conversion rates and ROI.
            </motion.p>
            
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('#portfolio')}
                className="btn-hero group inline-flex items-center justify-center"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/resume')}
                className="btn-outline inline-flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </motion.button>
            </motion.div>
          </div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <img
                  src={deepProfile}
                  alt="Deep Kumar Das - Performance Creative Specialist & Digital Marketing Intern at GOADSLIVE"
                  className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-lg"
                />
                <motion.div
                  className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm text-center leading-tight shadow-lg shadow-primary/30"
                  animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  GoAdsLive<br />Intern
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
