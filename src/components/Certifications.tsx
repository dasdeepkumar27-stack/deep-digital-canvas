import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FadeUp, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

const Certifications = () => {
  const certifications = [
    { name: 'Google Ads Video Certification', organization: 'Google', year: '2026', certificateUrl: '/certificates/video-certification.jpg' },
    { name: 'Google Ads Display Certification', organization: 'Google', year: '2026', certificateUrl: '/certificates/display-certification.png' },
    { name: 'Google Analytics Certification', organization: 'Google', year: '2026', certificateUrl: '/certificates/analytics-certification.png' },
    { name: 'Google Ads Search Certification', organization: 'Google', year: '2026', certificateUrl: '/certificates/search-certification.png' }
  ];

  return (
    <section id="certifications" className="modern-section py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <motion.div className="floating-element top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My Verified Professional Certifications
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                      <p className="text-muted-foreground text-sm">{cert.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">Completed: {cert.year}</span>
                    <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Certifications;
