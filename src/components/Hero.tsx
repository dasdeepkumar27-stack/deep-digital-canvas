import { ArrowRight, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import deepProfile from '@/assets/deep-profile-new.png';

const Hero = () => {
  const navigate = useNavigate();

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
                <span className="block text-2xl sm:text-3xl mt-2 text-muted-foreground font-medium">Performance Creative Specialist</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground mt-4 font-medium">
                Ad Creatives & Short-Form Video Ads
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As a Performance Creative Specialist, I craft high-converting ad creatives and engaging short-form video ads for paid marketing campaigns. Skilled in video editing, UI/UX for conversion, and Google Ads fundamentals.
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
                onClick={() => navigate('/resume')}
                className="btn-outline inline-flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
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
                  alt="Deep Kumar Das - Performance Creative Specialist"
                  className="w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm animate-float">
                  NIHT<br />Intern
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;