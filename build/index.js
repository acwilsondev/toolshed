var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc2) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc2 = __getOwnPropDesc(from, key)) || desc2.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", { children: "Toolshed" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("style", { dangerouslySetInnerHTML: {
        __html: `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: system-ui, sans-serif; background-color: #f9fafb; color: #111827; }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
            .nav { background: white; border-bottom: 1px solid #e5e7eb; padding: 1rem 0; }
            .nav-content { display: flex; justify-content: space-between; align-items: center; }
            .nav h1 { font-size: 1.25rem; font-weight: bold; }
            .nav-links { display: flex; gap: 1rem; align-items: center; }
            .nav-links a { text-decoration: none; color: #6b7280; }
            .nav-links a:hover { color: #111827; }
            .btn { padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block; }
            .btn-primary { background: #2563eb; color: white; }
            .btn-primary:hover { background: #1d4ed8; }
            .btn-secondary { background: white; color: #374151; border: 1px solid #d1d5db; }
            .btn-secondary:hover { background: #f9fafb; }
            .text-center { text-align: center; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mb-12 { margin-bottom: 3rem; }
            .py-12 { padding: 3rem 0; }
            .p-8 { padding: 2rem; }
            .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
            .card { background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; }
            .card h3 { font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; }
            .card p { color: #6b7280; margin-bottom: 1rem; }
            .card a { color: #2563eb; text-decoration: none; font-weight: 500; }
            .card a:hover { color: #1d4ed8; }
            .cta { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 2rem; }
            .cta h3 { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; }
            .cta p { color: #6b7280; margin-bottom: 1.5rem; }
            .flex-center { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
            .title { font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; }
            .subtitle { font-size: 1.25rem; color: #6b7280; max-width: 600px; margin: 0 auto; }
            .form { max-width: 400px; margin: 2rem auto; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .form-group { margin-bottom: 1rem; }
            .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
            .form-input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; }
            .form-input:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
            .error { color: #dc2626; font-size: 0.875rem; margin-top: 0.25rem; }
            .success { color: #059669; font-size: 0.875rem; margin-top: 0.25rem; }
          `
      } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/api.reservations.$id.events.tsx
var api_reservations_id_events_exports = {};
__export(api_reservations_id_events_exports, {
  loader: () => loader
});
var import_node = require("@remix-run/node");

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  items: () => items,
  itemsRelations: () => itemsRelations,
  reservationEvents: () => reservationEvents,
  reservationEventsRelations: () => reservationEventsRelations,
  sessions: () => sessions,
  users: () => users,
  usersRelations: () => usersRelations
});
var import_pg_core = require("drizzle-orm/pg-core"), import_drizzle_orm = require("drizzle-orm"), sessions = (0, import_pg_core.pgTable)(
  "sessions",
  {
    sid: (0, import_pg_core.varchar)("sid").primaryKey(),
    sess: (0, import_pg_core.jsonb)("sess").notNull(),
    expire: (0, import_pg_core.timestamp)("expire").notNull()
  },
  (table) => [(0, import_pg_core.index)("IDX_session_expire").on(table.expire)]
), users = (0, import_pg_core.pgTable)("users", {
  id: (0, import_pg_core.varchar)("id").primaryKey().notNull(),
  name: (0, import_pg_core.varchar)("name", { length: 255 }).notNull(),
  email: (0, import_pg_core.varchar)("email", { length: 255 }).unique().notNull(),
  password: (0, import_pg_core.varchar)("password", { length: 255 }).notNull(),
  neighborhood: (0, import_pg_core.varchar)("neighborhood", { length: 255 }).notNull().default(""),
  contactMethod: (0, import_pg_core.varchar)("contact_method", { length: 255 }).notNull().default(""),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow().notNull(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow().notNull()
}), items = (0, import_pg_core.pgTable)("items", {
  id: (0, import_pg_core.varchar)("id").primaryKey().notNull(),
  ownerId: (0, import_pg_core.varchar)("owner_id").notNull().references(() => users.id),
  title: (0, import_pg_core.varchar)("title", { length: 255 }).notNull(),
  description: (0, import_pg_core.text)("description"),
  category: (0, import_pg_core.varchar)("category", { length: 100 }).notNull(),
  tags: (0, import_pg_core.jsonb)("tags").$type().default([]),
  location: (0, import_pg_core.varchar)("location", { length: 255 }).notNull(),
  photoPath: (0, import_pg_core.varchar)("photo_path", { length: 500 }),
  quantityTotal: (0, import_pg_core.integer)("quantity_total").notNull().default(1),
  quantityAvailable: (0, import_pg_core.integer)("quantity_available").notNull().default(1),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow().notNull()
}), reservationEvents = (0, import_pg_core.pgTable)("reservation_events", {
  id: (0, import_pg_core.varchar)("id").primaryKey().notNull(),
  reservationId: (0, import_pg_core.varchar)("reservation_id").notNull(),
  eventType: (0, import_pg_core.varchar)("event_type", { length: 50 }).notNull(),
  actorId: (0, import_pg_core.varchar)("actor_id").notNull().references(() => users.id),
  timestamp: (0, import_pg_core.timestamp)("timestamp").defaultNow().notNull(),
  quantity: (0, import_pg_core.integer)("quantity"),
  startDate: (0, import_pg_core.timestamp)("start_date"),
  endDate: (0, import_pg_core.timestamp)("end_date"),
  notes: (0, import_pg_core.text)("notes"),
  expectedVersion: (0, import_pg_core.integer)("expected_version")
}), usersRelations = (0, import_drizzle_orm.relations)(users, ({ many }) => ({
  items: many(items),
  reservationEvents: many(reservationEvents)
})), itemsRelations = (0, import_drizzle_orm.relations)(items, ({ one }) => ({
  owner: one(users, {
    fields: [items.ownerId],
    references: [users.id]
  })
})), reservationEventsRelations = (0, import_drizzle_orm.relations)(reservationEvents, ({ one }) => ({
  actor: one(users, {
    fields: [reservationEvents.actorId],
    references: [users.id]
  })
}));

// server/db.ts
var import_serverless = require("@neondatabase/serverless"), import_neon_serverless = require("drizzle-orm/neon-serverless"), import_ws = __toESM(require("ws"));
import_serverless.neonConfig.webSocketConstructor = import_ws.default;
if (!process.env.DATABASE_URL)
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
var pool = new import_serverless.Pool({ connectionString: process.env.DATABASE_URL }), db = (0, import_neon_serverless.drizzle)({ client: pool, schema: schema_exports });

// server/storage.ts
var import_drizzle_orm2 = require("drizzle-orm"), import_uuid = require("uuid");
var DatabaseStorage = class {
  // User operations (mandatory for Replit Auth)
  async getUser(id) {
    let [user] = await db.select().from(users).where((0, import_drizzle_orm2.eq)(users.id, id));
    return user;
  }
  async upsertUser(userData) {
    let [user] = await db.insert(users).values(userData).onConflictDoUpdate({
      target: users.id,
      set: {
        ...userData,
        updatedAt: /* @__PURE__ */ new Date()
      }
    }).returning();
    return user;
  }
  // Additional user operations
  async getUserByEmail(email) {
    let [user] = await db.select().from(users).where((0, import_drizzle_orm2.eq)(users.email, email));
    return user || null;
  }
  async createUser(userData) {
    let newUser = {
      id: (0, import_uuid.v4)(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      neighborhood: userData.neighborhood || "",
      contactMethod: userData.contact_method || ""
    }, [user] = await db.insert(users).values(newUser).returning();
    return user;
  }
  async updateUser(id, userData) {
    let updateData = {
      ...userData.name && { name: userData.name },
      ...userData.email && { email: userData.email },
      ...userData.password && { password: userData.password },
      ...userData.neighborhood && { neighborhood: userData.neighborhood },
      ...userData.contact_method && { contactMethod: userData.contact_method },
      updatedAt: /* @__PURE__ */ new Date()
    }, [user] = await db.update(users).set(updateData).where((0, import_drizzle_orm2.eq)(users.id, id)).returning();
    return user || null;
  }
  async deleteUser(id) {
    return ((await db.delete(users).where((0, import_drizzle_orm2.eq)(users.id, id))).rowCount ?? 0) > 0;
  }
  async getUsers(limit = 50, offset = 0) {
    return await db.select().from(users).limit(limit).offset(offset);
  }
  // Item operations
  async getItems(limit = 50, offset = 0) {
    return await db.select().from(items).limit(limit).offset(offset);
  }
  async getItemById(id) {
    let [item] = await db.select().from(items).where((0, import_drizzle_orm2.eq)(items.id, id));
    return item || null;
  }
  async createItem(itemData) {
    let newItem = {
      id: (0, import_uuid.v4)(),
      ownerId: itemData.owner_id,
      title: itemData.title,
      description: itemData.description || null,
      category: itemData.category,
      tags: itemData.tags || [],
      location: itemData.location,
      photoPath: itemData.photo_path || null,
      quantityTotal: itemData.quantity_total,
      quantityAvailable: itemData.quantity_total
    }, [item] = await db.insert(items).values(newItem).returning();
    return item;
  }
  async updateItem(id, itemData) {
    let updateData = {
      ...itemData.title && { title: itemData.title },
      ...itemData.description !== void 0 && { description: itemData.description },
      ...itemData.category && { category: itemData.category },
      ...itemData.tags && { tags: itemData.tags },
      ...itemData.location && { location: itemData.location },
      ...itemData.photo_path !== void 0 && { photoPath: itemData.photo_path },
      ...itemData.quantity_total && { quantityTotal: itemData.quantity_total }
    }, [item] = await db.update(items).set(updateData).where((0, import_drizzle_orm2.eq)(items.id, id)).returning();
    return item || null;
  }
  async deleteItem(id) {
    return ((await db.delete(items).where((0, import_drizzle_orm2.eq)(items.id, id))).rowCount ?? 0) > 0;
  }
  // Reservation operations (event sourced)
  async getReservationEvents(limit = 50, offset = 0, reservationId, afterTimestamp) {
    return reservationId && afterTimestamp ? await db.select().from(reservationEvents).where((0, import_drizzle_orm2.and)(
      (0, import_drizzle_orm2.eq)(reservationEvents.reservationId, reservationId),
      (0, import_drizzle_orm2.gte)(reservationEvents.timestamp, afterTimestamp)
    )).orderBy((0, import_drizzle_orm2.desc)(reservationEvents.timestamp)).limit(limit).offset(offset) : reservationId ? await db.select().from(reservationEvents).where((0, import_drizzle_orm2.eq)(reservationEvents.reservationId, reservationId)).orderBy((0, import_drizzle_orm2.desc)(reservationEvents.timestamp)).limit(limit).offset(offset) : afterTimestamp ? await db.select().from(reservationEvents).where((0, import_drizzle_orm2.gte)(reservationEvents.timestamp, afterTimestamp)).orderBy((0, import_drizzle_orm2.desc)(reservationEvents.timestamp)).limit(limit).offset(offset) : await db.select().from(reservationEvents).orderBy((0, import_drizzle_orm2.desc)(reservationEvents.timestamp)).limit(limit).offset(offset);
  }
  async createReservationEvent(eventData, actorId) {
    let newEvent = {
      id: (0, import_uuid.v4)(),
      reservationId: eventData.reservation_id || (0, import_uuid.v4)(),
      eventType: eventData.event_type,
      actorId,
      quantity: eventData.quantity || null,
      startDate: eventData.start_date || null,
      endDate: eventData.end_date || null,
      notes: eventData.notes || null,
      expectedVersion: eventData.expected_version || null
    }, [event] = await db.insert(reservationEvents).values(newEvent).returning();
    return event;
  }
  async getReservationById(id) {
    let events = await this.getReservationEvents(void 0, void 0, id);
    return events.length === 0 ? null : this.computeReservationStateFromEvents(events);
  }
  async getReservations(limit = 50, offset = 0, itemId, requesterId, status) {
    let allEvents = await this.getReservationEvents(), reservationMap = /* @__PURE__ */ new Map();
    for (let event of allEvents)
      reservationMap.has(event.reservationId) || reservationMap.set(event.reservationId, []), reservationMap.get(event.reservationId).push(event);
    let reservations = [];
    for (let [reservationId, events] of reservationMap.entries()) {
      let state = this.computeReservationStateFromEvents(events);
      if (state) {
        if (itemId && state.item_id !== itemId || requesterId && state.requester_id !== requesterId || status && state.status !== status)
          continue;
        reservations.push(state);
      }
    }
    return reservations.sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime()).slice(offset, offset + limit);
  }
  // Authentication
  async authenticateUser(email, password) {
    let user = await this.getUserByEmail(email);
    return user && user.password === password ? user : null;
  }
  // Helper method to compute reservation state from events
  computeReservationStateFromEvents(events) {
    if (events.length === 0)
      return null;
    let sortedEvents = events.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime()), firstEvent = sortedEvents[0], lastEvent = sortedEvents[sortedEvents.length - 1], itemIdFromFirstEvent = this.getItemIdFromFirstEvent(firstEvent.reservationId), state = {
      id: firstEvent.reservationId,
      item_id: itemIdFromFirstEvent || "",
      // Will be updated when we have proper item tracking
      owner_id: "",
      // Will be resolved from item
      requester_id: firstEvent.actorId,
      status: "pending" /* PENDING */,
      quantity_requested: firstEvent.quantity || 1,
      start_date: firstEvent.startDate,
      end_date: firstEvent.endDate,
      notes: firstEvent.notes,
      version: sortedEvents.length,
      created_at: firstEvent.timestamp,
      updated_at: lastEvent.timestamp
    };
    for (let event of sortedEvents) {
      switch (event.eventType) {
        case "requested" /* REQUESTED */:
          state.status = "pending" /* PENDING */, event.quantity && (state.quantity_requested = event.quantity), event.startDate && (state.start_date = event.startDate), event.endDate && (state.end_date = event.endDate), event.notes && (state.notes = event.notes);
          break;
        case "approved" /* APPROVED */:
          state.status = "approved" /* APPROVED */;
          break;
        case "rejected" /* REJECTED */:
          state.status = "rejected" /* REJECTED */;
          break;
        case "activated" /* ACTIVATED */:
          state.status = "active" /* ACTIVE */;
          break;
        case "returned" /* RETURNED */:
          state.status = "returned" /* RETURNED */;
          break;
        case "cancelled" /* CANCELLED */:
          state.status = "cancelled" /* CANCELLED */;
          break;
        case "extended" /* EXTENDED */:
          event.endDate && (state.end_date = event.endDate);
          break;
        case "notes_updated" /* NOTES_UPDATED */:
          event.notes && (state.notes = event.notes);
          break;
      }
      state.updated_at = event.timestamp;
    }
    return state;
  }
  getItemIdFromFirstEvent(reservationId) {
    return "";
  }
}, storage = new DatabaseStorage();

