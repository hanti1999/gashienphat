CREATE TABLE "banners" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"image" text NOT NULL,
	"link" text,
	"active" boolean DEFAULT true,
	"sort_order" integer DEFAULT 0,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "banners_id_unique" UNIQUE("id")
);
