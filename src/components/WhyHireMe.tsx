import {
  Megaphone, LineChart, Mail, MapPin, LayoutTemplate, Video, CalendarDays, Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

const WhyHireMe = () => {
  const reasons = [
    { icon: Megaphone, title: 'Google Ads + Meta Ads Management', description: 'Hands-on experience running Search, Display, Video, and Meta ad campaigns with audience targeting, optimization, and lead generation.', color: 'text-blue-500' },
    { icon: LineChart, title: 'Conversion Tracking & Data Analysis', description: 'Setting up conversion tracking, analyzing campaign performance, CTR, CPC, leads, and optimizing campaigns based on real data.', color: 'text-cyan-500' },
    { icon: Mail, title: 'Email Campaign Setup & Automation', description: 'Creating and managing email campaigns for lead nurturing, customer engagement, and conversion-focused communication.', color: 'text-purple-500' },
    { icon: MapPin, title: 'Local SEO + GMB Optimization', description: 'Improving local business visibility through Google Business Profile optimization, local SEO strategy, and search presence improvement.', color: 'text-green-500' },
    { icon: LayoutTemplate, title: 'Landing Page Strategy + UI/UX', description: 'Designing conversion-focused landing pages using Figma, UI/UX principles, and Google-friendly structure for lead generation.', color: 'text-indigo-500' },
    { icon: Video, title: 'AI Video Creation + Video Editing', description: 'Creating premium AI-generated video ads and editing performance-focused marketing creatives for paid campaigns and branding.', color: 'text-pink-500' },
    { icon: CalendarDays, title: 'Social Media Content Planning', description: 'Building social media content calendars and campaign planning strategies aligned with business goals and audience engagement.', color: 'text-orange-500' },
    { icon: Rocket, title: 'Performance-Driven Optimization', description: 'Continuous bid optimization, ad testing, audience refinement, and budget scaling for better ROI and business growth.', color: 'text-primary' },
  ];

  return (
    <section id="why-hire-me" className="modern-section py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <motion.div className="floating-element top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="floating-element bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            Why Work With Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Why <span className="gradient-text">Hire Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            What makes me a strong performance marketing professional
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I bring practical hands-on experience across paid advertising, conversion tracking, local SEO, landing page strategy, and creative performance marketing. My focus is not just running campaigns — but driving measurable business growth using strategy, optimization, and data-backed decisions.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <StaggerItem key={reason.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, hsl(184 80% 55% / 0.15), hsl(210 90% 55% / 0.15))',
                    }}
                  />
                  <div className="relative z-[1]">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 mb-4"
                    >
                      <IconComponent className={`h-6 w-6 ${reason.color}`} />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyHireMe;
