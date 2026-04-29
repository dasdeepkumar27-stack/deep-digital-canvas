import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Portfolio from '@/components/Portfolio';
import WhyHireMe from '@/components/WhyHireMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Portfolio />
      <WhyHireMe />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
