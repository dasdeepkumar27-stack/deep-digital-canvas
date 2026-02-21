import { ExternalLink, Figma, Code, Smartphone, Instagram, Globe, Video, Facebook } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FadeUp, StaggerContainer, StaggerItem } from './motion/AnimatedSection';

const Portfolio = () => {
  const [pptModalOpen, setPptModalOpen] = useState(false);
  const projects = [
    { title: 'GRAVIX - UI/UX Design Prototype', description: 'Interactive mobile app prototype showcasing modern design principles and user experience flow.', category: 'UI/UX Design', icon: Smartphone, featured: true, tech: ['Figma', 'Prototype', 'Mobile Design', 'UI/UX'], link: 'https://www.figma.com/proto/hVz2J6WNxy2qwlIFEjr7cd/GRAVIX?node-id=83-7&p=f&t=pzAyywCPsXnaJjma-0&scaling=scale-down&content-scaling=fixed&page-id=81%3A2' },
    { title: 'Consciously Crafted Creations', description: 'Modern responsive website showcasing creative crafting services with elegant design and user experience.', category: 'Web Development', icon: Globe, tech: ['React', 'Tailwind CSS', 'Responsive Design', 'Modern UI'], link: 'https://consciously-crafted-creations.lovable.app/' },
    { title: 'Brand Identity System', description: 'Complete brand manual including logo design, color palette, and typography guidelines.', category: 'Brand Design', icon: Figma, tech: ['Brand Design', 'Figma', 'Adobe Photoshop'], link: 'https://docs.google.com/spreadsheets/d/1OeKH_lCxTURVHo6yVJAA6aeCkVABiX7pze4XSckBPaM/edit?gid=0#gid=0' },
    { title: 'Panchabanjan Brand Manual', description: 'Complete brand guidelines for Panchabanjan, a Bengali fine dining restaurant in Kolkata.', category: 'Brand Design', icon: Figma, featured: true, tech: ['Brand Guidelines', 'PowerPoint', 'Brand Strategy', 'Class Project'], link: '/projects/panchabanjan-brand-manual.pptx', isPpt: true },
    { title: 'Social Media Campaign', description: 'Instagram page design and content calendar for a local business, increasing engagement by 40%.', category: 'Social Media', icon: Instagram, tech: ['Social Media', 'Content Strategy', 'Photoshop'], link: 'https://www.figma.com/design/8bSs72bn9kikPI6tTcvPiy/Untitled?node-id=0-1&p=f&t=s8U8E9jxQg1MKrta-0' },
    { title: 'E-commerce Landing Page', description: 'High-converting landing page design with optimized user flow and SEO implementation.', category: 'Web Design', icon: Globe, tech: ['Landing Page', 'SEO', 'Conversion Optimization'], link: 'https://www.figma.com/proto/N2yMwwN9toGCuLgcABjR8Z/flipkart?t=s8U8E9jxQg1MKrta-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=5-53&starting-point-node-id=5%3A53' },
    { title: 'Portfolio Website Design', description: 'Creative portfolio website mockup showcasing modern design trends and user experience.', category: 'Web Design', icon: Figma, tech: ['Portfolio Design', 'Figma', 'Web Design'], link: 'https://www.figma.com/design/hVz2J6WNxy2qwlIFEjr7cd/GRAVIX?node-id=5-29&p=f&t=BnvmPuESvi4h1Cf6-0' },
    { title: 'UGC Ad Campaign', description: 'User-generated content advertisement showcasing authentic product storytelling and engagement.', category: 'Video Marketing', icon: Video, tech: ['Video Production', 'UGC', 'Content Marketing'], link: '/videos/ugc-ad.mp4', isVideo: true },
    { title: 'Facebook Ads Campaign', description: 'Managed Facebook advertising campaign with optimized targeting, ad creatives, and performance tracking.', category: 'Performance Creatives', icon: Facebook, tech: ['Facebook Ads', 'Targeting', 'Campaign Management', 'Analytics'], link: 'https://adsmanager.facebook.com/adsmanager/manage/ads/edit/standalone?act=980524780834920&business_id=1942326379950171&selected_campaign_ids=23851194704510794&selected_adset_ids=23851194704530794&selected_ad_ids=23851194704520794' },
    { title: 'Adobe Premiere Pro - Creative Edit', description: 'Hoodie brand advertisement edited in Adobe Premiere Pro, showcasing creative editing techniques.', category: 'Video Editing', icon: Video, tech: ['Adobe Premiere Pro', 'Video Editing', 'Brand Advertisement', 'Fashion Marketing'], link: '/videos/premiere-pro-creative-edit.mp4', isVideo: true },
    { title: 'Adobe Premiere Pro - Creative Edit 2', description: 'Creative video edit produced in Adobe Premiere Pro, demonstrating professional editing skills.', category: 'Video Editing', icon: Video, tech: ['Adobe Premiere Pro', 'Video Editing', 'Creative Production', 'Visual Effects'], link: '/videos/premiere-pro-creative-edit-2.mp4', isVideo: true },
    { title: 'Adobe After Effects - Text Animation', description: 'Creative text animation crafted in Adobe After Effects, showcasing typography motion design.', category: 'Video Editing', icon: Video, tech: ['Adobe After Effects', 'Text Animation', 'Motion Graphics', 'Typography'], link: '/videos/after-effects-text-animation.mp4', isVideo: true },
    { title: 'Indian Style Wedding Card Animation', description: 'Beautiful Indian wedding invitation card animation created in Adobe After Effects.', category: 'Video Editing', icon: Video, tech: ['Adobe After Effects', 'Wedding Design', 'Motion Graphics', 'Traditional Art'], link: '/videos/wedding-card-animation.mp4', isVideo: true },
    { title: 'Hand Cream Advertisement', description: 'Professional motion graphics advertisement created in Adobe After Effects.', category: 'Video Editing', icon: Video, tech: ['Adobe After Effects', 'Motion Graphics', 'Commercial Ad', 'Visual Effects'], link: '/videos/handcream-ad.mp4', isVideo: true },
    { title: 'AI-Generated Video Content', description: 'Creative video content generated using Google Gemini AI.', category: 'Video Marketing', icon: Video, tech: ['AI Video Generation', 'Google Gemini', 'Video Editing', 'Content Creation'], link: '/videos/gemini-generated-video.mp4', isVideo: true },
    { title: 'AI Video Creation - Gemini', description: 'Innovative video content produced with Google Gemini AI.', category: 'Video Marketing', icon: Video, tech: ['Google Gemini', 'AI Content Creation', 'Video Marketing', 'Digital Innovation'], link: '/videos/gemini-video-2.mp4', isVideo: true }
  ];

  const categories = ['All', 'UI/UX Design', 'Web Development', 'Brand Design', 'Social Media', 'Web Design', 'Video Marketing', 'Performance Creatives', 'Video Editing'];

  return (
    <section id="portfolio" className="modern-section py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <motion.div className="floating-element top-20 left-10 w-32 h-32 bg-primary/8 rounded-full blur-2xl" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            My Creative Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Learning & Practice <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing my journey through design challenges and practical applications
          </p>
        </FadeUp>

        {/* Category Filter */}
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

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <StaggerItem key={project.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`portfolio-card ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
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
                    <span className="text-sm text-muted-foreground">{project.link ? 'Live Project' : 'Practice Project'}</span>
                    {project.link ? (
                      project.isPpt ? (
                        <button onClick={() => setPptModalOpen(true)} className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                          View Presentation <ExternalLink className="ml-1 h-3 w-3" />
                        </button>
                      ) : (
                        <a href={project.link} target={project.isVideo ? '_self' : '_blank'} rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                          {project.isVideo ? 'Watch Video' : 'View Prototype'} <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )
                    ) : (
                      <button className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                        View Details <ExternalLink className="ml-1 h-3 w-3" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp className="text-center mt-16" delay={0.2}>
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Work on <span className="gradient-text">Real Projects</span></h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
                While these represent my learning journey, I'm eager to apply these skills to actual client projects. Let's collaborate and create something amazing together.
              </p>
              <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="btn-hero">
                Start a Project
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
