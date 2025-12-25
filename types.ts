import { ReactNode } from 'react';

export type Language = 'es' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}