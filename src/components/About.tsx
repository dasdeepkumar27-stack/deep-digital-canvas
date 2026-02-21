import { Briefcase, GraduationCap, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, SlideInLeft, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="modern-section py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      {/* Floating Background Elements */}
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
            A Performance Creative Specialist passionate about crafting ad creatives that convert and video content that engages
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <SlideInLeft>
            <div className="glass-card p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  My journey as a Performance Creative Specialist began with a curiosity about what makes people click and convert. Currently working as a Performance Marketing Intern at <strong className="text-primary">GOADSLIVE</strong>, I manage Meta Ads campaigns, optimize performance creatives, and analyze ad metrics to improve conversion rates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that great ad creatives combine visual storytelling with an understanding of what drives action. Through hands-on experience at GOADSLIVE and training at NIHT, I've developed skills in Meta Ads management, short-form video editing, GMB optimization, and UI/UX design for conversion.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every project is an opportunity to learn something new, and I approach each challenge with enthusiasm and a growth mindset. I'm excited to bring my skills to teams looking for fresh, conversion-focused ad creatives and performance marketing solutions.
                </p>
              </div>
            </div>
          </SlideInLeft>

          {/* Professional Details */}
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
                      Working on Meta Ads campaign management, performance creative optimization, audience targeting, and analyzing ad performance metrics to improve conversion rates and ROI.
                    </p>
                  </>
                ),
              },
              {
                icon: Briefcase,
                title: 'Previous Training',
                content: (
                  <>
                    <p className="font-medium">Performance Creative Trainee</p>
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
                    <p className="text-sm text-muted-foreground mt-1">Open to remote opportunities</p>
                  </>
                ),
              },
              {
                icon: TrendingUp,
                title: 'Approach',
                content: (
                  <>
                    <p className="text-muted-foreground">Growth mindset with continuous learning</p>
                    <p className="text-sm text-muted-foreground mt-1">Conversion-focused creative thinking</p>
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
