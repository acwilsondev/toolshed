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

// app/routes/admin.items.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.items.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.items.tsx"
  );
  import.meta.hot.lastModified = "1749403021078.4922";
}
var meta = () => {
  return [{
    title: "Item Management - Admin - Toolshed"
  }, {
    name: "description",
    content: "Manage platform items and tools"
  }];
};
function AdminItems() {
  _s();
  const {
    items,
    userMap
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin", className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80", children: "\u2190 Back to Dashboard" }, void 0, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Item Management" }, void 0, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Review and manage all shared items and tools" }, void 0, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.items.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Items (",
          items.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", placeholder: "Search items...", className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "All Categories" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 77,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "power-tools", children: "Power Tools" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "hand-tools", children: "Hand Tools" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "garden", children: "Garden" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "automotive", children: "Automotive" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "home", children: "Home" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "specialty", children: "Specialty" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 83,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Item" }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 93,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Owner" }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 96,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Category" }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 99,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Availability" }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 102,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Location" }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 105,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: item.title }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 117,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500 max-w-xs truncate", children: item.description || "No description" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 118,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 116,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 115,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-900", children: userMap[item.owner_id] || "Unknown User" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 124,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
              "ID: ",
              item.owner_id.slice(-8)
            ] }, void 0, true, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 127,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 123,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-neighborhood-goldenrod text-white", children: item.category.replace("-", " ") }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 132,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 131,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.quantity_available > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: item.quantity_available > 0 ? `${item.quantity_available} available` : "Reserved" }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 137,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 136,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: item.location }, void 0, false, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 141,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/admin/items/${item.id}`, className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4", children: "View Details" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 145,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-neighborhood-rust hover:text-neighborhood-rust/80", children: "Remove" }, void 0, false, {
              fileName: "app/routes/admin.items.tsx",
              lineNumber: 148,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.items.tsx",
            lineNumber: 144,
            columnNumber: 21
          }, this)
        ] }, item.id, true, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 114,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.items.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.items.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Popular Tags" }, void 0, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: Array.from(new Set(items.flatMap((item) => item.tags))).slice(0, 20).map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 bg-neighborhood-mint/20 text-neighborhood-slate text-sm rounded-full", children: tag }, tag, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 162,
        columnNumber: 92
      }, this)) }, void 0, false, {
        fileName: "app/routes/admin.items.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.items.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.items.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.items.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(AdminItems, "GzLBQZ8LxULaybRjNhef4mWABb8=", false, function() {
  return [useLoaderData];
});
_c = AdminItems;
var _c;
$RefreshReg$(_c, "AdminItems");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminItems as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.items-OXIMWFAK.js.map
