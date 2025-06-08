var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/Navigation.tsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navigation() {
  let location = (0, import_react2.useLocation)(), [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react3.useState)(!1), navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    { name: "Browse", href: "/browse", current: location.pathname === "/browse" },
    { name: "Share", href: "/share", current: location.pathname === "/share" },
    { name: "Profile", href: "/profile", current: location.pathname === "/profile" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "bg-white shadow-sm border-b border-neighborhood-mint/20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: "text-2xl font-bold text-neighborhood-spruce", children: "Toolshed" }, void 0, !1, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_react2.Link,
          {
            to: item.href,
            className: `${item.current ? "border-neighborhood-goldenrod text-neighborhood-spruce" : "border-transparent text-neighborhood-slate hover:text-neighborhood-spruce hover:border-neighborhood-mint"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`,
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 27,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          type: "button",
          className: "inline-flex items-center justify-center p-2 rounded-md text-neighborhood-slate hover:text-neighborhood-spruce hover:bg-neighborhood-mint/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neighborhood-goldenrod",
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 49,
              columnNumber: 15
            }, this),
            isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "block h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "block h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 52,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 44,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pt-2 pb-3 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: item.href,
        className: `${item.current ? "bg-neighborhood-mint/20 border-neighborhood-goldenrod text-neighborhood-spruce" : "border-transparent text-neighborhood-slate hover:text-neighborhood-spruce hover:bg-neighborhood-mint/10 hover:border-neighborhood-mint"} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`,
        onClick: () => setIsMobileMenuOpen(!1),
        children: item.name
      },
      item.name,
      !1,
      {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 69,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/Layout.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigation, {}, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/styles/global.css
var global_default = "/build/_assets/global-53PQQSY7.css";

// app/root.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Toolshed - Community Resource Sharing" },
  { name: "description", content: "Share tools and resources in your community" }
], links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "h-full bg-neighborhood-cloud text-neighborhood-slate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react4.useRouteError)();
  return (0, import_react4.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: "Error - Toolshed" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "h-full bg-neighborhood-cloud text-neighborhood-slate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-6xl font-bold text-gray-900 mb-4", children: error.status }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-700 mb-4", children: error.statusText }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-600 mb-8", children: error.data || "Something went wrong. Please try again later." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "a",
          {
            href: "/",
            className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            children: "Go Home"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 81,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("title", { children: "Error - Toolshed" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "h-full bg-neighborhood-cloud text-neighborhood-slate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Unexpected Error" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-neighborhood-slate mb-8", children: "An unexpected error occurred. Please try refreshing the page." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "a",
          {
            href: "/",
            className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod",
            children: "Go Home"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 113,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

// app/routes/api.reservations.$id.events.tsx
var api_reservations_id_events_exports = {};
__export(api_reservations_id_events_exports, {
  loader: () => loader
});
var import_node = require("@remix-run/node");

// app/utils/db.server.ts
var import_uuid = require("uuid"), users = [], items = [], reservationEvents = [], sampleUsers = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Alice Johnson",
    email: "alice@neighborhood.local",
    neighborhood: "Downtown",
    contact_method: "message",
    created_at: /* @__PURE__ */ new Date("2024-01-15"),
    updated_at: /* @__PURE__ */ new Date("2024-01-15")
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Bob Smith",
    email: "bob@neighborhood.local",
    neighborhood: "Riverside",
    contact_method: "email",
    created_at: /* @__PURE__ */ new Date("2024-01-20"),
    updated_at: /* @__PURE__ */ new Date("2024-01-20")
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Carol Davis",
    email: "carol@neighborhood.local",
    neighborhood: "Hillside",
    contact_method: "phone",
    created_at: /* @__PURE__ */ new Date("2024-01-25"),
    updated_at: /* @__PURE__ */ new Date("2024-01-25")
  }
], sampleItems = [
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
    created_at: /* @__PURE__ */ new Date("2024-01-15")
  },
  {
    id: "650e8400-e29b-41d4-a716-446655440002",
    owner_id: "550e8400-e29b-41d4-a716-446655440002",
    title: "Garden Hose",
    description: "50ft expandable garden hose with spray nozzle",
    category: "garden",
    tags: ["watering", "garden", "outdoor"],
    location: "Riverside",
    photo_path: null,
    quantity_total: 1,
    quantity_available: 1,
    created_at: /* @__PURE__ */ new Date("2024-01-20")
  },
  {
    id: "650e8400-e29b-41d4-a716-446655440003",
    owner_id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Socket Set",
    description: "Complete metric and standard socket set",
    category: "automotive",
    tags: ["automotive", "repair", "mechanic"],
    location: "Downtown",
    photo_path: null,
    quantity_total: 1,
    quantity_available: 0,
    created_at: /* @__PURE__ */ new Date("2024-01-22")
  }
], sampleReservationEvents = [
  {
    id: "750e8400-e29b-41d4-a716-446655440001",
    reservation_id: "850e8400-e29b-41d4-a716-446655440001",
    event_type: ReservationEventType.REQUESTED,
    actor_id: "550e8400-e29b-41d4-a716-446655440002",
    timestamp: /* @__PURE__ */ new Date("2024-01-23T10:00:00Z"),
    quantity: 1,
    start_date: /* @__PURE__ */ new Date("2024-01-25T09:00:00Z"),
    end_date: /* @__PURE__ */ new Date("2024-01-27T17:00:00Z"),
    notes: "Need for weekend project"
  },
  {
    id: "750e8400-e29b-41d4-a716-446655440002",
    reservation_id: "850e8400-e29b-41d4-a716-446655440001",
    event_type: ReservationEventType.APPROVED,
    actor_id: "550e8400-e29b-41d4-a716-446655440001",
    timestamp: /* @__PURE__ */ new Date("2024-01-23T14:30:00Z")
  },
  {
    id: "750e8400-e29b-41d4-a716-446655440003",
    reservation_id: "850e8400-e29b-41d4-a716-446655440001",
    event_type: ReservationEventType.ACTIVATED,
    actor_id: "550e8400-e29b-41d4-a716-446655440002",
    timestamp: /* @__PURE__ */ new Date("2024-01-25T09:15:00Z"),
    notes: "Picked up successfully"
  }
];
function initializeDatabase() {
  users = [...sampleUsers], items = [...sampleItems], reservationEvents = [...sampleReservationEvents];
}
function computeReservationState(reservationId) {
  let events = reservationEvents.filter((e) => e.reservation_id === reservationId).sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  if (events.length === 0)
    return null;
  let firstEvent = events[0];
  if (firstEvent.event_type !== ReservationEventType.REQUESTED)
    return null;
  let state = {
    id: reservationId,
    item_id: firstEvent.quantity ? getItemIdFromFirstEvent(reservationId) : "",
    owner_id: "",
    requester_id: firstEvent.actor_id,
    status: ReservationStatus.PENDING,
    quantity_requested: firstEvent.quantity || 1,
    start_date: firstEvent.start_date || null,
    end_date: firstEvent.end_date || null,
    notes: firstEvent.notes || null,
    version: events.length,
    created_at: firstEvent.timestamp,
    updated_at: events[events.length - 1].timestamp
  }, item = items.find((i) => i.id === state.item_id);
  item && (state.owner_id = item.owner_id);
  for (let event of events) {
    switch (event.event_type) {
      case ReservationEventType.APPROVED:
        state.status = ReservationStatus.APPROVED;
        break;
      case ReservationEventType.REJECTED:
        state.status = ReservationStatus.REJECTED;
        break;
      case ReservationEventType.ACTIVATED:
        state.status = ReservationStatus.ACTIVE;
        break;
      case ReservationEventType.RETURNED:
        state.status = ReservationStatus.RETURNED;
        break;
      case ReservationEventType.CANCELLED:
        state.status = ReservationStatus.CANCELLED;
        break;
      case ReservationEventType.EXTENDED:
        event.end_date && (state.end_date = event.end_date);
        break;
      case ReservationEventType.NOTES_UPDATED:
        event.notes && (state.notes = event.notes);
        break;
    }
    state.updated_at = event.timestamp;
  }
  return state;
}
function getItemIdFromFirstEvent(reservationId) {
  return "650e8400-e29b-41d4-a716-446655440003";
}
async function getUsers(limit = 50, offset = 0) {
  return users.slice(offset, offset + limit);
}
async function getUserById(id) {
  return users.find((user) => user.id === id) || null;
}
async function getUserByEmail(email) {
  return users.find((user) => user.email === email) || null;
}
async function createUser(userData) {
  let newUser = {
    id: (0, import_uuid.v4)(),
    name: userData.name,
    email: userData.email,
    neighborhood: userData.neighborhood || "",
    contact_method: userData.contact_method || "message",
    created_at: /* @__PURE__ */ new Date(),
    updated_at: /* @__PURE__ */ new Date()
  };
  return users.push(newUser), newUser;
}
async function updateUser(id, userData) {
  let userIndex = users.findIndex((user) => user.id === id);
  return userIndex === -1 ? null : (users[userIndex] = {
    ...users[userIndex],
    ...userData,
    updated_at: /* @__PURE__ */ new Date()
  }, users[userIndex]);
}
async function deleteUser(id) {
  let userIndex = users.findIndex((user) => user.id === id);
  return userIndex === -1 ? !1 : (users.splice(userIndex, 1), !0);
}
async function getItems(limit = 50, offset = 0) {
  return items.slice(offset, offset + limit);
}
async function getItemById(id) {
  return items.find((item) => item.id === id) || null;
}
async function createItem(itemData) {
  let newItem = {
    id: (0, import_uuid.v4)(),
    owner_id: itemData.owner_id,
    title: itemData.title,
    description: itemData.description || null,
    category: itemData.category,
    tags: itemData.tags || [],
    location: itemData.location,
    photo_path: itemData.photo_path || null,
    quantity_total: itemData.quantity_total,
    quantity_available: itemData.quantity_total,
    created_at: /* @__PURE__ */ new Date()
  };
  return items.push(newItem), newItem;
}
async function updateItem(id, itemData) {
  let itemIndex = items.findIndex((item) => item.id === id);
  return itemIndex === -1 ? null : (items[itemIndex] = {
    ...items[itemIndex],
    ...itemData
  }, items[itemIndex]);
}
async function deleteItem(id) {
  let itemIndex = items.findIndex((item) => item.id === id);
  return itemIndex === -1 ? !1 : (items.splice(itemIndex, 1), !0);
}
async function getReservations(limit = 50, offset = 0, itemId, requesterId, status) {
  let states = [...new Set(reservationEvents.map((e) => e.reservation_id))].map((id) => computeReservationState(id)).filter((state) => state !== null);
  return itemId && (states = states.filter((s) => s.item_id === itemId)), requesterId && (states = states.filter((s) => s.requester_id === requesterId)), status && (states = states.filter((s) => s.status === status)), states.slice(offset, offset + limit);
}
async function getReservationById(id) {
  return computeReservationState(id);
}
async function getReservationEvents(limit = 50, offset = 0, reservationId, afterTimestamp) {
  let events = [...reservationEvents];
  return reservationId && (events = events.filter((e) => e.reservation_id === reservationId)), afterTimestamp && (events = events.filter((e) => e.timestamp > afterTimestamp)), events.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(offset, offset + limit);
}
async function createReservationEvent(eventData, actorId) {
  let reservationId = eventData.reservation_id || (0, import_uuid.v4)();
  if (eventData.event_type === ReservationEventType.REQUESTED) {
    if (!eventData.item_id)
      throw new Error("item_id is required for reservation requests");
    let item = await getItemById(eventData.item_id);
    if (!item)
      throw new Error("Item not found");
    if ((eventData.quantity || 1) > item.quantity_available)
      throw new Error("Insufficient quantity available");
  }
  let newEvent = {
    id: (0, import_uuid.v4)(),
    reservation_id: reservationId,
    event_type: eventData.event_type,
    actor_id: actorId,
    timestamp: /* @__PURE__ */ new Date(),
    quantity: eventData.quantity || null,
    start_date: eventData.start_date || null,
    end_date: eventData.end_date || null,
    notes: eventData.notes || null,
    expected_version: eventData.expected_version || null
  };
  if (reservationEvents.push(newEvent), eventData.event_type === ReservationEventType.ACTIVATED && eventData.item_id) {
    let item = items.find((i) => i.id === eventData.item_id);
    item && (item.quantity_available -= eventData.quantity || 1);
  } else if (eventData.event_type === ReservationEventType.RETURNED && eventData.item_id) {
    let item = items.find((i) => i.id === eventData.item_id);
    item && (item.quantity_available += eventData.quantity || 1);
  }
  return newEvent;
}
async function authenticateUser(email, password) {
  return await getUserByEmail(email);
}
function getHealthStatus() {
  return {
    status: "healthy",
    uptime: Math.floor(process.uptime())
  };
}
initializeDatabase();

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

// app/routes/api.items._index.tsx
var api_items_index_exports = {};
__export(api_items_index_exports, {
  action: () => action2,
  loader: () => loader5
});
var import_node5 = require("@remix-run/node");
function requireAuth5(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader5({ request }) {
  try {
    requireAuth5(request);
    let url = new URL(request.url), limit = parseInt(url.searchParams.get("limit") || "50"), offset = parseInt(url.searchParams.get("offset") || "0"), items2 = await getItems(limit, offset);
    return (0, import_node5.json)(items2);
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get items error:", error), (0, import_node5.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action2({ request }) {
  if (request.method !== "POST")
    return (0, import_node5.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    requireAuth5(request);
    let body = await request.json();
    if (!body.owner_id || !body.title || !body.category || !body.location || !body.quantity_total)
      return (0, import_node5.json)({
        error: "owner_id, title, category, location, and quantity_total are required"
      }, { status: 400 });
    let item = await createItem(body);
    return (0, import_node5.json)(item, { status: 201 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Create item error:", error), (0, import_node5.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.users._index.tsx
var api_users_index_exports = {};
__export(api_users_index_exports, {
  action: () => action3,
  loader: () => loader6
});
var import_node6 = require("@remix-run/node");
function requireAuth6(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader6({ request }) {
  try {
    requireAuth6(request);
    let url = new URL(request.url), limit = parseInt(url.searchParams.get("limit") || "50"), offset = parseInt(url.searchParams.get("offset") || "0"), users2 = await getUsers(limit, offset);
    return (0, import_node6.json)(users2);
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get users error:", error), (0, import_node6.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action3({ request }) {
  if (request.method !== "POST")
    return (0, import_node6.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    requireAuth6(request);
    let body = await request.json();
    if (!body.name || !body.email || !body.password)
      return (0, import_node6.json)({ error: "Name, email, and password are required" }, { status: 400 });
    let user = await createUser(body);
    return (0, import_node6.json)(user, { status: 201 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Create user error:", error), (0, import_node6.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.auth.logout.tsx
var api_auth_logout_exports = {};
__export(api_auth_logout_exports, {
  action: () => action4
});
var import_node7 = require("@remix-run/node");
async function action4({ request }) {
  if (request.method !== "POST")
    return (0, import_node7.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    let authHeader = request.headers.get("Authorization");
    return !authHeader || !authHeader.startsWith("Bearer ") ? (0, import_node7.json)({ error: "Invalid or missing token" }, { status: 401 }) : (0, import_node7.json)({ message: "Successfully logged out" }, { status: 200 });
  } catch (error) {
    return console.error("Logout error:", error), (0, import_node7.json)({ error: "Internal server error" }, { status: 500 });
  }
}

// app/routes/api.auth.login.tsx
var api_auth_login_exports = {};
__export(api_auth_login_exports, {
  action: () => action5
});
var import_node8 = require("@remix-run/node");
async function action5({ request }) {
  if (request.method !== "POST")
    return (0, import_node8.json)({ error: "Method not allowed" }, { status: 405 });
  try {
    let body = await request.json();
    if (!body.email || !body.password)
      return (0, import_node8.json)({ error: "Email and password are required" }, { status: 400 });
    let user = await authenticateUser(body.email, body.password);
    if (!user)
      return (0, import_node8.json)({ error: "Invalid credentials" }, { status: 401 });
    let response = { token: `mock-jwt-token-${user.id}` };
    return (0, import_node8.json)(response, { status: 200 });
  } catch (error) {
    return console.error("Login error:", error), (0, import_node8.json)({ error: "Internal server error" }, { status: 500 });
  }
}

// app/routes/api.items.$id.tsx
var api_items_id_exports = {};
__export(api_items_id_exports, {
  action: () => action6,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node");
function requireAuth7(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader7({ request, params }) {
  try {
    requireAuth7(request);
    let { id } = params;
    if (!id)
      return (0, import_node9.json)({ error: "Item ID is required" }, { status: 400 });
    let item = await getItemById(id);
    return item ? (0, import_node9.json)(item) : (0, import_node9.json)({ error: "Item not found" }, { status: 404 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get item error:", error), (0, import_node9.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action6({ request, params }) {
  try {
    requireAuth7(request);
    let { id } = params;
    if (!id)
      return (0, import_node9.json)({ error: "Item ID is required" }, { status: 400 });
    if (request.method === "PUT") {
      let body = await request.json(), item = await updateItem(id, body);
      return item ? (0, import_node9.json)(item) : (0, import_node9.json)({ error: "Item not found" }, { status: 404 });
    } else
      return request.method === "DELETE" ? await deleteItem(id) ? new Response(null, { status: 204 }) : (0, import_node9.json)({ error: "Item not found" }, { status: 404 }) : (0, import_node9.json)({ error: "Method not allowed" }, { status: 405 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Item action error:", error), (0, import_node9.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.users.$id.tsx
var api_users_id_exports = {};
__export(api_users_id_exports, {
  action: () => action7,
  loader: () => loader8
});
var import_node10 = require("@remix-run/node");
function requireAuth8(request) {
  let authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new Response("Unauthorized", { status: 401 });
  return authHeader.replace("Bearer ", "");
}
async function loader8({ request, params }) {
  try {
    requireAuth8(request);
    let { id } = params;
    if (!id)
      return (0, import_node10.json)({ error: "User ID is required" }, { status: 400 });
    let user = await getUserById(id);
    return user ? (0, import_node10.json)(user) : (0, import_node10.json)({ error: "User not found" }, { status: 404 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("Get user error:", error), (0, import_node10.json)({ error: "Internal server error" }, { status: 500 }));
  }
}
async function action7({ request, params }) {
  try {
    requireAuth8(request);
    let { id } = params;
    if (!id)
      return (0, import_node10.json)({ error: "User ID is required" }, { status: 400 });
    if (request.method === "PUT") {
      let body = await request.json(), user = await updateUser(id, body);
      return user ? (0, import_node10.json)(user) : (0, import_node10.json)({ error: "User not found" }, { status: 404 });
    } else
      return request.method === "DELETE" ? await deleteUser(id) ? new Response(null, { status: 204 }) : (0, import_node10.json)({ error: "User not found" }, { status: 404 }) : (0, import_node10.json)({ error: "Method not allowed" }, { status: 405 });
  } catch (error) {
    return error instanceof Response ? error : (console.error("User action error:", error), (0, import_node10.json)({ error: "Internal server error" }, { status: 500 }));
  }
}

// app/routes/api.health.tsx
var api_health_exports = {};
__export(api_health_exports, {
  loader: () => loader9
});
var import_node11 = require("@remix-run/node");
async function loader9({ request }) {
  try {
    let health = getHealthStatus();
    return (0, import_node11.json)(health);
  } catch (error) {
    return console.error("Health check error:", error), (0, import_node11.json)({
      status: "unhealthy",
      error: "Internal server error"
    }, { status: 500 });
  }
}

// app/routes/tool.$id.tsx
var tool_id_exports = {};
__export(tool_id_exports, {
  default: () => ToolDetail,
  loader: () => loader10,
  meta: () => meta2
});
var import_node12 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Tool Details - Toolshed" },
  { name: "description", content: "View tool details and contact the owner" }
];
async function loader10({ params }) {
  let toolId = params.id;
  if (!toolId)
    throw new Response("Tool not found", { status: 404 });
  return (0, import_node12.json)({ toolId });
}
function ToolDetail() {
  let { toolId } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-center py-12 px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "svg",
      {
        className: "mx-auto h-12 w-12 text-gray-400",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "Tool not found" }, void 0, !1, {
      fileName: "app/routes/tool.$id.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: [
      'Tool with ID "',
      toolId,
      '" could not be found. This feature will be available once the database schema is integrated.'
    ] }, void 0, !0, {
      fileName: "app/routes/tool.$id.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "a",
      {
        href: "/browse",
        className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { className: "-ml-1 mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 19l-7-7m0 0l7-7m-7 7h18" }, void 0, !1, {
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
  default: () => Profile,
  meta: () => meta3
});
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "Profile - Toolshed" },
  { name: "description", content: "Manage your profile and shared tools" }
];
function Profile() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Profile" }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg text-gray-600", children: "Manage your account and shared tools" }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "lg:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Profile Information" }, void 0, !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center py-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "w-8 h-8 text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 29,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 28,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm text-gray-500", children: "User profile will be available once authentication is implemented." }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "My Shared Tools" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "svg",
              {
                className: "mx-auto h-12 w-12 text-gray-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 45,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "No shared tools" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Tools you share will appear here." }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "a",
              {
                href: "/share",
                className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "-ml-1 mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, !1, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 68,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 67,
                    columnNumber: 19
                  }, this),
                  "Share a Tool"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 63,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Activity" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "svg",
              {
                className: "mx-auto h-12 w-12 text-gray-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/profile.tsx",
                lineNumber: 80,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "No recent activity" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Your borrowing and lending activity will appear here." }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative bg-white overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sm:text-center lg:text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-4xl tracking-tight font-extrabold text-neighborhood-slate sm:text-5xl md:text-6xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "block xl:inline", children: "Share tools with" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 16,
            columnNumber: 19
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "block text-neighborhood-spruce xl:inline", children: "your community" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 17,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-3 text-base text-neighborhood-slate sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0", children: "Toolshed connects neighbors to share tools, equipment, and resources. Reduce waste, save money, and build stronger communities." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-md shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react6.Link,
            {
              to: "/browse",
              className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover md:py-4 md:text-lg md:px-10",
              children: "Browse Tools"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 25,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 24,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-3 sm:mt-0 sm:ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react6.Link,
            {
              to: "/share",
              className: "w-full flex items-center justify-center px-8 py-3 border border-neighborhood-spruce text-base font-medium rounded-md text-neighborhood-spruce bg-neighborhood-mint hover:bg-neighborhood-mint/80 md:py-4 md:text-lg md:px-10",
              children: "Share a Tool"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 33,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 32,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 14,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-56 w-full bg-gradient-to-r from-neighborhood-spruce to-neighborhood-mint sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-32 h-32 text-white opacity-75", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { fillRule: "evenodd", d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z", clipRule: "evenodd" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "py-12 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "lg:text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-base text-neighborhood-goldenrod font-semibold tracking-wide uppercase", children: "Features" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neighborhood-slate sm:text-4xl", children: "Better tool sharing" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-4 max-w-2xl text-xl text-neighborhood-slate lg:mx-auto", children: "Everything you need to share and borrow tools safely in your community." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-neighborhood-goldenrod text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 72,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-16 text-lg leading-6 font-medium text-neighborhood-slate", children: "Easy Discovery" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-2 ml-16 text-base text-neighborhood-slate", children: "Find the tools you need quickly with smart search and filtering options." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-neighborhood-spruce text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 84,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 83,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-16 text-lg leading-6 font-medium text-neighborhood-slate", children: "Community Driven" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-2 ml-16 text-base text-neighborhood-slate", children: "Connect with neighbors and build stronger community relationships." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-neighborhood-mint text-neighborhood-spruce", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 96,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 95,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-16 text-lg leading-6 font-medium text-neighborhood-slate", children: "Safe & Secure" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-2 ml-16 text-base text-neighborhood-slate", children: "Built-in safety features and user verification for worry-free sharing." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-neighborhood-rust text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 108,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ml-16 text-lg leading-6 font-medium text-neighborhood-slate", children: "Eco-Friendly" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-2 ml-16 text-base text-neighborhood-slate", children: "Reduce waste and environmental impact by sharing instead of buying." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/browse.tsx
var browse_exports = {};
__export(browse_exports, {
  default: () => Browse,
  meta: () => meta4
});
var import_react7 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta4 = () => [
  { title: "Browse Tools - Toolshed" },
  { name: "description", content: "Browse available tools and resources in your community" }
];
function Browse() {
  let [searchTerm, setSearchTerm] = (0, import_react7.useState)(""), [selectedCategory, setSelectedCategory] = (0, import_react7.useState)("all");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-3xl font-bold text-neighborhood-slate mb-4", children: "Browse Tools" }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: "Discover tools and resources available in your community" }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-neighborhood-mint/20 p-6 mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "search", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Search Tools" }, void 0, !1, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { className: "h-5 w-5 text-neighborhood-slate", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "category", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Category" }, void 0, !1, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            ].map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: category.id, children: category.name }, category.id, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-neighborhood-slate", children: "No tools available" }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-1 text-sm text-neighborhood-slate", children: "Tools will appear here once they are shared by community members." }, void 0, !1, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "a",
        {
          href: "/share",
          className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { className: "-ml-1 mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, !1, {
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

// app/routes/share.tsx
var share_exports = {};
__export(share_exports, {
  action: () => action8,
  default: () => Share,
  meta: () => meta5
});
var import_node13 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_react9 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta5 = () => [
  { title: "Share a Tool - Toolshed" },
  { name: "description", content: "Share your tools and resources with the community" }
];
async function action8({ request }) {
  let formData = await request.formData(), title = formData.get("title"), description = formData.get("description"), category = formData.get("category"), errors = {};
  return (!title || typeof title != "string" || title.trim().length === 0) && (errors.title = "Tool name is required"), (!description || typeof description != "string" || description.trim().length === 0) && (errors.description = "Description is required"), (!category || typeof category != "string" || category === "") && (errors.category = "Category is required"), Object.keys(errors).length > 0 ? (0, import_node13.json)({ errors, success: !1 }, { status: 400 }) : (console.log("Tool sharing data:", {
    title,
    description,
    category,
    condition: formData.get("condition"),
    availability: formData.get("availability"),
    location: formData.get("location"),
    contactMethod: formData.get("contactMethod")
  }), (0, import_node13.redirect)("/browse?shared=true"));
}
function Share() {
  let actionData = (0, import_react8.useActionData)(), isSubmitting = (0, import_react8.useNavigation)().state === "submitting", [selectedCategory, setSelectedCategory] = (0, import_react9.useState)(""), categories = [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-3xl font-bold text-neighborhood-slate mb-4", children: "Share a Tool" }, void 0, !1, {
        fileName: "app/routes/share.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: "Add your tool to the community sharing network" }, void 0, !1, {
        fileName: "app/routes/share.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/share.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-neighborhood-mint/20 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "title", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Tool Name *" }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        actionData?.errors?.title && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-1 text-sm text-neighborhood-rust", children: actionData.errors.title }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/share.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700 mb-2", children: "Description *" }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        actionData?.errors?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-1 text-sm text-red-600", children: actionData.errors.description }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/share.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "category", className: "block text-sm font-medium text-gray-700 mb-2", children: "Category *" }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "select",
            {
              id: "category",
              name: "category",
              value: selectedCategory,
              onChange: (e) => setSelectedCategory(e.target.value),
              className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.category ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`,
              children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: category.id, children: category.name }, category.id, !1, {
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
          actionData?.errors?.category && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-1 text-sm text-red-600", children: actionData.errors.category }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/share.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "condition", className: "block text-sm font-medium text-gray-700 mb-2", children: "Condition" }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "select",
            {
              id: "condition",
              name: "condition",
              className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
              children: conditions.map((condition) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: condition.id, children: condition.name }, condition.id, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "availability", className: "block text-sm font-medium text-gray-700 mb-2", children: "Availability" }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "select",
            {
              id: "availability",
              name: "availability",
              className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
              children: availabilityOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: option.id, children: option.name }, option.id, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "location", className: "block text-sm font-medium text-gray-700 mb-2", children: "General Location" }, void 0, !1, {
            fileName: "app/routes/share.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-gray-700 mb-2", children: "Preferred Contact Method" }, void 0, !1, {
          fileName: "app/routes/share.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "select",
          {
            id: "contactMethod",
            name: "contactMethod",
            className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "message", children: "App Message" }, void 0, !1, {
                fileName: "app/routes/share.tsx",
                lineNumber: 227,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "email", children: "Email" }, void 0, !1, {
                fileName: "app/routes/share.tsx",
                lineNumber: 228,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "phone", children: "Phone" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
var assets_manifest_default = { entry: { module: "/build/entry.client-566ZT4RX.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-WMQ543TE.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-YP5XBNXY.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FAKOS2XW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-KFMCZYTN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.login": { id: "routes/api.auth.login", parentId: "root", path: "api/auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.login-6245K4LH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.logout": { id: "routes/api.auth.logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.logout-WCJWBYDB.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.health": { id: "routes/api.health", parentId: "root", path: "api/health", index: void 0, caseSensitive: void 0, module: "/build/routes/api.health-67CCR6UT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.items.$id": { id: "routes/api.items.$id", parentId: "root", path: "api/items/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.items.$id-6J4GDWCE.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.items._index": { id: "routes/api.items._index", parentId: "root", path: "api/items", index: !0, caseSensitive: void 0, module: "/build/routes/api.items._index-VBYNWXIZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.$id": { id: "routes/api.reservations.$id", parentId: "root", path: "api/reservations/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.$id-BIWLWCSO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.$id.events": { id: "routes/api.reservations.$id.events", parentId: "routes/api.reservations.$id", path: "events", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.$id.events-DGUN4OAS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations._index": { id: "routes/api.reservations._index", parentId: "root", path: "api/reservations", index: !0, caseSensitive: void 0, module: "/build/routes/api.reservations._index-MTBUTTCX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.reservations.events": { id: "routes/api.reservations.events", parentId: "root", path: "api/reservations/events", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reservations.events-LORNGS5M.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.users.$id": { id: "routes/api.users.$id", parentId: "root", path: "api/users/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.users.$id-KTAVK6JS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.users._index": { id: "routes/api.users._index", parentId: "root", path: "api/users", index: !0, caseSensitive: void 0, module: "/build/routes/api.users._index-SHTHNUT6.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/browse": { id: "routes/browse", parentId: "root", path: "browse", index: void 0, caseSensitive: void 0, module: "/build/routes/browse-LBOL2MDC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-GMSVKGW2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/share": { id: "routes/share", parentId: "root", path: "share", index: void 0, caseSensitive: void 0, module: "/build/routes/share-QLWNWI5W.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tool.$id": { id: "routes/tool.$id", parentId: "root", path: "tool/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/tool.$id-KI35JFJD.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "4a9b3725", hmr: { runtime: "/build/_shared/chunk-YP5XBNXY.js", timestamp: 1749402845591 }, url: "/build/manifest-4A9B3725.js" };

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
  "routes/api.health": {
    id: "routes/api.health",
    parentId: "root",
    path: "api/health",
    index: void 0,
    caseSensitive: void 0,
    module: api_health_exports
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
