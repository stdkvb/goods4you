export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
  images: [];
  tags: [];
  availabilityStatus: string;
  stock: number;
  description: string;
  warrantyInformation: string;
  shippingInformation: string;
  rating: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

export interface CartState {
  products: Product[];
  total: number;
  discountedTotal: number;
  totalQuantity: number;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}
