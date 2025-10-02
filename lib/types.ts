export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}