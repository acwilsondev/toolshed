import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  integer,
  boolean,
  serial,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Session storage table for authentication
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  neighborhood: varchar("neighborhood", { length: 255 }).notNull().default(''),
  contactMethod: varchar("contact_method", { length: 255 }).notNull().default(''),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Items table
export const items = pgTable("items", {
  id: varchar("id").primaryKey().notNull(),
  ownerId: varchar("owner_id").notNull().references(() => users.id),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  category: varchar("category", { length: 100 }).notNull(),
  tags: jsonb("tags").$type<string[]>().default([]),
  location: varchar("location", { length: 255 }).notNull(),
  photoPath: varchar("photo_path", { length: 500 }),
  quantityTotal: integer("quantity_total").notNull().default(1),
  quantityAvailable: integer("quantity_available").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Reservation events table (event sourcing)
export const reservationEvents = pgTable("reservation_events", {
  id: varchar("id").primaryKey().notNull(),
  reservationId: varchar("reservation_id").notNull(),
  eventType: varchar("event_type", { length: 50 }).notNull(),
  actorId: varchar("actor_id").notNull().references(() => users.id),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  quantity: integer("quantity"),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  notes: text("notes"),
  expectedVersion: integer("expected_version"),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  items: many(items),
  reservationEvents: many(reservationEvents),
}));

export const itemsRelations = relations(items, ({ one }) => ({
  owner: one(users, {
    fields: [items.ownerId],
    references: [users.id],
  }),
}));

export const reservationEventsRelations = relations(reservationEvents, ({ one }) => ({
  actor: one(users, {
    fields: [reservationEvents.actorId],
    references: [users.id],
  }),
}));

// Type exports for the application
export type User = typeof users.$inferSelect;
export type UpsertUser = typeof users.$inferInsert;
export type Item = typeof items.$inferSelect;
export type InsertItem = typeof items.$inferInsert;
export type ReservationEvent = typeof reservationEvents.$inferSelect;
export type InsertReservationEvent = typeof reservationEvents.$inferInsert;