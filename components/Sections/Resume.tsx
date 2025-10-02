import { Download, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const experiences = [
    {
      title: "Junior Frontend Developer",
      company: "Fusion Intelligence Technologies",
      period: "May, 2025 - Present",
      description: "Working on building and maintaining web applications using React, Next.js, and Tailwind CSS. Collaborating with designers and backend developers to create seamless user experiences."
    },
    {
      title: "Assistant Teacher",
      company: "MarkFavor Schools",
      period: "January 2022 - July 2022",
      description: "Assisted in teaching computer science subjects, helped students with coding assignments, and organized extracurricular tech activities."
    },
    // {
    //   title: "Junior Web Developer",
    //   company: "StartUp Hub",
    //   period: "2020 - 2021",
    //   description: "Built and maintained company websites, learned modern web development practices, and contributed to team projects."
    // }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science (Bsc. Computer Science)",
      school: "Lagos State University",
      period: "2023 - 2026",
      description: "Pursuing a degree in Computer Science with a focus on software development, algorithms, and data structures."
    },
    {
      degree: "Frontend Development Bootcamp",
      school: "Axia Africa",
      period: "2024 - 2024",
      description: "Intensive 6-month program focusing on modern JavaScript, React, and web development best practices."
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(266_57%_8%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))]">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey and educational background
          </p>
          <a
            href="/Frontend_Developer.pdf"
            download="Anoba_Rahmat_Frontend_Developer.pdf"
          >
            <Button className="btn-glow px-6 py-3 rounded-full">
              <Download size={20} className="mr-2" />
              Download CV
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="slide-up delay-100">
            <div className="flex items-center mb-8">
              <Briefcase className="text-[hsl(271_67%_51%)] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="gradient-card p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <span className="text-[hsl(271_67%_51%)] font-medium">{exp.period}</span>
                    </div>
                    <p className="text-[hsl(271_67%_51%)]/80 font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                  
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-full w-px h-8 bg-gradient-to-b from-[hsl(271_67%_51%)] to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="slide-up delay-200">
            <div className="flex items-center mb-8">
              <GraduationCap className="text-[hsl(271_67%_51%)] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="gradient-card p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <span className="text-[hsl(271_67%_51%)] font-medium">{edu.period}</span>
                    </div>
                    <p className="text-[hsl(271_67%_51%)]/80 font-medium mb-3">{edu.school}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                  
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-full w-px h-8 bg-gradient-to-b from-[hsl(271_67%_51%)] to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;