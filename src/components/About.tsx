import { Briefcase, GraduationCap, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, SlideInLeft, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="modern-section py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <motion.div className="floating-element top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="floating-element top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Getting to Know Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A results-driven Performance Marketer passionate about building campaigns that deliver measurable outcomes
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            <div className="glass-card p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  My journey into performance marketing started with a fascination for how paid ads can drive real business results. Currently working as a Performance Marketing Intern at <strong className="text-primary">GOADSLIVE</strong>, I manage Google Ads and Meta Ads campaigns, handle keyword research, write conversion-focused ad copy, and track key metrics like CTR, CPC, and conversions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through hands-on experience at GOADSLIVE and training at NIHT, I've built practical skills in campaign setup, audience targeting, bid optimization, and performance analysis. I also have an understanding of ad creatives, which helps improve campaign performance and ad relevance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I approach every campaign with a data-driven mindset and a commitment to continuous learning. Open to opportunities in performance marketing and paid advertising roles where I can contribute and grow.
                </p>
              </div>
            </div>
          </SlideInLeft>

          <StaggerContainer className="space-y-6" delay={0.1}>
            {[
              {
                icon: Briefcase,
                title: 'Current Role',
                highlight: true,
                content: (
                  <>
                    <p className="font-semibold text-primary">Performance Marketing Intern</p>
                    <p className="text-sm font-medium">GOADSLIVE · <span className="text-muted-foreground">Present</span></p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      Managing Google Ads & Meta Ads campaigns, performing keyword research, writing ad copy, optimizing bids and targeting, and analyzing campaign performance to improve CTR and reduce CPC.
                    </p>
                  </>
                ),
              },
              {
                icon: Briefcase,
                title: 'Previous Training',
                content: (
                  <>
                    <p className="font-medium">Digital Marketing Trainee</p>
                    <p className="text-sm text-muted-foreground">NIHT Bhawanipur, Kolkata</p>
                  </>
                ),
              },
              {
                icon: GraduationCap,
                title: 'Education',
                iconColor: 'text-secondary',
                content: (
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">ITI – Fitter Trade 2021-2023</p>
                      <p className="text-sm text-muted-foreground">Howrah Homes Industrial Training Institute</p>
                    </div>
                    <div>
                      <p className="font-medium">Higher Secondary Education 2021</p>
                      <p className="text-sm text-muted-foreground">Bantra M.S.P.C. High School</p>
                    </div>
                  </div>
                ),
              },
              {
                icon: MapPin,
                title: 'Location',
                iconColor: 'text-secondary',
                content: (
                  <>
                    <p className="text-muted-foreground">Howrah, West Bengal 711101</p>
                    <p className="text-sm text-muted-foreground mt-1">Open to remote & on-site opportunities</p>
                  </>
                ),
              },
              {
                icon: TrendingUp,
                title: 'Approach',
                content: (
                  <>
                    <p className="text-muted-foreground">Data-driven campaign optimization</p>
                    <p className="text-sm text-muted-foreground mt-1">Focused on CTR, CPC & conversion metrics</p>
                  </>
                ),
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ y: -2, boxShadow: '0 8px 30px -5px hsl(217 91% 60% / 0.12)' }}
                    transition={{ duration: 0.25 }}
                    className={`glass-card p-6 transition-all duration-300 ${item.highlight ? 'border-l-4 border-l-primary' : ''}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg">
                        <Icon className={`h-6 w-6 ${item.iconColor || 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
