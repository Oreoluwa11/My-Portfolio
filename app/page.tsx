import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Portfolio from "@/components/Sections/Portfolio";
import Services from "@/components/Sections/Services";
import Resume from "@/components/Sections/Resume";
import Contact from "@/components/Sections/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Resume />
        <Contact />
    </div>
  );
}