import { 
  Search, Target, FileText, BarChart3, TrendingUp, Megaphone, MousePointerClick, Layers, Palette, Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

const Skills = () => {
  const skills = [
    { icon: Search, title: 'Google Ads Management', description: 'Search, Display & Video campaign setup, optimization, and management', color: 'text-green-600' },
    { icon: Megaphone, title: 'Meta Ads Execution', description: 'Facebook & Instagram ad campaigns with audience targeting and A/B testing', color: 'text-blue-500' },
    { icon: Target, title: 'Keyword Research & Targeting', description: 'In-depth keyword analysis, match types, and negative keyword strategy', color: 'text-red-600' },
    { icon: MousePointerClick, title: 'Ad Copywriting', description: 'Conversion-focused headlines, descriptions, and CTAs for paid ads', color: 'text-primary' },
    { icon: TrendingUp, title: 'Campaign Optimization', description: 'Bid adjustments, quality score improvement, and budget allocation', color: 'text-cyan-600' },
    { icon: BarChart3, title: 'Performance Tracking', description: 'CTR, CPC, conversion rate analysis using Google Analytics & Ads dashboards', color: 'text-purple-600' },
    { icon: Layers, title: 'Audience Segmentation', description: 'Custom audiences, lookalikes, retargeting, and demographic targeting', color: 'text-orange-600' },
    { icon: FileText, title: 'Landing Page Strategy', description: 'Conversion-focused landing page recommendations and optimization', color: 'text-indigo-600' },
    { icon: Palette, title: 'Ad Creative Support', description: 'Understanding of ad creatives that helps improve campaign performance', color: 'text-pink-600' },
    { icon: Smartphone, title: 'GMB & Local Ads', description: 'Google My Business optimization and local advertising campaigns', color: 'text-blue-600' }
  ];

  return (
    <section id="skills" className="modern-section py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <motion.div className="floating-element top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Practical skills in paid advertising, campaign management, and performance optimization
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
                <div className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  {CardContent}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp className="mt-12" delay={0.3}>
          <div className="glass-card p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Focused on <span className="gradient-text">Measurable Results</span>
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From Google Ads Search campaigns to Meta Ads retargeting, I focus on building and optimizing campaigns 
                that deliver real business outcomes. Every decision is backed by data — CTR, CPC, conversions, and ROI.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Skills;
