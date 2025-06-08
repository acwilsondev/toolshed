import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-WMQ543TE.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-YP5XBNXY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin._index.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin._index.tsx"
  );
  import.meta.hot.lastModified = "1749402986223.5186";
}
var meta = () => {
  return [{
    title: "Admin Dashboard - Toolshed"
  }, {
    name: "description",
    content: "Admin interface for managing community resources"
  }];
};
function AdminDashboard() {
  _s();
  const {
    users,
    items,
    reservations,
    recentEvents,
    stats
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Admin Dashboard" }, void 0, false, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Manage community resources and monitor platform activity" }, void 0, false, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Users" }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalUsers }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: "Total registered users" }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Items" }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalItems }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: [
          stats.availableItems,
          " available now"
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-2", children: "Reservations" }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold text-neighborhood-spruce", children: stats.totalReservations }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: [
          stats.activeReservations,
          " active, ",
          stats.pendingReservations,
          " pending"
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Users" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/users", className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm", children: "View All \u2192" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: users.slice(0, 5).map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-neighborhood-slate", children: user.name }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 109,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: user.email }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: user.neighborhood }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 113,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/40", children: new Date(user.created_at).toLocaleDateString() }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this)
        ] }, user.id, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 107,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Items" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/items", className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm", children: "View All \u2192" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: items.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-neighborhood-slate", children: item.title }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 133,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: item.category }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 134,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-sm ${item.quantity_available > 0 ? "text-green-600" : "text-red-600"}`, children: item.quantity_available > 0 ? "Available" : "Reserved" }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 137,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/40", children: item.location }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 140,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this)
        ] }, item.id, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 131,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Reservations" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/reservations", className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm", children: "View All \u2192" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: reservations.slice(0, 5).map((reservation) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-neighborhood-slate", children: [
              "Reservation #",
              reservation.id.slice(-8)
            ] }, void 0, true, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 157,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: [
              "Item: ",
              reservation.item_id.slice(-8)
            ] }, void 0, true, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 158,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 156,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${reservation.status === "active" ? "bg-green-100 text-green-800" : reservation.status === "pending" ? "bg-yellow-100 text-yellow-800" : reservation.status === "approved" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`, children: reservation.status }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 161,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/40 mt-1", children: new Date(reservation.updated_at).toLocaleDateString() }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 164,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 160,
            columnNumber: 19
          }, this)
        ] }, reservation.id, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 155,
          columnNumber: 60
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "Recent Activity" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/events", className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm", children: "View All \u2192" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: recentEvents.slice(0, 5).map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-neighborhood-slate capitalize", children: event.event_type.replace("_", " ") }, void 0, false, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60", children: [
              "Reservation #",
              event.reservation_id.slice(-8)
            ] }, void 0, true, {
              fileName: "app/routes/admin._index.tsx",
              lineNumber: 186,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 182,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/40", children: new Date(event.timestamp).toLocaleString() }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 191,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 190,
            columnNumber: 19
          }, this)
        ] }, event.id, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 181,
          columnNumber: 54
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-4", children: "Quick Actions" }, void 0, false, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/users", className: "p-4 bg-neighborhood-spruce text-white rounded-lg hover:bg-neighborhood-spruce/90 transition-colors text-center", children: "Manage Users" }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/items", className: "p-4 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-center", children: "Manage Items" }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/reservations", className: "p-4 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/90 transition-colors text-center", children: "View Reservations" }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/events", className: "p-4 bg-neighborhood-rust text-white rounded-lg hover:bg-neighborhood-rust/90 transition-colors text-center", children: "Activity Log" }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 201,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin._index.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin._index.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_s(AdminDashboard, "OfXsuRZX5uyWfY100G+UDozpGKQ=", false, function() {
  return [useLoaderData];
});
_c = AdminDashboard;
var _c;
$RefreshReg$(_c, "AdminDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminDashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/admin._index-Z5UMRQ7A.js.map
