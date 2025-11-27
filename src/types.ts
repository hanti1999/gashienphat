export type ProductType = {
  id: string | number;
  model: string;
  name: string;
  slug?: string | null;
  price: string;
  coverImage: string;
  discount?: string | null;
  finalPrice?: string | null;
  brandId: string;
  categoryId: string;
  createdAt?: Date | null;
};

export type ProductDetail = {
  description: string[];
  carousel: string[];
  shortDescription: string;
  video: string;
};

export type ProductsType = ProductType[];
