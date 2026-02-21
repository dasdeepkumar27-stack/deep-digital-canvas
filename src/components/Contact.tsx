import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { FadeUp, SlideInLeft, SlideInRight } from './motion/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="modern-section py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <motion.div className="floating-element top-20 right-10 w-28 h-28 bg-primary/8 rounded-full blur-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-6">
            Let's Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate or have questions? I'd love to hear from you
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SlideInLeft className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you have a project in mind, need a Performance Creative Specialist, or just want to connect, I'm always open to new opportunities and conversations.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'dasdeepkumar27@gmail.com', gradient: 'from-primary/20 to-primary/10' },
                { icon: Phone, label: 'Phone', value: '+91 74394 82314', gradient: 'from-secondary/20 to-secondary/10' },
                { icon: MapPin, label: 'Location', value: 'Kolkata, West Bengal, India', gradient: 'from-accent/20 to-accent/10' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.label} whileHover={{ y: -2, x: 4 }} transition={{ duration: 0.2 }} className="flex items-center space-x-4 glass-card p-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className={`bg-gradient-to-br ${item.gradient} p-3 rounded-lg`}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                <motion.button whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 p-3 rounded-lg transition-all duration-300">
                  <Linkedin className="h-5 w-5 text-primary" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.15, rotate: -5 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary/30 hover:to-secondary/20 p-3 rounded-lg transition-all duration-300">
                  <Instagram className="h-5 w-5 text-secondary" />
                </motion.button>
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div className="contact-form">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email'].map((field) => (
                  <motion.div key={field} whileFocus={{ scale: 1.01 }}>
                    <label htmlFor={field} className="block text-sm font-medium mb-2 capitalize">
                      {field === 'name' ? 'Full Name' : 'Email Address'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                      placeholder={field === 'name' ? 'Your full name' : 'your.email@example.com'}
                    />
                  </motion.div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-hero group inline-flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
