export type ProductType = {
  id: string | number;
  name: string;
  price: number;
  coverImage: Record<string, string>;
  discount?: number;
  finalPrice: number;
  brandId: string;
  categoryId: string;
  colors: string[];
};

export type ProductDetail = {
  description: string[];
  carousel: string[];
  shortDescription: string;
};

export type ProductsType = ProductType[];
