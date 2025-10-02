import React from 'react'
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(266_57%_8%)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))]">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a passionate Frontend Developer with over 1 year of experience creating 
                exceptional digital experiences. My journey began with curiosity about how 
                websites work, and it has evolved into a deep love for crafting pixel-perfect, 
                performant web applications.
              </p>
              
              <p>
                I specialize in React, Next.js, and TypeScript, with a keen eye for design 
                and user experience. Every project I work on is an opportunity to blend 
                creativity with technical excellence, ensuring that users not only accomplish 
                their goals but enjoy the journey.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest web technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
          </div>
          
          <div className="slide-up delay-200">
            <div className="gradient-card p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(271_67%_51%)] mb-2">15+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(271_67%_51%)] mb-2">1+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(271_67%_51%)] mb-2">25+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(271_67%_51%)] mb-2">100%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;