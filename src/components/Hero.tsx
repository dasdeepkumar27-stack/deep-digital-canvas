import { ArrowRight, Download } from 'lucide-react';
import deepProfile from '@/assets/deep-profile-new.png';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Digital Marketing Specialist
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="gradient-text">Deep Kumar Das</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground mt-4 font-medium">
                Digital Marketer & Creative Design Specialist
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I specialize in SEO, graphics design, and Figma, constantly seeking new ways to optimize content and craft visually stunning and user-friendly designs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('#portfolio')}
                className="btn-hero group inline-flex items-center justify-center"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-outline inline-flex items-center justify-center"
              >
                Contact Me
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <img
                  src={deepProfile}
                  alt="Deep Kumar Das"
                  className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm animate-float">
                  NIHT<br />Student
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Viewer Dialog */}
      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0">
          <DialogHeader className="px-6 pt-6 pb-4">
            <DialogTitle>Resume - Deep Kumar Das</DialogTitle>
          </DialogHeader>
          <div className="flex-1 px-6 pb-6">
            <iframe
              src="/DEEP_KUMAR_DAS_RESUME.pdf"
              className="w-full h-full border-0 rounded-lg"
              title="Resume PDF Viewer"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;