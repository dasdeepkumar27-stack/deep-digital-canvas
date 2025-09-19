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
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Learning & Practice <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through design challenges and practical applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
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
                className={`skill-card group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
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
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work on <span className="gradient-text">Real Projects</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              While these represent my learning journey, I'm eager to apply these skills to actual client projects. 
              Let's collaborate and create something amazing together.
            </p>
            <button className="btn-hero">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;