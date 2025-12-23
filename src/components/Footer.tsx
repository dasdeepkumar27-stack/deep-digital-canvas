import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern py-12 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="floating-element top-10 left-20 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
      <div className="floating-element top-20 right-10 w-20 h-20 bg-secondary/5 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {/* Brand */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold gradient-text mb-4">Deep Kumar Das</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Digital Marketer in Kolkata passionate about creating 
              compelling digital experiences and helping brands grow online.
            </p>
          </div>

          {/* Quick Links */}
          <div className="glass-card p-6">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="glass-card p-6">
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Kolkata, West Bengal</p>
              <p className="text-muted-foreground">dasdeepkumar27@gmail.com</p>
              <p className="text-muted-foreground">+91 74394 82314</p>
              <p className="text-muted-foreground">Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center animate-pulse-glow">
            © {currentYear} Deep Kumar Das. Made with{' '}
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />{' '}
            for digital excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;