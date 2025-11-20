CREATE TABLE "product_details" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"description" text[] NOT NULL,
	"carousel" text[] NOT NULL,
	"short_description" text NOT NULL,
	"video" text NOT NULL,
	CONSTRAINT "product_details_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"model" jsonb NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" numeric(12, 2) NOT NULL,
	"cover_image" jsonb NOT NULL,
	"discount" numeric(5, 2),
	"final_price" numeric(12, 2) NOT NULL,
	"brand_id" varchar(100) NOT NULL,
	"category_id" varchar(100) NOT NULL,
	"colors" text[] NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "products_id_unique" UNIQUE("id")
);
