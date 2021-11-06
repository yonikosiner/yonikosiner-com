"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/twitter";
exports.ids = ["pages/twitter"];
exports.modules = {

/***/ "./pages/twitter.tsx":
/*!***************************!*\
  !*** ./pages/twitter.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Twitter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/yoni/personal/yonikosiner-com.git/master/frontend/pages/twitter.tsx\";\n\n\n\nfunction Twitter() {\n  ;\n  const {\n    0: tweets,\n    1: setTweets\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    node_fetch__WEBPACK_IMPORTED_MODULE_1___default()('/api/twitter').then(res => res.json()).then(data => setTweets(data.data)).catch(err => console.log(err)).finally(() => setIsLoading(false));\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: tweets.map(i => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: i.text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: i.public_metrics.like_count\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: i.public_metrics.quote_count\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: i.public_metrics.reply_count\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: i.public_metrics.retweet_count\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 21\n      }, this)]\n    }, i.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, this);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2l0dGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0ksT0FBVCxHQUFtQjtBQVU3QjtBQUVELFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkwsK0NBQVEsQ0FBVSxFQUFWLENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCUCwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pDLElBQUFBLGlEQUFLLENBQUMsY0FBRCxDQUFMLENBQ0tNLElBREwsQ0FDVUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEakIsRUFFS0YsSUFGTCxDQUVVRyxJQUFJLElBQUlOLFNBQVMsQ0FBQ00sSUFBSSxDQUFDQSxJQUFOLENBRjNCLEVBR0tDLEtBSEwsQ0FHV0MsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUhsQixFQUlLRyxPQUpMLENBSWEsTUFBTVQsWUFBWSxDQUFDLEtBQUQsQ0FKL0I7QUFLSCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQUlELFNBQUosRUFBZTtBQUNYLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLGNBQ0tGLE1BQU0sQ0FBQ2EsR0FBUCxDQUFZQyxDQUFELGlCQUNSO0FBQUEsOEJBQ0k7QUFBQSxrQkFBSUEsQ0FBQyxDQUFDQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQUlELENBQUMsQ0FBQ0UsY0FBRixDQUFpQkM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQSxrQkFBSUgsQ0FBQyxDQUFDRSxjQUFGLENBQWlCRTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSTtBQUFBLGtCQUFJSixDQUFDLENBQUNFLGNBQUYsQ0FBaUJHO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJO0FBQUEsa0JBQUlMLENBQUMsQ0FBQ0UsY0FBRixDQUFpQkk7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUEsT0FBVU4sQ0FBQyxDQUFDTyxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL3R3aXR0ZXIudHN4P2ZmY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdpdHRlcigpIHtcbiAgICBpbnRlcmZhY2UgdHdlZXQge1xuICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICAgIHB1YmxpY19tZXRyaWNzOiB7XG4gICAgICAgICAgICByZXR3ZWV0X2NvdW50OiBudW1iZXI7XG4gICAgICAgICAgICByZXBseV9jb3VudDogbnVtYmVyO1xuICAgICAgICAgICAgbGlrZV9jb3VudDogbnVtYmVyO1xuICAgICAgICAgICAgcXVvdGVfY291bnQ6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgW3R3ZWV0cywgc2V0VHdlZXRzXSA9IHVzZVN0YXRlPHR3ZWV0W10+KFtdKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL2FwaS90d2l0dGVyJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRUd2VldHMoZGF0YS5kYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpO1xuICAgIH0sIFtdKTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3R3ZWV0cy5tYXAoKGk6IHR3ZWV0ICkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2kudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntpLnB1YmxpY19tZXRyaWNzLmxpa2VfY291bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57aS5wdWJsaWNfbWV0cmljcy5xdW90ZV9jb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntpLnB1YmxpY19tZXRyaWNzLnJlcGx5X2NvdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2kucHVibGljX21ldHJpY3MucmV0d2VldF9jb3VudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwiVHdpdHRlciIsInR3ZWV0cyIsInNldFR3ZWV0cyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZpbmFsbHkiLCJtYXAiLCJpIiwidGV4dCIsInB1YmxpY19tZXRyaWNzIiwibGlrZV9jb3VudCIsInF1b3RlX2NvdW50IiwicmVwbHlfY291bnQiLCJyZXR3ZWV0X2NvdW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/twitter.tsx\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/twitter.tsx"));
module.exports = __webpack_exports__;

})();