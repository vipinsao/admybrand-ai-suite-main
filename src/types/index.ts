export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  review: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
