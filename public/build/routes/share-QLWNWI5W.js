import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-WMQ543TE.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-YP5XBNXY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/share.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/share.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/share.tsx"
  );
  import.meta.hot.lastModified = "1749400764903.2073";
}
var meta = () => {
  return [{
    title: "Share a Tool - Toolshed"
  }, {
    name: "description",
    content: "Share your tools and resources with the community"
  }];
};
function Share() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [selectedCategory, setSelectedCategory] = (0, import_react2.useState)("");
  const categories = [{
    id: "",
    name: "Select a category"
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
  const conditions = [{
    id: "excellent",
    name: "Excellent"
  }, {
    id: "good",
    name: "Good"
  }, {
    id: "fair",
    name: "Fair"
  }, {
    id: "needs-repair",
    name: "Needs Repair"
  }];
  const availabilityOptions = [{
    id: "available",
    name: "Available Now"
  }, {
    id: "limited",
    name: "Limited Availability"
  }, {
    id: "weekends",
    name: "Weekends Only"
  }, {
    id: "by-appointment",
    name: "By Appointment"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-neighborhood-slate mb-4", children: "Share a Tool" }, void 0, false, {
        fileName: "app/routes/share.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: "Add your tool to the community sharing network" }, void 0, false, {
        fileName: "app/routes/share.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/share.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm border border-neighborhood-mint/20 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block text-sm font-medium text-neighborhood-slate mb-2", children: "Tool Name *" }, void 0, false, {
          fileName: "app/routes/share.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.title ? "border-neighborhood-rust focus:ring-neighborhood-rust focus:border-neighborhood-rust" : "border-neighborhood-mint focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"}`, placeholder: "e.g., Power Drill, Lawnmower, Socket Set" }, void 0, false, {
          fileName: "app/routes/share.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this),
        actionData?.errors?.title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-neighborhood-rust", children: actionData.errors.title }, void 0, false, {
          fileName: "app/routes/share.tsx",
          lineNumber: 145,
          columnNumber: 43
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/share.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700 mb-2", children: "Description *" }, void 0, false, {
          fileName: "app/routes/share.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "description", name: "description", rows: 4, className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.description ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`, placeholder: "Describe the tool, its features, and any important details..." }, void 0, false, {
          fileName: "app/routes/share.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        actionData?.errors?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-red-600", children: actionData.errors.description }, void 0, false, {
          fileName: "app/routes/share.tsx",
          lineNumber: 154,
          columnNumber: 49
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/share.tsx",
        lineNumber: 149,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "category", className: "block text-sm font-medium text-gray-700 mb-2", children: "Category *" }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "category", name: "category", value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), className: `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${actionData?.errors?.category ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}`, children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: category.id, children: category.name }, category.id, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 164,
            columnNumber: 45
          }, this)) }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this),
          actionData?.errors?.category && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-red-600", children: actionData.errors.category }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 168,
            columnNumber: 48
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/share.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "condition", className: "block text-sm font-medium text-gray-700 mb-2", children: "Condition" }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "condition", name: "condition", className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500", children: conditions.map((condition) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: condition.id, children: condition.name }, condition.id, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 176,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/share.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/share.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "availability", className: "block text-sm font-medium text-gray-700 mb-2", children: "Availability" }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "availability", name: "availability", className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500", children: availabilityOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.id, children: option.name }, option.id, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 190,
            columnNumber: 52
          }, this)) }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/share.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "location", className: "block text-sm font-medium text-gray-700 mb-2", children: "General Location" }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "location", name: "location", className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500", placeholder: "e.g., Downtown, West Side, ZIP code" }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/share.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/share.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-gray-700 mb-2", children: "Preferred Contact Method" }, void 0, false, {
          fileName: "app/routes/share.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "contactMethod", name: "contactMethod", className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "message", children: "App Message" }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "email", children: "Email" }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "phone", children: "Phone" }, void 0, false, {
            fileName: "app/routes/share.tsx",
            lineNumber: 212,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/share.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/share.tsx",
        lineNumber: 205,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? "Sharing Tool..." : "Share Tool" }, void 0, false, {
        fileName: "app/routes/share.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/share.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/share.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/share.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/share.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
_s(Share, "/IJvwuBiPQ9J4ouJZ+z1QxafY5E=", false, function() {
  return [useActionData, useNavigation];
});
_c = Share;
var _c;
$RefreshReg$(_c, "Share");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Share as default,
  meta
};
//# sourceMappingURL=/build/routes/share-QLWNWI5W.js.map
