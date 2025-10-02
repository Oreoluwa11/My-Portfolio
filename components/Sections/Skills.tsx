import { 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  Globe, 
  Layers,
  GitBranch,
  Database
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: Code, level: 95 },
    { name: "CSS3", icon: Palette, level: 90 },
    { name: "JavaScript", icon: Zap, level: 92 },
    { name: "TypeScript", icon: Code, level: 88 },
    { name: "React", icon: Layers, level: 94 },
    { name: "Next.js", icon: Globe, level: 85 },
    { name: "Tailwind CSS", icon: Palette, level: 96 },
    { name: "GitHub", icon: GitBranch, level: 90 },
    { name: "Responsive Design", icon: Smartphone, level: 75 },
    { name: "API Integration", icon: Database, level: 66 },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(266_57%_15%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))]">Skills</span>
          </h2>
          <p className="text-lg text-[hsl(0_0%_70%)] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`skill-card gradient-card p-6 rounded-xl text-center slide-up delay-${Math.min(400, (index + 1) * 100)}`}
              >
                <div className="mb-4 text-[hsl(271_67%_51%)]">
                  <Icon size={40} className="mx-auto" />
                </div>
                <h3 className="font-semibold text-[hsl(0_0%_100%)] mb-2">{skill.name}</h3>
                <div className="w-full bg-[hsl(266_57%_15%)] rounded-full h-2 mb-2">
                  <div 
                    className="bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))] h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-[hsl(0_0%_70%)]">{skill.level}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;