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

// app/routes/register.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/register.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/register.tsx"
  );
  import.meta.hot.lastModified = "1749404285325.5344";
}
var meta = () => {
  return [{
    title: "Join Community - Toolshed"
  }];
};
function Register() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-3xl font-bold text-neighborhood-slate", children: "Join the Community" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-neighborhood-slate/70", children: "Start sharing tools with your neighbors" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.error }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 104,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-medium text-neighborhood-slate", children: "Full Name" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "name", name: "name", type: "text", autoComplete: "name", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", placeholder: "Enter your full name" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-neighborhood-slate", children: "Email address" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", placeholder: "Enter your email" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "neighborhood", className: "block text-sm font-medium text-neighborhood-slate", children: "Neighborhood" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "neighborhood", name: "neighborhood", type: "text", className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", placeholder: "e.g. Downtown, Riverside" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-neighborhood-slate", children: "Preferred Contact Method" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "contactMethod", name: "contactMethod", className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "message", children: "In-app messaging" }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "email", children: "Email" }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 135,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "phone", children: "Phone" }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 136,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/register.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-neighborhood-slate", children: "Password" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "new-password", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", placeholder: "Create a password" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-neighborhood-slate", children: "Confirm Password" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "confirmPassword", name: "confirmPassword", type: "password", autoComplete: "new-password", required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", placeholder: "Confirm your password" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "agree-terms", name: "agree-terms", type: "checkbox", required: true, className: "h-4 w-4 text-neighborhood-goldenrod focus:ring-neighborhood-goldenrod border-gray-300 rounded" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "agree-terms", className: "ml-2 block text-sm text-neighborhood-slate", children: [
            "I agree to the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/terms", className: "text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Terms of Service" }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this),
            " ",
            "and",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/privacy", className: "text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/routes/register.tsx",
              lineNumber: 162,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/register.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-goldenrod/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? "Creating account..." : "Create account" }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white text-neighborhood-slate/70", children: "Already have an account?" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "w-full flex justify-center py-2 px-4 border border-neighborhood-slate rounded-md shadow-sm text-sm font-medium text-neighborhood-slate bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod", children: "Sign in instead" }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/register.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(Register, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = Register;
var _c;
$RefreshReg$(_c, "Register");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Register as default,
  meta
};
//# sourceMappingURL=/build/routes/register-WCTBIYP2.js.map
