"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/twitter",{

/***/ "./pages/twitter.tsx":
/*!***************************!*\
  !*** ./pages/twitter.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Twitter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/yoni/personal/yonikosiner-com.git/master/frontend/pages/twitter.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Twitter() {\n  _s();\n\n  var _this = this;\n\n  ;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      tweets = _useState[0],\n      setTweets = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    node_fetch__WEBPACK_IMPORTED_MODULE_1___default()('/api/twitter').then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return setTweets(data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    })[\"finally\"](function () {\n      return setIsLoading(false);\n    });\n  }, []);\n  consoe.log(tweets);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: tweets.map(function (i) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          children: i.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          children: i.public_metrics.like_count\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, _this)]\n      }, i.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Twitter, \"u9mcov7m26gq4iY9Oed//oBRApc=\");\n\n_c = Twitter;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Twitter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2l0dGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0ksT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQVU3Qjs7QUFFRCxrQkFBNEJILCtDQUFRLENBQVUsRUFBVixDQUFwQztBQUFBLE1BQU9JLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFrQ0wsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT00sU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQU4sRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pDLElBQUFBLGlEQUFLLENBQUMsY0FBRCxDQUFMLENBQ0tNLElBREwsQ0FDVSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQURiLEVBRUtGLElBRkwsQ0FFVSxVQUFBRyxJQUFJO0FBQUEsYUFBSU4sU0FBUyxDQUFDTSxJQUFELENBQWI7QUFBQSxLQUZkLFdBR1csVUFBQUMsR0FBRztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxLQUhkLGFBSWE7QUFBQSxhQUFNTCxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLEtBSmI7QUFLSCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUFRLEVBQUFBLE1BQU0sQ0FBQ0QsR0FBUCxDQUFXVixNQUFYOztBQUVBLE1BQUlFLFNBQUosRUFBZTtBQUNYLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLGNBQ0tGLE1BQU0sQ0FBQ1ksR0FBUCxDQUFXLFVBQUNDLENBQUQ7QUFBQSwwQkFDUjtBQUFBLGdDQUNJO0FBQUEsb0JBQUlBLENBQUMsQ0FBQ0M7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBSUQsQ0FBQyxDQUFDRSxjQUFGLENBQWlCQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsU0FBVUgsQ0FBQyxDQUFDSSxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBLEtBQVg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7R0F2Q3VCbEI7O0tBQUFBO0FBdUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2l0dGVyLnRzeD9mZmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3aXR0ZXIoKSB7XG4gICAgaW50ZXJmYWNlIHR3ZWV0IHtcbiAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgICBwdWJsaWNfbWV0cmljczoge1xuICAgICAgICAgICAgcmV0d2VldF9jb3VudDogbnVtYmVyO1xuICAgICAgICAgICAgcmVwbHlfY291bnQ6IG51bWJlcjtcbiAgICAgICAgICAgIGxpa2VfY291bnQ6IG51bWJlcjtcbiAgICAgICAgICAgIHF1b3RlX2NvdW50OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IFt0d2VldHMsIHNldFR3ZWV0c10gPSB1c2VTdGF0ZTx0d2VldFtdPihbXSk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goJy9hcGkvdHdpdHRlcicpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0VHdlZXRzKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc29lLmxvZyh0d2VldHMpO1xuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dHdlZXRzLm1hcCgoaTogdHdlZXQgKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2kuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8cD57aS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2kucHVibGljX21ldHJpY3MubGlrZV9jb3VudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwiVHdpdHRlciIsInR3ZWV0cyIsInNldFR3ZWV0cyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjb25zb2UiLCJtYXAiLCJpIiwidGV4dCIsInB1YmxpY19tZXRyaWNzIiwibGlrZV9jb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/twitter.tsx\n");

/***/ })

});