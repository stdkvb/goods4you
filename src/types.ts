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
}

export interface CartState {
  products: Product[];
  total: number | null;
  discountedTotal: number | null;
  totalQuantity: number | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}

export interface AccordionProps {
  data: FaqItem;
}

export interface CartItemProps {
  data: Product;
}

export interface CounterProps {
  id: number;
  buttonText?: string;
  initialQuantity?: number;
  className?: string;
}

export interface ProductCardProps {
  data: Product;
}

export interface RatingProps {
  value: number;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface AuthState {
  loggedIn: boolean;
  token: string;
}

export interface UserState {
  id: number | null;
  firstName: string;
  lastName: string;
}
