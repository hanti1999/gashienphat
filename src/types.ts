export type ProductType = {
  id: string | number;
  model: Record<string, string>;
  name: string;
  price: string;
  coverImage: Record<string, string>;
  discount?: string | null;
  finalPrice: string;
  brandId: string;
  categoryId: string;
  colors: string[];
  createdAt?: Date | null;
};

export type ProductDetail = {
  description: string[];
  carousel: string[];
  shortDescription: string;
  video: string;
};

export type ProductsType = ProductType[];
