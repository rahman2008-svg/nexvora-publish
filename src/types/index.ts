export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  highlight?: boolean;
  memberLimit: string;
  features: string[];
}

export interface ShowcaseTheme {
  id: string;
  name: string;
  category: 'Newsletter' | 'Magazine' | 'Minimalist' | 'Podcast' | 'Journal';
  description: string;
  accentColor: string;
  author: string;
  demoUrl?: string;
  coverImage: string;
  stats: string;
}

export interface EditorCard {
  id: string;
  type: 'text' | 'image' | 'callout' | 'paywall' | 'quote' | 'button';
  content: string;
  caption?: string;
  style?: string;
}
