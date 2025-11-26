import {
  pgTable,
  uuid,
  text,
  varchar,
  numeric,
  jsonb,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  model: jsonb('model').$type<Record<string, string>>().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: text('slug').unique(),
  price: numeric('price', { precision: 12, scale: 2 }).notNull(),
  coverImage: jsonb('cover_image').$type<Record<string, string>>().notNull(),
  discount: numeric('discount', { precision: 5, scale: 2 }),
  finalPrice: numeric('final_price', { precision: 12, scale: 2 }).notNull(),
  colors: text('colors').array().notNull(),
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
});

export const categories = pgTable('categories', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  image: text('image').notNull(),
  description: text('description'),
});
