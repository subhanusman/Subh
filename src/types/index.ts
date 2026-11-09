export type ProjectCategory = 
  | 'all'
  | 'brand-identity'
  | 'three-d-motion'
  | 'web-experience'
  | 'packaging';

export interface ColorSwatch {
  hex: string;
  name: string;
  role: string;
}

export interface TypographySpec {
  role: string;
  fontFamily: string;
  weight: string;
  sample: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  year: string;
  isConceptual: true;
  heroImage: string;
  galleryImages: string[];
  challenge: string;
  solution: string;
  clientHypothesis: string;
  deliverables: string[];
  colorPalette: ColorSwatch[];
  typographySpecs: TypographySpec[];
  aspectRatio?: '16:9' | '4:3' | '1:1';
  featuredQuote: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface BriefFormData {
  fullName: string;
  organization: string;
  email: string;
  projectTypes: string[];
  timeline: string;
  budgetBracket: string;
  visionDescription: string;
}
