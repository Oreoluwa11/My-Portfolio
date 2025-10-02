"use client";

import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {

  const scrollToSection = (href: string) => { 
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 
    bg-[linear-gradient(135deg,hsl(var(--purple-dark)),hsl(var(--purple-deep)),hsl(var(--purple-bright)))] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--glow-purple)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--glow-purple)_0%,_transparent_50%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 slide-up">
          <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden ring-purple-bright/20 shadow-glow">
            <Image
              src="/hero.svg"
              alt="Profile Picture"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 slide-up delay-100">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))]">Anoba Rahmat</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-[hsl(0_0%_70%)] mb-8 slide-up delay-200">
          Frontend Developer
        </h2>
        
        <p className="text-lg text-[hsl(0_0%_70%)] max-w-2xl mx-auto mb-12 slide-up delay-300">
          Passionate about creating beautiful, responsive web experiences with modern technologies.
          I turn ideas into interactive digital solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up delay-400">
          <Button size="lg" onClick={() => scrollToSection("#contact")} 
          className="group bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))] hover:shadow-purple text-white">
            Hire Me
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a 
            href="/Frontend_Developer.pdf"
            download="Anoba_Rahmat_Frontend_Developer.pdf">
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;