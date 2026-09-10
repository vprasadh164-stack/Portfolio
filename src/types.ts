export interface ProjectSection {
  title: string;
  subtitle?: string;
  content: string[];
  callout?: string;
  dataPoints?: { label: string; value: string }[];
}

export interface StrategyCaseDetail {
  id: string;
  title: string;
  sector: string;
  challengeType: string;
  problem: string;
  structure: string[];
  analysis: string[];
  recommendation: string[];
  learning: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  tag: string; // e.g. "MASTERS' UNION PROJECT" | "ENTREPRENEURIAL CONCEPT" | "ACADEMIC / STRATEGY CASE"
  description: string;
  image: string;
  accentColor?: string;
  metrics: { label: string; value: string }[];
  overview: string;
  sections: ProjectSection[];
  strategyCases?: StrategyCaseDetail[];
}

export interface ExperienceItem {
  id: string;
  index: string;
  company: string;
  role: string;
  period: string;
  location: string;
  heroMetric: {
    value: string;
    label: string;
  };
  secondaryMetrics?: {
    value: string;
    label: string;
  }[];
  subRole?: {
    title: string;
    description?: string;
  };
  summary: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export interface LeadershipItem {
  number: string;
  role: string;
  context: string;
  description: string;
  metric?: string;
}

export interface StatProof {
  value: string;
  label: string;
  subtext?: string;
}
