/**
 * Core TypeScript interfaces for Nilton Costa Developer Portfolio
 */

export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'ai' | 'startup';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  stack?: string;
  location?: string;
  slug: string;
  badge?: string;
}

export interface DeveloperInfo {
  name: string;
  firstName: string;
  lastName: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  softSkills: string[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  location: string;
  email: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
  };
  portraitImage: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyNote?: string;
  dateRange: string;
  descriptions: string[];
  stack: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'fullstack' | 'frontend' | 'backend' | 'consulting';
  message: string;
  timestamp: Date;
}
