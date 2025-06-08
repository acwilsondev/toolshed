import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
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

// app/styles/global.css
var global_default = "/build/_assets/global-NVIY2XSO.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => {
  return [{
    rel: "stylesheet",
    href: global_default
  }, {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }, {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  }, {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
  }];
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Toolshed" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { style: {
      margin: 0,
      padding: 0,
      backgroundColor: "#f7fafc"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { style: {
        backgroundColor: "white",
        borderBottom: "1px solid #e2e8f0",
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
          color: "#2d3748"
        }, children: "Toolshed" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          gap: "1rem"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/login", style: {
            color: "#4a5568",
            textDecoration: "none"
          }, children: "Sign In" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/register", style: {
            backgroundColor: "#f6ad55",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            textDecoration: "none"
          }, children: "Join" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c = App;
function ErrorBoundary() {
  _s();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Error - Toolshed" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { style: {
        margin: 0,
        padding: 0,
        backgroundColor: "#f7fafc"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          textAlign: "center"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#1a202c",
            marginBottom: "1rem"
          }, children: error.status }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#2d3748",
            marginBottom: "1rem"
          }, children: error.statusText }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "#4a5568",
            marginBottom: "2rem"
          }, children: error.data || "Something went wrong. Please try again later." }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", style: {
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#f6ad55",
            color: "white",
            textDecoration: "none",
            borderRadius: "0.5rem",
            fontWeight: "600"
          }, children: "Go Home" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Error - Toolshed" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { style: {
      margin: 0,
      padding: 0,
      backgroundColor: "#f7fafc"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#1a202c",
          marginBottom: "1rem"
        }, children: "Something went wrong" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "#4a5568",
          marginBottom: "2rem"
        }, children: "We encountered an unexpected error. Please try again later." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", style: {
          display: "inline-flex",
          alignItems: "center",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#f6ad55",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontWeight: "600"
        }, children: "Go Home" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 161,
    columnNumber: 10
  }, this);
}
_s(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-XONX5ZQK.js.map
