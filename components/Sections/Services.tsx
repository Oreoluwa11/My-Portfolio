import { 
  Code, 
  Smartphone, 
  Palette, 
  Zap,
  Globe,
  Settings
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and TypeScript for optimal performance and scalability."
    },
    {
      icon: Palette,
      title: "UI Implementation",
      description: "Pixel-perfect implementation of designs into responsive, interactive user interfaces with attention to detail and user experience."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first development ensuring your website looks and works perfectly across all devices and screen sizes."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization, code splitting, and best practices to ensure your website loads fast and performs excellently."
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Seamless integration with third-party APIs, databases, and services to create dynamic and data-driven applications."
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your website running smoothly and securely."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(266_57%_15%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))]">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`gradient-card p-8 rounded-xl text-center hover:shadow-glow transition-all duration-300 slide-up delay-${Math.min(400, (index + 1) * 100)}`}
              >
                <div className="mb-6 text-[hsl(271_67%_51%)]">
                  <Icon size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(0_0%_100%)] mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;