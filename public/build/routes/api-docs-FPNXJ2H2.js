import {
  createHotContext
} from "/build/_shared/chunk-YP5XBNXY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/api-docs.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/api-docs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/api-docs.tsx"
  );
  import.meta.hot.lastModified = "1749403243246.3235";
}
var meta = () => {
  return [{
    title: "API Documentation - Toolshed"
  }, {
    name: "description",
    content: "Complete API documentation for developers"
  }];
};
function ApiDocs() {
  _s();
  const [selectedSection, setSelectedSection] = (0, import_react.useState)("overview");
  const sections = [{
    id: "overview",
    title: "Overview"
  }, {
    id: "authentication",
    title: "Authentication"
  }, {
    id: "users",
    title: "Users"
  }, {
    id: "items",
    title: "Items"
  }, {
    id: "reservations",
    title: "Reservations"
  }, {
    id: "events",
    title: "Event Sourcing"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "API Documentation" }, void 0, false, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Complete developer reference for the Toolshed API" }, void 0, false, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/api-docs.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-64 bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedSection(section.id), className: `w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedSection === section.id ? "bg-neighborhood-spruce text-white" : "text-neighborhood-slate hover:bg-gray-100"}`, children: section.title }, section.id, false, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 68,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 bg-white rounded-lg shadow-md p-8", children: [
        selectedSection === "overview" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "API Overview" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose max-w-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/80 mb-6", children: "The Toolshed API provides three different ways to interact with the platform:" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-spruce mb-2", children: "1. User Interface" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 85,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70", children: "Web-based interface for community members to browse, share, and request items." }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 88,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-neighborhood-mint px-2 py-1 rounded", children: "/browse, /share, /profile" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 92,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 91,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 84,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-goldenrod mb-2", children: "2. Admin Dashboard" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 99,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70", children: "Administrative interface for reviewing data, managing users, and monitoring activity." }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 102,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-neighborhood-goldenrod text-white px-2 py-1 rounded", children: "/admin/*" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 106,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 105,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 98,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-rust mb-2", children: "3. JSON API" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 113,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70", children: "RESTful API endpoints for developers to integrate with external applications." }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 116,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-neighborhood-rust text-white px-2 py-1 rounded", children: "/api/*" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 120,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 119,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 112,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 83,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-neighborhood-slate mb-3", children: "Event-Sourced Architecture" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/80 mb-4", children: "The reservation system uses event sourcing where the current state is computed from an immutable log of events. This provides complete audit trails and enables complex business logic with full history tracking." }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 128,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Base URL" }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 134,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "text-sm bg-gray-200 px-2 py-1 rounded", children: "https://your-domain.com/api" }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 135,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 76,
          columnNumber: 48
        }, this),
        selectedSection === "authentication" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Authentication" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: "Login" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 149,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "/api/auth/login" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 152,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 148,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70 mb-3", children: "Authenticate with email and password to receive a JWT token." }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 154,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Request Body:" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 159,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                  email: "alice@neighborhood.local",
                  password: "your_password"
                }, null, 2) }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 160,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 158,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Response:" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 169,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                  token: "mock-jwt-token-550e8400-e29b-41d4-a716-446655440001"
                }, null, 2) }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 170,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 168,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: "Using the Token" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/80 mb-3", children: "Include the JWT token in the Authorization header for all API requests:" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 181,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "text-sm", children: "Authorization: Bearer your-jwt-token-here" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-yellow-800 mb-2", children: "Development Note" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 192,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-700 text-sm", children: "This implementation uses mock JWT tokens for demonstration. In production, implement proper JWT signing, validation, and expiration handling." }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 193,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 191,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 142,
          columnNumber: 54
        }, this),
        selectedSection === "items" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Items API" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 206,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "/api/items" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 209,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get all items with optional pagination." }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 211,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Query Parameters:" }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-neighborhood-slate/70 mb-3 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "limit" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 215,
                    columnNumber: 27
                  }, this),
                  " - Maximum number of items (default: 50)"
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 215,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "offset" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 216,
                    columnNumber: 27
                  }, this),
                  " - Number of items to skip (default: 0)"
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 216,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 214,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Example Response:" }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 219,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify([{
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
              }], null, 2) }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 220,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 239,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "/api/items" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 242,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 238,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Create a new item." }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 244,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Request Body:" }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 246,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
                owner_id: "550e8400-e29b-41d4-a716-446655440001",
                title: "Circular Saw",
                description: "Professional grade circular saw with laser guide",
                category: "power-tools",
                tags: ["cutting", "woodworking", "construction"],
                location: "Downtown",
                quantity_total: 1
              }, null, 2) }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 247,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 203,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 200,
          columnNumber: 45
        }, this),
        selectedSection === "reservations" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Reservations API" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 263,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 268,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "/api/reservations" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 271,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 267,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get current reservation states with filtering options." }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 273,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Query Parameters:" }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 275,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-neighborhood-slate/70 mb-3 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "item_id" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 277,
                    columnNumber: 27
                  }, this),
                  " - Filter by item ID"
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 277,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "requester_id" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 278,
                    columnNumber: 27
                  }, this),
                  " - Filter by requester ID"
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 278,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "status" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 279,
                    columnNumber: 27
                  }, this),
                  " - Filter by status (pending, approved, active, returned, cancelled)"
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 279,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 276,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 266,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono", children: "GET" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 285,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "/api/reservations/[id]" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 288,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 284,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Get a specific reservation's current state." }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 290,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 283,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 265,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 262,
          columnNumber: 52
        }, this),
        selectedSection === "events" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-neighborhood-slate mb-4", children: "Event Sourcing" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 296,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/80 mb-4", children: "The reservation system uses event sourcing where each reservation's state is computed from an immutable log of events. This provides complete audit trails and enables complex business logic." }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 299,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: "Event Types" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 305,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full border border-gray-200", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Event Type" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 310,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Description" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 311,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Valid From States" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 312,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Resulting State" }, void 0, false, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 313,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 309,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 308,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2 font-mono text-sm", children: "requested" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 318,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "Initial reservation request" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 319,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "-" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 320,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "pending" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 321,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 317,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2 font-mono text-sm", children: "approved" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 324,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "Owner approves reservation" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 325,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "pending" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 326,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "approved" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 327,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 323,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2 font-mono text-sm", children: "activated" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 330,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "Item picked up by requester" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 331,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "approved" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 332,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "active" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 333,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 329,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2 font-mono text-sm", children: "returned" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 336,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "Item returned by requester" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 337,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "active" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 338,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-2", children: "returned" }, void 0, false, {
                    fileName: "app/routes/api-docs.tsx",
                    lineNumber: 339,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/api-docs.tsx",
                  lineNumber: 335,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 316,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 307,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 306,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 298,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono", children: "POST" }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 348,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "/api/reservations/events" }, void 0, false, {
                fileName: "app/routes/api-docs.tsx",
                lineNumber: 351,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 347,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-3", children: "Add a new event to the reservation log." }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 353,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Example: Create New Reservation" }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 355,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto", children: JSON.stringify({
              item_id: "650e8400-e29b-41d4-a716-446655440001",
              event_type: "requested",
              quantity: 1,
              start_date: "2024-06-10T09:00:00Z",
              end_date: "2024-06-12T17:00:00Z",
              notes: "Need for home renovation project"
            }, null, 2) }, void 0, false, {
              fileName: "app/routes/api-docs.tsx",
              lineNumber: 356,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 346,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 295,
          columnNumber: 46
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/api-docs.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-4", children: "API Examples" }, void 0, false, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 372,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Authentication" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 375,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/70", children: "POST /api/auth/login with email and password to get JWT token" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 376,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 374,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Get Items" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 381,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/70", children: "GET /api/items with Authorization header to retrieve all items" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 382,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 380,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Create Reservation" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 387,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/70", children: "POST /api/reservations/events to create new reservation events" }, void 0, false, {
            fileName: "app/routes/api-docs.tsx",
            lineNumber: 388,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/api-docs.tsx",
          lineNumber: 386,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/api-docs.tsx",
        lineNumber: 373,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/api-docs.tsx",
      lineNumber: 371,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/api-docs.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/api-docs.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(ApiDocs, "Okat6kbG3ZF/trBkdY8nKgizkOM=");
_c = ApiDocs;
var _c;
$RefreshReg$(_c, "ApiDocs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ApiDocs as default,
  meta
};
//# sourceMappingURL=/build/routes/api-docs-FPNXJ2H2.js.map
