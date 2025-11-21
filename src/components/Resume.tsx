import { Briefcase, GraduationCap, Mail, MapPin, Phone, Linkedin, Award, TrendingUp } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional Experience & Qualifications</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact & Skills */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="glass-card p-6 animate-slide-in-left">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Howrah, West Bengal</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+91-7439482314</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground break-all">dasdeepkumar27@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    linkedin.com
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Skills */}
            <div className="glass-card p-6 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Skills
              </h3>
              <div className="space-y-4">
                {[
                  { skill: 'Digital Marketing', level: 'Advanced' },
                  { skill: 'Google Ads', level: 'Basic' },
                  { skill: 'Graphic Design', level: 'Advanced' },
                  { skill: 'UI/UX Design', level: 'Intermediate' },
                  { skill: 'AI Tools', level: 'Intermediate' }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{item.skill}</span>
                      <span className="text-xs text-muted-foreground">{item.level}</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: item.level === 'Advanced' ? '90%' : item.level === 'Intermediate' ? '70%' : '40%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="space-y-2">
                {['English', 'Hindi', 'Bengali'].map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{lang}</span>
                    <span className="text-xs text-muted-foreground">Professional</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card p-6 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Interests
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Digital Marketing Trends
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  AI-Powered Creativity
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <div className="glass-card p-6 animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creative and technically-skilled design professional with comprehensive training in UI/UX design, 
                digital marketing, and visual communications. Proven ability to create engaging user interfaces, 
                develop brand identities, and produce compelling visual content. Strong foundation in both traditional 
                industrial processes and modern digital tools, bringing unique perspective to creative problem-solving.
              </p>
            </div>

            {/* Work Experience */}
            <div className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {/* Digital Marketing Intern */}
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-lg">Digital Media Marketing Intern</h4>
                      <p className="text-primary font-medium">NIHT Digital Marketing Institute</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Digitally-skilled intern with a strong foundation in digital marketing, including SEO and Google Ads, 
                    complemented by UI/UX design capabilities. Proficient in creating user-centered designs in Figma, 
                    building cohesive brand identities, and producing engaging motion graphics for social media. 
                    Experienced in collaborating within agile teams to support the full lifecycle of digital marketing 
                    campaigns, from research and planning to execution and analysis.
                  </p>
                </div>

                {/* Apprentice Trainee */}
                <div className="border-l-2 border-secondary pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-lg">Apprentice Trainee – Production Department</h4>
                      <p className="text-primary font-medium">Jubilant FoodWorks Ltd.</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Maintained quality control standards and followed safety protocols. Gained hands-on experience 
                    in industrial operations and supply chain management.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {/* ITI */}
                <div className="border-l-2 border-primary pl-4">
                  <div className="mb-2">
                    <h4 className="font-bold text-lg">ITI – Fitter Trade</h4>
                    <p className="text-primary font-medium">Howrah Homes Industrial Training Institute</p>
                    <p className="text-sm text-muted-foreground">2021 - 2023</p>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="border-l-2 border-secondary pl-4">
                  <div className="mb-2">
                    <h4 className="font-bold text-lg">Higher Secondary Education</h4>
                    <p className="text-primary font-medium">Bantra M.S.P.C. High School</p>
                    <p className="text-sm text-muted-foreground">2021</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="glass-card p-6 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a 
                  href="/DEEP_KUMAR_DAS_RESUME.pdf" 
                  download
                  className="btn-hero inline-flex items-center justify-center w-full sm:w-auto"
                >
                  <Award className="mr-2 h-5 w-5" />
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;