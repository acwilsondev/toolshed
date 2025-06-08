import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link,
  useActionData,
  useNavigation
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

// app/routes/login.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1749404255824.5566";
}
var meta = () => {
  return [{
    title: "Sign In - Toolshed"
  }];
};
function Login() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-3xl font-bold text-neighborhood-slate", children: "Sign in to Toolshed" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-neighborhood-slate/70", children: "Welcome back to your community" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.error }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-neighborhood-slate", children: "Email address" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", placeholder: "Enter your email" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-neighborhood-slate", children: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", placeholder: "Enter your password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 text-neighborhood-goldenrod focus:ring-neighborhood-goldenrod border-gray-300 rounded" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 103,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-neighborhood-slate", children: "Remember me" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 104,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/forgot-password", className: "font-medium text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Forgot your password?" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-goldenrod/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? "Signing in..." : "Sign in" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white text-neighborhood-slate/70", children: "New to Toolshed?" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", className: "w-full flex justify-center py-2 px-4 border border-neighborhood-slate rounded-md shadow-sm text-sm font-medium text-neighborhood-slate bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod", children: "Create an account" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/60", children: "Demo account: alice@neighborhood.local / password123" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(Login, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/login-W2P5FXXE.js.map
