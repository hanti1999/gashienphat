ALTER TABLE "categories" ADD COLUMN "slug" text;--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_slug_unique" UNIQUE("slug");