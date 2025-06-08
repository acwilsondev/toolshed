import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useRouteError
} from "/build/_shared/chunk-OJIVT72O.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-YP5XBNXY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Navigation.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navigation.tsx"
  );
  import.meta.hot.lastModified = "1749404392742.4531";
}
function Navigation() {
  _s();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const isAuthenticated = false;
  const publicNavigation = [{
    name: "Home",
    href: "/",
    current: location.pathname === "/"
  }, {
    name: "Browse",
    href: "/browse",
    current: location.pathname === "/browse"
  }];
  const authenticatedNavigation = [{
    name: "Home",
    href: "/",
    current: location.pathname === "/"
  }, {
    name: "Browse",
    href: "/browse",
    current: location.pathname === "/browse"
  }, {
    name: "Share",
    href: "/share",
    current: location.pathname === "/share"
  }, {
    name: "Profile",
    href: "/profile",
    current: location.pathname === "/profile"
  }];
  const navigation = isAuthenticated ? authenticatedNavigation : publicNavigation;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white shadow-sm border-b border-neighborhood-mint/20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-2xl font-bold text-neighborhood-spruce", children: "Toolshed" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `${item.current ? "border-neighborhood-goldenrod text-neighborhood-spruce" : "border-transparent text-neighborhood-slate hover:text-neighborhood-spruce hover:border-neighborhood-mint"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`, children: item.name }, item.name, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 69,
          columnNumber: 39
        }, this)) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-neighborhood-slate", children: "Welcome back!" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/logout", className: "px-4 py-2 text-sm font-medium text-neighborhood-slate hover:text-neighborhood-spruce", children: "Sign Out" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 77,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-sm font-medium text-neighborhood-slate hover:text-neighborhood-spruce", children: "Sign In" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", className: "px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-sm font-medium", children: "Join Community" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 82,
        columnNumber: 24
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex items-center justify-center p-2 rounded-md text-neighborhood-slate hover:text-neighborhood-spruce hover:bg-neighborhood-mint/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neighborhood-goldenrod", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        !isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "block h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 96,
          columnNumber: 36
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "block h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 99,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 98,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2 pb-3 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `${item.current ? "bg-neighborhood-mint/20 border-neighborhood-goldenrod text-neighborhood-spruce" : "border-transparent text-neighborhood-slate hover:text-neighborhood-spruce hover:bg-neighborhood-mint/10 hover:border-neighborhood-mint"} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`, onClick: () => setIsMobileMenuOpen(false), children: item.name }, item.name, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 109,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 107,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Navigation, "Vcf5d/+1iDxEx/cx5qDx82JQtSk=", false, function() {
  return [useLocation];
});
_c = Navigation;
var _c;
$RefreshReg$(_c, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Layout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Layout.tsx"
  );
  import.meta.hot.lastModified = "1749400038912.7488";
}
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navigation, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = Layout;
var _c2;
$RefreshReg$(_c2, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/global.css
var global_default = "/build/_assets/global-5I2LCT7K.css";

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var meta = () => {
  return [{
    title: "Toolshed - Community Resource Sharing"
  }, {
    name: "description",
    content: "Share tools and resources in your community"
  }];
};
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "h-full bg-neighborhood-cloud text-neighborhood-slate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_c3 = App;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Error - Toolshed" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "h-full bg-neighborhood-cloud text-neighborhood-slate", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-6xl font-bold text-gray-900 mb-4", children: error.status }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-700 mb-4", children: error.statusText }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-600 mb-8", children: error.data || "Something went wrong. Please try again later." }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/", className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: "Go Home" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 69,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Error - Toolshed" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "h-full bg-neighborhood-cloud text-neighborhood-slate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold text-neighborhood-slate mb-4", children: "Unexpected Error" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-neighborhood-slate mb-8", children: "An unexpected error occurred. Please try refreshing the page." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/", className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod", children: "Go Home" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c22 = ErrorBoundary;
var _c3;
var _c22;
$RefreshReg$(_c3, "App");
$RefreshReg$(_c22, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-YJVFQ77H.js.map
