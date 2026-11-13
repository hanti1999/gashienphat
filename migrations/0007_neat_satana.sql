CREATE EXTENSION IF NOT EXISTS pg_trgm;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "discount" SET DEFAULT '0';--> statement-breakpoint
ALTER TABLE "products" drop column "final_price";--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "final_price" numeric(12, 2) GENERATED ALWAYS AS (numeric_mul("price", (1 - (COALESCE("discount", 0) / 100)))) STORED;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_brand_id_idx" ON "products" USING btree ("brand_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_category_id_idx" ON "products" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_created_at_idx" ON "products" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_final_price_idx" ON "products" USING btree ("final_price");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_name_trgm_idx" ON "products" USING gin ("name" gin_trgm_ops);