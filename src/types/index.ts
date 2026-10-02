export type SkillCategory = 
  | 'ALL'
  | 'PROGRAMMING'
  | 'WEB DEVELOPMENT'
  | 'SOFTWARE ENGINEERING'
  | 'AI / ML'
  | 'TOOLS'
  | 'MOBILE';

export interface SkillItem {
  name: string;
  category: Exclude<SkillCategory, 'ALL'>;
  iconName?: string;
  tag: string;
  description?: string;
}

export type ProjectCategory = 'All' | 'AI/ML' | 'Web' | 'Mobile' | 'SaaS';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  description: string;
  featured?: boolean;
  features: string[];
  architecture?: string[];
  techTags: string[];
  metrics?: { label: string; val: string }[];
  githubUrl?: string; // only if available
  liveDemoUrl?: string; // only if available
}

export interface TimelineItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  highlights?: string[];
  status?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  description: string;
  skills: string[];
  credentialId?: string;
}

export interface ActivityItem {
  category: string;
  title: string;
  description: string;
  tags: string[];
}
