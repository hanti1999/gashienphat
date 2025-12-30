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

export type BrandType = {
  id: string | number;
  name: string;
  image: string;
  description: string | null;
  slug: string;
};

export type BannerType = {
  id: string | number;
  name: string;
  link: string | null;
  image: string;
  sortOrder: number | null;
  active: boolean | null;
  createdAt?: Date | null;
};

export type NotificationType = {
  id: string | number;
  title: string;
  slug: string;
  type: string;
  thumbnail: string | null;
  shortDescription: string | null;
  content?: string;
  published?: boolean;
  createdAt: Date | null;
};

export type ProductsType = ProductType[];
