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
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-NVIY2XSO.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: global_default },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Toolshed" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: { margin: 0, padding: 0, backgroundColor: "#f7fafc" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { style: { backgroundColor: "white", borderBottom: "1px solid #e2e8f0", padding: "1rem 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { style: { margin: 0, fontSize: "1.5rem", fontWeight: "bold", color: "#2d3748" }, children: "Toolshed" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { display: "flex", gap: "1rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/login", style: { color: "#4a5568", textDecoration: "none" }, children: "Sign In" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/register", style: { backgroundColor: "#f6ad55", color: "white", padding: "0.5rem 1rem", borderRadius: "0.25rem", textDecoration: "none" }, children: "Join" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react2.useRouteError)();
  return (0, import_react2.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Error - Toolshed" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: { margin: 0, padding: 0, backgroundColor: "#f7fafc" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { style: { fontSize: "4rem", fontWeight: "bold", color: "#1a202c", marginBottom: "1rem" }, children: error.status }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { style: { fontSize: "1.5rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }, children: error.statusText }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: { color: "#4a5568", marginBottom: "2rem" }, children: error.data || "Something went wrong. Please try again later." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: "/",
            style: {
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#f6ad55",
              color: "white",
              textDecoration: "none",
              borderRadius: "0.5rem",
              fontWeight: "600"
            },
            children: "Go Home"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 82,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Error - Toolshed" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: { margin: 0, padding: 0, backgroundColor: "#f7fafc" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { style: { fontSize: "2rem", fontWeight: "bold", color: "#1a202c", marginBottom: "1rem" }, children: "Something went wrong" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: { color: "#4a5568", marginBottom: "2rem" }, children: "We encountered an unexpected error. Please try again later." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: "/",
            style: {
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#f6ad55",
              color: "white",
              textDecoration: "none",
              borderRadius: "0.5rem",
              fontWeight: "600"
            },
            children: "Go Home"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 120,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
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
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react3.Link,
        {
          to: "/admin",
          className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80",
          children: "\u2190 Back to Dashboard"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 49,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Reservation Management" }, void 0, !1, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Monitor and manage all platform reservations" }, void 0, !1, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.reservations.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-8", children: ["pending", "approved", "active", "returned", "cancelled"].map((status) => {
      let count = reservations.filter((r) => r.status === status).length;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-4 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-2xl font-bold text-neighborhood-spruce", children: count }, void 0, !1, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60 capitalize", children: status }, void 0, !1, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this)
      ] }, status, !0, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 69,
        columnNumber: 15
      }, this);
    }) }, void 0, !1, {
      fileName: "app/routes/admin.reservations.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Reservations (",
          reservations.length,
          ")"
        ] }, void 0, !0, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "", children: "All Statuses" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 85,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "approved", children: "Approved" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 87,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "active", children: "Active" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 88,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "returned", children: "Returned" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "cancelled", children: "Cancelled" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "rejected", children: "Rejected" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 91,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "input",
            {
              type: "search",
              placeholder: "Search reservations...",
              className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 93,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Reservation ID" }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Item" }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Requester" }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Owner" }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 115,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 118,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Dates" }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 121,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: reservations.map((reservation) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: [
              "#",
              reservation.id.slice(-8)
            ] }, void 0, !0, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 133,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
              "Qty: ",
              reservation.quantity_requested
            ] }, void 0, !0, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 136,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 132,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-900", children: itemMap[reservation.item_id] || "Unknown Item" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 141,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-500", children: reservation.item_id.slice(-8) }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 144,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 140,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-900", children: userMap[reservation.requester_id] || "Unknown User" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 149,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-500", children: reservation.requester_id.slice(-8) }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 152,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 148,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-900", children: userMap[reservation.owner_id] || "Unknown User" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 157,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-500", children: reservation.owner_id.slice(-8) }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 160,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 156,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(reservation.status)}`, children: reservation.status }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 165,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 164,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: reservation.start_date ? new Date(reservation.start_date).toLocaleDateString() : "TBD" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 170,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              "to ",
              reservation.end_date ? new Date(reservation.end_date).toLocaleDateString() : "TBD"
            ] }, void 0, !0, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 176,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 169,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_react3.Link,
              {
                to: `/admin/reservations/${reservation.id}`,
                className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4",
                children: "View Details"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.reservations.tsx",
                lineNumber: 184,
                columnNumber: 23
              },
              this
            ),
            reservation.status === "pending" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Moderate" }, void 0, !1, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 191,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 183,
            columnNumber: 21
          }, this)
        ] }, reservation.id, !0, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 131,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.reservations.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.reservations.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.reservations.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
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
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta2 = () => [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Admin Dashboard" }, void 0, !1, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Manage community resources and monitor platform activity" }, void 0, !1, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Users" }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalUsers }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: "Total registered users" }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Items" }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalItems }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: [
          stats.availableItems,
          " available now"
        ] }, void 0, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Reservations" }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalReservations }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: [
          stats.activeReservations,
          " active, ",
          stats.pendingReservations,
          " pending"
        ] }, void 0, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Users" }, void 0, !1, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react4.Link,
            {
              to: "/admin/users",
              className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm",
              children: "View All \u2192"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 72,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-3", children: users2.slice(0, 5).map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium text-neighborhood-slate", children: user.name }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 83,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: user.email }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: user.neighborhood }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 87,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/40", children: new Date(user.created_at).toLocaleDateString() }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 88,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this)
        ] }, user.id, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Items" }, void 0, !1, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react4.Link,
            {
              to: "/admin/items",
              className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm",
              children: "View All \u2192"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 101,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-3", children: items2.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium text-neighborhood-slate", children: item.title }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 112,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: item.category }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 113,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 111,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: `text-sm ${item.quantity_available > 0 ? "text-green-600" : "text-red-600"}`, children: item.quantity_available > 0 ? "Available" : "Reserved" }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 116,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/40", children: item.location }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 119,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 115,
            columnNumber: 19
          }, this)
        ] }, item.id, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Reservations" }, void 0, !1, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react4.Link,
            {
              to: "/admin/reservations",
              className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm",
              children: "View All \u2192"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 130,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-3", children: reservations.slice(0, 5).map((reservation) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium text-neighborhood-slate", children: [
              "Reservation #",
              reservation.id.slice(-8)
            ] }, void 0, !0, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 141,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: [
              "Item: ",
              reservation.item_id.slice(-8)
            ] }, void 0, !0, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 142,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 140,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${reservation.status === "active" ? "bg-green-100 text-green-800" : reservation.status === "pending" ? "bg-yellow-100 text-yellow-800" : reservation.status === "approved" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`, children: reservation.status }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 145,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/40 mt-1", children: new Date(reservation.updated_at).toLocaleDateString() }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 153,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this)
        ] }, reservation.id, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Activity" }, void 0, !1, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react4.Link,
            {
              to: "/admin/events",
              className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm",
              children: "View All \u2192"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 166,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-3", children: recentEvents.slice(0, 5).map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium text-neighborhood-slate capitalize", children: event.event_type.replace("_", " ") }, void 0, !1, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 177,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: [
              "Reservation #",
              event.reservation_id.slice(-8)
            ] }, void 0, !0, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 180,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 176,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/40", children: new Date(event.timestamp).toLocaleString() }, void 0, !1, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 185,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 184,
            columnNumber: 19
          }, this)
        ] }, event.id, !0, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 175,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-4", children: "Quick Actions" }, void 0, !1, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 197,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_react4.Link,
          {
            to: "/admin/users",
            className: "p-4 bg-neighborhood-spruce text-white rounded-lg hover:bg-neighborhood-spruce/90 transition-colors text-center",
            children: "Manage Users"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 199,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_react4.Link,
          {
            to: "/admin/items",
            className: "p-4 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-center",
            children: "Manage Items"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 205,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_react4.Link,
          {
            to: "/admin/reservations",
            className: "p-4 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/90 transition-colors text-center",
            children: "View Reservations"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 211,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_react4.Link,
          {
            to: "/admin/events",
            className: "p-4 bg-neighborhood-rust text-white rounded-lg hover:bg-neighborhood-rust/90 transition-colors text-center",
            children: "Activity Log"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 217,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 196,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin._index.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin._index.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/admin.items.tsx
var admin_items_exports = {};
__export(admin_items_exports, {
  default: () => AdminItems,
  loader: () => loader11,
  meta: () => meta3
});
var import_node13 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "Item Management - Admin - Toolshed" },
  { name: "description", content: "Manage platform items and tools" }
];
async function loader11({ request }) {
  let items2 = await getItems(100, 0), users2 = await getUsers(100, 0), userMap = new Map(users2.map((user) => [user.id, user.name]));
  return (0, import_node13.json)({ items: items2, userMap: Object.fromEntries(userMap) });
}
function AdminItems() {
  let { items: items2, userMap } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react5.Link,
        {
          to: "/admin",
          className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80",
          children: "\u2190 Back to Dashboard"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 31,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Item Management" }, void 0, !1, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Review and manage all shared items and tools" }, void 0, !1, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.items.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Items (",
          items2.length,
          ")"
        ] }, void 0, !0, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "input",
            {
              type: "search",
              placeholder: "Search items...",
              className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 53,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "", children: "All Categories" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 59,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "power-tools", children: "Power Tools" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 60,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "hand-tools", children: "Hand Tools" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 61,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "garden", children: "Garden" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 62,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "automotive", children: "Automotive" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "home", children: "Home" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "specialty", children: "Specialty" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Item" }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Owner" }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 78,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Category" }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 81,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Availability" }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 84,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Location" }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 90,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: items2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: item.title }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 100,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm text-gray-500 max-w-xs truncate", children: item.description || "No description" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 101,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 99,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 98,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm text-gray-900", children: userMap[item.owner_id] || "Unknown User" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 107,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
              "ID: ",
              item.owner_id.slice(-8)
            ] }, void 0, !0, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 110,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 106,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-neighborhood-goldenrod text-white", children: item.category.replace("-", " ") }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 115,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 114,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.quantity_available > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: item.quantity_available > 0 ? `${item.quantity_available} available` : "Reserved" }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 120,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 119,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: item.location }, void 0, !1, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 128,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react5.Link,
              {
                to: `/admin/items/${item.id}`,
                className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4",
                children: "View Details"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.items.tsx",
                lineNumber: 132,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "text-neighborhood-rust hover:text-neighborhood-rust/80", children: "Remove" }, void 0, !1, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 138,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 131,
            columnNumber: 21
          }, this)
        ] }, item.id, !0, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.items.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Popular Tags" }, void 0, !1, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: Array.from(new Set(items2.flatMap((item) => item.tags))).slice(0, 20).map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "span",
        {
          className: "px-3 py-1 bg-neighborhood-mint/20 text-neighborhood-slate text-sm rounded-full",
          children: tag
        },
        tag,
        !1,
        {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 154,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.items.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.items.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.items.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/admin.users.tsx
var admin_users_exports = {};
__export(admin_users_exports, {
  default: () => AdminUsers,
  loader: () => loader12,
  meta: () => meta4
});
var import_node14 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta4 = () => [
  { title: "User Management - Admin - Toolshed" },
  { name: "description", content: "Manage platform users" }
];
async function loader12({ request }) {
  let users2 = await getUsers(100, 0);
  return (0, import_node14.json)({ users: users2 });
}
function AdminUsers() {
  let { users: users2 } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_react6.Link,
        {
          to: "/admin",
          className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80",
          children: "\u2190 Back to Dashboard"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 26,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "User Management" }, void 0, !1, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Review and manage all platform users" }, void 0, !1, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.users.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Users (",
          users2.length,
          ")"
        ] }, void 0, !0, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              type: "search",
              placeholder: "Search users...",
              className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 48,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "", children: "All Neighborhoods" }, void 0, !1, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 54,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "downtown", children: "Downtown" }, void 0, !1, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 55,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "riverside", children: "Riverside" }, void 0, !1, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "hillside", children: "Hillside" }, void 0, !1, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 57,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "User" }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Neighborhood" }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Contact Method" }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Joined" }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 79,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: users2.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: user.name }, void 0, !1, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 89,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-sm text-gray-500", children: user.email }, void 0, !1, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 90,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 88,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 87,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-neighborhood-mint text-neighborhood-slate", children: user.neighborhood }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 94,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 93,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: user.contact_method }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 98,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(user.created_at).toLocaleDateString() }, void 0, !1, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 101,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_react6.Link,
              {
                to: `/admin/users/${user.id}`,
                className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4",
                children: "View Details"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.users.tsx",
                lineNumber: 105,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "text-neighborhood-rust hover:text-neighborhood-rust/80", children: "Suspend" }, void 0, !1, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 111,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 104,
            columnNumber: 21
          }, this)
        ] }, user.id, !0, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.users.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.users.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.users.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
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

