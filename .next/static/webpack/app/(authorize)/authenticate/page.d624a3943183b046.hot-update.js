"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(authorize)/authenticate/page",{

/***/ "(app-pages-browser)/./app/(authorize)/authenticate/page.tsx":
/*!***********************************************!*\
  !*** ./app/(authorize)/authenticate/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./context/AppContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Authentication = ()=>{\n    _s();\n    const { appData, setAppData } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const code = searchParams.get(\"code\");\n    const AuthenticateWithPasscode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        if (code) {\n            try {\n                const response = await fetch(\"https://api.stg.withrotate.com/api/auth/oauth_token?code=\".concat(code), {\n                    method: \"GET\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    cache: \"no-store\"\n                });\n                const jsonCredentials = await response.json();\n                if (jsonCredentials) {}\n            } catch (error) {\n                console.error(error);\n            }\n        }\n    }, [\n        code\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _appData_user;\n        if (appData === null || appData === void 0 ? void 0 : (_appData_user = appData.user) === null || _appData_user === void 0 ? void 0 : _appData_user.name) {\n            push(\"/dashboard\");\n        } else {\n            AuthenticateWithPasscode();\n        }\n    }, [\n        appData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        w: \"full\",\n        h: \"calc(100vh)\",\n        direction: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n            children: \"Please Wait while we authorize user\"\n        }, void 0, false, {\n            fileName: \"/Users/henry/Documents/Dev/Rotate/rotate-home-assignment/app/(authorize)/authenticate/page.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/henry/Documents/Dev/Rotate/rotate-home-assignment/app/(authorize)/authenticate/page.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Authentication, \"UJrrFpO3X3MG7Rku4DvwdWS70i4=\", false, function() {\n    return [\n        _context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useAppContext,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = Authentication;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authentication);\nvar _c;\n$RefreshReg$(_c, \"Authentication\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYXV0aG9yaXplKS9hdXRoZW50aWNhdGUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNxRDtBQUNNO0FBQ2Q7QUFDTTtBQUluRCxNQUFNTyxpQkFBaUI7O0lBQ3JCLE1BQU0sRUFBQ0MsT0FBTyxFQUFFQyxVQUFVLEVBQUMsR0FBR0gsa0VBQWFBO0lBQzNDLE1BQU0sRUFBQ0ksSUFBSSxFQUFDLEdBQUdSLDBEQUFTQTtJQUV4QixNQUFNUyxlQUFlUixnRUFBZUE7SUFFcEMsTUFBTVMsT0FBT0QsYUFBYUUsR0FBRyxDQUFDO0lBRTlCLE1BQU1DLDJCQUEyQlYsa0RBQVdBLENBQUM7UUFDM0MsSUFBSVEsTUFBTTtZQUNSLElBQUk7Z0JBQ0YsTUFBTUcsV0FBVyxNQUFNQyxNQUFNLDREQUFpRSxPQUFMSixPQUFRO29CQUMvRkssUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxPQUFPO2dCQUNUO2dCQUVBLE1BQU1DLGtCQUFrQixNQUFNTCxTQUFTTSxJQUFJO2dCQUUzQyxJQUFHRCxpQkFBZ0IsQ0FFbkI7WUFDRixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDaEI7UUFDRjtJQUNGLEdBQUc7UUFBQ1Y7S0FBSztJQUVUUCxnREFBU0EsQ0FBQztZQUNKRztRQUFKLElBQUlBLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNnQixJQUFJLGNBQWJoQixvQ0FBQUEsY0FBZWlCLElBQUksRUFBRTtZQUN2QmYsS0FBSztRQUNQLE9BQU87WUFDTEk7UUFDRjtJQUNGLEdBQUc7UUFBQ047S0FBUTtJQUVaLHFCQUNFLDhEQUFDUixrREFBSUE7UUFBQzBCLEdBQUU7UUFBT0MsR0FBRTtRQUFjQyxXQUFVO1FBQVNDLGdCQUFlO1FBQVNDLFlBQVc7a0JBQ25GLDRFQUFDN0Isa0RBQUlBO3NCQUFDOzs7Ozs7Ozs7OztBQUdaO0dBM0NNTTs7UUFDMEJELDhEQUFhQTtRQUM1Qkosc0RBQVNBO1FBRUhDLDREQUFlQTs7O0tBSmhDSTtBQTZDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGF1dGhvcml6ZSkvYXV0aGVudGljYXRlL3BhZ2UudHN4P2JjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQge0ZsZXgsIFNwaW5uZXIsIFRleHR9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQge3VzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VBcHBDb250ZXh0fSBmcm9tIFwiQC9jb250ZXh0L0FwcENvbnRleHRcIjtcblxuXG5cbmNvbnN0IEF1dGhlbnRpY2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7YXBwRGF0YSwgc2V0QXBwRGF0YX0gPSB1c2VBcHBDb250ZXh0KCk7XG4gIGNvbnN0IHtwdXNofSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIGNvbnN0IGNvZGUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiY29kZVwiKTtcblxuICBjb25zdCBBdXRoZW50aWNhdGVXaXRoUGFzc2NvZGUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnN0Zy53aXRocm90YXRlLmNvbS9hcGkvYXV0aC9vYXV0aF90b2tlbj9jb2RlPSR7Y29kZX1gLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QganNvbkNyZWRlbnRpYWxzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmKGpzb25DcmVkZW50aWFscyl7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2NvZGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcHBEYXRhPy51c2VyPy5uYW1lKSB7XG4gICAgICBwdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQXV0aGVudGljYXRlV2l0aFBhc3Njb2RlKCk7XG4gICAgfVxuICB9LCBbYXBwRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggdz1cImZ1bGxcIiBoPVwiY2FsYygxMDB2aClcIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgIDxUZXh0PlBsZWFzZSBXYWl0IHdoaWxlIHdlIGF1dGhvcml6ZSB1c2VyPC9UZXh0PlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhlbnRpY2F0aW9uO1xuIl0sIm5hbWVzIjpbIkZsZXgiLCJUZXh0IiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VBcHBDb250ZXh0IiwiQXV0aGVudGljYXRpb24iLCJhcHBEYXRhIiwic2V0QXBwRGF0YSIsInB1c2giLCJzZWFyY2hQYXJhbXMiLCJjb2RlIiwiZ2V0IiwiQXV0aGVudGljYXRlV2l0aFBhc3Njb2RlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjYWNoZSIsImpzb25DcmVkZW50aWFscyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJ1c2VyIiwibmFtZSIsInciLCJoIiwiZGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(authorize)/authenticate/page.tsx\n"));

/***/ })

});