// app/utils/db.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
async function initializeDatabase() {
  if ((await storage.getUsers(1)).length === 0) {
    let sampleUsers = [
      {
        name: "Alice Johnson",
        email: "alice@neighborhood.local",
        password: await import_bcryptjs.default.hash("password123", 10),
        neighborhood: "Downtown",
        contact_method: "message"
      },
      {
        name: "Bob Smith",
        email: "bob@neighborhood.local",
        password: await import_bcryptjs.default.hash("password123", 10),
        neighborhood: "Riverside",
        contact_method: "email"
      },
      {
        name: "Carol Davis",
        email: "carol@neighborhood.local",
        password: await import_bcryptjs.default.hash("password123", 10),
        neighborhood: "Hillside",
        contact_method: "phone"
      }
    ];
    for (let user of sampleUsers)
      await storage.createUser(user);
    let createdUsers = await storage.getUsers(), alice = createdUsers.find((u) => u.name === "Alice Johnson"), bob = createdUsers.find((u) => u.name === "Bob Smith");
    if (alice && bob) {
      let sampleItems = [
        {
          owner_id: alice.id,
          title: "Electric Drill",
          description: "Cordless drill with various bits",
          category: "Tools",
          tags: ["power tool", "cordless"],
          location: "Downtown",
          quantity_total: 1
        },
        {
          owner_id: bob.id,
          title: "Ladder",
          description: "6-foot aluminum step ladder",
          category: "Tools",
          tags: ["ladder", "aluminum"],
          location: "Riverside",
          quantity_total: 1
        }
      ];
      for (let item of sampleItems)
        await storage.createItem(item);
    }
  }
}
async function getUsers(limit = 50, offset = 0) {
  return await storage.getUsers(limit, offset);
}
async function getUserById(id) {
  return await storage.getUser(id) || null;
}
async function getUserByEmail(email) {
  return await storage.getUserByEmail(email);
}
async function createUser(userData) {
  let hashedData = {
    ...userData,
    password: await import_bcryptjs.default.hash(userData.password, 10)
  };
  return await storage.createUser(hashedData);
}
async function updateUser(id, userData) {
  return userData.password && (userData.password = await import_bcryptjs.default.hash(userData.password, 10)), await storage.updateUser(id, userData);
}
async function deleteUser(id) {
  return await storage.deleteUser(id);
}
async function getItems(limit = 50, offset = 0) {
  return await storage.getItems(limit, offset);
}
async function getItemById(id) {
  return await storage.getItemById(id);
}
async function createItem(itemData) {
  return await storage.createItem(itemData);
}
async function updateItem(id, itemData) {
  return await storage.updateItem(id, itemData);
}
async function deleteItem(id) {
  return await storage.deleteItem(id);
}
async function getReservations(limit = 50, offset = 0, itemId, requesterId, status) {
  return await storage.getReservations(limit, offset, itemId, requesterId, status);
}
async function getReservationById(id) {
  return await storage.getReservationById(id);
}
async function getReservationEvents(limit = 50, offset = 0, reservationId, afterTimestamp) {
  return await storage.getReservationEvents(limit, offset, reservationId, afterTimestamp);
}
async function createReservationEvent(eventData, actorId) {
  return await storage.createReservationEvent(eventData, actorId);
}
async function authenticateUser(email, password) {
  let user = await storage.getUserByEmail(email);
  return user && await import_bcryptjs.default.compare(password, user.password) ? user : null;
}
function getHealthStatus() {
  return {
    status: "healthy",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    database: "postgresql",
    eventSourcing: "enabled"
  };
}

