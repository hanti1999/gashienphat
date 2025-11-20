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
  price: numeric('price', { precision: 12, scale: 2 }).notNull(),
  coverImage: jsonb('cover_image').$type<Record<string, string>>().notNull(),
  discount: numeric('discount', { precision: 5, scale: 2 }),
  finalPrice: numeric('final_price', { precision: 12, scale: 2 }).notNull(),
  brandId: varchar('brand_id', { length: 100 }).notNull(),
  categoryId: varchar('category_id', { length: 100 }).notNull(),
  colors: text('colors').array().notNull(),
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
