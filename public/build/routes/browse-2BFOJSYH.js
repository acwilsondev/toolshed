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

// app/routes/browse.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/browse.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/browse.tsx"
  );
  import.meta.hot.lastModified = "1749399986138.7876";
}
var meta = () => {
  return [{
    title: "Browse Tools - Toolshed"
  }, {
    name: "description",
    content: "Browse available tools and resources in your community"
  }];
};
function Browse() {
  _s();
  const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
  const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
  const categories = [{
    id: "all",
    name: "All Categories"
  }, {
    id: "power-tools",
    name: "Power Tools"
  }, {
    id: "hand-tools",
    name: "Hand Tools"
  }, {
    id: "garden",
    name: "Garden & Outdoor"
  }, {
    id: "automotive",
    name: "Automotive"
  }, {
    id: "home",
    name: "Home & DIY"
  }, {
    id: "specialty",
    name: "Specialty Tools"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Browse Tools" }, void 0, false, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-600", children: "Discover tools and resources available in your community" }, void 0, false, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "search", className: "block text-sm font-medium text-gray-700 mb-2", children: "Search Tools" }, void 0, false, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, false, {
            fileName: "app/routes/browse.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/browse.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/browse.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "search", className: "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500", placeholder: "Search for tools...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }, void 0, false, {
            fileName: "app/routes/browse.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "category", className: "block text-sm font-medium text-gray-700 mb-2", children: "Category" }, void 0, false, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "category", className: "block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500", value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: category.id, children: category.name }, category.id, false, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 87,
          columnNumber: 43
        }, this)) }, void 0, false, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "mx-auto h-12 w-12 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }, void 0, false, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "No tools available" }, void 0, false, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Tools will appear here once they are shared by community members." }, void 0, false, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/share", className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "-ml-1 mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }, void 0, false, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/browse.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        "Share a Tool"
      ] }, void 0, true, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/browse.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/browse.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/browse.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(Browse, "RMPCX6XO77R8gqY8L0mc15lT0Yk=");
_c = Browse;
var _c;
$RefreshReg$(_c, "Browse");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Browse as default,
  meta
};
//# sourceMappingURL=/build/routes/browse-2BFOJSYH.js.map
