import {
  pgTable,
  uuid,
  text,
  varchar,
  numeric,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const products = pgTable('products', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  model: text('model').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: text('slug').unique(),
  price: numeric('price', { precision: 12, scale: 2 }).notNull(),
  coverImage: text('cover_image').notNull(),
  discount: numeric('discount', { precision: 5, scale: 2 }),
  finalPrice: numeric('final_price', {
    precision: 12,
    scale: 2,
  }).generatedAlwaysAs(sql`numeric_mul("price", (1 - ("discount" / 100)))`),
  brandId: uuid('brand_id')
    .notNull()
    .references(() => brands.id, { onDelete: 'restrict' }),
  categoryId: uuid('category_id')
    .notNull()
    .references(() => categories.id, { onDelete: 'restrict' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

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
      table.productId
    ),
  })
);

export const brands = pgTable('brands', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  image: text('image').notNull(),
  description: text('description'),
  slug: text('slug').unique(),
});

export const categories = pgTable('categories', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  image: text('image').notNull(),
  description: text('description'),
  slug: text('slug').unique(),
});
