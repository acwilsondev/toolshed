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
  import.meta.hot.lastModified = "1749405064569.944";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.6"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { style: {
      backgroundColor: "#fff",
      borderBottom: "1px solid #e0e0e0",
      padding: "1rem 0"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
        margin: 0,
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#333"
      }, children: "Toolshed" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", style: {
          color: "#666",
          textDecoration: "none"
        }, children: "Sign In" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", style: {
          backgroundColor: "#007bff",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          textDecoration: "none"
        }, children: "Join" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
      padding: "3rem 2rem",
      maxWidth: "1200px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { style: {
        textAlign: "center",
        marginBottom: "3rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
          fontSize: "2.5rem",
          color: "#333",
          marginBottom: "1rem"
        }, children: "Welcome to Toolshed" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          fontSize: "1.2rem",
          color: "#666",
          maxWidth: "600px",
          margin: "0 auto"
        }, children: "Share tools, borrow equipment, and build stronger communities. Connect with neighbors to share resources and reduce waste." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#f8f9fa",
          padding: "2rem",
          borderRadius: "8px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#333",
            marginBottom: "1rem"
          }, children: "Share Your Tools" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "#666",
            marginBottom: "1rem"
          }, children: "List tools you're willing to lend to neighbors. From power drills to garden equipment, help your community access what they need." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/share", style: {
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "600"
          }, children: "Start Sharing \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#f8f9fa",
          padding: "2rem",
          borderRadius: "8px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#333",
            marginBottom: "1rem"
          }, children: "Find What You Need" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "#666",
            marginBottom: "1rem"
          }, children: "Browse available tools in your neighborhood. Save money and reduce waste by borrowing instead of buying." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/browse", style: {
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "600"
          }, children: "Browse Tools \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          backgroundColor: "#f8f9fa",
          padding: "2rem",
          borderRadius: "8px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#333",
            marginBottom: "1rem"
          }, children: "Build Community" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 159,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "#666",
            marginBottom: "1rem"
          }, children: "Connect with neighbors, build trust, and create a stronger, more sustainable community together." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 167,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", style: {
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "600"
          }, children: "Get Started \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 173,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        textAlign: "center",
        backgroundColor: "#f0f8ff",
        padding: "2rem",
        borderRadius: "8px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          fontSize: "1.5rem",
          color: "#333",
          marginBottom: "1rem"
        }, children: "Ready to get started?" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "#666",
          marginBottom: "1.5rem"
        }, children: "Join our community and start sharing resources with your neighbors today." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          gap: "1rem",
          justifyContent: "center"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", style: {
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "600"
          }, children: "Create Account" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 207,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", style: {
            backgroundColor: "white",
            color: "#333",
            padding: "0.75rem 1.5rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "600",
            border: "1px solid #ddd"
          }, children: "Sign In" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 217,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
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
//# sourceMappingURL=/build/routes/_index-O6G7J3WL.js.map
