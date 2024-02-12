"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-clientside-effect";
exports.ids = ["vendor-chunks/react-clientside-effect"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient) {\n    if (true) {\n        if (typeof reducePropsToState !== \"function\") {\n            throw new Error(\"Expected reducePropsToState to be a function.\");\n        }\n        if (typeof handleStateChangeOnClient !== \"function\") {\n            throw new Error(\"Expected handleStateChangeOnClient to be a function.\");\n        }\n    }\n    function getDisplayName(WrappedComponent) {\n        return WrappedComponent.displayName || WrappedComponent.name || \"Component\";\n    }\n    return function wrap(WrappedComponent) {\n        if (true) {\n            if (typeof WrappedComponent !== \"function\") {\n                throw new Error(\"Expected WrappedComponent to be a React component.\");\n            }\n        }\n        var mountedInstances = [];\n        var state;\n        function emitChange() {\n            state = reducePropsToState(mountedInstances.map(function(instance) {\n                return instance.props;\n            }));\n            handleStateChangeOnClient(state);\n        }\n        var SideEffect = /*#__PURE__*/ function(_PureComponent) {\n            (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SideEffect, _PureComponent);\n            function SideEffect() {\n                return _PureComponent.apply(this, arguments) || this;\n            }\n            // Try to use displayName of wrapped component\n            SideEffect.peek = function peek() {\n                return state;\n            };\n            var _proto = SideEffect.prototype;\n            _proto.componentDidMount = function componentDidMount() {\n                mountedInstances.push(this);\n                emitChange();\n            };\n            _proto.componentDidUpdate = function componentDidUpdate() {\n                emitChange();\n            };\n            _proto.componentWillUnmount = function componentWillUnmount() {\n                var index = mountedInstances.indexOf(this);\n                mountedInstances.splice(index, 1);\n                emitChange();\n            };\n            _proto.render = function render() {\n                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(WrappedComponent, this.props);\n            };\n            return SideEffect;\n        }(react__WEBPACK_IMPORTED_MODULE_2__.PureComponent);\n        (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SideEffect, \"displayName\", \"SideEffect(\" + getDisplayName(WrappedComponent) + \")\");\n        return SideEffect;\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSideEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtY2xpZW50c2lkZS1lZmZlY3QvbGliL2luZGV4LmVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNFO0FBQ0U7QUFDM0I7QUFFN0MsU0FBU0ksZUFBZUMsa0JBQWtCLEVBQUVDLHlCQUF5QjtJQUNuRSxJQUFJQyxJQUFxQyxFQUFFO1FBQ3pDLElBQUksT0FBT0YsdUJBQXVCLFlBQVk7WUFDNUMsTUFBTSxJQUFJRyxNQUFNO1FBQ2xCO1FBRUEsSUFBSSxPQUFPRiw4QkFBOEIsWUFBWTtZQUNuRCxNQUFNLElBQUlFLE1BQU07UUFDbEI7SUFDRjtJQUVBLFNBQVNDLGVBQWVDLGdCQUFnQjtRQUN0QyxPQUFPQSxpQkFBaUJDLFdBQVcsSUFBSUQsaUJBQWlCRSxJQUFJLElBQUk7SUFDbEU7SUFFQSxPQUFPLFNBQVNDLEtBQUtILGdCQUFnQjtRQUNuQyxJQUFJSCxJQUFxQyxFQUFFO1lBQ3pDLElBQUksT0FBT0cscUJBQXFCLFlBQVk7Z0JBQzFDLE1BQU0sSUFBSUYsTUFBTTtZQUNsQjtRQUNGO1FBRUEsSUFBSU0sbUJBQW1CLEVBQUU7UUFDekIsSUFBSUM7UUFFSixTQUFTQztZQUNQRCxRQUFRVixtQkFBbUJTLGlCQUFpQkcsR0FBRyxDQUFDLFNBQVVDLFFBQVE7Z0JBQ2hFLE9BQU9BLFNBQVNDLEtBQUs7WUFDdkI7WUFDQWIsMEJBQTBCUztRQUM1QjtRQUVBLElBQUlLLGFBQWEsV0FBVyxHQUFFLFNBQVVDLGNBQWM7WUFDcERyQixvRkFBY0EsQ0FBQ29CLFlBQVlDO1lBRTNCLFNBQVNEO2dCQUNQLE9BQU9DLGVBQWVDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLGNBQWMsSUFBSTtZQUN0RDtZQUVBLDhDQUE4QztZQUM5Q0gsV0FBV0ksSUFBSSxHQUFHLFNBQVNBO2dCQUN6QixPQUFPVDtZQUNUO1lBRUEsSUFBSVUsU0FBU0wsV0FBV00sU0FBUztZQUVqQ0QsT0FBT0UsaUJBQWlCLEdBQUcsU0FBU0E7Z0JBQ2xDYixpQkFBaUJjLElBQUksQ0FBQyxJQUFJO2dCQUMxQlo7WUFDRjtZQUVBUyxPQUFPSSxrQkFBa0IsR0FBRyxTQUFTQTtnQkFDbkNiO1lBQ0Y7WUFFQVMsT0FBT0ssb0JBQW9CLEdBQUcsU0FBU0E7Z0JBQ3JDLElBQUlDLFFBQVFqQixpQkFBaUJrQixPQUFPLENBQUMsSUFBSTtnQkFDekNsQixpQkFBaUJtQixNQUFNLENBQUNGLE9BQU87Z0JBQy9CZjtZQUNGO1lBRUFTLE9BQU9TLE1BQU0sR0FBRyxTQUFTQTtnQkFDdkIsT0FBTyxXQUFXLEdBQUVoQywwREFBbUIsQ0FBQ1Esa0JBQWtCLElBQUksQ0FBQ1MsS0FBSztZQUN0RTtZQUVBLE9BQU9DO1FBQ1QsRUFBRWpCLGdEQUFhQTtRQUVmRixxRkFBZUEsQ0FBQ21CLFlBQVksZUFBZSxnQkFBZ0JYLGVBQWVDLG9CQUFvQjtRQUU5RixPQUFPVTtJQUNUO0FBQ0Y7QUFFQSxpRUFBZWhCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3RhdGUtaG9tZS1hc3NpZ25tZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWNsaWVudHNpZGUtZWZmZWN0L2xpYi9pbmRleC5lcy5qcz9mZGM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHdpdGhTaWRlRWZmZWN0KHJlZHVjZVByb3BzVG9TdGF0ZSwgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VQcm9wc1RvU3RhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcmVkdWNlUHJvcHNUb1N0YXRlIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmICh0eXBlb2YgV3JhcHBlZENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIFdyYXBwZWRDb21wb25lbnQgdG8gYmUgYSBSZWFjdCBjb21wb25lbnQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1vdW50ZWRJbnN0YW5jZXMgPSBbXTtcbiAgICB2YXIgc3RhdGU7XG5cbiAgICBmdW5jdGlvbiBlbWl0Q2hhbmdlKCkge1xuICAgICAgc3RhdGUgPSByZWR1Y2VQcm9wc1RvU3RhdGUobW91bnRlZEluc3RhbmNlcy5tYXAoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcztcbiAgICAgIH0pKTtcbiAgICAgIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQoc3RhdGUpO1xuICAgIH1cblxuICAgIHZhciBTaWRlRWZmZWN0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoU2lkZUVmZmVjdCwgX1B1cmVDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBTaWRlRWZmZWN0KCkge1xuICAgICAgICByZXR1cm4gX1B1cmVDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBUcnkgdG8gdXNlIGRpc3BsYXlOYW1lIG9mIHdyYXBwZWQgY29tcG9uZW50XG4gICAgICBTaWRlRWZmZWN0LnBlZWsgPSBmdW5jdGlvbiBwZWVrKCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9O1xuXG4gICAgICB2YXIgX3Byb3RvID0gU2lkZUVmZmVjdC5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgaW5kZXggPSBtb3VudGVkSW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFNpZGVFZmZlY3Q7XG4gICAgfShQdXJlQ29tcG9uZW50KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShTaWRlRWZmZWN0LCBcImRpc3BsYXlOYW1lXCIsIFwiU2lkZUVmZmVjdChcIiArIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpICsgXCIpXCIpO1xuXG4gICAgcmV0dXJuIFNpZGVFZmZlY3Q7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTaWRlRWZmZWN0O1xuIl0sIm5hbWVzIjpbIl9pbmhlcml0c0xvb3NlIiwiX2RlZmluZVByb3BlcnR5IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Iiwid2l0aFNpZGVFZmZlY3QiLCJyZWR1Y2VQcm9wc1RvU3RhdGUiLCJoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50IiwicHJvY2VzcyIsIkVycm9yIiwiZ2V0RGlzcGxheU5hbWUiLCJXcmFwcGVkQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJuYW1lIiwid3JhcCIsIm1vdW50ZWRJbnN0YW5jZXMiLCJzdGF0ZSIsImVtaXRDaGFuZ2UiLCJtYXAiLCJpbnN0YW5jZSIsInByb3BzIiwiU2lkZUVmZmVjdCIsIl9QdXJlQ29tcG9uZW50IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJwZWVrIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiY29tcG9uZW50RGlkTW91bnQiLCJwdXNoIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-clientside-effect/lib/index.es.js\n");

/***/ })

};
;