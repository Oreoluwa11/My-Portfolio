import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern, highly responsive personal portfolio featuring smooth animations and a premium UI design.",
      image:"/portfolio.jpeg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://anoba-rahmat.netlify.app/",
      githubUrl: "https://github.com/Oreoluwa11/My-Portfolio",
    },
    {
      id: 2,
      title: "Bizflow",
      description:
        "A comprehensive financial management and budget planning tool designed to streamline personal finances.",
      image:"/bizflow.jpeg",
      technologies: ["React", "Typescript", "Tailwind CSS"],
      liveUrl: "https://bizflow-gray.vercel.app",
      githubUrl: "https://github.com/Oreoluwa11/bizflow",
    },

    {
      id: 3,
      title: "XPlore Web App",
      description:
        "An intuitive discovery platform for locating and exploring top-rated restaurants across Lagos, Nigeria.",
      image:"/xplore.jpeg",
      technologies: ["React", "JavaScript", "Tailwind CSS", "APIs"],
      liveUrl: "https://xplore-app-eta.vercel.app/",
      githubUrl: "https://github.com/Oreoluwa11/Xplore-app",
    },
    {
      id: 4,
      title: "Foodi Restaurant App",
      description:
        "An immersive dining application offering detailed restaurant insights, interactive menus, and seamless user experiences.",
      image:"/foodi.jpeg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://foodi-restaurant-beta.vercel.app/",
      githubUrl: "https://github.com/Oreoluwa11/Foodi-restaurant",
    },
    // {
    //   id: 5,
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard for social media management with data visualization",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    //   technologies: ["React", "D3.js", "Node.js"],
    //   liveUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   id: 6,
    //   title: "Restaurant Booking System",
    //   description: "Complete booking system with admin panel and customer management",
    //   image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    //   technologies: ["Next.js", "Prisma", "PostgreSQL"],
    //   liveUrl: "#",
    //   githubUrl: "#"
    // }
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(266_57%_8%)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))]">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and technical achievements
          </p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={`project-card gradient-card rounded-xl overflow-hidden slide-up delay-${Math.min(400, (index + 1) * 100)}`}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-48 object-cover"
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex gap-2 justify-center">
                          <Button
                            asChild
                            size="sm"
                            variant="secondary"
                            className="rounded-full"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} className="mr-1" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="rounded-full"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={16} className="mr-1" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[hsl(271_67%_51%)]/10 text-[hsl(271_67%_51%)] rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card" />
          <CarouselNext className="hidden md:flex -right-12 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card" />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
