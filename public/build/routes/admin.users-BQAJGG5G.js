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

// app/routes/admin.users.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.users.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.users.tsx"
  );
  import.meta.hot.lastModified = "1749403001092.5073";
}
var meta = () => {
  return [{
    title: "User Management - Admin - Toolshed"
  }, {
    name: "description",
    content: "Manage platform users"
  }];
};
function AdminUsers() {
  _s();
  const {
    users
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin", className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80", children: "\u2190 Back to Dashboard" }, void 0, false, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "User Management" }, void 0, false, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate/80", children: "Review and manage all platform users" }, void 0, false, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.users.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: [
          "All Users (",
          users.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", placeholder: "Search users...", className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "All Neighborhoods" }, void 0, false, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 71,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "downtown", children: "Downtown" }, void 0, false, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 72,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "riverside", children: "Riverside" }, void 0, false, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "hillside", children: "Hillside" }, void 0, false, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 74,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "User" }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 84,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Neighborhood" }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Contact Method" }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 90,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Joined" }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 93,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 96,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: user.name }, void 0, false, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 105,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: user.email }, void 0, false, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 106,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 104,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 103,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-neighborhood-mint text-neighborhood-slate", children: user.neighborhood }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 110,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 109,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: user.contact_method }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 114,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(user.created_at).toLocaleDateString() }, void 0, false, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 117,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/admin/users/${user.id}`, className: "text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4", children: "View Details" }, void 0, false, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 121,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-neighborhood-rust hover:text-neighborhood-rust/80", children: "Suspend" }, void 0, false, {
              fileName: "app/routes/admin.users.tsx",
              lineNumber: 124,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.users.tsx",
            lineNumber: 120,
            columnNumber: 21
          }, this)
        ] }, user.id, true, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 102,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.users.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.users.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.users.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.users.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.users.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(AdminUsers, "MeW39Ze1niI63e7IRKhlLtgzewA=", false, function() {
  return [useLoaderData];
});
_c = AdminUsers;
var _c;
$RefreshReg$(_c, "AdminUsers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminUsers as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.users-BQAJGG5G.js.map
