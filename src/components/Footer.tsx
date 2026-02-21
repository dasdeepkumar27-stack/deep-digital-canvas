import { Heart } from 'lucide-react';
import { FadeUp } from './motion/AnimatedSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold gradient-text mb-4">Deep Kumar Das</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Performance Creative Specialist focused on creating high-converting ad creatives and video content for paid campaigns.
              </p>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['about', 'skills', 'portfolio', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => document.querySelector(`#${section}`)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-primary transition-colors capitalize"
                    >
                      {section === 'about' ? 'About Me' : section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
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
        </FadeUp>

        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
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
