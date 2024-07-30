export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  comparedPrice?: number;
  stock: number;
  categories: number[];
  images: string[];
  tags: string[];
}
