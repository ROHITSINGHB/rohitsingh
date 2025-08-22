import { GraduationCap, Code, Brain, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="glass-card p-8 neon-glow">
            <h3 className="text-2xl font-bold mb-6 text-primary">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am Rohit Singh, a Computer Science & Engineering student at Graphic Era Hill University with a strong foundation in software development, problem-solving, and emerging technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about building impactful applications, I enjoy exploring areas like secure systems, machine learning, and full-stack development while continuously sharpening my competitive programming skills.
            </p>
            
            {/* Interest Icons */}
            <div className="flex gap-4 mt-8">
              <div className="glass-card p-3 animate-float">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="glass-card p-3 animate-float" style={{ animationDelay: '1s' }}>
                <Brain className="w-8 h-8 text-secondary" />
              </div>
              <div className="glass-card p-3 animate-float" style={{ animationDelay: '2s' }}>
                <Shield className="w-8 h-8 text-accent" />
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <div className="glass-card p-6 neon-glow hover:bg-primary/5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="glass-card p-3 bg-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">B.Tech Computer Science & Engineering</h4>
                  <p className="text-primary font-semibold mb-1">Graphic Era Hill University</p>
                  <p className="text-sm text-muted-foreground mb-2">Sep 2022 – Jul 2026 (Expected)</p>
                  <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    CGPA: 8.82/10
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 neon-glow hover:bg-secondary/5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="glass-card p-3 bg-secondary/20">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Intermediate (Science Stream)</h4>
                  <p className="text-secondary font-semibold mb-1">Mount Berry Inter College, Lucknow</p>
                  <p className="text-sm text-muted-foreground mb-2">Graduated: Jun 2021</p>
                  <div className="inline-block bg-gradient-to-r from-secondary to-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    83%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;