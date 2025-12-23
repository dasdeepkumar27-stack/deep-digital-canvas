import { Briefcase, GraduationCap, MapPin, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="modern-section py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      {/* Floating Background Elements */}
      <div className="floating-element top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="floating-element top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      <div className="floating-element bottom-20 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Getting to Know Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            As a Digital Marketer in Kolkata, I'm passionate about digital marketing and design, constantly learning and growing in the field
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass-card p-8">
              <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                My journey as a Digital Marketer in Kolkata began with a curiosity about how brands connect with their audiences online. As a dedicated student at NIHT Bhawanipur, Kolkata, I've immersed myself in learning the intricacies of SEO, content optimization, and visual design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great digital marketing combines analytical thinking with creative expression. Through my studies and hands-on practice, I've developed skills in graphics design, WordPress development, and UI/UX design using Figma. My goal is to create compelling digital experiences that not only look great but also drive meaningful results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project is an opportunity to learn something new, and I approach each challenge with enthusiasm and a growth mindset. I'm excited to apply my skills in real-world scenarios and contribute to innovative digital marketing campaigns.
              </p>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Professional Skills</h3>
                  <p className="font-medium">Digital Marketing Intern</p>
                  <p className="text-sm text-muted-foreground">NIHT Bhawanipur, Kolkata</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Education</h3>
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
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Howrah, West Bengal 711101</p>
                  <p className="text-sm text-muted-foreground mt-1">Open to remote opportunities</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Approach</h3>
                  <p className="text-muted-foreground">Growth mindset with continuous learning</p>
                  <p className="text-sm text-muted-foreground mt-1">Data-driven creative solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;