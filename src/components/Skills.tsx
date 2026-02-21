import { 
  Search, Palette, Code, Calendar, FileText, Camera, Figma, Instagram, Smartphone, Layout
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

const Skills = () => {
  const skills = [
    { icon: Camera, title: 'Short-Form Video Ads', description: 'Creating engaging video ads for paid campaigns', color: 'text-red-600' },
    { icon: Palette, title: 'Ad Creative Design', description: 'High-converting static and motion graphics for ads', color: 'text-blue-500' },
    { icon: Figma, title: 'UI/UX for Conversion', description: 'Landing pages and ad designs optimized for action', color: 'text-pink-600' },
    { icon: Layout, title: 'Landing Page Design', description: 'Conversion-focused page designs in Figma', color: 'text-cyan-600', link: 'https://www.figma.com/design/hVz2J6WNxy2qwlIFEjr7cd/GRAVIX?node-id=5-29&p=f&t=BnvmPuESvi4h1Cf6-0' },
    { icon: Search, title: 'Google Ads Basics', description: 'Fundamental understanding of paid search campaigns', color: 'text-green-600' },
    { icon: Instagram, title: 'Social Media Ads', description: 'Creative content for Meta and social ad platforms', color: 'text-primary' },
    { icon: FileText, title: 'Brand Guidelines', description: 'Consistent visual identity for ad campaigns', color: 'text-orange-600' },
    { icon: Code, title: 'Basic Web Development', description: 'WordPress and landing page implementation', color: 'text-blue-600' },
    { icon: Calendar, title: 'Content Planning', description: 'Strategic ad creative scheduling and delivery', color: 'text-purple-600' },
    { icon: Smartphone, title: 'Mobile-First Design', description: 'Ad creatives optimized for mobile experiences', color: 'text-indigo-600' }
  ];

  return (
    <section id="skills" className="modern-section py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <motion.div className="floating-element top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            What I Bring to the Table
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A focused toolkit for creating high-converting ad creatives and video content
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            const CardContent = (
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className={`h-6 w-6 ${skill.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                </div>
              </div>
            );

            return (
              <StaggerItem key={skill.title}>
                <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.25 }}>
                  {skill.link ? (
                    <a href={skill.link} target="_blank" rel="noopener noreferrer" className="glass-card p-6 group block hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer">
                      {CardContent}
                    </a>
                  ) : (
                    <div className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                      {CardContent}
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp className="mt-12" delay={0.3}>
          <div className="glass-card p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Specialized in <span className="gradient-text">Performance Creatives</span>
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From short-form video ads to static ad creatives, I focus on building visuals that drive clicks and conversions. 
                My work combines video editing skills with UI/UX principles to create ad content 
                that captures attention and motivates action.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Skills;
