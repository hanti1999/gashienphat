ALTER TABLE "brands" ADD COLUMN "slug" text;--> statement-breakpoint
ALTER TABLE "brands" ADD CONSTRAINT "brands_slug_unique" UNIQUE("slug");