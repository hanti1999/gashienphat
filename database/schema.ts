import {
  pgTable,
  uuid,
  text,
  varchar,
  numeric,
  timestamp,
  uniqueIndex,
  index,
  boolean,
  integer,
  jsonb,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const products = pgTable(
  'products',
  {
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    model: text('model').notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    slug: text('slug').unique(),
    price: numeric('price', { precision: 12, scale: 2 }).notNull(),
    coverImage: text('cover_image').notNull(),
    discount: numeric('discount', { precision: 5, scale: 2 }).default('0'),
    finalPrice: numeric('final_price', {
      precision: 12,
      scale: 2,
    }).generatedAlwaysAs(
      sql`numeric_mul("price", (1 - (COALESCE("discount", 0) / 100)))`,
    ),
    brandId: uuid('brand_id')
      .notNull()
      .references(() => brands.id, { onDelete: 'restrict' }),
    categoryId: uuid('category_id')
      .notNull()
      .references(() => categories.id, { onDelete: 'restrict' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  },
  (table) => [
    // 2. B-Tree Index cho khóa ngoại (tăng tốc JOIN và lọc theo hãng/danh mục)
    index('products_brand_id_idx').on(table.brandId),
    index('products_category_id_idx').on(table.categoryId),
    // 3. B-Tree Index cho các cột sắp xếp (ORDER BY)
    index('products_created_at_idx').on(table.createdAt),
    index('products_final_price_idx').on(table.finalPrice),
    // 4. GIN Trigram Index cho tìm kiếm ILIKE '%keyword%' trên cột name
    index('products_name_trgm_idx').using(
      'gin',
      sql`${table.name} gin_trgm_ops`,
    ),
  ],
);

export const productDetails = pgTable(
  'product_details',
  {
    id: uuid('id').primaryKey().defaultRandom().unique(),
    productId: uuid('product_id')
      .notNull()
      .references(() => products.id, { onDelete: 'cascade' }),
    description: text('description').array().notNull(),
    carousel: text('carousel').array().notNull(),
    shortDescription: text('short_description').notNull(),
    video: text('video').notNull(),
  },
  (table) => ({
    productIdUnique: uniqueIndex('product_details_product_id_unique').on(
      table.productId,
    ),
  }),
);

export const brands = pgTable('brands', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  image: text('image').notNull(),
  description: text('description'),
  slug: text('slug').notNull().unique(),
});

export const categories = pgTable('categories', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  image: text('image').notNull(),
  description: text('description'),
  slug: text('slug').notNull().unique(),
});

export const banners = pgTable('banners', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  image: text('image').notNull(),
  link: text('link'),
  active: boolean('active').default(true),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const notifications = pgTable('notifications', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: text('slug').notNull().unique(),
  // Phân loại: 'PRICE' (Giá), 'PROMO' (Khuyến mãi), 'SYSTEM' (Thông báo chung)
  type: varchar('type', { length: 50 }).default('GENERAL').notNull(),
  thumbnail: text('thumbnail'),
  shortDescription: text('short_description'),
  content: jsonb('content').notNull(),
  published: boolean('published').default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