// app/routes/api.reservations.$id.events.tsx
function requireAuth(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader({ request, params }) {
  try {
    requireAuth(request);
    let { id } = params;
    if (!id)
      return (0, import_node.json)({ error: "Reservation ID is required" }, { status: 400 });
    let events = await getReservationEvents(50, 0, id);
    return events.length === 0 ? (0, import_node.json)({ error: "Reservation not found" }, { status: 404 }) : (0, import_node.json)(events);
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get reservation events error:", error), (0, import_node.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.reservations._index.tsx
var api_reservations_index_exports = {};
__export(api_reservations_index_exports, {
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");
function requireAuth2(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader2({ request }) {
  try {
    requireAuth2(request);
    let url = new URL(request.url), limit = parseInt(url.searchParams.get("limit") || "50"), offset = parseInt(url.searchParams.get("offset") || "0"), itemId = url.searchParams.get("item_id") || void 0, requesterId = url.searchParams.get("requester_id") || void 0, status = url.searchParams.get("status") || void 0, reservations = await getReservations(limit, offset, itemId, requesterId, status);
    return (0, import_node2.json)(reservations);
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get reservations error:", error), (0, import_node2.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.reservations.events.tsx
var api_reservations_events_exports = {};
__export(api_reservations_events_exports, {
  action: () => action,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node");
function requireAuth3(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
function extractUserIdFromToken(token) {
  return token.replace("mock-jwt-token-", "");
}
async function loader3({ request }) {
  try {
    requireAuth3(request);
    let url = new URL(request.url), limit = parseInt(url.searchParams.get("limit") || "50"), offset = parseInt(url.searchParams.get("offset") || "0"), reservationId = url.searchParams.get("reservation_id") || void 0, afterTimestamp = url.searchParams.get("after_timestamp") ? new Date(url.searchParams.get("after_timestamp")) : void 0, events = await getReservationEvents(limit, offset, reservationId, afterTimestamp);
    return (0, import_node3.json)(events);
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get reservation events error:", error), (0, import_node3.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action({ request }) {
  if (request.method !== "POST")
    return (0, import_node3.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    let token = requireAuth3(request), actorId = extractUserIdFromToken(token), body = await request.json();
    if (!body.event_type)
      return (0, import_node3.json)({ error: "event_type is required" }, { status: 400 });
    body.start_date && typeof body.start_date == "string" && (body.start_date = new Date(body.start_date)), body.end_date && typeof body.end_date == "string" && (body.end_date = new Date(body.end_date));
    let event = await createReservationEvent(body, actorId);
    return (0, import_node3.json)(event, { status: 201 });
  } catch (error) {
    return error instanceof Response ? error : error instanceof Error ? error.message.includes("insufficient quantity") || error.message.includes("not found") ? (0, import_node3.json)({ error: error.message }, { status: 409 }) : (0, import_node3.json)({ error: error.message }, { status: 400 }) : (console.error("Create reservation event error:", error), (0, import_node3.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.reservations.$id.tsx
var api_reservations_id_exports = {};
__export(api_reservations_id_exports, {
  loader: () => loader4
});
var import_node4 = require("@remix-run/node");
function requireAuth4(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader4({ request, params }) {
  try {
    requireAuth4(request);
    let { id } = params;
    if (!id)
      return (0, import_node4.json)({ error: "Reservation ID is required" }, { status: 400 });
    let reservation = await getReservationById(id);
    return reservation ? (0, import_node4.json)(reservation) : (0, import_node4.json)({ error: "Reservation not found" }, { status: 404 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get reservation error:", error), (0, import_node4.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/admin.reservations.tsx
var admin_reservations_exports = {};
__export(admin_reservations_exports, {
  default: () => AdminReservations,
  loader: () => loader5,
  meta: () => meta
});
var import_node5 = require("@remix-run/node"), import_react3 = require("@remix-run/react");
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => [
  { title: "Reservation Management - Admin - Toolshed" },
  { name: "description", content: "Manage platform reservations and bookings" }
];
async function loader5({ request }) {
  let reservations = await getReservations(100, 0), users2 = await getUsers(100, 0), items2 = await getItems(100, 0), userMap = new Map(users2.map((user) => [user.id, user.name])), itemMap = new Map(items2.map((item) => [item.id, item.title]));
  return (0, import_node5.json)({
    reservations,
    userMap: Object.fromEntries(userMap),
    itemMap: Object.fromEntries(itemMap)
  });
}
function AdminReservations() {
  let { reservations, userMap, itemMap } = (0, import_react3.useLoaderData)(), getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-blue-100 text-blue-800";
      case "returned":
        return "bg-gray-100 text-gray-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_react3.Link,
        {
          to: "/admin",
          className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80",
          children: "\u2190 Back to Dashboard"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Reservation Management" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-lg text-neighborhood-slate/80", children: "Monitor and manage all platform reservations" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-8", children: ["pending", "approved", "active", "returned", "cancelled"].map((status) => {
      let count = reservations.filter((r) => r.status === status).length;
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-4 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-2xl font-bold text-neighborhood-spruce", children: count }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-neighborhood-slate/60 capitalize", children: status })
      ] }, status);
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Reservations (",
          reservations.length,
          ")"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "", children: "All Statuses" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "pending", children: "Pending" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "approved", children: "Approved" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "active", children: "Active" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "returned", children: "Returned" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "cancelled", children: "Cancelled" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "rejected", children: "Rejected" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              type: "search",
              placeholder: "Search reservations...",
              className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Reservation ID" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Item" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Requester" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Owner" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Dates" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: reservations.map((reservation) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-sm font-medium text-gray-900", children: [
              "#",
              reservation.id.slice(-8)
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-sm text-gray-500", children: [
              "Qty: ",
              reservation.quantity_requested
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm text-gray-900", children: itemMap[reservation.item_id] || "Unknown Item" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm text-gray-500", children: reservation.item_id.slice(-8) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm text-gray-900", children: userMap[reservation.requester_id] || "Unknown User" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm text-gray-500", children: reservation.requester_id.slice(-8) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm text-gray-900", children: userMap[reservation.owner_id] || "Unknown User" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm text-gray-500", children: reservation.owner_id.slice(-8) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(reservation.status)}`, children: reservation.status }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: reservation.start_date ? new Date(reservation.start_date).toLocaleDateString() : "TBD" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
              "to ",
              reservation.end_date ? new Date(reservation.end_date).toLocaleDateString() : "TBD"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_react3.Link,
              {
                to: `/admin/reservations/${reservation.id}`,
                className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4",
                children: "View Details"
              }
            ),
            reservation.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Moderate" })
          ] })
        ] }, reservation.id)) })
      ] }) })
    ] })
  ] }) });
}

// app/routes/api.items._index.tsx
var api_items_index_exports = {};
__export(api_items_index_exports, {
  action: () => action2,
  loader: () => loader6
});
var import_node6 = require("@remix-run/node");
function requireAuth5(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader6({ request }) {
  try {
    requireAuth5(request);
    let url = new URL(request.url), limit = parseInt(url.searchParams.get("limit") || "50"), offset = parseInt(url.searchParams.get("offset") || "0"), items2 = await getItems(limit, offset);
    return (0, import_node6.json)(items2);
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get items error:", error), (0, import_node6.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action2({ request }) {
  if (request.method !== "POST")
    return (0, import_node6.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    requireAuth5(request);
    let body = await request.json();
    if (!body.owner_id || !body.title || !body.category || !body.location || !body.quantity_total)
      return (0, import_node6.json)({
        error: "owner_id, title, category, location, and quantity_total are required"
      }, { status: 400 });
    let item = await createItem(body);
    return (0, import_node6.json)(item, { status: 201 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Create item error:", error), (0, import_node6.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.users._index.tsx
var api_users_index_exports = {};
__export(api_users_index_exports, {
  action: () => action3,
  loader: () => loader7
});
var import_node7 = require("@remix-run/node");
function requireAuth6(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader7({ request }) {
  try {
    requireAuth6(request);
    let url = new URL(request.url), limit = parseInt(url.searchParams.get("limit") || "50"), offset = parseInt(url.searchParams.get("offset") || "0"), users2 = await getUsers(limit, offset);
    return (0, import_node7.json)(users2);
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get users error:", error), (0, import_node7.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action3({ request }) {
  if (request.method !== "POST")
    return (0, import_node7.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    requireAuth6(request);
    let body = await request.json();
    if (!body.name || !body.email || !body.password)
      return (0, import_node7.json)({ error: "Name, email, and password are required" }, { status: 400 });
    let user = await createUser(body);
    return (0, import_node7.json)(user, { status: 201 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Create user error:", error), (0, import_node7.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.auth.logout.tsx
var api_auth_logout_exports = {};
__export(api_auth_logout_exports, {
  action: () => action4
});
var import_node8 = require("@remix-run/node");
async function action4({ request }) {
  if (request.method !== "POST")
    return (0, import_node8.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    let authHeader = request.headers.get("Authorization");
    return !authHeader || !authHeader.startsWith("Bearer ") ? (0, import_node8.json)({ error: "Invalid or missing token" }, { status: 401 }) : (0, import_node8.json)({ message: "Successfully logged out" }, { status: 200 });
  } catch (error) {
    return console.error("Logout error:", error), (0, import_node8.json)({ error: "Internal server error" }, { status: 500 });
  }
}

// app/routes/api.auth.login.tsx
var api_auth_login_exports = {};
__export(api_auth_login_exports, {
  action: () => action5
});
var import_node9 = require("@remix-run/node");
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
async function action5({ request }) {
  if (request.method !== "POST")
    return (0, import_node9.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    await initializeDatabase();
    let body = await request.json();
    if (!body.email || !body.password)
      return (0, import_node9.json)({ error: "Email and password are required" }, { status: 400 });
    let user = await authenticateUser(body.email, body.password);
    if (!user)
      return (0, import_node9.json)({ error: "Invalid credentials" }, { status: 401 });
    let response = { token: import_jsonwebtoken.default.sign(
      { userId: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET || "dev-secret-key",
      { expiresIn: "24h" }
    ) };
    return (0, import_node9.json)(response, { status: 200 });
  } catch (error) {
    return console.error("Login error:", error), (0, import_node9.json)({ error: "Internal server error" }, { status: 500 });
  }
}

// app/routes/api.items.$id.tsx
var api_items_id_exports = {};
__export(api_items_id_exports, {
  action: () => action6,
  loader: () => loader8
});
var import_node10 = require("@remix-run/node");
function requireAuth7(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader8({ request, params }) {
  try {
    requireAuth7(request);
    let { id } = params;
    if (!id)
      return (0, import_node10.json)({ error: "Item ID is required" }, { status: 400 });
    let item = await getItemById(id);
    return item ? (0, import_node10.json)(item) : (0, import_node10.json)({ error: "Item not found" }, { status: 404 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get item error:", error), (0, import_node10.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action6({ request, params }) {
  try {
    requireAuth7(request);
    let { id } = params;
    if (!id)
      return (0, import_node10.json)({ error: "Item ID is required" }, { status: 400 });
    if (request.method === "PUT") {
      let body = await request.json(), item = await updateItem(id, body);
      return item ? (0, import_node10.json)(item) : (0, import_node10.json)({ error: "Item not found" }, { status: 404 });
    } else
      return request.method === "DELETE" ? await deleteItem(id) ? new Response(null, { status: 204 }) : (0, import_node10.json)({ error: "Item not found" }, { status: 404 }) : (0, import_node10.json)({ error: "Method not allowed" }, { status: 405 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Item action error:", error), (0, import_node10.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.users.$id.tsx
var api_users_id_exports = {};
__export(api_users_id_exports, {
  action: () => action7,
  loader: () => loader9
});
var import_node11 = require("@remix-run/node");
function requireAuth8(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader9({ request, params }) {
  try {
    requireAuth8(request);
    let { id } = params;
    if (!id)
      return (0, import_node11.json)({ error: "User ID is required" }, { status: 400 });
    let user = await getUserById(id);
    return user ? (0, import_node11.json)(user) : (0, import_node11.json)({ error: "User not found" }, { status: 404 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get user error:", error), (0, import_node11.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action7({ request, params }) {
  try {
    requireAuth8(request);
    let { id } = params;
    if (!id)
      return (0, import_node11.json)({ error: "User ID is required" }, { status: 400 });
    if (request.method === "PUT") {
      let body = await request.json(), user = await updateUser(id, body);
      return user ? (0, import_node11.json)(user) : (0, import_node11.json)({ error: "User not found" }, { status: 404 });
    } else
      return request.method === "DELETE" ? await deleteUser(id) ? new Response(null, { status: 204 }) : (0, import_node11.json)({ error: "User not found" }, { status: 404 }) : (0, import_node11.json)({ error: "Method not allowed" }, { status: 405 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("User action error:", error), (0, import_node11.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/admin._index.tsx
var admin_index_exports = {};
__export(admin_index_exports, {
  default: () => AdminDashboard,
  loader: () => loader10,
  meta: () => meta2
});
var import_node12 = require("@remix-run/node"), import_react4 = require("@remix-run/react");
var import_jsx_runtime4 = require("react/jsx-runtime"), meta2 = () => [
  { title: "Admin Dashboard - Toolshed" },
  { name: "description", content: "Admin interface for managing community resources" }
];
async function loader10({ request }) {
  let users2 = await getUsers(10, 0), items2 = await getItems(10, 0), reservations = await getReservations(10, 0), recentEvents = await getReservationEvents(10, 0), stats = {
    totalUsers: users2.length,
    totalItems: items2.length,
    totalReservations: reservations.length,
    activeReservations: reservations.filter((r) => r.status === "active").length,
    pendingReservations: reservations.filter((r) => r.status === "pending").length,
    availableItems: items2.filter((i) => i.quantity_available > 0).length
  };
  return (0, import_node12.json)({ users: users2, items: items2, reservations, recentEvents, stats });
}
function AdminDashboard() {
  let { users: users2, items: items2, reservations, recentEvents, stats } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Admin Dashboard" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-lg text-neighborhood-slate/80", children: "Manage community resources and monitor platform activity" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Users" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalUsers }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-neighborhood-slate/60", children: "Total registered users" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Items" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalItems }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "text-sm text-neighborhood-slate/60", children: [
          stats.availableItems,
          " available now"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Reservations" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalReservations }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "text-sm text-neighborhood-slate/60", children: [
          stats.activeReservations,
          " active, ",
          stats.pendingReservations,
          " pending"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Users" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react4.Link,
            {
              to: "/admin/users",
              className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm",
              children: "View All \u2192"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-3", children: users2.slice(0, 5).map((user) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "font-medium text-neighborhood-slate", children: user.name }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-neighborhood-slate/60", children: user.email })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-neighborhood-slate/60", children: user.neighborhood }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs text-neighborhood-slate/40", children: new Date(user.created_at).toLocaleDateString() })
          ] })
        ] }, user.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Items" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react4.Link,
            {
              to: "/admin/items",
              className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm",
              children: "View All \u2192"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-3", children: items2.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "font-medium text-neighborhood-slate", children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-neighborhood-slate/60", children: item.category })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: `text-sm ${item.quantity_available > 0 ? "text-green-600" : "text-red-600"}`, children: item.quantity_available > 0 ? "Available" : "Reserved" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs text-neighborhood-slate/40", children: item.location })
          ] })
        ] }, item.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Reservations" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react4.Link,
            {
              to: "/admin/reservations",
              className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm",
              children: "View All \u2192"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-3", children: reservations.slice(0, 5).map((reservation) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "font-medium text-neighborhood-slate", children: [
              "Reservation #",
              reservation.id.slice(-8)
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "text-sm text-neighborhood-slate/60", children: [
              "Item: ",
              reservation.item_id.slice(-8)
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `px-2 py-1 text-xs rounded-full ${reservation.status === "active" ? "bg-green-100 text-green-800" : reservation.status === "pending" ? "bg-yellow-100 text-yellow-800" : reservation.status === "approved" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`, children: reservation.status }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs text-neighborhood-slate/40 mt-1", children: new Date(reservation.updated_at).toLocaleDateString() })
          ] })
        ] }, reservation.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Activity" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react4.Link,
            {
              to: "/admin/events",
              className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm",
              children: "View All \u2192"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-3", children: recentEvents.slice(0, 5).map((event) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "font-medium text-neighborhood-slate capitalize", children: event.event_type.replace("_", " ") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "text-sm text-neighborhood-slate/60", children: [
              "Reservation #",
              event.reservation_id.slice(-8)
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs text-neighborhood-slate/40", children: new Date(event.timestamp).toLocaleString() }) })
        ] }, event.id)) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-4", children: "Quick Actions" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_react4.Link,
          {
            to: "/admin/users",
            className: "p-4 bg-neighborhood-spruce text-white rounded-lg hover:bg-neighborhood-spruce/90 transition-colors text-center",
            children: "Manage Users"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_react4.Link,
          {
            to: "/admin/items",
            className: "p-4 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-center",
            children: "Manage Items"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_react4.Link,
          {
            to: "/admin/reservations",
            className: "p-4 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/90 transition-colors text-center",
            children: "View Reservations"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_react4.Link,
          {
            to: "/admin/events",
            className: "p-4 bg-neighborhood-rust text-white rounded-lg hover:bg-neighborhood-rust/90 transition-colors text-center",
            children: "Activity Log"
          }
        )
      ] })
    ] })
  ] }) });
}

// app/routes/admin.items.tsx
var admin_items_exports = {};
__export(admin_items_exports, {
  default: () => AdminItems,
  loader: () => loader11,
  meta: () => meta3
});
var import_node13 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_runtime5 = require("react/jsx-runtime"), meta3 = () => [
  { title: "Item Management - Admin - Toolshed" },
  { name: "description", content: "Manage platform items and tools" }
];
async function loader11({ request }) {
  let items2 = await getItems(100, 0), users2 = await getUsers(100, 0), userMap = new Map(users2.map((user) => [user.id, user.name]));
  return (0, import_node13.json)({ items: items2, userMap: Object.fromEntries(userMap) });
}
function AdminItems() {
  let { items: items2, userMap } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_react5.Link,
        {
          to: "/admin",
          className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80",
          children: "\u2190 Back to Dashboard"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Item Management" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-lg text-neighborhood-slate/80", children: "Review and manage all shared items and tools" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Items (",
          items2.length,
          ")"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "input",
            {
              type: "search",
              placeholder: "Search items...",
              className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "", children: "All Categories" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "power-tools", children: "Power Tools" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "hand-tools", children: "Hand Tools" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "garden", children: "Garden" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "automotive", children: "Automotive" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "home", children: "Home" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "specialty", children: "Specialty" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Item" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Owner" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Category" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Availability" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Location" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: items2.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-sm font-medium text-gray-900", children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-sm text-gray-500 max-w-xs truncate", children: item.description || "No description" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-sm text-gray-900", children: userMap[item.owner_id] || "Unknown User" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "text-sm text-gray-500", children: [
              "ID: ",
              item.owner_id.slice(-8)
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-neighborhood-goldenrod text-white", children: item.category.replace("-", " ") }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.quantity_available > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: item.quantity_available > 0 ? `${item.quantity_available} available` : "Reserved" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: item.location }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              import_react5.Link,
              {
                to: `/admin/items/${item.id}`,
                className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4",
                children: "View Details"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "text-neighborhood-rust hover:text-neighborhood-rust/80", children: "Remove" })
          ] })
        ] }, item.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Popular Tags" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex flex-wrap gap-2", children: Array.from(new Set(items2.flatMap((item) => item.tags))).slice(0, 20).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "span",
        {
          className: "px-3 py-1 bg-neighborhood-mint/20 text-neighborhood-slate text-sm rounded-full",
          children: tag
        },
        tag
      )) })
    ] })
  ] }) });
}

// app/routes/admin.users.tsx
var admin_users_exports = {};
__export(admin_users_exports, {
  default: () => AdminUsers,
  loader: () => loader12,
  meta: () => meta4
});
var import_node14 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_jsx_runtime6 = require("react/jsx-runtime"), meta4 = () => [
  { title: "User Management - Admin - Toolshed" },
  { name: "description", content: "Manage platform users" }
];
async function loader12({ request }) {
  let users2 = await getUsers(100, 0);
  return (0, import_node14.json)({ users: users2 });
}
function AdminUsers() {
  let { users: users2 } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react6.Link,
        {
          to: "/admin",
          className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80",
          children: "\u2190 Back to Dashboard"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "User Management" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-lg text-neighborhood-slate/80", children: "Review and manage all platform users" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Users (",
          users2.length,
          ")"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "input",
            {
              type: "search",
              placeholder: "Search users...",
              className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "", children: "All Neighborhoods" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "downtown", children: "Downtown" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "riverside", children: "Riverside" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "hillside", children: "Hillside" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "User" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Neighborhood" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Contact Method" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Joined" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: users2.map((user) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-sm font-medium text-gray-900", children: user.name }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-sm text-gray-500", children: user.email })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-neighborhood-mint text-neighborhood-slate", children: user.neighborhood }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: user.contact_method }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(user.created_at).toLocaleDateString() }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_react6.Link,
              {
                to: `/admin/users/${user.id}`,
                className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4",
                children: "View Details"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "text-neighborhood-rust hover:text-neighborhood-rust/80", children: "Suspend" })
          ] })
        ] }, user.id)) })
      ] }) })
    ] })
  ] }) });
}

// app/routes/api.health.tsx
var api_health_exports = {};
__export(api_health_exports, {
  loader: () => loader13
});
var import_node15 = require("@remix-run/node");
async function loader13({ request }) {
  try {
    let health = getHealthStatus();
    return (0, import_node15.json)(health);
  } catch (error) {
    return console.error("Health check error:", error), (0, import_node15.json)({
      status: "unhealthy",
      error: "Internal server error"
    }, { status: 500 });
  }
}

// app/routes/login.old.tsx
var login_old_exports = {};
__export(login_old_exports, {
  action: () => action8,
  default: () => Login,
  meta: () => meta5
});
var import_react7 = require("@remix-run/react"), import_node16 = require("@remix-run/node");
var import_jsx_runtime7 = require("react/jsx-runtime"), meta5 = () => [{ title: "Sign In - Toolshed" }];
async function action8({ request }) {
  let formData = await request.formData(), email = formData.get("email")?.toString(), password = formData.get("password")?.toString();
  if (!email || !password)
    return (0, import_node16.json)({ error: "Email and password are required" }, { status: 400 });
  try {
    return await authenticateUser(email, password) ? (0, import_node16.redirect)("/profile?welcome=true") : (0, import_node16.json)({ error: "Invalid email or password" }, { status: 401 });
  } catch (error) {
    return console.error("Login error:", error), (0, import_node16.json)({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
function Login() {
  let actionData = (0, import_react7.useActionData)(), isSubmitting = (0, import_react7.useNavigation)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "min-h-screen bg-neighborhood-cloud flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "text-center text-3xl font-bold text-neighborhood-slate", children: "Sign in to Toolshed" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-2 text-center text-sm text-neighborhood-slate/70", children: "Welcome back to your community" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react7.Form, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-red-600 text-sm", children: actionData.error }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { htmlFor: "email", className: "block text-sm font-medium text-neighborhood-slate", children: "Email address" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Enter your email"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { htmlFor: "password", className: "block text-sm font-medium text-neighborhood-slate", children: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Enter your password"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "input",
              {
                id: "remember-me",
                name: "remember-me",
                type: "checkbox",
                className: "h-4 w-4 text-neighborhood-goldenrod focus:ring-neighborhood-goldenrod border-gray-300 rounded"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-neighborhood-slate", children: "Remember me" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react7.Link, { to: "/forgot-password", className: "font-medium text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Forgot your password?" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-goldenrod/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed",
            children: isSubmitting ? "Signing in..." : "Sign in"
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-full border-t border-gray-300" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "px-2 bg-white text-neighborhood-slate/70", children: "New to Toolshed?" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react7.Link,
          {
            to: "/register",
            className: "w-full flex justify-center py-2 px-4 border border-neighborhood-slate rounded-md shadow-sm text-sm font-medium text-neighborhood-slate bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod",
            children: "Create an account"
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-6 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-neighborhood-slate/60", children: "Demo account: alice@neighborhood.local / password123" }) })
    ] })
  ] }) });
}

// app/routes/api-docs.tsx
var api_docs_exports = {};
__export(api_docs_exports, {
  default: () => ApiDocs,
  meta: () => meta6
});
var import_react8 = require("react"), import_jsx_runtime8 = require("react/jsx-runtime"), meta6 = () => [
  { title: "API Documentation - Toolshed" },
  { name: "description", content: "Complete API documentation for developers" }
];
function ApiDocs() {
  let [selectedSection, setSelectedSection] = (0, import_react8.useState)("overview");
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "API Documentation" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-lg text-neighborhood-slate/80", children: "Complete developer reference for the Toolshed API" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "w-64 bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("nav", { className: "space-y-2", children: [
        { id: "overview", title: "Overview" },
        { id: "authentication", title: "Authentication" },
        { id: "users", title: "Users" },
        { id: "items", title: "Items" },
        { id: "reservations", title: "Reservations" },
        { id: "events", title: "Event Sourcing" }
      ].map((section) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: () => setSelectedSection(section.id),
          className: `w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedSection === section.id ? "bg-neighborhood-spruce text-white" : "text-neighborhood-slate hover:bg-gray-100"}`,
          children: section.title
        },
        section.id
      )) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex-1 bg-white rounded-lg shadow-md p-8", children: [
        selectedSection === "overview" && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "API Overview" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "prose max-w-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/80 mb-6", children: "The Toolshed API provides three different ways to interact with the platform:" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-spruce mb-2", children: "1. User Interface" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-neighborhood-slate/70", children: "Web-based interface for community members to browse, share, and request items." }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs bg-neighborhood-mint px-2 py-1 rounded", children: "/browse, /share, /profile" }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-goldenrod mb-2", children: "2. Admin Dashboard" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-neighborhood-slate/70", children: "Administrative interface for reviewing data, managing users, and monitoring activity." }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs bg-neighborhood-goldenrod text-white px-2 py-1 rounded", children: "/admin/*" }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-rust mb-2", children: "3. JSON API" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-neighborhood-slate/70", children: "RESTful API endpoints for developers to integrate with external applications." }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs bg-neighborhood-rust text-white px-2 py-1 rounded", children: "/api/*" }) })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-xl font-semibold text-neighborhood-slate mb-3", children: "Event-Sourced Architecture" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/80 mb-4", children: "The reservation system uses event sourcing where the current state is computed from an immutable log of events. This provides complete audit trails and enables complex business logic with full history tracking." }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold mb-2", children: "Base URL" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { className: "text-sm bg-gray-200 px-2 py-1 rounded", children: "https://your-domain.com/api" })
            ] })
          ] })
        ] }),
        selectedSection === "authentication" && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Authentication" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-semibold mb-3", children: "Login" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "/api/auth/login" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-neighborhood-slate/70 mb-3", children: "Authenticate with email and password to receive a JWT token." }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mb-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold mb-2", children: "Request Body:" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                  email: "alice@neighborhood.local",
                  password: "your_password"
                }, null, 2) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold mb-2", children: "Response:" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                  token: "mock-jwt-token-550e8400-e29b-41d4-a716-446655440001"
                }, null, 2) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-semibold mb-3", children: "Using the Token" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/80 mb-3", children: "Include the JWT token in the Authorization header for all API requests:" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { className: "text-sm", children: "Authorization: Bearer your-jwt-token-here" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold text-yellow-800 mb-2", children: "Development Note" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-yellow-700 text-sm", children: "This implementation uses mock JWT tokens for demonstration. In production, implement proper JWT signing, validation, and expiration handling." })
          ] })
        ] }),
        selectedSection === "items" && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Items API" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "/api/items" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get all items with optional pagination." }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold mb-2", children: "Query Parameters:" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: "text-sm text-neighborhood-slate/70 mb-3 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "limit" }),
                  " - Maximum number of items (default: 50)"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "offset" }),
                  " - Number of items to skip (default: 0)"
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold mb-2", children: "Example Response:" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify([
                {
                  id: "650e8400-e29b-41d4-a716-446655440001",
                  owner_id: "550e8400-e29b-41d4-a716-446655440001",
                  title: "Electric Drill",
                  description: "High-quality cordless drill with multiple bits",
                  category: "power-tools",
                  tags: ["drilling", "construction", "DIY"],
                  location: "Downtown",
                  photo_path: null,
                  quantity_total: 1,
                  quantity_available: 1,
                  created_at: "2024-01-15T00:00:00.000Z"
                }
              ], null, 2) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "/api/items" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Create a new item." }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold mb-2", children: "Request Body:" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                owner_id: "550e8400-e29b-41d4-a716-446655440001",
                title: "Circular Saw",
                description: "Professional grade circular saw with laser guide",
                category: "power-tools",
                tags: ["cutting", "woodworking", "construction"],
                location: "Downtown",
                quantity_total: 1
              }, null, 2) })
            ] })
          ] })
        ] }),
        selectedSection === "reservations" && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Reservations API" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "/api/reservations" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get current reservation states with filtering options." }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold mb-2", children: "Query Parameters:" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: "text-sm text-neighborhood-slate/70 mb-3 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "item_id" }),
                  " - Filter by item ID"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "requester_id" }),
                  " - Filter by requester ID"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "status" }),
                  " - Filter by status (pending, approved, active, returned, cancelled)"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "/api/reservations/[id]" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get a specific reservation's current state." })
            ] })
          ] })
        ] }),
        selectedSection === "events" && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Event Sourcing" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/80 mb-4", children: "The reservation system uses event sourcing where each reservation's state is computed from an immutable log of events. This provides complete audit trails and enables complex business logic." }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-semibold mb-3", children: "Event Types" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("table", { className: "min-w-full border border-gray-200", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("th", { className: "px-4 py-2 text-left", children: "Event Type" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("th", { className: "px-4 py-2 text-left", children: "Description" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("th", { className: "px-4 py-2 text-left", children: "Valid From States" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("th", { className: "px-4 py-2 text-left", children: "Resulting State" })
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("tbody", { className: "divide-y divide-gray-200", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2 font-mono text-sm", children: "requested" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "Initial reservation request" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "-" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "pending" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2 font-mono text-sm", children: "approved" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "Owner approves reservation" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "pending" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "approved" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2 font-mono text-sm", children: "activated" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "Item picked up by requester" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "approved" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "active" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2 font-mono text-sm", children: "returned" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "Item returned by requester" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "active" }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("td", { className: "px-4 py-2", children: "returned" })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { children: "/api/reservations/events" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Add a new event to the reservation log." }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold mb-2", children: "Example: Create New Reservation" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
              item_id: "650e8400-e29b-41d4-a716-446655440001",
              event_type: "requested",
              quantity: 1,
              start_date: "2024-06-10T09:00:00Z",
              end_date: "2024-06-12T17:00:00Z",
              notes: "Need for home renovation project"
            }, null, 2) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-4", children: "API Examples" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "font-semibold mb-2", children: "Authentication" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-neighborhood-slate/70", children: "POST /api/auth/login with email and password to get JWT token" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "font-semibold mb-2", children: "Get Items" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-neighborhood-slate/70", children: "GET /api/items with Authorization header to retrieve all items" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "font-semibold mb-2", children: "Create Reservation" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-neighborhood-slate/70", children: "POST /api/reservations/events to create new reservation events" })
        ] })
      ] })
    ] })
  ] }) });
}

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action9,
  default: () => Register,
  meta: () => meta7
});
var import_react9 = require("@remix-run/react"), import_node17 = require("@remix-run/node");
var import_jsx_runtime9 = require("react/jsx-runtime"), meta7 = () => [{ title: "Join Community - Toolshed" }];
async function action9({ request }) {
  let formData = await request.formData(), name = formData.get("name")?.toString(), email = formData.get("email")?.toString(), password = formData.get("password")?.toString(), confirmPassword = formData.get("confirmPassword")?.toString(), neighborhood = formData.get("neighborhood")?.toString(), contactMethod = formData.get("contactMethod")?.toString();
  if (!name || !email || !password || !confirmPassword)
    return (0, import_node17.json)({ error: "All fields are required" }, { status: 400 });
  if (password !== confirmPassword)
    return (0, import_node17.json)({ error: "Passwords do not match" }, { status: 400 });
  if (password.length < 6)
    return (0, import_node17.json)({ error: "Password must be at least 6 characters long" }, { status: 400 });
  try {
    let user = await createUser({
      name,
      email,
      password,
      neighborhood: neighborhood || "",
      contact_method: contactMethod || "message"
    });
    return (0, import_node17.redirect)("/profile?welcome=true&new=true");
  } catch (error) {
    return error.message?.includes("unique constraint") || error.message?.includes("already exists") ? (0, import_node17.json)({ error: "An account with this email already exists" }, { status: 400 }) : (console.error("Registration error:", error), (0, import_node17.json)({ error: "Something went wrong. Please try again." }, { status: 500 }));
  }
}
function Register() {
  let actionData = (0, import_react9.useActionData)(), isSubmitting = (0, import_react9.useNavigation)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "form", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { style: { fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }, children: "Join the Community" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { style: { color: "#6b7280" }, children: "Start sharing tools with your neighbors" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react9.Form, { method: "post", children: [
      actionData?.error && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "error", style: {
        backgroundColor: "#fef2f2",
        border: "1px solid #fecaca",
        borderRadius: "6px",
        padding: "0.75rem",
        marginBottom: "1rem"
      }, children: actionData.error }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { htmlFor: "name", children: "Full Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "input",
          {
            id: "name",
            name: "name",
            type: "text",
            autoComplete: "name",
            required: !0,
            className: "form-input",
            placeholder: "Enter your full name"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { htmlFor: "email", children: "Email address" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: !0,
            className: "form-input",
            placeholder: "Enter your email"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { htmlFor: "neighborhood", children: "Neighborhood" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "input",
          {
            id: "neighborhood",
            name: "neighborhood",
            type: "text",
            className: "form-input",
            placeholder: "e.g. Downtown, Riverside"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { htmlFor: "contactMethod", children: "Preferred Contact Method" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "select",
          {
            id: "contactMethod",
            name: "contactMethod",
            className: "form-input",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "message", children: "In-app messaging" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "email", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "phone", children: "Phone" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "input",
          {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "new-password",
            required: !0,
            className: "form-input",
            placeholder: "Create a password"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { htmlFor: "confirmPassword", children: "Confirm Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "input",
          {
            id: "confirmPassword",
            name: "confirmPassword",
            type: "password",
            autoComplete: "new-password",
            required: !0,
            className: "form-input",
            placeholder: "Confirm your password"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "form-group", style: { display: "flex", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "input",
          {
            id: "agree-terms",
            name: "agree-terms",
            type: "checkbox",
            required: !0,
            style: { marginRight: "0.5rem" }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { htmlFor: "agree-terms", style: { fontSize: "0.875rem" }, children: [
          "I agree to the",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react9.Link, { to: "/terms", style: { color: "#2563eb", textDecoration: "underline" }, children: "Terms of Service" }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react9.Link, { to: "/privacy", style: { color: "#2563eb", textDecoration: "underline" }, children: "Privacy Policy" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "btn btn-primary",
          style: { width: "100%", opacity: isSubmitting ? 0.5 : 1 },
          children: isSubmitting ? "Creating account..." : "Create account"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: {
      marginTop: "1.5rem",
      paddingTop: "1.5rem",
      borderTop: "1px solid #e5e7eb",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { style: { color: "#6b7280", marginBottom: "1rem" }, children: "Already have an account?" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_react9.Link,
        {
          to: "/login",
          className: "btn btn-secondary",
          style: { width: "100%" },
          children: "Sign in instead"
        }
      )
    ] })
  ] }) });
}

// app/routes/tool.$id.tsx
var tool_id_exports = {};
__export(tool_id_exports, {
  default: () => ToolDetail,
  loader: () => loader14,
  meta: () => meta8
});
var import_node18 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_jsx_runtime10 = require("react/jsx-runtime"), meta8 = () => [
  { title: "Tool Details - Toolshed" },
  { name: "description", content: "View tool details and contact the owner" }
];
async function loader14({ params }) {
  let toolId = params.id;
  if (!toolId)
    throw new Response("Tool not found", { status: 404 });
  return (0, import_node18.json)({ toolId });
}
function ToolDetail() {
  let { toolId } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "text-center py-12 px-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "svg",
      {
        className: "mx-auto h-12 w-12 text-gray-400",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.386 0-4.735.832-6.565 2.436l-.693-.693A8.963 8.963 0 0112 13.5c2.213 0 4.337.815 5.985 2.29l-.692.692z"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "Tool not found" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "mt-1 text-sm text-gray-500", children: [
      'Tool with ID "',
      toolId,
      '" could not be found. This feature will be available once the database schema is integrated.'
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "a",
      {
        href: "/browse",
        className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { className: "-ml-1 mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) }),
          "Back to Browse"
        ]
      }
    ) })
  ] }) }) });
}

// app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  action: () => action10,
  default: () => Profile,
  loader: () => loader15,
  meta: () => meta9
});
var import_react11 = require("react"), import_react12 = require("@remix-run/react"), import_node19 = require("@remix-run/node");
var import_jsx_runtime11 = require("react/jsx-runtime"), meta9 = () => [{ title: "Profile - Toolshed" }];
async function loader15({ request }) {
  let user = await getUserByEmail("alice@neighborhood.local");
  if (!user)
    throw new Response("User not found", { status: 404 });
  let userItems = (await getItems()).filter((item) => item.ownerId === user.id);
  return (0, import_node19.json)({ user, userItems });
}
async function action10({ request }) {
  let formData = await request.formData();
  if (formData.get("intent") === "updateProfile") {
    let name = formData.get("name")?.toString(), neighborhood = formData.get("neighborhood")?.toString(), contactMethod = formData.get("contactMethod")?.toString();
    if (!name)
      return (0, import_node19.json)({ error: "Name is required" }, { status: 400 });
    try {
      let user = await getUserByEmail("alice@neighborhood.local");
      return user ? (await updateUser(user.id, {
        name,
        neighborhood: neighborhood || "",
        contact_method: contactMethod || "message"
      }), (0, import_node19.json)({ success: "Profile updated successfully" })) : (0, import_node19.json)({ error: "User not found" }, { status: 404 });
    } catch (error) {
      return console.error("Profile update error:", error), (0, import_node19.json)({ error: "Failed to update profile" }, { status: 500 });
    }
  }
  return (0, import_node19.json)({ error: "Invalid action" }, { status: 400 });
}
function Profile() {
  let { user, userItems } = (0, import_react12.useLoaderData)(), actionData = (0, import_react12.useActionData)(), navigation = (0, import_react12.useNavigation)(), [searchParams] = (0, import_react12.useSearchParams)(), [isEditing, setIsEditing] = (0, import_react11.useState)(!1), isUpdating = navigation.state === "submitting" && navigation.formData?.get("intent") === "updateProfile", isWelcome = searchParams.get("welcome") === "true", isNewUser = searchParams.get("new") === "true";
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "container mx-auto px-4 py-8", children: [
    isWelcome && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mb-8 bg-neighborhood-mint/10 border border-neighborhood-mint/20 rounded-lg p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-2", children: isNewUser ? "Welcome to Toolshed!" : "Welcome back!" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-neighborhood-slate/70", children: isNewUser ? "Your account has been created successfully. Start by browsing available tools or sharing your own." : "You're successfully signed in. Explore your neighborhood's shared resources." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "text-2xl font-bold text-neighborhood-slate", children: "My Profile" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                onClick: () => setIsEditing(!isEditing),
                className: "px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors",
                children: isEditing ? "Cancel" : "Edit Profile"
              }
            )
          ] }),
          actionData?.success && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mb-6 bg-green-50 border border-green-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-green-600 text-sm", children: actionData.success }) }),
          actionData?.error && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mb-6 bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-red-600 text-sm", children: actionData.error }) }),
          isEditing ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react12.Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { type: "hidden", name: "intent", value: "updateProfile" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "name", className: "block text-sm font-medium text-neighborhood-slate", children: "Full Name" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "input",
                {
                  id: "name",
                  name: "name",
                  type: "text",
                  defaultValue: user.name,
                  required: !0,
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "email", className: "block text-sm font-medium text-neighborhood-slate", children: "Email Address" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  value: user.email,
                  disabled: !0,
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-xs text-neighborhood-slate/60 mt-1", children: "Email cannot be changed" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "neighborhood", className: "block text-sm font-medium text-neighborhood-slate", children: "Neighborhood" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "input",
                {
                  id: "neighborhood",
                  name: "neighborhood",
                  type: "text",
                  defaultValue: user.neighborhood,
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-neighborhood-slate", children: "Preferred Contact Method" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                "select",
                {
                  id: "contactMethod",
                  name: "contactMethod",
                  defaultValue: user.contactMethod,
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "message", children: "In-app messaging" }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "email", children: "Email" }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "phone", children: "Phone" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "button",
                {
                  type: "submit",
                  disabled: isUpdating,
                  className: "px-6 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors disabled:opacity-50",
                  children: isUpdating ? "Saving..." : "Save Changes"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "button",
                {
                  type: "button",
                  onClick: () => setIsEditing(!1),
                  className: "px-6 py-2 bg-gray-200 text-neighborhood-slate rounded-lg hover:bg-gray-300 transition-colors",
                  children: "Cancel"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Name" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-lg text-neighborhood-slate", children: user.name })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-lg text-neighborhood-slate", children: user.email })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Neighborhood" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-lg text-neighborhood-slate", children: user.neighborhood || "Not specified" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Contact Preference" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-lg text-neighborhood-slate capitalize", children: user.contactMethod })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Member Since" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-lg text-neighborhood-slate", children: new Date(user.createdAt).toLocaleDateString() })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "My Shared Items" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_react12.Link,
              {
                to: "/share",
                className: "px-4 py-2 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/80 transition-colors",
                children: "Add New Item"
              }
            )
          ] }),
          userItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "font-semibold text-neighborhood-slate", children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-sm text-neighborhood-slate/70 mt-1", children: item.description }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between mt-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-xs bg-neighborhood-mint/20 text-neighborhood-slate px-2 py-1 rounded", children: item.category }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-xs text-neighborhood-slate/60", children: [
                "Available: ",
                item.quantityAvailable,
                "/",
                item.quantityTotal
              ] })
            ] })
          ] }, item.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-neighborhood-slate/70 mb-4", children: "You haven't shared any items yet." }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_react12.Link,
              {
                to: "/share",
                className: "inline-flex items-center px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors",
                children: "Share Your First Item"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Quick Actions" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_react12.Link,
              {
                to: "/browse",
                className: "block w-full px-4 py-3 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-center",
                children: "Browse Items"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_react12.Link,
              {
                to: "/share",
                className: "block w-full px-4 py-3 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/80 transition-colors text-center",
                children: "Share an Item"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_react12.Link,
              {
                to: "/reservations",
                className: "block w-full px-4 py-3 bg-white border border-neighborhood-slate text-neighborhood-slate rounded-lg hover:bg-gray-50 transition-colors text-center",
                children: "My Reservations"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Community Stats" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-neighborhood-slate/70", children: "Items Shared" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-semibold text-neighborhood-slate", children: userItems.length })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-neighborhood-slate/70", children: "Trust Score" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-semibold text-neighborhood-goldenrod", children: "\u2605\u2605\u2605\u2605\u2606" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-neighborhood-slate/70", children: "Exchanges" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-semibold text-neighborhood-slate", children: "12" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Account" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "block w-full px-4 py-2 text-left text-neighborhood-slate hover:bg-gray-50 rounded", children: "Notification Settings" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "block w-full px-4 py-2 text-left text-neighborhood-slate hover:bg-gray-50 rounded", children: "Privacy Settings" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_react12.Link,
              {
                to: "/logout",
                className: "block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded",
                children: "Sign Out"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_react13 = require("@remix-run/react"), import_jsx_runtime12 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("nav", { className: "nav", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "nav-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { children: "Toolshed" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "nav-links", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Link, { to: "/login", children: "Sign In" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Link, { to: "/register", className: "btn btn-primary", children: "Join" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("main", { className: "container py-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("header", { className: "text-center mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "title", children: "Welcome to Toolshed" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "subtitle", children: "Share tools, borrow equipment, and build stronger communities. Connect with neighbors to share resources and reduce waste." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid-3 mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "card p-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { children: "Share Your Tools" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "List tools you're willing to lend to neighbors. From power drills to garden equipment, help your community access what they need." }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Link, { to: "/share", children: "Start Sharing \u2192" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "card p-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { children: "Find What You Need" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "Browse available tools in your neighborhood. Save money and reduce waste by borrowing instead of buying." }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Link, { to: "/browse", children: "Browse Tools \u2192" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "card p-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { children: "Build Community" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "Connect with neighbors, build trust, and create a stronger, more sustainable community together." }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Link, { to: "/login", children: "Get Started \u2192" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "text-center cta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { children: "Ready to get started?" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "Join our community and start sharing resources with your neighbors today." }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Link, { to: "/register", className: "btn btn-primary", children: "Create Account" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Link, { to: "/login", className: "btn btn-secondary", children: "Sign In" })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/browse.tsx
var browse_exports = {};
__export(browse_exports, {
  default: () => Browse,
  meta: () => meta10
});
var import_react14 = require("react"), import_jsx_runtime13 = require("react/jsx-runtime"), meta10 = () => [
  { title: "Browse Tools - Toolshed" },
  { name: "description", content: "Browse available tools and resources in your community" }
];
function Browse() {
  let [searchTerm, setSearchTerm] = (0, import_react14.useState)(""), [selectedCategory, setSelectedCategory] = (0, import_react14.useState)("all");
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "text-3xl font-bold text-neighborhood-slate mb-4", children: "Browse Tools" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-lg text-neighborhood-slate", children: "Discover tools and resources available in your community" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "bg-white rounded-lg shadow-sm border border-neighborhood-mint/20 p-6 mb-8", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "search", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Search Tools" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { className: "h-5 w-5 text-neighborhood-slate", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "input",
            {
              type: "text",
              id: "search",
              className: "block w-full pl-10 pr-3 py-2 border border-neighborhood-mint rounded-md leading-5 bg-white placeholder-neighborhood-disabled focus:outline-none focus:placeholder-neighborhood-slate focus:ring-1 focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Search for tools...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "category", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Category" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "select",
          {
            id: "category",
            className: "block w-full px-3 py-2 border border-neighborhood-mint rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
            value: selectedCategory,
            onChange: (e) => setSelectedCategory(e.target.value),
            children: [
              { id: "all", name: "All Categories" },
              { id: "power-tools", name: "Power Tools" },
              { id: "hand-tools", name: "Hand Tools" },
              { id: "garden", name: "Garden & Outdoor" },
              { id: "automotive", name: "Automotive" },
              { id: "home", name: "Home & DIY" },
              { id: "specialty", name: "Specialty Tools" }
            ].map((category) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: category.id, children: category.name }, category.id))
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "mt-2 text-sm font-medium text-neighborhood-slate", children: "No tools available" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mt-1 text-sm text-neighborhood-slate", children: "Tools will appear here once they are shared by community members." }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        "a",
        {
          href: "/share",
          className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { className: "-ml-1 mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }) }),
            "Share a Tool"
          ]
        }
      ) })
    ] })
  ] });
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  default: () => Logout,
  loader: () => loader16
});
var import_node20 = require("@remix-run/node");
async function loader16({ request }) {
  return (0, import_node20.redirect)("/?logout=true");
}
function Logout() {
  return null;
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action11,
  default: () => Login2,
  meta: () => meta11
});
var import_react15 = require("@remix-run/react"), import_node21 = require("@remix-run/node");
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken")), import_jsx_runtime14 = require("react/jsx-runtime"), meta11 = () => [{ title: "Sign In - Toolshed" }];
async function action11({ request }) {
  let formData = await request.formData(), email = formData.get("email")?.toString(), password = formData.get("password")?.toString();
  if (!email || !password)
    return (0, import_node21.json)({ error: "Email and password are required" }, { status: 400 });
  try {
    let user = await authenticateUser(email, password);
    if (!user)
      return (0, import_node21.json)({ error: "Invalid email or password" }, { status: 401 });
    let token = import_jsonwebtoken2.default.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "fallback-secret",
      { expiresIn: "7d" }
    );
    return (0, import_node21.redirect)("/profile", {
      headers: {
        "Set-Cookie": `auth_token=${token}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}; SameSite=Strict; Secure`
      }
    });
  } catch (error) {
    return console.error("Login error:", error), (0, import_node21.json)({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
function Login2() {
  let actionData = (0, import_react15.useActionData)(), isSubmitting = (0, import_react15.useNavigation)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "form", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { style: { fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }, children: "Sign in to Toolshed" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { style: { color: "#6b7280" }, children: "Welcome back to your community" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react15.Form, { method: "post", children: [
      actionData?.error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "error", style: {
        backgroundColor: "#fef2f2",
        border: "1px solid #fecaca",
        borderRadius: "6px",
        padding: "0.75rem",
        marginBottom: "1rem"
      }, children: actionData.error }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { htmlFor: "email", children: "Email address" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: !0,
            className: "form-input",
            placeholder: "Enter your email"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "form-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "input",
          {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            required: !0,
            className: "form-input",
            placeholder: "Enter your password"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "form-group", style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "input",
            {
              id: "remember-me",
              name: "remember-me",
              type: "checkbox",
              style: { marginRight: "0.5rem" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("label", { htmlFor: "remember-me", style: { fontSize: "0.875rem" }, children: "Remember me" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react15.Link, { to: "/forgot-password", style: { color: "#2563eb", textDecoration: "underline", fontSize: "0.875rem" }, children: "Forgot your password?" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "btn btn-primary",
          style: { width: "100%", opacity: isSubmitting ? 0.5 : 1 },
          children: isSubmitting ? "Signing in..." : "Sign in"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: {
      marginTop: "1.5rem",
      paddingTop: "1.5rem",
      borderTop: "1px solid #e5e7eb",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { style: { color: "#6b7280", marginBottom: "1rem" }, children: "New to Toolshed?" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        import_react15.Link,
        {
          to: "/register",
          className: "btn btn-secondary",
          style: { width: "100%" },
          children: "Create an account"
        }
      )
    ] })
  ] }) });
}

// app/routes/share.tsx
var share_exports = {};
__export(share_exports, {
  action: () => action12,
  default: () => Share,
  meta: () => meta12
});
var import_node22 = require("@remix-run/node"), import_react16 = require("@remix-run/react"), import_react17 = require("react"), import_jsx_runtime15 = require("react/jsx-runtime"), meta12 = () => [
  { title: "Share a Tool - Toolshed" },
  { name: "description", content: "Share your tools and resources with the community" }
];
async function action12({ request }) {
  let formData = await request.formData(), title = formData.get("title"), description = formData.get("description"), category = formData.get("category"), errors = {};
  return (!title || typeof title != "string" || title.trim().length === 0) && (errors.title = "Tool name is required"), (!description || typeof description != "string" || description.trim().length === 0) && (errors.description = "Description is required"), (!category || typeof category != "string" || category === "") && (errors.category = "Category is required"), Object.keys(errors).length > 0 ? (0, import_node22.json)({ errors, success: !1 }, { status: 400 }) : (console.log("Tool sharing data:", {
    title,
    description,
    category,
    condition: formData.get("condition"),
    availability: formData.get("availability"),
    location: formData.get("location"),
    contactMethod: formData.get("contactMethod")
  }), (0, import_node22.redirect)("/browse?shared=true"));
}
function Share() {
  let actionData = (0, import_react16.useActionData)(), isSubmitting = (0, import_react16.useNavigation)().state === "submitting", [selectedCategory, setSelectedCategory] = (0, import_react17.useState)(""), categories = [
    { id: "", name: "Select a category" },
    { id: "power-tools", name: "Power Tools" },
    { id: "hand-tools", name: "Hand Tools" },
    { id: "garden", name: "Garden & Outdoor" },
    { id: "automotive", name: "Automotive" },
    { id: "home", name: "Home & DIY" },
    { id: "specialty", name: "Specialty Tools" }
  ], conditions = [
    { id: "excellent", name: "Excellent" },
    { id: "good", name: "Good" },
    { id: "fair", name: "Fair" },
    { id: "needs-repair", name: "Needs Repair" }
  ], availabilityOptions = [
    { id: "available", name: "Available Now" },
    { id: "limited", name: "Limited Availability" },
    { id: "weekends", name: "Weekends Only" },
    { id: "by-appointment", name: "By Appointment" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "text-3xl font-bold text-neighborhood-slate mb-4", children: "Share a Tool" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-lg text-neighborhood-slate", children: "Add your tool to the community sharing network" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "bg-white rounded-lg shadow-sm border border-neighborhood-mint/20 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react16.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { htmlFor: "title", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Tool Name *" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "input",
          {
            type: "text",
            id: "title",
            name: "title",
            className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.title ? "border-neighborhood-rust focus:ring-neighborhood-rust focus:border-neighborhood-rust" : "border-neighborhood-mint focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"}`,
            placeholder: "e.g., Power Drill, Lawnmower, Socket Set"
          }
        ),
        actionData?.errors?.title && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mt-1 text-sm text-neighborhood-rust", children: actionData.errors.title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700 mb-2", children: "Description *" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "textarea",
          {
            id: "description",
            name: "description",
            rows: 4,
            className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.description ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`,
            placeholder: "Describe the tool, its features, and any important details..."
          }
        ),
        actionData?.errors?.description && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mt-1 text-sm text-red-600", children: actionData.errors.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { htmlFor: "category", className: "block text-sm font-medium text-gray-700 mb-2", children: "Category *" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "select",
            {
              id: "category",
              name: "category",
              value: selectedCategory,
              onChange: (e) => setSelectedCategory(e.target.value),
              className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.category ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`,
              children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: category.id, children: category.name }, category.id))
            }
          ),
          actionData?.errors?.category && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mt-1 text-sm text-red-600", children: actionData.errors.category })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { htmlFor: "condition", className: "block text-sm font-medium text-gray-700 mb-2", children: "Condition" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "select",
            {
              id: "condition",
              name: "condition",
              className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
              children: conditions.map((condition) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: condition.id, children: condition.name }, condition.id))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { htmlFor: "availability", className: "block text-sm font-medium text-gray-700 mb-2", children: "Availability" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "select",
            {
              id: "availability",
              name: "availability",
              className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
              children: availabilityOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: option.id, children: option.name }, option.id))
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { htmlFor: "location", className: "block text-sm font-medium text-gray-700 mb-2", children: "General Location" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "input",
            {
              type: "text",
              id: "location",
              name: "location",
              className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
              placeholder: "e.g., Downtown, West Side, ZIP code"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-gray-700 mb-2", children: "Preferred Contact Method" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          "select",
          {
            id: "contactMethod",
            name: "contactMethod",
            className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "message", children: "App Message" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "email", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "phone", children: "Phone" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed",
          children: isSubmitting ? "Sharing Tool..." : "Share Tool"
        }
      ) })
    ] }) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QBU7FYFG.js", imports: ["/build/_shared/chunk-DO3GTMLW.js", "/build/_shared/chunk-5LVCCKB6.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZL4LIY2W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-RMZHK4VO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin._index": { id: "routes/admin._index", parentId: "root", path: "admin", index: !0, caseSensitive: void 0, module: "/build/routes/admin._index-TDZRWM5P.js", imports: ["/build/_shared/chunk-6S2QUAFR.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.items": { id: "routes/admin.items", parentId: "root", path: "admin/items", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.items-OR7UFBM4.js", imports: ["/build/_shared/chunk-6S2QUAFR.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.reservations": { id: "routes/admin.reservations", parentId: "root", path: "admin/reservations", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.reservations-HALCBFNE.js", imports: ["/build/_shared/chunk-6S2QUAFR.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.users": { id: "routes/admin.users", parentId: "root", path: "admin/users", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.users-NJOGPNUO.js", imports: ["/build/_shared/chunk-6S2QUAFR.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api-docs": { id: "routes/api-docs", parentId: "root", path: "api-docs", index: void 0, caseSensitive: void 0, module: "/build/routes/api-docs-SSZDY4C7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.login": { id: "routes/api.auth.login", parentId: "root", path: "api/auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.login-ZNNEWMJR.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.logout": { id: "routes/api.auth.logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.logout-EVOUV26I.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.health": { id: "routes/api.health", parentId: "root", path: "api/health", index: void 0, caseSensitive: void 0, module: "/build/routes/api.health-JVOXE34R.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.items.$id": { id: "routes/api.items.$id", parentId: "root", path: "api/items/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.items.$id-EYM3VE7Y.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.items._index": { id: "routes/api.items._index", parentId: "root", path: "api/items", index: !0, caseSensitive: void 0, module: "/build/routes/api.items._index-JIRXBXLT.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.$id": { id: "routes/api.reservations.$id", parentId: "root", path: "api/reservations/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.$id-GULDY36Z.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.$id.events": { id: "routes/api.reservations.$id.events", parentId: "routes/api.reservations.$id", path: "events", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.$id.events-PPYU2FBK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations._index": { id: "routes/api.reservations._index", parentId: "root", path: "api/reservations", index: !0, caseSensitive: void 0, module: "/build/routes/api.reservations._index-QX7ML336.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.events": { id: "routes/api.reservations.events", parentId: "root", path: "api/reservations/events", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.events-QISCJSTE.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.users.$id": { id: "routes/api.users.$id", parentId: "root", path: "api/users/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.users.$id-ZF4UNHBZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.users._index": { id: "routes/api.users._index", parentId: "root", path: "api/users", index: !0, caseSensitive: void 0, module: "/build/routes/api.users._index-RCQRBOVL.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/browse": { id: "routes/browse", parentId: "root", path: "browse", index: void 0, caseSensitive: void 0, module: "/build/routes/browse-NWXRBDY6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-5L2UEDWZ.js", imports: ["/build/_shared/chunk-6S2QUAFR.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login.old": { id: "routes/login.old", parentId: "routes/login", path: "old", index: void 0, caseSensitive: void 0, module: "/build/routes/login.old-NB2PYN2F.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-HKEAI4P7.js", imports: ["/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-OVFHIRRA.js", imports: ["/build/_shared/chunk-6S2QUAFR.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-ROMWDYI5.js", imports: ["/build/_shared/chunk-6S2QUAFR.js", "/build/_shared/chunk-5TRFQBKG.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/share": { id: "routes/share", parentId: "root", path: "share", index: void 0, caseSensitive: void 0, module: "/build/routes/share-M4FLTPFN.js", imports: ["/build/_shared/chunk-5TRFQBKG.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tool.$id": { id: "routes/tool.$id", parentId: "root", path: "tool/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/tool.$id-AZ4B7M6N.js", imports: ["/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ec3e64a8", hmr: void 0, url: "/build/manifest-EC3E64A8.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.reservations.$id.events": {
    id: "routes/api.reservations.$id.events",
    parentId: "routes/api.reservations.$id",
    path: "events",
    index: void 0,
    caseSensitive: void 0,
    module: api_reservations_id_events_exports
  },
  "routes/api.reservations._index": {
    id: "routes/api.reservations._index",
    parentId: "root",
    path: "api/reservations",
    index: !0,
    caseSensitive: void 0,
    module: api_reservations_index_exports
  },
  "routes/api.reservations.events": {
    id: "routes/api.reservations.events",
    parentId: "root",
    path: "api/reservations/events",
    index: void 0,
    caseSensitive: void 0,
    module: api_reservations_events_exports
  },
  "routes/api.reservations.$id": {
    id: "routes/api.reservations.$id",
    parentId: "root",
    path: "api/reservations/:id",
    index: void 0,
    caseSensitive: void 0,
    module: api_reservations_id_exports
  },
  "routes/admin.reservations": {
    id: "routes/admin.reservations",
    parentId: "root",
    path: "admin/reservations",
    index: void 0,
    caseSensitive: void 0,
    module: admin_reservations_exports
  },
  "routes/api.items._index": {
    id: "routes/api.items._index",
    parentId: "root",
    path: "api/items",
    index: !0,
    caseSensitive: void 0,
    module: api_items_index_exports
  },
  "routes/api.users._index": {
    id: "routes/api.users._index",
    parentId: "root",
    path: "api/users",
    index: !0,
    caseSensitive: void 0,
    module: api_users_index_exports
  },
  "routes/api.auth.logout": {
    id: "routes/api.auth.logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: api_auth_logout_exports
  },
  "routes/api.auth.login": {
    id: "routes/api.auth.login",
    parentId: "root",
    path: "api/auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: api_auth_login_exports
  },
  "routes/api.items.$id": {
    id: "routes/api.items.$id",
    parentId: "root",
    path: "api/items/:id",
    index: void 0,
    caseSensitive: void 0,
    module: api_items_id_exports
  },
  "routes/api.users.$id": {
    id: "routes/api.users.$id",
    parentId: "root",
    path: "api/users/:id",
    index: void 0,
    caseSensitive: void 0,
    module: api_users_id_exports
  },
  "routes/admin._index": {
    id: "routes/admin._index",
    parentId: "root",
    path: "admin",
    index: !0,
    caseSensitive: void 0,
    module: admin_index_exports
  },
  "routes/admin.items": {
    id: "routes/admin.items",
    parentId: "root",
    path: "admin/items",
    index: void 0,
    caseSensitive: void 0,
    module: admin_items_exports
  },
  "routes/admin.users": {
    id: "routes/admin.users",
    parentId: "root",
    path: "admin/users",
    index: void 0,
    caseSensitive: void 0,
    module: admin_users_exports
  },
  "routes/api.health": {
    id: "routes/api.health",
    parentId: "root",
    path: "api/health",
    index: void 0,
    caseSensitive: void 0,
    module: api_health_exports
  },
  "routes/login.old": {
    id: "routes/login.old",
    parentId: "routes/login",
    path: "old",
    index: void 0,
    caseSensitive: void 0,
    module: login_old_exports
  },
  "routes/api-docs": {
    id: "routes/api-docs",
    parentId: "root",
    path: "api-docs",
    index: void 0,
    caseSensitive: void 0,
    module: api_docs_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/tool.$id": {
    id: "routes/tool.$id",
    parentId: "root",
    path: "tool/:id",
    index: void 0,
    caseSensitive: void 0,
    module: tool_id_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/browse": {
    id: "routes/browse",
    parentId: "root",
    path: "browse",
    index: void 0,
    caseSensitive: void 0,
    module: browse_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/share": {
    id: "routes/share",
    parentId: "root",
    path: "share",
    index: void 0,
    caseSensitive: void 0,
    module: share_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
