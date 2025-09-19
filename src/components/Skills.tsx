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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern digital marketing and creative design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.title}
                className="skill-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
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
        <div className="mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
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
    </section>
  );
};

export default Skills;