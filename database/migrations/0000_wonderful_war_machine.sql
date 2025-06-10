CREATE TABLE "items" (
	"id" varchar PRIMARY KEY NOT NULL,
	"owner_id" varchar NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"category" varchar(100) NOT NULL,
	"tags" jsonb DEFAULT '[]'::jsonb,
	"location" varchar(255) NOT NULL,
	"photo_path" varchar(500),
	"quantity_total" integer DEFAULT 1 NOT NULL,
	"quantity_available" integer DEFAULT 1 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reservation_events" (
	"id" varchar PRIMARY KEY NOT NULL,
	"reservation_id" varchar NOT NULL,
	"item_id" varchar,
	"event_type" varchar(50) NOT NULL,
	"actor_id" varchar NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"quantity" integer,
	"start_date" timestamp,
	"end_date" timestamp,
	"notes" text,
	"expected_version" integer
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"sid" varchar PRIMARY KEY NOT NULL,
	"sess" jsonb NOT NULL,
	"expire" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"neighborhood" varchar(255) DEFAULT '' NOT NULL,
	"contact_method" varchar(255) DEFAULT '' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "items" ADD CONSTRAINT "items_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reservation_events" ADD CONSTRAINT "reservation_events_item_id_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reservation_events" ADD CONSTRAINT "reservation_events_actor_id_users_id_fk" FOREIGN KEY ("actor_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "IDX_session_expire" ON "sessions" USING btree ("expire");