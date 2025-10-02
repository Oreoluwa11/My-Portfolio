import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/Oreoluwa11" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/anoba-rahmat-042833286/" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/thattechhijabi_?igsh=eHJsZm9leGM2aGpr&utm_source=qr" },
  ]

  return (
    <footer className="bg-[hsl(266_57%_8%)] border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 flex">
            <p className="text-muted-foreground font-bold">
              © {currentYear} Anoba Rahmat
            </p>
            <Heart className="text-[hsl(271_67%_51%)] ml-2" size={16} />
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-[hsl(271_67%_51%)] transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;