import { ExternalLink, Figma, Code, Smartphone, Instagram, Globe, Video, Facebook, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FadeUp, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

const Portfolio = () => {
  const [pptModalOpen, setPptModalOpen] = useState(false);
  const projects = [
    { title: 'Facebook Ads Campaign', description: 'Managed a Facebook advertising campaign including audience targeting setup, ad creative selection, budget allocation, and performance monitoring through Ads Manager.', category: 'Paid Ads', icon: Facebook, featured: true, tech: ['Facebook Ads', 'Audience Targeting', 'Campaign Management', 'Analytics'], link: 'https://adsmanager.facebook.com/adsmanager/manage/ads/edit/standalone?act=980524780834920&business_id=1942326379950171&selected_campaign_ids=23851194704510794&selected_adset_ids=23851194704530794&selected_ad_ids=23851194704520794' },
    { title: 'Social Media Ad Campaign', description: 'Designed Instagram ad creatives and content calendar for a local business, focusing on engagement-driven content strategy.', category: 'Social Media Ads', icon: Instagram, tech: ['Social Media Ads', 'Content Strategy', 'Photoshop'], link: 'https://www.figma.com/design/8bSs72bn9kikPI6tTcvPiy/Untitled?node-id=0-1&p=f&t=s8U8E9jxQg1MKrta-0' },
    { title: 'E-commerce Landing Page', description: 'Designed a conversion-optimized landing page with clear CTAs, structured product layout, and SEO-friendly implementation.', category: 'Landing Page', icon: Globe, featured: true, tech: ['Landing Page', 'SEO', 'Conversion Optimization'], link: 'https://www.figma.com/proto/N2yMwwN9toGCuLgcABjR8Z/flipkart?t=s8U8E9jxQg1MKrta-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=5-53&starting-point-node-id=5%3A53' },
    { title: 'GRAVIX - App Prototype', description: 'Interactive mobile app prototype showcasing user flow design — useful for understanding conversion funnels in app campaigns.', category: 'UI/UX', icon: Smartphone, tech: ['Figma', 'Prototype', 'User Flow', 'Conversion Funnel'], link: 'https://www.figma.com/proto/hVz2J6WNxy2qwlIFEjr7cd/GRAVIX?node-id=83-7&p=f&t=pzAyywCPsXnaJjma-0&scaling=scale-down&content-scaling=fixed&page-id=81%3A2' },
    { title: 'Consciously Crafted Creations', description: 'Built a modern responsive website with clear navigation and conversion-oriented structure for a crafting business.', category: 'Web Development', icon: Globe, tech: ['React', 'Tailwind CSS', 'Responsive Design'], link: 'https://consciously-crafted-creations.lovable.app/' },
    { title: 'Brand Identity System', description: 'Created complete brand guidelines including visual identity, color palette, and typography — essential for consistent ad creatives.', category: 'Brand Strategy', icon: Figma, tech: ['Brand Guidelines', 'Figma', 'Visual Identity'], link: 'https://docs.google.com/spreadsheets/d/1OeKH_lCxTURVHo6yVJAA6aeCkVABiX7pze4XSckBPaM/edit?gid=0#gid=0' },
    { title: 'Panchabanjan Brand Manual', description: 'Complete brand guidelines for a Bengali fine dining restaurant — demonstrating strategic brand positioning and visual consistency.', category: 'Brand Strategy', icon: Figma, tech: ['Brand Guidelines', 'PowerPoint', 'Brand Strategy'], link: '/projects/panchabanjan-brand-manual.pptx', isPpt: true },
    { title: 'UGC Ad Content', description: 'Created user-generated style video ad content for product marketing — authentic storytelling approach for paid campaigns.', category: 'Video Ads', icon: Video, tech: ['Video Production', 'UGC', 'Ad Content'], link: '/videos/ugc-ad.mp4', isVideo: true },
    { title: 'Hoodie Brand Ad - Premiere Pro', description: 'Edited a hoodie brand advertisement in Adobe Premiere Pro for use in paid social campaigns.', category: 'Video Ads', icon: Video, tech: ['Premiere Pro', 'Video Editing', 'Ad Creative'], link: '/videos/premiere-pro-creative-edit.mp4', isVideo: true },
    { title: 'Product Ad - Premiere Pro', description: 'Creative product video ad edited in Adobe Premiere Pro for social media advertising.', category: 'Video Ads', icon: Video, tech: ['Premiere Pro', 'Video Editing', 'Product Marketing'], link: '/videos/premiere-pro-creative-edit-2.mp4', isVideo: true },
    { title: 'Motion Graphics Ad - After Effects', description: 'Text animation and motion graphics created in After Effects for eye-catching ad content.', category: 'Video Ads', icon: Video, tech: ['After Effects', 'Motion Graphics', 'Typography'], link: '/videos/after-effects-text-animation.mp4', isVideo: true },
    { title: 'Hand Cream Ad - After Effects', description: 'Professional motion graphics product advertisement created for paid social campaigns.', category: 'Video Ads', icon: Video, tech: ['After Effects', 'Motion Graphics', 'Product Ad'], link: '/videos/handcream-ad.mp4', isVideo: true },
  ];

  const categories = ['All', 'Paid Ads', 'Social Media Ads', 'Landing Page', 'Video Ads', 'Brand Strategy', 'UI/UX', 'Web Development'];

  return (
    <section id="projects" className="modern-section py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <motion.div className="floating-element top-20 left-10 w-32 h-32 bg-primary/8 rounded-full blur-2xl" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            Work & Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Campaigns, ad creatives, and marketing projects from my internship and training
          </p>
        </FadeUp>

        <FadeUp className="flex flex-wrap justify-center gap-4 mb-12" delay={0.1}>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-sm font-medium"
            >
              {category}
            </motion.button>
          ))}
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <StaggerItem key={project.title}>
                <div className={`h-full ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="portfolio-card h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      {project.featured && (
                        <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-medium">Featured</span>
                      )}
                    </div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                      <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">{project.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                      {project.link ? (
                        project.isPpt ? (
                          <button onClick={() => setPptModalOpen(true)} className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                            View Project <ExternalLink className="ml-1 h-3 w-3" />
                          </button>
                        ) : (
                          <a href={project.link} target={project.isVideo ? '_self' : '_blank'} rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                            {project.isVideo ? 'Watch Video' : 'View Project'} <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )
                      ) : (
                        <button className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                          View Details <ExternalLink className="ml-1 h-3 w-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp className="text-center mt-16" delay={0.2}>
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Contribute to <span className="gradient-text">Real Campaigns</span></h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
                These projects reflect my learning journey and internship experience. I'm eager to apply these skills in a full-time performance marketing role and contribute to impactful campaigns.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.97 }} 
                className="btn-hero"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </FadeUp>
      </div>

      <Dialog open={pptModalOpen} onOpenChange={setPptModalOpen}>
        <DialogContent className="max-w-6xl w-[95vw] h-[85vh] p-0">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-xl font-bold">Panchabanjan Brand Manual</DialogTitle>
          </DialogHeader>
          <div className="flex-1 p-4 pt-2 h-full">
            <iframe src={`https://docs.google.com/gview?url=${window.location.origin}/projects/panchabanjan-brand-manual.pptx&embedded=true`} className="w-full h-[calc(85vh-80px)] rounded-lg border border-border" title="Panchabanjan Brand Manual" />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
