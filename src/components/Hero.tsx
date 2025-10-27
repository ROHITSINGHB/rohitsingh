import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/rohitsbisht-2.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Profile Image */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-60 group-hover:opacity-100 animate-glow transition-all duration-500"></div>
            
            {/* Inner glow ring */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/80 to-secondary/80 rounded-full blur-md opacity-75 animate-pulse"></div>
            
            {/* Image container with enhanced border */}
            <div className="relative">
              <img
                src={profileImage}
                alt="Rohit Singh"
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-[6px] border-background shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
          Rohit Singh
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Computer Science Student | Full-Stack Developer | Problem Solver | Innovator
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="neon-glow bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 py-4">
            Hire Me
          </Button>
          <Button size="lg" variant="outline" className="glass-card border-primary/50 hover:bg-primary/10 font-semibold px-8 py-4">
            Explore My Work
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="mailto:rohithitman9876@gmail.com" className="glass-card p-3 hover:bg-primary/10 transition-all duration-300 neon-glow">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/ROHITSINGHB" target="_blank" rel="noopener noreferrer" className="glass-card p-3 hover:bg-primary/10 transition-all duration-300 neon-glow">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-singh-27b77b263/" target="_blank" rel="noopener noreferrer" className="glass-card p-3 hover:bg-primary/10 transition-all duration-300 neon-glow">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
