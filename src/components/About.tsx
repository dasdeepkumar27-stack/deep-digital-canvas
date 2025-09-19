import { GraduationCap, MapPin, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about digital marketing and design, constantly learning and growing in the field
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                My journey into digital marketing began with a curiosity about how brands connect with their audiences online. As a dedicated student at NIHT Bhawanipur, Kolkata, I've immersed myself in learning the intricacies of SEO, content optimization, and visual design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great digital marketing combines analytical thinking with creative expression. Through my studies and hands-on practice, I've developed skills in graphics design, WordPress development, and UI/UX design using Figma. My goal is to create compelling digital experiences that not only look great but also drive meaningful results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project is an opportunity to learn something new, and I approach each challenge with enthusiasm and a growth mindset. I'm excited to apply my skills in real-world scenarios and contribute to innovative digital marketing campaigns.
              </p>
            </div>
          </div>

          {/* Education & Details */}
          <div className="space-y-6">
            <div className="skill-card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Education</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">Digital Marketing Course</p>
                      <p className="text-sm text-muted-foreground">NIHT Bhawanipur, Kolkata (Currently Pursuing)</p>
                    </div>
                    <div>
                      <p className="font-medium">12th Grade - 82%</p>
                      <p className="text-sm text-muted-foreground">Bantra MSPC High School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Kolkata, West Bengal, India</p>
                  <p className="text-sm text-muted-foreground mt-1">Open to remote opportunities</p>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
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