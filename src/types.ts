export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  benefits: string[];
  imageUrl: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
