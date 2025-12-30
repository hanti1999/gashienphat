CREATE TABLE "notifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" text NOT NULL,
	"type" varchar(50) DEFAULT 'GENERAL' NOT NULL,
	"thumbnail" text,
	"short_description" text,
	"content" text NOT NULL,
	"published" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "notifications_id_unique" UNIQUE("id"),
	CONSTRAINT "notifications_slug_unique" UNIQUE("slug")
);
