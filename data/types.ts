export interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  closedDate?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  isCurrent: boolean;
}

export interface ContactLink {
  label: string;
  handle: string;
  href: string;
  color: string;
}

export interface Personal {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  bio: string;
  resumeUrl: string;
  github: string;
  linkedin: string;
  twitter: string;
}
