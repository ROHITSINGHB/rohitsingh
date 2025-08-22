import { Award, Briefcase, Code2, Trophy } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      category: "Workshops & Training",
      icon: Briefcase,
      color: "primary",
      items: [
        {
          title: "Arduino Workshop",
          organization: "Technical Workshop",
          description: "Hands-on experience with Arduino programming and IoT projects",
          year: "2023"
        },
        {
          title: "Data Visualization Internship",
          organization: "Tata Insights & Quants (Forage)",
          description: "Virtual internship focused on data visualization techniques and business analytics",
          year: "2023"
        }
      ]
    },
    {
      category: "Certifications",
      icon: Award,
      color: "secondary",
      items: [
        {
          title: "Google Cloud Computing",
          organization: "Google Cloud",
          description: "Cloud infrastructure, services, and deployment strategies",
          year: "2023"
        },
        {
          title: "Machine Learning with Python",
          organization: "Infosys Springboard",
          description: "Comprehensive ML algorithms and Python implementation",
          year: "2023"
        },
        {
          title: "Ethical Hacking",
          organization: "Udemy",
          description: "Cybersecurity fundamentals and penetration testing",
          year: "2023"
        }
      ]
    },
    {
      category: "Competitive Programming",
      icon: Code2,
      color: "accent",
      items: [
        {
          title: "LeetCode Problems",
          organization: "LeetCode Platform",
          description: "Solved 200+ algorithmic and data structure problems",
          year: "Ongoing"
        },
        {
          title: "Algorithm Contests",
          organization: "Various Platforms",
          description: "Regular participation in coding competitions and hackathons",
          year: "2022-Present"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          text: 'text-primary',
          bg: 'bg-primary/20',
          border: 'border-primary/50'
        };
      case 'secondary':
        return {
          text: 'text-secondary',
          bg: 'bg-secondary/20',
          border: 'border-secondary/50'
        };
      case 'accent':
        return {
          text: 'text-accent',
          bg: 'bg-accent/20',
          border: 'border-accent/50'
        };
      default:
        return {
          text: 'text-primary',
          bg: 'bg-primary/20',
          border: 'border-primary/50'
        };
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Continuous learning through workshops, certifications, and competitive programming
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`glass-card p-3 ${colors.bg}`}>
                    <category.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>

                {/* Timeline Items */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${colors.bg}`}></div>

                  <div className="space-y-8">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={item.title}
                        className={`relative flex items-start gap-6 animate-fade-in`}
                        style={{ animationDelay: `${(categoryIndex * 0.2) + (itemIndex * 0.1)}s` }}
                      >
                        {/* Timeline Dot */}
                        <div className={`relative z-10 w-4 h-4 ${colors.bg} ${colors.border} border-2 rounded-full flex-shrink-0 mt-2`}>
                          <div className={`absolute inset-1 ${colors.bg} rounded-full animate-glow`}></div>
                        </div>

                        {/* Content Card */}
                        <div className="glass-card p-6 neon-glow hover:scale-105 transition-all duration-300 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                              <p className={`font-semibold ${colors.text} text-sm mb-2`}>{item.organization}</p>
                            </div>
                            <span className="text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="glass-card p-6 text-center neon-glow animate-fade-in">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gradient mb-1">3+</div>
            <p className="text-sm text-muted-foreground">Certifications</p>
          </div>
          <div className="glass-card p-6 text-center neon-glow animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Briefcase className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gradient mb-1">2+</div>
            <p className="text-sm text-muted-foreground">Workshops</p>
          </div>
          <div className="glass-card p-6 text-center neon-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Code2 className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-gradient mb-1">200+</div>
            <p className="text-sm text-muted-foreground">Problems Solved</p>
          </div>
          <div className="glass-card p-6 text-center neon-glow animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-gradient mb-1">8.82</div>
            <p className="text-sm text-muted-foreground">CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;