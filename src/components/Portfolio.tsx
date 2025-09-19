import { ExternalLink, Figma, Code, Smartphone, Instagram, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Flipkart Application Design',
      description: 'Mobile app UI/UX design concept with modern interface elements and user-friendly navigation.',
      category: 'UI/UX Design',
      icon: Smartphone,
      featured: true,
      tech: ['Figma', 'Mobile Design', 'UI/UX']
    },
    {
      title: 'WordPress Business Site',
      description: 'Responsive business website built with WordPress, optimized for SEO and conversions.',
      category: 'Web Development',
      icon: Code,
      tech: ['WordPress', 'SEO', 'Responsive Design']
    },
    {
      title: 'Brand Identity System',
      description: 'Complete brand manual including logo design, color palette, and typography guidelines.',
      category: 'Brand Design',
      icon: Figma,
      tech: ['Brand Design', 'Figma', 'Adobe Photoshop']
    },
    {
      title: 'Social Media Campaign',
      description: 'Instagram page design and content calendar for a local business, increasing engagement by 40%.',
      category: 'Social Media',
      icon: Instagram,
      tech: ['Social Media', 'Content Strategy', 'Photoshop']
    },
    {
      title: 'E-commerce Landing Page',
      description: 'High-converting landing page design with optimized user flow and SEO implementation.',
      category: 'Web Design',
      icon: Globe,
      tech: ['Landing Page', 'SEO', 'Conversion Optimization']
    },
    {
      title: 'Portfolio Website Design',
      description: 'Creative portfolio website mockup showcasing modern design trends and user experience.',
      category: 'Web Design',
      icon: Figma,
      tech: ['Portfolio Design', 'Figma', 'Web Design']
    }
  ];

  const categories = ['All', 'UI/UX Design', 'Web Development', 'Brand Design', 'Social Media', 'Web Design'];

  return (
    <section id="portfolio" className="modern-section py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      {/* Floating Background Elements */}
      <div className="floating-element top-20 left-10 w-32 h-32 bg-primary/8 rounded-full blur-2xl"></div>
      <div className="floating-element top-1/2 right-20 w-20 h-20 bg-secondary/8 rounded-full blur-xl"></div>
      <div className="floating-element bottom-20 left-1/3 w-24 h-24 bg-accent/8 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            My Creative Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Learning & Practice <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing my journey through design challenges and practical applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-right">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.title}
                className={`portfolio-card ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Practice Project</span>
                  <button className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                    View Details
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
            <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work on <span className="gradient-text">Real Projects</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              While these represent my learning journey, I'm eager to apply these skills to actual client projects. 
              Let's collaborate and create something amazing together.
            </p>
            <button className="btn-hero hover:scale-105 transition-transform duration-300">
              Start a Project
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;