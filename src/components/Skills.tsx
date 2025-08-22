import { Code, Database, Brain, Shield, Users, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "C++", "JavaScript", "SQL"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Frameworks & Tools",
      skills: ["React.js", "Scikit-learn", "Pandas", "GitHub", "MySQL", "VS Code", "IntelliJ IDEA"],
      color: "secondary"
    },
    {
      icon: Brain,
      title: "Technical Skills",
      skills: ["Software Development", "OOP", "Machine Learning", "Data Visualization", "Tableau", "Power BI"],
      color: "accent"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: ["Encryption", "Ethical Hacking", "File Protection", "SHA-256 Hashing", "Fernet Encryption"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Teamwork", "Leadership", "Analytical Thinking", "Adaptability", "Problem Solving"],
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Competitive Programming",
      skills: ["LeetCode", "Algorithm Design", "Data Structures", "Problem Solving", "Optimization"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary border-primary/50 hover:bg-primary/10';
      case 'secondary':
        return 'text-secondary border-secondary/50 hover:bg-secondary/10';
      case 'accent':
        return 'text-accent border-accent/50 hover:bg-accent/10';
      default:
        return 'text-primary border-primary/50 hover:bg-primary/10';
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning, and cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 neon-glow hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`glass-card p-3 bg-${category.color}/20`}>
                  <category.icon className={`w-6 h-6 ${getColorClasses(category.color).split(' ')[0]}`} />
                </div>
                <h3 className="font-bold text-xl">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-sm font-medium rounded-full border transition-all duration-300 ${getColorClasses(category.color)} animate-fade-in`}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Skill level indicator */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Proficiency:</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full animate-glow`}
                    style={{ width: `${85 + (index * 2)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center neon-glow">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">200+</div>
            <p className="text-muted-foreground">LeetCode Problems Solved</p>
          </div>
          <div className="glass-card p-6 text-center neon-glow">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">8.82</div>
            <p className="text-muted-foreground">Current CGPA</p>
          </div>
          <div className="glass-card p-6 text-center neon-glow">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">5+</div>
            <p className="text-muted-foreground">Major Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;