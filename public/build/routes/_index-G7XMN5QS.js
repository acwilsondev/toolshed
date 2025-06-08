import {
  Link
} from "/build/_shared/chunk-OJIVT72O.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-YP5XBNXY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1749404822352.1274";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { style: {
      textAlign: "center",
      marginBottom: "3rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
        fontSize: "3rem",
        color: "#2d3748",
        marginBottom: "1rem"
      }, children: "Welcome to Toolshed" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        fontSize: "1.25rem",
        color: "#4a5568",
        maxWidth: "600px",
        margin: "0 auto"
      }, children: "Share tools, borrow equipment, and build stronger communities. Connect with neighbors to share resources and reduce waste." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      marginBottom: "3rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/browse", style: {
        backgroundColor: "#f6ad55",
        color: "white",
        padding: "0.75rem 1.5rem",
        borderRadius: "0.5rem",
        textDecoration: "none",
        fontWeight: "600"
      }, children: "Browse Tools" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", style: {
        backgroundColor: "#4fd1c7",
        color: "#2d3748",
        padding: "0.75rem 1.5rem",
        borderRadius: "0.5rem",
        textDecoration: "none",
        fontWeight: "600"
      }, children: "Join Community" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      marginBottom: "3rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "1rem"
        }, children: "Share Your Tools" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "#4a5568",
          marginBottom: "1rem"
        }, children: "List tools you're willing to lend to neighbors. From power drills to garden equipment, help your community access what they need." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/share", style: {
          color: "#f6ad55",
          textDecoration: "none",
          fontWeight: "600"
        }, children: "Start Sharing \u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "1rem"
        }, children: "Find What You Need" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "#4a5568",
          marginBottom: "1rem"
        }, children: "Browse available tools in your neighborhood. Save money and reduce waste by borrowing instead of buying." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/browse", style: {
          color: "#f6ad55",
          textDecoration: "none",
          fontWeight: "600"
        }, children: "Browse Tools \u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "#2d3748",
          marginBottom: "1rem"
        }, children: "Build Community" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "#4a5568",
          marginBottom: "1rem"
        }, children: "Connect with neighbors, build trust, and create a stronger, more sustainable community together." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", style: {
          color: "#f6ad55",
          textDecoration: "none",
          fontWeight: "600"
        }, children: "Get Started \u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      textAlign: "center",
      backgroundColor: "#f7fafc",
      padding: "2rem",
      borderRadius: "0.5rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
        fontSize: "1.5rem",
        color: "#2d3748",
        marginBottom: "1rem"
      }, children: "Ready to get started?" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        color: "#4a5568",
        marginBottom: "1.5rem"
      }, children: "Join our community and start sharing resources with your neighbors today." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 189,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        gap: "1rem",
        justifyContent: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", style: {
          backgroundColor: "#f6ad55",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: "600"
        }, children: "Create Account" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", style: {
          backgroundColor: "white",
          color: "#2d3748",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: "600",
          border: "1px solid #e2e8f0"
        }, children: "Sign In" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-G7XMN5QS.js.map
