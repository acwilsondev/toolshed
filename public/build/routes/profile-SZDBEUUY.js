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
  useLoaderData,
  useNavigation,
  useSearchParams
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

// app/routes/profile.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/profile.tsx"
  );
  import.meta.hot.lastModified = "1749404333089.4983";
}
var meta = () => {
  return [{
    title: "Profile - Toolshed"
  }];
};
function Profile() {
  _s();
  const {
    user,
    userItems
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const [isEditing, setIsEditing] = (0, import_react.useState)(false);
  const isUpdating = navigation.state === "submitting" && navigation.formData?.get("intent") === "updateProfile";
  const isWelcome = searchParams.get("welcome") === "true";
  const isNewUser = searchParams.get("new") === "true";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-neighborhood-cloud", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    isWelcome && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8 bg-neighborhood-mint/10 border border-neighborhood-mint/20 rounded-lg p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate mb-2", children: isNewUser ? "Welcome to Toolshed!" : "Welcome back!" }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/70", children: isNewUser ? "Your account has been created successfully. Start by browsing available tools or sharing your own." : "You're successfully signed in. Explore your neighborhood's shared resources." }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 116,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-neighborhood-slate", children: "My Profile" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsEditing(!isEditing), className: "px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors", children: isEditing ? "Cancel" : "Edit Profile" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 131,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6 bg-green-50 border border-green-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-600 text-sm", children: actionData.success }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 136,
            columnNumber: 39
          }, this),
          actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6 bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm", children: actionData.error }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 140,
            columnNumber: 37
          }, this),
          isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "updateProfile" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-medium text-neighborhood-slate", children: "Full Name" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 148,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "name", name: "name", type: "text", defaultValue: user.name, required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 151,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-neighborhood-slate", children: "Email Address" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 155,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", value: user.email, disabled: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 158,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-neighborhood-slate/60 mt-1", children: "Email cannot be changed" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 159,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "neighborhood", className: "block text-sm font-medium text-neighborhood-slate", children: "Neighborhood" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 163,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "neighborhood", name: "neighborhood", type: "text", defaultValue: user.neighborhood, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 166,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "contactMethod", className: "block text-sm font-medium text-neighborhood-slate", children: "Preferred Contact Method" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 170,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "contactMethod", name: "contactMethod", defaultValue: user.contactMethod, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "message", children: "In-app messaging" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 174,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "email", children: "Email" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 175,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "phone", children: "Phone" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 176,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 173,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isUpdating, className: "px-6 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors disabled:opacity-50", children: isUpdating ? "Saving..." : "Save Changes" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 181,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setIsEditing(false), className: "px-6 py-2 bg-gray-200 text-neighborhood-slate rounded-lg hover:bg-gray-300 transition-colors", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 184,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 144,
            columnNumber: 28
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Name" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 190,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: user.name }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 191,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 189,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Email" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 194,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: user.email }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 195,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 193,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Neighborhood" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 198,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: user.neighborhood || "Not specified" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 199,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 197,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Contact Preference" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 202,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate capitalize", children: user.contactMethod }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 203,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 201,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-neighborhood-slate/70", children: "Member Since" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 206,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-neighborhood-slate", children: new Date(user.createdAt).toLocaleDateString() }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 207,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 205,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 188,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-neighborhood-slate", children: "My Shared Items" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 217,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/share", className: "px-4 py-2 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/80 transition-colors", children: "Add New Item" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 218,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 216,
            columnNumber: 15
          }, this),
          userItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-neighborhood-slate", children: item.title }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 225,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neighborhood-slate/70 mt-1", children: item.description }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 226,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-neighborhood-mint/20 text-neighborhood-slate px-2 py-1 rounded", children: item.category }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 228,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-neighborhood-slate/60", children: [
                "Available: ",
                item.quantityAvailable,
                "/",
                item.quantityTotal
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 231,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 227,
              columnNumber: 23
            }, this)
          ] }, item.id, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 224,
            columnNumber: 42
          }, this)) }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 223,
            columnNumber: 39
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neighborhood-slate/70 mb-4", children: "You haven't shared any items yet." }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/share", className: "inline-flex items-center px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors", children: "Share Your First Item" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 238,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 236,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 215,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Quick Actions" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 248,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/browse", className: "block w-full px-4 py-3 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-center", children: "Browse Items" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 250,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/share", className: "block w-full px-4 py-3 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/80 transition-colors text-center", children: "Share an Item" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 253,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/reservations", className: "block w-full px-4 py-3 bg-white border border-neighborhood-slate text-neighborhood-slate rounded-lg hover:bg-gray-50 transition-colors text-center", children: "My Reservations" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 256,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Community Stats" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 263,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-neighborhood-slate/70", children: "Items Shared" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 266,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-neighborhood-slate", children: userItems.length }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 267,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 265,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-neighborhood-slate/70", children: "Trust Score" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 270,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-neighborhood-goldenrod", children: "\u2605\u2605\u2605\u2605\u2606" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 271,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 269,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-neighborhood-slate/70", children: "Exchanges" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 274,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-neighborhood-slate", children: "12" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 275,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 273,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 264,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 262,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neighborhood-slate mb-4", children: "Account" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "block w-full px-4 py-2 text-left text-neighborhood-slate hover:bg-gray-50 rounded", children: "Notification Settings" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 283,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "block w-full px-4 py-2 text-left text-neighborhood-slate hover:bg-gray-50 rounded", children: "Privacy Settings" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 286,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/logout", className: "block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded", children: "Sign Out" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 289,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 280,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 246,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 114,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 113,
    columnNumber: 10
  }, this);
}
_s(Profile, "TuQSHr62/W+vE8fy9P8W/8D1PFU=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useSearchParams];
});
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default,
  meta
};
//# sourceMappingURL=/build/routes/profile-SZDBEUUY.js.map
