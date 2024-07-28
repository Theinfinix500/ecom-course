export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  comparedPrice?: number;
  stock: number;
  categories: number[]; // Array of category IDs
  images: string[]; // Array of image URLs
  tags: string[]; // Array of tags
}
