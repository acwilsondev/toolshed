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
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.reservations.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.reservations.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.reservations.tsx"
  );
  import.meta.hot.lastModified = "1749403045597.4736";
}
var meta = () => {
  return [{
    title: "Reservation Management - Admin - Toolshed"
  }, {
    name: "description",
    content: "Manage platform reservations and bookings"
  }];
};
function AdminReservations() {
  _s();
  const {
    reservations,
    userMap,
    itemMap
  } = useLoaderData();
  const getStatusColor = (status) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin", className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80", children: "\u2190 Back to Dashboard" }, void 0, false, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Reservation Management" }, void 0, false, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Monitor and manage all platform reservations" }, void 0, false, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.reservations.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-8", children: ["pending", "approved", "active", "returned", "cancelled"].map((status) => {
      const count = reservations.filter((r) => r.status === status).length;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-4 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-neighborhood-spruce", children: count }, void 0, false, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/60 capitalize", children: status }, void 0, false, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this)
      ] }, status, true, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 94,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/admin.reservations.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Reservations (",
          reservations.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "All Statuses" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 109,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 110,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "approved", children: "Approved" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 111,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "active", children: "Active" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 112,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "returned", children: "Returned" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 113,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "cancelled", children: "Cancelled" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 114,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "rejected", children: "Rejected" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 115,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", placeholder: "Search reservations...", className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Reservation ID" }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Item" }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 129,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Requester" }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Owner" }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Dates" }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 125,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: reservations.map((reservation) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: [
              "#",
              reservation.id.slice(-8)
            ] }, void 0, true, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 152,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
              "Qty: ",
              reservation.quantity_requested
            ] }, void 0, true, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 155,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-900", children: itemMap[reservation.item_id] || "Unknown Item" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 160,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: reservation.item_id.slice(-8) }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 163,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 159,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-900", children: userMap[reservation.requester_id] || "Unknown User" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 168,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: reservation.requester_id.slice(-8) }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 171,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 167,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-900", children: userMap[reservation.owner_id] || "Unknown User" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 176,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: reservation.owner_id.slice(-8) }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 179,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 175,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(reservation.status)}`, children: reservation.status }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 184,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 183,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: reservation.start_date ? new Date(reservation.start_date).toLocaleDateString() : "TBD" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 189,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              "to ",
              reservation.end_date ? new Date(reservation.end_date).toLocaleDateString() : "TBD"
            ] }, void 0, true, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 192,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 188,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/admin/reservations/${reservation.id}`, className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4", children: "View Details" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 197,
              columnNumber: 23
            }, this),
            reservation.status === "pending" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Moderate" }, void 0, false, {
              fileName: "app/routes/admin.reservations.tsx",
              lineNumber: 200,
              columnNumber: 60
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.reservations.tsx",
            lineNumber: 196,
            columnNumber: 21
          }, this)
        ] }, reservation.id, true, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 150,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.reservations.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.reservations.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.reservations.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.reservations.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.reservations.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(AdminReservations, "OuviWKOpxeZWq3hOT1b047Umqco=", false, function() {
  return [useLoaderData];
});
_c = AdminReservations;
var _c;
$RefreshReg$(_c, "AdminReservations");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminReservations as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.reservations-BXDKHHH4.js.map