// app/routes/api-docs.tsx
var api_docs_exports = {};
__export(api_docs_exports, {
  default: () => ApiDocs,
  meta: () => meta5
});
var import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta5 = () => [
  { title: "API Documentation - Toolshed" },
  { name: "description", content: "Complete API documentation for developers" }
];
function ApiDocs() {
  let [selectedSection, setSelectedSection] = (0, import_react7.useState)("overview");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "API Documentation" }, void 0, !1, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Complete developer reference for the Toolshed API" }, void 0, !1, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/api-docs.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-64 bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("nav", { className: "space-y-2", children: [
        { id: "overview", title: "Overview" },
        { id: "authentication", title: "Authentication" },
        { id: "users", title: "Users" },
        { id: "items", title: "Items" },
        { id: "reservations", title: "Reservations" },
        { id: "events", title: "Event Sourcing" }
      ].map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "button",
        {
          onClick: () => setSelectedSection(section.id),
          className: `w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedSection === section.id ? "bg-neighborhood-spruce text-white" : "text-neighborhood-slate hover:bg-gray-100"}`,
          children: section.title
        },
        section.id,
        !1,
        {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 40,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-1 bg-white rounded-lg shadow-md p-8", children: [
        selectedSection === "overview" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "API Overview" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "prose max-w-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/80 mb-6", children: "The Toolshed API provides three different ways to interact with the platform:" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 61,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-spruce mb-2", children: "1. User Interface" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 67,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70", children: "Web-based interface for community members to browse, share, and request items." }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 70,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-xs bg-neighborhood-mint px-2 py-1 rounded", children: "/browse, /share, /profile" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 74,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 73,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-goldenrod mb-2", children: "2. Admin Dashboard" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 81,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70", children: "Administrative interface for reviewing data, managing users, and monitoring activity." }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 84,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-xs bg-neighborhood-goldenrod text-white px-2 py-1 rounded", children: "/admin/*" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 88,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 87,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 80,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-rust mb-2", children: "3. JSON API" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 95,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70", children: "RESTful API endpoints for developers to integrate with external applications." }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 98,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-xs bg-neighborhood-rust text-white px-2 py-1 rounded", children: "/api/*" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 102,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 101,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 94,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-xl font-semibold text-neighborhood-slate mb-3", children: "Event-Sourced Architecture" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 109,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/80 mb-4", children: "The reservation system uses event sourcing where the current state is computed from an immutable log of events. This provides complete audit trails and enables complex business logic with full history tracking." }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 110,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Base URL" }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 116,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { className: "text-sm bg-gray-200 px-2 py-1 rounded", children: "https://your-domain.com/api" }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 117,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 115,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        selectedSection === "authentication" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Authentication" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 127,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: "Login" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 133,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "/api/auth/login" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 136,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 132,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70 mb-3", children: "Authenticate with email and password to receive a JWT token." }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 138,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Request Body:" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 143,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                  email: "alice@neighborhood.local",
                  password: "your_password"
                }, null, 2) }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 144,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 142,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Response:" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 153,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                  token: "mock-jwt-token-550e8400-e29b-41d4-a716-446655440001"
                }, null, 2) }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 154,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 152,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 131,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: "Using the Token" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 164,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/80 mb-3", children: "Include the JWT token in the Authorization header for all API requests:" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 165,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { className: "text-sm", children: "Authorization: Bearer your-jwt-token-here" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 169,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 168,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 163,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold text-yellow-800 mb-2", children: "Development Note" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 176,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-yellow-700 text-sm", children: "This implementation uses mock JWT tokens for demonstration. In production, implement proper JWT signing, validation, and expiration handling." }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this),
        selectedSection === "items" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Items API" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 192,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "/api/items" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 195,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 191,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get all items with optional pagination." }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 197,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Query Parameters:" }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 199,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "text-sm text-neighborhood-slate/70 mb-3 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "limit" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 201,
                    columnNumber: 27
                  }, this),
                  " - Maximum number of items (default: 50)"
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 201,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "offset" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 202,
                    columnNumber: 27
                  }, this),
                  " - Number of items to skip (default: 0)"
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 202,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 200,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Example Response:" }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify([
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
              ], null, 2) }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 206,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 190,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 227,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "/api/items" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 230,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 226,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Create a new item." }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 232,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Request Body:" }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 234,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                owner_id: "550e8400-e29b-41d4-a716-446655440001",
                title: "Circular Saw",
                description: "Professional grade circular saw with laser guide",
                category: "power-tools",
                tags: ["cutting", "woodworking", "construction"],
                location: "Downtown",
                quantity_total: 1
              }, null, 2) }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 235,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 225,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this),
        selectedSection === "reservations" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Reservations API" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 253,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 258,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "/api/reservations" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 261,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 257,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get current reservation states with filtering options." }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 263,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Query Parameters:" }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 265,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "text-sm text-neighborhood-slate/70 mb-3 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "item_id" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 267,
                    columnNumber: 27
                  }, this),
                  " - Filter by item ID"
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 267,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "requester_id" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 268,
                    columnNumber: 27
                  }, this),
                  " - Filter by requester ID"
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 268,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "status" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 269,
                    columnNumber: 27
                  }, this),
                  " - Filter by status (pending, approved, active, returned, cancelled)"
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 269,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 266,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 256,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 275,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "/api/reservations/[id]" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 278,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 274,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get a specific reservation's current state." }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 280,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 273,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 255,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 252,
          columnNumber: 15
        }, this),
        selectedSection === "events" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Event Sourcing" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 288,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/80 mb-4", children: "The reservation system uses event sourcing where each reservation's state is computed from an immutable log of events. This provides complete audit trails and enables complex business logic." }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 291,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: "Event Types" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 297,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("table", { className: "min-w-full border border-gray-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Event Type" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 302,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Description" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 303,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Valid From States" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 304,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Resulting State" }, void 0, !1, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 305,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 301,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 300,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2 font-mono text-sm", children: "requested" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 310,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "Initial reservation request" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 311,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "-" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 312,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "pending" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 313,
                    columnNumber: 27
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 309,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2 font-mono text-sm", children: "approved" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 316,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "Owner approves reservation" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 317,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "pending" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 318,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "approved" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 319,
                    columnNumber: 27
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 315,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2 font-mono text-sm", children: "activated" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 322,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "Item picked up by requester" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 323,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "approved" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 324,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "active" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 325,
                    columnNumber: 27
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 321,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2 font-mono text-sm", children: "returned" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 328,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "Item returned by requester" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 329,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "active" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 330,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "px-4 py-2", children: "returned" }, void 0, !1, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 331,
                    columnNumber: 27
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 327,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 308,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 299,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 298,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 290,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 340,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "/api/reservations/events" }, void 0, !1, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 343,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 339,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Add a new event to the reservation log." }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 345,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Example: Create New Reservation" }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 347,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
              item_id: "650e8400-e29b-41d4-a716-446655440001",
              event_type: "requested",
              quantity: 1,
              start_date: "2024-06-10T09:00:00Z",
              end_date: "2024-06-12T17:00:00Z",
              notes: "Need for home renovation project"
            }, null, 2) }, void 0, !1, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 348,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 338,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 287,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/api-docs.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-4", children: "API Examples" }, void 0, !1, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 365,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Authentication" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 368,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/70", children: "POST /api/auth/login with email and password to get JWT token" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 369,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 367,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Get Items" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 374,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/70", children: "GET /api/items with Authorization header to retrieve all items" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 375,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 373,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Create Reservation" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 380,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/70", children: "POST /api/reservations/events to create new reservation events" }, void 0, !1, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 381,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 379,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 366,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/api-docs.tsx",
      lineNumber: 364,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/api-docs.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/api-docs.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action8,
  default: () => Register,
  meta: () => meta6
});
var import_react8 = require("@remix-run/react"), import_node16 = require("@remix-run/node");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta6 = () => [{ title: "Join Community - Toolshed" }];
async function action8({ request }) {
  let formData = await request.formData(), name = formData.get("name")?.toString(), email = formData.get("email")?.toString(), password = formData.get("password")?.toString(), confirmPassword = formData.get("confirmPassword")?.toString(), neighborhood = formData.get("neighborhood")?.toString(), contactMethod = formData.get("contactMethod")?.toString();
  if (!name || !email || !password || !confirmPassword)
    return (0, import_node16.json)({ error: "All fields are required" }, { status: 400 });
  if (password !== confirmPassword)
    return (0, import_node16.json)({ error: "Passwords do not match" }, { status: 400 });
  if (password.length < 6)
    return (0, import_node16.json)({ error: "Password must be at least 6 characters long" }, { status: 400 });
  try {
    let user = await createUser({
      name,
      email,
      password,
      neighborhood: neighborhood || "",
      contact_method: contactMethod || "message"
    });
    return (0, import_node16.redirect)("/profile?welcome=true&new=true");
  } catch (error) {
    return error.message?.includes("unique constraint") || error.message?.includes("already exists") ? (0, import_node16.json)({ error: "An account with this email already exists" }, { status: 400 }) : (console.error("Registration error:", error), (0, import_node16.json)({ error: "Something went wrong. Please try again." }, { status: 500 }));
  }
}
function Register() {
  let actionData = (0, import_react8.useActionData)(), isSubmitting = (0, import_react8.useNavigation)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-center text-3xl font-bold text-neighborhood-slate", children: "Join the Community" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-2 text-center text-sm text-neighborhood-slate/70", children: "Start sharing tools with your neighbors" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Form, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.error }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-medium text-neighborhood-slate", children: "Full Name" }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              id: "name",
              name: "name",
              type: "text",
              autoComplete: "name",
              required: !0,
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Enter your full name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 79,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-neighborhood-slate", children: "Email address" }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Enter your email"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 94,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "neighborhood", className: "block text-sm font-medium text-neighborhood-slate", children: "Neighborhood" }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              id: "neighborhood",
              name: "neighborhood",
              type: "text",
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "e.g. Downtown, Riverside"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 109,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-neighborhood-slate", children: "Preferred Contact Method" }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "select",
            {
              id: "contactMethod",
              name: "contactMethod",
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "message", children: "In-app messaging" }, void 0, !1, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 127,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "email", children: "Email" }, void 0, !1, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 128,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: "phone", children: "Phone" }, void 0, !1, {
                  fileName: "app/routes/register.tsx",
                  lineNumber: 129,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 122,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-neighborhood-slate", children: "Password" }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "new-password",
              required: !0,
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Create a password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 137,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-neighborhood-slate", children: "Confirm Password" }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              id: "confirmPassword",
              name: "confirmPassword",
              type: "password",
              autoComplete: "new-password",
              required: !0,
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Confirm your password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 152,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              id: "agree-terms",
              name: "agree-terms",
              type: "checkbox",
              required: !0,
              className: "h-4 w-4 text-neighborhood-goldenrod focus:ring-neighborhood-goldenrod border-gray-300 rounded"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/register.tsx",
              lineNumber: 164,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "agree-terms", className: "ml-2 block text-sm text-neighborhood-slate", children: [
            "I agree to the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/terms", className: "text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Terms of Service" }, void 0, !1, {
              fileName: "app/routes/register.tsx",
              lineNumber: 173,
              columnNumber: 17
            }, this),
            " ",
            "and",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/privacy", className: "text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/register.tsx",
              lineNumber: 177,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/register.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-goldenrod/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed",
            children: isSubmitting ? "Creating account..." : "Create account"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 184,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 197,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 196,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "px-2 bg-white text-neighborhood-slate/70", children: "Already have an account?" }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 200,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/register.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/register.tsx",
          lineNumber: 195,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react8.Link,
          {
            to: "/login",
            className: "w-full flex justify-center py-2 px-4 border border-neighborhood-slate rounded-md shadow-sm text-sm font-medium text-neighborhood-slate bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod",
            children: "Sign in instead"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/register.tsx",
            lineNumber: 205,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/register.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/tool.$id.tsx
var tool_id_exports = {};
__export(tool_id_exports, {
  default: () => ToolDetail,
  loader: () => loader14,
  meta: () => meta7
});
var import_node17 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta7 = () => [
  { title: "Tool Details - Toolshed" },
  { name: "description", content: "View tool details and contact the owner" }
];
async function loader14({ params }) {
  let toolId = params.id;
  if (!toolId)
    throw new Response("Tool not found", { status: 404 });
  return (0, import_node17.json)({ toolId });
}
function ToolDetail() {
  let { toolId } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-center py-12 px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "svg",
      {
        className: "mx-auto h-12 w-12 text-gray-400",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.386 0-4.735.832-6.565 2.436l-.693-.693A8.963 8.963 0 0112 13.5c2.213 0 4.337.815 5.985 2.29l-.692.692z"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tool.$id.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tool.$id.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "Tool not found" }, void 0, !1, {
      fileName: "app/routes/tool.$id.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: [
      'Tool with ID "',
      toolId,
      '" could not be found. This feature will be available once the database schema is integrated.'
    ] }, void 0, !0, {
      fileName: "app/routes/tool.$id.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "a",
      {
        href: "/browse",
        className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { className: "-ml-1 mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 19l-7-7m0 0l7-7m-7 7h18" }, void 0, !1, {
            fileName: "app/routes/tool.$id.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/tool.$id.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          "Back to Browse"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/tool.$id.tsx",
        lineNumber: 50,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tool.$id.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tool.$id.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/tool.$id.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tool.$id.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  action: () => action9,
  default: () => Profile,
  loader: () => loader15,
  meta: () => meta8
});
var import_react10 = require("react"), import_react11 = require("@remix-run/react"), import_node18 = require("@remix-run/node");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), meta8 = () => [{ title: "Profile - Toolshed" }];
async function loader15({ request }) {
  let user = await getUserByEmail("alice@neighborhood.local");
  if (!user)
    throw new Response("User not found", { status: 404 });
  let userItems = (await getItems()).filter((item) => item.ownerId === user.id);
  return (0, import_node18.json)({ user, userItems });
}
async function action9({ request }) {
  let formData = await request.formData();
  if (formData.get("intent") === "updateProfile") {
    let name = formData.get("name")?.toString(), neighborhood = formData.get("neighborhood")?.toString(), contactMethod = formData.get("contactMethod")?.toString();
    if (!name)
      return (0, import_node18.json)({ error: "Name is required" }, { status: 400 });
    try {
      let user = await getUserByEmail("alice@neighborhood.local");
      return user ? (await updateUser(user.id, {
        name,
        neighborhood: neighborhood || "",
        contact_method: contactMethod || "message"
      }), (0, import_node18.json)({ success: "Profile updated successfully" })) : (0, import_node18.json)({ error: "User not found" }, { status: 404 });
    } catch (error) {
      return console.error("Profile update error:", error), (0, import_node18.json)({ error: "Failed to update profile" }, { status: 500 });
    }
  }
  return (0, import_node18.json)({ error: "Invalid action" }, { status: 400 });
}
function Profile() {
  let { user, userItems } = (0, import_react11.useLoaderData)(), actionData = (0, import_react11.useActionData)(), navigation = (0, import_react11.useNavigation)(), [searchParams] = (0, import_react11.useSearchParams)(), [isEditing, setIsEditing] = (0, import_react10.useState)(!1), isUpdating = navigation.state === "submitting" && navigation.formData?.get("intent") === "updateProfile", isWelcome = searchParams.get("welcome") === "true", isNewUser = searchParams.get("new") === "true";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    isWelcome && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-8 bg-neighborhood-mint/10 border border-neighborhood-mint/20 rounded-lg p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-2", children: isNewUser ? "Welcome to Toolshed!" : "Welcome back!" }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-neighborhood-slate/70", children: isNewUser ? "Your account has been created successfully. Start by browsing available tools or sharing your own." : "You're successfully signed in. Explore your neighborhood's shared resources." }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-2xl font-bold text-neighborhood-slate", children: "My Profile" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "button",
              {
                onClick: () => setIsEditing(!isEditing),
                className: "px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors",
                children: isEditing ? "Cancel" : "Edit Profile"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 97,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, this),
          actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-6 bg-green-50 border border-green-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-green-600 text-sm", children: actionData.success }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-6 bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.error }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 113,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "intent", value: "updateProfile" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-medium text-neighborhood-slate", children: "Full Name" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 122,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "input",
                {
                  id: "name",
                  name: "name",
                  type: "text",
                  defaultValue: user.name,
                  required: !0,
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 125,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 121,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-neighborhood-slate", children: "Email Address" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 136,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  value: user.email,
                  disabled: !0,
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 139,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/60 mt-1", children: "Email cannot be changed" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 147,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "neighborhood", className: "block text-sm font-medium text-neighborhood-slate", children: "Neighborhood" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 151,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "input",
                {
                  id: "neighborhood",
                  name: "neighborhood",
                  type: "text",
                  defaultValue: user.neighborhood,
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 154,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 150,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-neighborhood-slate", children: "Preferred Contact Method" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 164,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "select",
                {
                  id: "contactMethod",
                  name: "contactMethod",
                  defaultValue: user.contactMethod,
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "message", children: "In-app messaging" }, void 0, !1, {
                      fileName: "app/routes/profile.tsx",
                      lineNumber: 173,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "email", children: "Email" }, void 0, !1, {
                      fileName: "app/routes/profile.tsx",
                      lineNumber: 174,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("option", { value: "phone", children: "Phone" }, void 0, !1, {
                      fileName: "app/routes/profile.tsx",
                      lineNumber: 175,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 167,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "button",
                {
                  type: "submit",
                  disabled: isUpdating,
                  className: "px-6 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors disabled:opacity-50",
                  children: isUpdating ? "Saving..." : "Save Changes"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 180,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "button",
                {
                  type: "button",
                  onClick: () => setIsEditing(!1),
                  className: "px-6 py-2 bg-gray-200 text-neighborhood-slate rounded-lg hover:bg-gray-300 transition-colors",
                  children: "Cancel"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 187,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Name" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 199,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: user.name }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 200,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 198,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Email" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 203,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: user.email }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 204,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 202,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Neighborhood" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 207,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: user.neighborhood || "Not specified" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 208,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Contact Preference" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 211,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-lg text-neighborhood-slate capitalize", children: user.contactMethod }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 212,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 210,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Member Since" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 215,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: new Date(user.createdAt).toLocaleDateString() }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 216,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 214,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 197,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "My Shared Items" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 227,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react11.Link,
              {
                to: "/share",
                className: "px-4 py-2 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/80 transition-colors",
                children: "Add New Item"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 228,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          userItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "font-semibold text-neighborhood-slate", children: item.title }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 240,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70 mt-1", children: item.description }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 241,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between mt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs bg-neighborhood-mint/20 text-neighborhood-slate px-2 py-1 rounded", children: item.category }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 243,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-xs text-neighborhood-slate/60", children: [
                "Available: ",
                item.quantityAvailable,
                "/",
                item.quantityTotal
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 246,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 242,
              columnNumber: 23
            }, this)
          ] }, item.id, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 239,
            columnNumber: 21
          }, this)) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 237,
            columnNumber: 17
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-4", children: "You haven't shared any items yet." }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 255,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react11.Link,
              {
                to: "/share",
                className: "inline-flex items-center px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors",
                children: "Share Your First Item"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 256,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 254,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Quick Actions" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 270,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react11.Link,
              {
                to: "/browse",
                className: "block w-full px-4 py-3 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-center",
                children: "Browse Items"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 272,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react11.Link,
              {
                to: "/share",
                className: "block w-full px-4 py-3 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/80 transition-colors text-center",
                children: "Share an Item"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 278,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react11.Link,
              {
                to: "/reservations",
                className: "block w-full px-4 py-3 bg-white border border-neighborhood-slate text-neighborhood-slate rounded-lg hover:bg-gray-50 transition-colors text-center",
                children: "My Reservations"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 284,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 271,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Community Stats" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 294,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-neighborhood-slate/70", children: "Items Shared" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 297,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "font-semibold text-neighborhood-slate", children: userItems.length }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 298,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 296,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-neighborhood-slate/70", children: "Trust Score" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 301,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "font-semibold text-neighborhood-goldenrod", children: "\u2605\u2605\u2605\u2605\u2606" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 302,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 300,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-neighborhood-slate/70", children: "Exchanges" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 305,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "font-semibold text-neighborhood-slate", children: "12" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 306,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 304,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Account" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 312,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "block w-full px-4 py-2 text-left text-neighborhood-slate hover:bg-gray-50 rounded", children: "Notification Settings" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 314,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "block w-full px-4 py-2 text-left text-neighborhood-slate hover:bg-gray-50 rounded", children: "Privacy Settings" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 317,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react11.Link,
              {
                to: "/logout",
                className: "block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded",
                children: "Sign Out"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 320,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 313,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 311,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "2rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { style: { textAlign: "center", marginBottom: "3rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { style: { fontSize: "3rem", color: "#2d3748", marginBottom: "1rem" }, children: "Welcome to Toolshed" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { style: { fontSize: "1.25rem", color: "#4a5568", maxWidth: "600px", margin: "0 auto" }, children: "Share tools, borrow equipment, and build stronger communities. Connect with neighbors to share resources and reduce waste." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "3rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_react12.Link,
        {
          to: "/browse",
          style: {
            backgroundColor: "#f6ad55",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "600"
          },
          children: "Browse Tools"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 18,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_react12.Link,
        {
          to: "/register",
          style: {
            backgroundColor: "#4fd1c7",
            color: "#2d3748",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "600"
          },
          children: "Join Community"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { backgroundColor: "white", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { style: { fontSize: "1.25rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }, children: "Share Your Tools" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { style: { color: "#4a5568", marginBottom: "1rem" }, children: "List tools you're willing to lend to neighbors. From power drills to garden equipment, help your community access what they need." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react12.Link, { to: "/share", style: { color: "#f6ad55", textDecoration: "none", fontWeight: "600" }, children: "Start Sharing \u2192" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { backgroundColor: "white", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { style: { fontSize: "1.25rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }, children: "Find What You Need" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { style: { color: "#4a5568", marginBottom: "1rem" }, children: "Browse available tools in your neighborhood. Save money and reduce waste by borrowing instead of buying." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react12.Link, { to: "/browse", style: { color: "#f6ad55", textDecoration: "none", fontWeight: "600" }, children: "Browse Tools \u2192" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { backgroundColor: "white", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { style: { fontSize: "1.25rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }, children: "Build Community" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { style: { color: "#4a5568", marginBottom: "1rem" }, children: "Connect with neighbors, build trust, and create a stronger, more sustainable community together." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react12.Link, { to: "/login", style: { color: "#f6ad55", textDecoration: "none", fontWeight: "600" }, children: "Get Started \u2192" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { textAlign: "center", backgroundColor: "#f7fafc", padding: "2rem", borderRadius: "0.5rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { style: { fontSize: "1.5rem", color: "#2d3748", marginBottom: "1rem" }, children: "Ready to get started?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { style: { color: "#4a5568", marginBottom: "1.5rem" }, children: "Join our community and start sharing resources with your neighbors today." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { display: "flex", gap: "1rem", justifyContent: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_react12.Link,
          {
            to: "/register",
            style: {
              backgroundColor: "#f6ad55",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "600"
            },
            children: "Create Account"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 92,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_react12.Link,
          {
            to: "/login",
            style: {
              backgroundColor: "white",
              color: "#2d3748",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "600",
              border: "1px solid #e2e8f0"
            },
            children: "Sign In"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 105,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/browse.tsx
var browse_exports = {};
__export(browse_exports, {
  default: () => Browse,
  meta: () => meta9
});
var import_react13 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta9 = () => [
  { title: "Browse Tools - Toolshed" },
  { name: "description", content: "Browse available tools and resources in your community" }
];
function Browse() {
  let [searchTerm, setSearchTerm] = (0, import_react13.useState)(""), [selectedCategory, setSelectedCategory] = (0, import_react13.useState)("all");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-3xl font-bold text-neighborhood-slate mb-4", children: "Browse Tools" }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: "Discover tools and resources available in your community" }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-neighborhood-mint/20 p-6 mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "search", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Search Tools" }, void 0, !1, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { className: "h-5 w-5 text-neighborhood-slate", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, !1, {
            fileName: "app/routes/browse.tsx",
            lineNumber: 44,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/browse.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/browse.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "input",
            {
              type: "text",
              id: "search",
              className: "block w-full pl-10 pr-3 py-2 border border-neighborhood-mint rounded-md leading-5 bg-white placeholder-neighborhood-disabled focus:outline-none focus:placeholder-neighborhood-slate focus:ring-1 focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Search for tools...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/browse.tsx",
              lineNumber: 47,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "category", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Category" }, void 0, !1, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
            ].map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: category.id, children: category.name }, category.id, !1, {
              fileName: "app/routes/browse.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/browse.tsx",
            lineNumber: 62,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/browse.tsx",
              lineNumber: 86,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/browse.tsx",
          lineNumber: 80,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-neighborhood-slate", children: "No tools available" }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "mt-1 text-sm text-neighborhood-slate", children: "Tools will appear here once they are shared by community members." }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "a",
        {
          href: "/share",
          className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { className: "-ml-1 mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, !1, {
              fileName: "app/routes/browse.tsx",
              lineNumber: 103,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/browse.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            "Share a Tool"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/browse.tsx",
          lineNumber: 98,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/browse.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  default: () => Logout,
  loader: () => loader16
});
var import_node19 = require("@remix-run/node");
async function loader16({ request }) {
  return (0, import_node19.redirect)("/?logout=true");
}
function Logout() {
  return null;
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action10,
  default: () => Login,
  meta: () => meta10
});
var import_react14 = require("@remix-run/react"), import_node20 = require("@remix-run/node");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta10 = () => [{ title: "Sign In - Toolshed" }];
async function action10({ request }) {
  let formData = await request.formData(), email = formData.get("email")?.toString(), password = formData.get("password")?.toString();
  if (!email || !password)
    return (0, import_node20.json)({ error: "Email and password are required" }, { status: 400 });
  try {
    return await authenticateUser(email, password) ? (0, import_node20.redirect)("/profile?welcome=true") : (0, import_node20.json)({ error: "Invalid email or password" }, { status: 401 });
  } catch (error) {
    return console.error("Login error:", error), (0, import_node20.json)({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
function Login() {
  let actionData = (0, import_react14.useActionData)(), isSubmitting = (0, import_react14.useNavigation)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-center text-3xl font-bold text-neighborhood-slate", children: "Sign in to Toolshed" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-2 text-center text-sm text-neighborhood-slate/70", children: "Welcome back to your community" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Form, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.error }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-neighborhood-slate", children: "Email address" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Enter your email"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 65,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-neighborhood-slate", children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod",
              placeholder: "Enter your password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 80,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "input",
              {
                id: "remember-me",
                name: "remember-me",
                type: "checkbox",
                className: "h-4 w-4 text-neighborhood-goldenrod focus:ring-neighborhood-goldenrod border-gray-300 rounded"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 93,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-neighborhood-slate", children: "Remember me" }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { to: "/forgot-password", className: "font-medium text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Forgot your password?" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-goldenrod/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed",
            children: isSubmitting ? "Signing in..." : "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 112,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "px-2 bg-white text-neighborhood-slate/70", children: "New to Toolshed?" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_react14.Link,
          {
            to: "/register",
            className: "w-full flex justify-center py-2 px-4 border border-neighborhood-slate rounded-md shadow-sm text-sm font-medium text-neighborhood-slate bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod",
            children: "Create an account"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 133,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-6 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/60", children: "Demo account: alice@neighborhood.local / password123" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/share.tsx
var share_exports = {};
__export(share_exports, {
  action: () => action11,
  default: () => Share,
  meta: () => meta11
});
var import_node21 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta11 = () => [
  { title: "Share a Tool - Toolshed" },
  { name: "description", content: "Share your tools and resources with the community" }
];
async function action11({ request }) {
  let formData = await request.formData(), title = formData.get("title"), description = formData.get("description"), category = formData.get("category"), errors = {};
  return (!title || typeof title != "string" || title.trim().length === 0) && (errors.title = "Tool name is required"), (!description || typeof description != "string" || description.trim().length === 0) && (errors.description = "Description is required"), (!category || typeof category != "string" || category === "") && (errors.category = "Category is required"), Object.keys(errors).length > 0 ? (0, import_node21.json)({ errors, success: !1 }, { status: 400 }) : (console.log("Tool sharing data:", {
    title,
    description,
    category,
    condition: formData.get("condition"),
    availability: formData.get("availability"),
    location: formData.get("location"),
    contactMethod: formData.get("contactMethod")
  }), (0, import_node21.redirect)("/browse?shared=true"));
}
function Share() {
  let actionData = (0, import_react15.useActionData)(), isSubmitting = (0, import_react15.useNavigation)().state === "submitting", [selectedCategory, setSelectedCategory] = (0, import_react16.useState)(""), categories = [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-3xl font-bold text-neighborhood-slate mb-4", children: "Share a Tool" }, void 0, !1, {
        fileName: "app/routes/share.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: "Add your tool to the community sharing network" }, void 0, !1, {
        fileName: "app/routes/share.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/share.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-neighborhood-mint/20 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "title", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Tool Name *" }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "input",
          {
            type: "text",
            id: "title",
            name: "title",
            className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.title ? "border-neighborhood-rust focus:ring-neighborhood-rust focus:border-neighborhood-rust" : "border-neighborhood-mint focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"}`,
            placeholder: "e.g., Power Drill, Lawnmower, Socket Set"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/share.tsx",
            lineNumber: 101,
            columnNumber: 13
          },
          this
        ),
        actionData?.errors?.title && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1 text-sm text-neighborhood-rust", children: actionData.errors.title }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/share.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700 mb-2", children: "Description *" }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "textarea",
          {
            id: "description",
            name: "description",
            rows: 4,
            className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.description ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`,
            placeholder: "Describe the tool, its features, and any important details..."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/share.tsx",
            lineNumber: 122,
            columnNumber: 13
          },
          this
        ),
        actionData?.errors?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1 text-sm text-red-600", children: actionData.errors.description }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/share.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "category", className: "block text-sm font-medium text-gray-700 mb-2", children: "Category *" }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "select",
            {
              id: "category",
              name: "category",
              value: selectedCategory,
              onChange: (e) => setSelectedCategory(e.target.value),
              className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.category ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`,
              children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: category.id, children: category.name }, category.id, !1, {
                fileName: "app/routes/share.tsx",
                lineNumber: 156,
                columnNumber: 19
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/share.tsx",
              lineNumber: 144,
              columnNumber: 15
            },
            this
          ),
          actionData?.errors?.category && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-1 text-sm text-red-600", children: actionData.errors.category }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/share.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "condition", className: "block text-sm font-medium text-gray-700 mb-2", children: "Condition" }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "select",
            {
              id: "condition",
              name: "condition",
              className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
              children: conditions.map((condition) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: condition.id, children: condition.name }, condition.id, !1, {
                fileName: "app/routes/share.tsx",
                lineNumber: 176,
                columnNumber: 19
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/share.tsx",
              lineNumber: 170,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/share.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/share.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "availability", className: "block text-sm font-medium text-gray-700 mb-2", children: "Availability" }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "select",
            {
              id: "availability",
              name: "availability",
              className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
              children: availabilityOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: option.id, children: option.name }, option.id, !1, {
                fileName: "app/routes/share.tsx",
                lineNumber: 196,
                columnNumber: 19
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/share.tsx",
              lineNumber: 190,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/share.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "location", className: "block text-sm font-medium text-gray-700 mb-2", children: "General Location" }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "input",
            {
              type: "text",
              id: "location",
              name: "location",
              className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
              placeholder: "e.g., Downtown, West Side, ZIP code"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/share.tsx",
              lineNumber: 207,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/share.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/share.tsx",
        lineNumber: 185,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-gray-700 mb-2", children: "Preferred Contact Method" }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "select",
          {
            id: "contactMethod",
            name: "contactMethod",
            className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: "message", children: "App Message" }, void 0, !1, {
                fileName: "app/routes/share.tsx",
                lineNumber: 227,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: "email", children: "Email" }, void 0, !1, {
                fileName: "app/routes/share.tsx",
                lineNumber: 228,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: "phone", children: "Phone" }, void 0, !1, {
                fileName: "app/routes/share.tsx",
                lineNumber: 229,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/share.tsx",
            lineNumber: 222,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/share.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed",
          children: isSubmitting ? "Sharing Tool..." : "Share Tool"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/share.tsx",
          lineNumber: 235,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/share.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/share.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/share.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/share.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-TK4I6SIB.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-OJIVT72O.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-YP5XBNXY.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XONX5ZQK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-G7XMN5QS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin._index": { id: "routes/admin._index", parentId: "root", path: "admin", index: !0, caseSensitive: void 0, module: "/build/routes/admin._index-FWOQBVIG.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.items": { id: "routes/admin.items", parentId: "root", path: "admin/items", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.items-L4WQGEW7.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.reservations": { id: "routes/admin.reservations", parentId: "root", path: "admin/reservations", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.reservations-KTL55TVY.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.users": { id: "routes/admin.users", parentId: "root", path: "admin/users", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.users-ERJEZREU.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api-docs": { id: "routes/api-docs", parentId: "root", path: "api-docs", index: void 0, caseSensitive: void 0, module: "/build/routes/api-docs-VM54SIOU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.login": { id: "routes/api.auth.login", parentId: "root", path: "api/auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.login-6245K4LH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.logout": { id: "routes/api.auth.logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.logout-WCJWBYDB.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.health": { id: "routes/api.health", parentId: "root", path: "api/health", index: void 0, caseSensitive: void 0, module: "/build/routes/api.health-67CCR6UT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.items.$id": { id: "routes/api.items.$id", parentId: "root", path: "api/items/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.items.$id-6J4GDWCE.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.items._index": { id: "routes/api.items._index", parentId: "root", path: "api/items", index: !0, caseSensitive: void 0, module: "/build/routes/api.items._index-VBYNWXIZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.$id": { id: "routes/api.reservations.$id", parentId: "root", path: "api/reservations/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.$id-BIWLWCSO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.$id.events": { id: "routes/api.reservations.$id.events", parentId: "routes/api.reservations.$id", path: "events", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.$id.events-DGUN4OAS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations._index": { id: "routes/api.reservations._index", parentId: "root", path: "api/reservations", index: !0, caseSensitive: void 0, module: "/build/routes/api.reservations._index-MTBUTTCX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.events": { id: "routes/api.reservations.events", parentId: "root", path: "api/reservations/events", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.events-LORNGS5M.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.users.$id": { id: "routes/api.users.$id", parentId: "root", path: "api/users/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.users.$id-KTAVK6JS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.users._index": { id: "routes/api.users._index", parentId: "root", path: "api/users", index: !0, caseSensitive: void 0, module: "/build/routes/api.users._index-SHTHNUT6.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/browse": { id: "routes/browse", parentId: "root", path: "browse", index: void 0, caseSensitive: void 0, module: "/build/routes/browse-FN4GGKMW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-W2P5FXXE.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-4RC6W7AA.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-SZDBEUUY.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-WCTBIYP2.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/share": { id: "routes/share", parentId: "root", path: "share", index: void 0, caseSensitive: void 0, module: "/build/routes/share-JWDXL6UE.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tool.$id": { id: "routes/tool.$id", parentId: "root", path: "tool/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/tool.$id-MIIMFKU6.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "5c58b395", hmr: { runtime: "/build/_shared/chunk-YP5XBNXY.js", timestamp: 1749404923228 }, url: "/build/manifest-5C58B395.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
//# sourceMappingURL=index.js.map
