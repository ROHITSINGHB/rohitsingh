import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Code, Send, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_08eh7ef', // Service ID
        'template_6ro03ak', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Rohit Singh'
        },
        'QJf3c49nHq0CzHNMb' // Public Key
      );
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rohithitman9876@gmail.com",
      href: "mailto:rohithitman9876@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9129922562",
      href: "tel:+919129922562",
      color: "secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/rohit-singh-27b77b263/",
      color: "accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Code Portfolio",
      href: "https://github.com/ROHITSINGHB",
      color: "primary"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "200+ Problems Solved",
      href: "https://leetcode.com/u/Rohitsinghbisht_07/",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/20 hover:bg-primary/30';
      case 'secondary':
        return 'text-secondary bg-secondary/20 hover:bg-secondary/30';
      case 'accent':
        return 'text-accent bg-accent/20 hover:bg-accent/30';
      default:
        return 'text-primary bg-primary/20 hover:bg-primary/30';
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 neon-glow">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass-card border-white/20 focus:border-primary/50 bg-background/50"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass-card border-white/20 focus:border-primary/50 bg-background/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass-card border-white/20 focus:border-primary/50 bg-background/50 min-h-[120px] resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-semibold neon-glow transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 neon-glow">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities, collaborations, or just chat about technology!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-4 glass-card ${getColorClasses(contact.color)} transition-all duration-300 neon-glow hover:scale-105 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{contact.label}</div>
                      <div className="text-sm opacity-90">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card p-8 neon-glow">
              <h3 className="text-xl font-bold mb-6 text-accent">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">5+</div>
                  <div className="text-xs text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">3+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;