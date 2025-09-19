import { 
  Search, 
  Palette, 
  Code, 
  Calendar, 
  FileText, 
  Camera, 
  Figma, 
  Instagram,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'WordPress Development',
      description: 'Creating responsive and user-friendly websites',
      color: 'text-blue-600'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Content optimization and search engine strategies',
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      title: 'Social Media Calendar',
      description: 'Strategic content planning and scheduling',
      color: 'text-purple-600'
    },
    {
      icon: FileText,
      title: 'Brand Manuals',
      description: 'Comprehensive brand guideline development',
      color: 'text-orange-600'
    },
    {
      icon: Palette,
      title: 'Adobe Photoshop',
      description: 'Advanced photo editing and graphic design',
      color: 'text-blue-500'
    },
    {
      icon: Camera,
      title: 'Video Editing',
      description: 'Creating engaging video content',
      color: 'text-red-600'
    },
    {
      icon: Figma,
      title: 'Figma Design',
      description: 'UI/UX design, portfolio design, website design',
      color: 'text-pink-600'
    },
    {
      icon: Instagram,
      title: 'Instagram Page Creation',
      description: 'Social media presence and content strategy',
      color: 'text-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Flipkart Application Design',
      description: 'Mobile app UI/UX design concepts',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section id="skills" className="modern-section py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      {/* Floating Background Elements */}
      <div className="floating-element top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div className="floating-element top-1/3 left-20 w-16 h-16 bg-secondary/10 rounded-full blur-lg"></div>
      <div className="floating-element bottom-1/4 right-1/3 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            What I Bring to the Table
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for modern digital marketing and creative design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.title}
                className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className={`h-6 w-6 ${skill.color.startsWith('text-gradient') ? 'text-primary' : skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Skill */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="glass-card p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
            <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">
              Specialized in <span className="gradient-text">Figma Design</span>
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From UI/UX design to complete website mockups, I leverage Figma's powerful features to create 
              stunning, user-centered designs. My portfolio includes everything from mobile app interfaces 
              to comprehensive brand identity systems.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;