-- Toolshed Database Initialization
-- This script creates the initial database schema for the Toolshed application

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Session storage table for authentication
CREATE TABLE IF NOT EXISTS "sessions" (
    "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL,
    PRIMARY KEY ("sid")
);

CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "sessions" ("expire");

-- Users table
CREATE TABLE IF NOT EXISTS "users" (
    "id" varchar PRIMARY KEY NOT NULL,
    "name" varchar(255) NOT NULL,
    "email" varchar(255) UNIQUE NOT NULL,
    "password" varchar(255) NOT NULL,
    "neighborhood" varchar(255) NOT NULL DEFAULT '',
    "contact_method" varchar(255) NOT NULL DEFAULT '',
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL
);

-- Items table
CREATE TABLE IF NOT EXISTS "items" (
    "id" varchar PRIMARY KEY NOT NULL,
    "owner_id" varchar NOT NULL REFERENCES "users"("id"),
    "title" varchar(255) NOT NULL,
    "description" text,
    "category" varchar(100) NOT NULL,
    "tags" jsonb DEFAULT '[]',
    "location" varchar(255) NOT NULL,
    "photo_path" varchar(500),
    "quantity_total" integer NOT NULL DEFAULT 1,
    "quantity_available" integer NOT NULL DEFAULT 1,
    "created_at" timestamp DEFAULT now() NOT NULL
);

-- Reservation events table (event sourcing)
CREATE TABLE IF NOT EXISTS "reservation_events" (
    "id" varchar PRIMARY KEY NOT NULL,
    "reservation_id" varchar NOT NULL,
    "event_type" varchar(50) NOT NULL,
    "actor_id" varchar NOT NULL REFERENCES "users"("id"),
    "timestamp" timestamp DEFAULT now() NOT NULL,
    "quantity" integer,
    "start_date" timestamp,
    "end_date" timestamp,
    "notes" text,
    "expected_version" integer
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "idx_items_owner_id" ON "items" ("owner_id");
CREATE INDEX IF NOT EXISTS "idx_items_category" ON "items" ("category");
CREATE INDEX IF NOT EXISTS "idx_reservation_events_reservation_id" ON "reservation_events" ("reservation_id");
CREATE INDEX IF NOT EXISTS "idx_reservation_events_actor_id" ON "reservation_events" ("actor_id");
CREATE INDEX IF NOT EXISTS "idx_reservation_events_timestamp" ON "reservation_events" ("timestamp");

-- Insert sample data for testing (only if tables are empty)
DO $$
BEGIN
    -- Check if users table is empty
    IF NOT EXISTS (SELECT 1 FROM "users" LIMIT 1) THEN
        -- Insert sample users
        INSERT INTO "users" ("id", "name", "email", "password", "neighborhood", "contact_method")
        VALUES 
            (uuid_generate_v4(), 'Alice Johnson', 'alice@neighborhood.local', '$2b$10$YiqRxQ4XXYXf1caLg/XIxu2jriZSjMQnr.oh8nCDv6ls/bc.KxEZu', 'Downtown', 'message'),
            (uuid_generate_v4(), 'Bob Smith', 'bob@neighborhood.local', '$2b$10$YiqRxQ4XXYXf1caLg/XIxu2jriZSjMQnr.oh8nCDv6ls/bc.KxEZu', 'Riverside', 'email'),
            (uuid_generate_v4(), 'Carol Davis', 'carol@neighborhood.local', '$2b$10$YiqRxQ4XXYXf1caLg/XIxu2jriZSjMQnr.oh8nCDv6ls/bc.KxEZu', 'Hillside', 'phone');
        
        -- Insert sample items (using the created user IDs)
        INSERT INTO "items" ("id", "owner_id", "title", "description", "category", "tags", "location", "quantity_total", "quantity_available")
        SELECT 
            uuid_generate_v4(),
            u.id,
            'Electric Drill',
            'Cordless drill with various bits',
            'Tools',
            '["power tool", "cordless"]'::jsonb,
            'Downtown',
            1,
            1
        FROM "users" u WHERE u.name = 'Alice Johnson'
        UNION ALL
        SELECT 
            uuid_generate_v4(),
            u.id,
            'Ladder',
            '6-foot aluminum step ladder',
            'Tools',
            '["ladder", "aluminum"]'::jsonb,
            'Riverside',
            1,
            1
        FROM "users" u WHERE u.name = 'Bob Smith'
        UNION ALL
        SELECT 
            uuid_generate_v4(),
            u.id,
            'Garden Hose',
            '50-foot garden hose with spray nozzle',
            'Garden',
            '["garden", "watering"]'::jsonb,
            'Hillside',
            1,
            1
        FROM "users" u WHERE u.name = 'Carol Davis';
        
        RAISE NOTICE 'Sample data inserted successfully';
    ELSE
        RAISE NOTICE 'Sample data already exists, skipping insertion';
    END IF;
END $$;

