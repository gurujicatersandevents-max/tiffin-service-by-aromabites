// Centralized TypeScript CMS Data Types

export interface ApiResponse<T = any> {
  status: "success" | "error";
  message?: string;
  data: T;
  errors?: Record<string, string[]>;
}

export interface CompanyProfile {
  id: number;
  company_name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  leads_email: string;
  address: string;
  working_hours: string;
  logo_url: string;
  facebook_url?: string;
  instagram_url?: string;
  twitter_url?: string;
}

export interface HomepageSection {
  id: number;
  section_key: string;
  section_name: string;
  display_order: number;
  is_active: boolean;
  is_published: boolean;
}

export interface HomepageCard {
  id: number;
  section_id: number;
  card_type: string;
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  image_url?: string;
  sort_order: number;
  is_active: boolean;
}

export interface SubscriptionPlan {
  id: number;
  name: string;
  tagline: string;
  badge?: string;
  price_per_meal: number | string;
  original_price_per_meal?: number | string;
  highlight_label?: string;
  is_popular: boolean;
  is_active: boolean;
  sort_order: number;
  features: string[];
}

export interface DeliveryArea {
  id: number;
  name: string;
  zone: string;
  detail: string;
  icon: string;
  is_active: boolean;
  sort_order: number;
}

export interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
  sort_order: number;
  is_active: boolean;
}

export interface TestimonialItem {
  id: number;
  customer_name: string;
  customer_role?: string;
  locality?: string;
  category: string;
  rating: number;
  review_text: string;
  avatar_url?: string;
  is_verified: boolean;
  is_active: boolean;
}

export interface SeoSettings {
  id?: number;
  page_route: string;
  meta_title: string;
  meta_description?: string;
  meta_keywords?: string;
  og_image?: string;
}

export interface HomePageResponse {
  company: CompanyProfile;
  seo?: SeoSettings;
  sections: HomepageSection[];
  section_content: Record<string, Array<{ id: number; field_key: string; field_value: string }>>;
  section_cards: Record<string, HomepageCard[]>;
  meal_plans: SubscriptionPlan[];
  delivery_areas: DeliveryArea[];
  testimonials?: TestimonialItem[];
  faqs: FAQItem[];
}

export interface LeadPayload {
  name: string;
  contactNo: string;
  email?: string;
  streetAddress?: string;
  city?: string;
  district?: string;
  state?: string;
  country?: string;
  packageSelection?: string;
  tastingSlot?: string;
  descriptionAllergies?: string;
  source_page?: string;
}
