import { Code, Cog, BarChart, GraduationCap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web & App Development",
      description: "Full-stack web applications using React, Node.js, and modern frameworks with responsive design and optimal performance.",
      features: ["React.js Development", "Responsive Design", "API Integration", "Performance Optimization"]
    },
    {
      icon: Cog,
      title: "Software Solutions & Automation",
      description: "Custom software solutions and automation tools to streamline processes and improve efficiency for businesses.",
      features: ["Process Automation", "Custom Software", "System Integration", "Workflow Optimization"]
    },
    {
      icon: BarChart,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights using advanced analytics, machine learning, and interactive visualizations.",
      features: ["Data Analytics", "Tableau Dashboards", "Power BI Reports", "Machine Learning Models"]
    },
    {
      icon: GraduationCap,
      title: "Tutoring & Coding Mentorship",
      description: "Personalized coding mentorship and tutoring in programming languages, algorithms, and software development best practices.",
      features: ["Programming Tutorials", "Algorithm Training", "Code Review", "Career Guidance"]
    },
    {
      icon: Shield,
      title: "Cybersecurity & File Protection",
      description: "Implement robust security measures including file encryption, secure systems, and ethical hacking assessments.",
      features: ["File Encryption", "Security Audits", "Vulnerability Assessment", "Secure System Design"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 neon-glow hover:scale-105 transition-all duration-500 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="glass-card p-4 inline-block bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary animate-float" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 neon-glow max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-semibold rounded-lg neon-glow transition-all duration-300">
                Get In Touch
              </button>
              <button className="px-8 py-3 glass-card border border-primary/50 hover:bg-primary/10 font-semibold rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;