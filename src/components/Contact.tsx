import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="modern-section py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      {/* Floating Background Elements */}
      <div className="floating-element top-20 right-10 w-28 h-28 bg-primary/8 rounded-full blur-2xl"></div>
      <div className="floating-element top-1/2 left-10 w-20 h-20 bg-secondary/8 rounded-full blur-xl"></div>
      <div className="floating-element bottom-20 right-1/3 w-24 h-24 bg-accent/8 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            Let's Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate or have questions? I'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you have a project in mind, need help with digital marketing, 
                or just want to connect, I'm always open to new opportunities and conversations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 glass-card p-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">deep.kumar@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 glass-card p-4 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 glass-card p-4 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                </button>
                <button className="bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary/30 hover:to-secondary/20 p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3">
                  <Instagram className="h-5 w-5 text-secondary" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-hero group inline-flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;