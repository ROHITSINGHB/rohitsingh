import { Github, Linkedin, Mail, Phone, Code, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:rohithitman9876@gmail.com",
      label: "Email"
    },
    {
      icon: Github,
      href: "https://github.com/rohithitman",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rohit-singh",
      label: "LinkedIn"
    },
    {
      icon: Code,
      href: "https://leetcode.com/rohit-singh",
      label: "LeetCode"
    },
    {
      icon: Phone,
      href: "tel:+919129922562",
      label: "Phone"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-muted/10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Rohit Singh</h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science student passionate about creating innovative solutions through 
              full-stack development, machine learning, and cybersecurity.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.slice(0, 3).map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card p-3 neon-glow hover:scale-110 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Services', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-left text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground animate-fade-in">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">rohithitman9876@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm">+91-9129922562</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Code className="w-4 h-4 text-accent" />
                <span className="text-sm">200+ LeetCode Problems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="glass-card p-6 neon-glow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Rohit Singh</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 Rohit Singh. All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="glass-card p-2 neon-glow hover:scale-110 transition-all duration-300"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;