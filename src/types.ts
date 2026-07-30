export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  stock: number;
  images: string[];
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  reviews: Review[];
  tags: ('featured' | 'deal' | 'new' | 'bestseller' | 'flash')[];
  colors?: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'wishlist';
  icon?: string;
}
