export interface ProfileInfo {
  name: string;
  title: {
    en: string;
    pt: string;
  };
  shortIntro: {
    en: string;
    pt: string;
  };
  bio: {
    en: string;
    pt: string;
  };
  goals: {
    en: string;
    pt: string;
  };
  passions: {
    en: string;
    pt: string;
  };
  story: {
    en: string;
    pt: string;
  };
  avatarUrl: string;
  cvUrl: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'languages' | 'databases' | 'tools' | 'frameworks' | 'other';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export interface Project {
  id: string;
  slug: string;
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  longDescription: {
    en: string;
    pt: string;
  };
  image: string;
  galleryImages?: string[];
  technologies: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress';
  year: number;
  duration: {
    en: string;
    pt: string;
  };
  teamSize: number;
  myRole: {
    en: string;
    pt: string;
  };
  highlights: {
    en: string[];
    pt: string[];
  };
  challenges: {
    en: string;
    pt: string;
  };
  lessonsLearned: {
    en: string;
    pt: string;
  };
}

export interface Experience {
  company: string;
  position: {
    en: string;
    pt: string;
  };
  location: {
    en: string;
    pt: string;
  };
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  startDate: string;
  endDate?: string; // empty or "Present" / "Atual"
  description: {
    en: string;
    pt: string;
  };
  technologies: string[];
  achievements: {
    en: string[];
    pt: string[];
  };
}

export interface Education {
  institution: string;
  course: {
    en: string;
    pt: string;
  };
  degree: {
    en: string;
    pt: string;
  };
  startDate: string;
  endDate: string;
  description: {
    en: string;
    pt: string;
  };
  certificateLink?: string;
  grade?: string;
}

export interface RecommendationItem {
  photo: string;
  name: string;
  position: {
    en: string;
    pt: string;
  };
  company: string;
  linkedin?: string;
  date: string;
  testimonial: {
    en: string;
    pt: string;
  };
}

export interface LanguageItem {
  name: {
    en: string;
    pt: string;
  };
  level: {
    en: string;
    pt: string;
  };
  cefr: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  certificate?: string;
  progress: number; // 0-100
}

export interface BookItem {
  cover: string;
  title: string;
  author: string;
  genre: {
    en: string;
    pt: string;
  };
  pages: number;
  status: 'reading' | 'finished' | 'want-to-read';
  rating: number; // 0-5
  startedDate?: string;
  finishedDate?: string;
  favoriteQuote?: {
    en: string;
    pt: string;
  };
  personalNotes?: {
    en: string;
    pt: string;
  };
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  linkedin: string;
  github: string;
}
