"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/footer.module.scss */ \"./styles/footer.module.scss\");\n/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_twitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/twitter */ \"./hooks/twitter.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/yoni/personal/yonikosiner-com.git/master/frontend/components/footer.tsx\";\n\n\n\nfunction Footer() {\n  var _this = this;\n\n  var tweets = (0,_hooks_twitter__WEBPACK_IMPORTED_MODULE_0__.default)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tweets),\n      children: tweets.map(function (tweet, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tweet),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: tweet.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: tweet.date\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 25\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().instagram)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().YouTube)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().coppy),\n      children: [\"\\xA9\", new Date().getFullYear()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n_c = Footer;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVlLFNBQVNFLE1BQVQsR0FBMEI7QUFBQTs7QUFDckMsTUFBTUMsTUFBTSxHQUFHRix1REFBTyxFQUF0QjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFRCwwRUFBaEI7QUFBQSw0QkFFSTtBQUFLLGVBQVMsRUFBRUEsMEVBQWhCO0FBQUEsZ0JBQ0tHLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNSO0FBQWlCLG1CQUFTLEVBQUVQLHlFQUE1QjtBQUFBLGtDQUNJO0FBQUEsc0JBQUlNLEtBQUssQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxzQkFBSUYsS0FBSyxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxXQUFVRixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFYO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBV0k7QUFBSyxlQUFTLEVBQUVQLDZFQUFlVTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosZUFjSTtBQUFLLGVBQVMsRUFBRVYsMkVBQWFXO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSixlQWlCSTtBQUFHLGVBQVMsRUFBRVgseUVBQWQ7QUFBQSx5QkFBa0MsSUFBSWEsSUFBSixHQUFXQyxXQUFYLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDtLQXhCdUJaO0FBd0J2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2Zvb3Rlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4uL2hvb2tzL3R3aXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCk6IG9iamVjdCB7XG4gICAgY29uc3QgdHdlZXRzID0gVHdpdHRlcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvb3Rlcn0+XG4gICAgICAgICAgICB7LypMYXRlc3QgdHdlZXRzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnR3ZWV0c30+XG4gICAgICAgICAgICAgICAge3R3ZWV0cy5tYXAoKHR3ZWV0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGUudHdlZXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3R3ZWV0LnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3R3ZWV0LmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qSW5zdGFncmFtKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5zdGFncmFtfT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qWW91VHViZSB2aWRlb3MqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Zb3VUdWJlfT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qQ29wcHkgcmlnaHQgd2l0aCB5ZWFyKi99XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmNvcHB5fT4mY29weTt7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsic3R5bGUiLCJUd2l0dGVyIiwiRm9vdGVyIiwidHdlZXRzIiwiZm9vdGVyIiwibWFwIiwidHdlZXQiLCJpbmRleCIsInRleHQiLCJkYXRlIiwiaW5zdGFncmFtIiwiWW91VHViZSIsImNvcHB5IiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

});