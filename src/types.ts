export interface catalogItem {
  id: number;
  name: string;
  price: number;
  imageUrlAvif: string;
  imageUrlWebp: string;
  imageUrlPng: string;
  count: number;
  variant: string;
}

export interface faqItem {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}
