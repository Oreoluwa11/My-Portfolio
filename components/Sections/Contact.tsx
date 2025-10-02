"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner" 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields")
      return
    }

    // Simulate success
    toast.success("Message sent!", {
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/Oreoluwa11" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/anoba-rahmat-042833286/" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/thattechhijabi_?igsh=eHJsZm9leGM2aGpr&utm_source=qr" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(266_57%_15%)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,hsl(var(--purple-deep)),hsl(var(--purple-bright)))]">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="slide-up">
            <div className="gradient-card p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-8">
                Let's Connect
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Mail className="text-[hsl(271_67%_51%)] mr-4" size={24} />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:rahmatanoba@gmail.com" className="text-muted-foreground">
                      rahmatanoba@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-[hsl(271_67%_51%)] mr-4" size={24} />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+2348130297049" className="text-muted-foreground">+234 813 029 7049</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="text-[hsl(271_67%_51%)] mr-4" size={24} />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[hsl(266_57%_15%)] rounded-full text-[hsl(271_67%_51%)] hover:bg-[hsl(271_67%_51%)] hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-up delay-200">
            <form
              onSubmit={handleSubmit}
              className="gradient-card p-8 rounded-2xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[hsl(266_57%_15%)] border-[hsl(271_67%_51%)] focus:border-[hsl(271_67%_51%)] mb-5"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[hsl(266_57%_15%)] border-[hsl(271_67%_51%)] focus:border-[hsl(271_67%_51%)] mb-5"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="bg-[hsl(266_57%_15%)] border-[hsl(271_67%_51%)] focus:border-[hsl(271_67%_51%)] resize-none mb-5"
                />
              </div>

              <Button
                type="submit"
                className="btn-glow w-full py-3 text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
