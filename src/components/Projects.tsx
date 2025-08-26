import { ExternalLink, Github, Shield, Code, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Secure File Encryption App",
      description: "Web application providing secure multi-user file encryption and decryption with robust authentication, Fernet encryption, and a responsive interface via Flask and MongoDB.",
      tech: ["Python", "Flask", "MongoDB", "Cryptography", "SHA-256", "Fernet", "HTML", "CSS", "JavaScript"],
      icon: Shield,
      color: "primary",
      github: "https://github.com/ROHITSINGHB/Secure-File-Encryption-App.git",
      demo: null,
      features: ["File Encryption/Decryption",
    "SHA-256 Authentication & Lockout",
    "MongoDB Database Integration",
    "Responsive Web UI",
    "Secure Password Hashing"]
    },
    {
      id: 2,
      title: "Python-to-C Converter",
      description: "Innovative tool that converts Python code to C language with a graphical user interface, streamlining cross-language development.",
      tech: ["Python", "Flex", "GUI Development", "Language Processing"],
      icon: Code,
      color: "secondary",
      github: "https://github.com/ROHITSINGHB/Python-To-C-Convertor.git",
      demo: null,
      features: ["Code Conversion", "Syntax Analysis", "GUI Interface", "Error Handling"]
    },
    {
      id: 3,
      title: "Gym Joiner - Fitness Management App",
      description: "Responsive gym management application with scheduling, authentication, and performance optimization built with modern React.js.",
      tech: ["React.js", "JavaScript", "Responsive Design", "Authentication"],
      icon: Dumbbell,
      color: "accent",
      github: "https://github.com/ROHITSINGHB/gymjooiner.git",
      demo: "https://gymjoining.pages.dev/",
      features: ["Member Management", "Class Scheduling", "Performance Tracking", "Mobile Responsive"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          text: 'text-primary',
          bg: 'bg-primary/20',
          border: 'border-primary/50',
          hover: 'hover:bg-primary/10'
        };
      case 'secondary':
        return {
          text: 'text-secondary',
          bg: 'bg-secondary/20',
          border: 'border-secondary/50',
          hover: 'hover:bg-secondary/10'
        };
      case 'accent':
        return {
          text: 'text-accent',
          bg: 'bg-accent/20',
          border: 'border-accent/50',
          hover: 'hover:bg-accent/10'
        };
      default:
        return {
          text: 'text-primary',
          bg: 'bg-primary/20',
          border: 'border-primary/50',
          hover: 'hover:bg-primary/10'
        };
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={project.id}
                className="glass-card p-8 neon-glow hover:scale-105 transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Icon */}
                <div className="mb-6">
                  <div className={`glass-card p-4 inline-block ${colors.bg} group-hover:animate-glow transition-all duration-300`}>
                    <project.icon className={`w-8 h-8 ${colors.text} animate-float`} />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className={`font-bold text-xl mb-4 group-hover:${colors.text} transition-colors duration-300`}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className={`flex items-center gap-2 animate-fade-in`}
                        style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.05)}s` }}
                      >
                        <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full`}></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${colors.border} ${colors.hover} transition-all duration-300 animate-fade-in`}
                        style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.03)}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className={`glass-card ${colors.border} ${colors.hover} transition-all duration-300 neon-glow flex-1`}
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo && (
                    <Button
                      size="sm"
                      className={`${colors.bg} ${colors.text} hover:bg-opacity-80 transition-all duration-300 neon-glow flex-1`}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 to-${project.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 neon-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">More Projects on GitHub</h3>
            <p className="text-muted-foreground mb-6">
              Explore additional projects, contributions, and code samples on my GitHub profile.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 py-4 neon-glow"
              asChild
            >
              <a href="https://github.com/ROHITSINGHB" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
