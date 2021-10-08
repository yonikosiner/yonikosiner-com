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
exports.id = "pages/api/twitter";
exports.ids = ["pages/api/twitter"];
exports.modules = {

/***/ "./pages/api/twitter.ts":
/*!******************************!*\
  !*** ./pages/api/twitter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst cache = {\n  lastFetch: 0,\n  tweets: []\n};\n\nasync function getTweets() {\n  // first see if we have a cache in 30 mins\n  const timeSinceLastFetch = Date.now() - cache.lastFetch;\n  if (timeSinceLastFetch <= 1800000) return cache.tweets;\n  const data = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"https://api.twitter.com/2/users/1249844874955948034/tweets?tweet.fields=public_metrics&user.fields=username&max_results=5\", {\n    method: 'GET',\n    headers: {\n      \"Authorization\": `Bearer ${process.env.BEARER_TOKEN}`\n    }\n  }).then(res => res.json());\n  cache.lastFetch = Date.now();\n  cache.tweets = data;\n  return data;\n}\n\n;\nasync function handler(req, res) {\n  req;\n  const tweets = await getTweets();\n  console.log(tweets);\n  res.send(tweets);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdHdpdHRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBQyxvREFBQTtBQUVBLE1BQU1FLEtBQUssR0FBRztBQUNWQyxFQUFBQSxTQUFTLEVBQUUsQ0FERDtBQUVWQyxFQUFBQSxNQUFNLEVBQUU7QUFGRSxDQUFkOztBQUtBLGVBQWVDLFNBQWYsR0FBNEM7QUFDeEM7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEtBQWFOLEtBQUssQ0FBQ0MsU0FBOUM7QUFDQSxNQUFJRyxrQkFBa0IsSUFBSSxPQUExQixFQUFtQyxPQUFPSixLQUFLLENBQUNFLE1BQWI7QUFDbkMsUUFBTUssSUFBSSxHQUFHLE1BQU1WLGlEQUFLLENBQUMsMkhBQUQsRUFBOEg7QUFDbEpXLElBQUFBLE1BQU0sRUFBRSxLQUQwSTtBQUVsSkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsdUJBQWtCLFVBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUFhO0FBRC9DO0FBRnlJLEdBQTlILENBQUwsQ0FNbEJDLElBTmtCLENBTVpDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBTkksQ0FBbkI7QUFRQWYsRUFBQUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCSSxJQUFJLENBQUNDLEdBQUwsRUFBbEI7QUFDQU4sRUFBQUEsS0FBSyxDQUFDRSxNQUFOLEdBQWVLLElBQWY7QUFFQSxTQUFPQSxJQUFQO0FBQ0g7O0FBQUE7QUFFYyxlQUFlUyxPQUFmLENBQ2JDLEdBRGEsRUFFYkgsR0FGYSxFQUdiO0FBQ0VHLEVBQUFBLEdBQUc7QUFDSCxRQUFNZixNQUFNLEdBQUcsTUFBTUMsU0FBUyxFQUE5QjtBQUNBZSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE1BQVo7QUFDQVksRUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNsQixNQUFUO0FBQ0g7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL3R3aXR0ZXIudHM/Y2EyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG50eXBlIHR3ZWV0cyA9IG9iamVjdDtcblxuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBjYWNoZSA9IHtcbiAgICBsYXN0RmV0Y2g6IDAsXG4gICAgdHdlZXRzOiBbXSxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFR3ZWV0cygpOiBQcm9taXNlPHR3ZWV0cz4ge1xuICAgIC8vIGZpcnN0IHNlZSBpZiB3ZSBoYXZlIGEgY2FjaGUgaW4gMzAgbWluc1xuICAgIGNvbnN0IHRpbWVTaW5jZUxhc3RGZXRjaCA9IERhdGUubm93KCkgLSBjYWNoZS5sYXN0RmV0Y2g7XG4gICAgaWYgKHRpbWVTaW5jZUxhc3RGZXRjaCA8PSAxODAwMDAwKSByZXR1cm4gY2FjaGUudHdlZXRzO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzIvdXNlcnMvMTI0OTg0NDg3NDk1NTk0ODAzNC90d2VldHM/dHdlZXQuZmllbGRzPXB1YmxpY19tZXRyaWNzJnVzZXIuZmllbGRzPXVzZXJuYW1lJm1heF9yZXN1bHRzPTVcIiwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkJFQVJFUl9UT0tFTn1gXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gICAgY2FjaGUubGFzdEZldGNoID0gRGF0ZS5ub3coKTtcbiAgICBjYWNoZS50d2VldHMgPSBkYXRhO1xuXG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTx0d2VldHM+XG4pIHtcbiAgICByZXE7XG4gICAgY29uc3QgdHdlZXRzID0gYXdhaXQgZ2V0VHdlZXRzKCk7XG4gICAgY29uc29sZS5sb2codHdlZXRzKTtcbiAgICByZXMuc2VuZCh0d2VldHMpO1xufTtcbiJdLCJuYW1lcyI6WyJmZXRjaCIsImRvdGVudiIsImNvbmZpZyIsImNhY2hlIiwibGFzdEZldGNoIiwidHdlZXRzIiwiZ2V0VHdlZXRzIiwidGltZVNpbmNlTGFzdEZldGNoIiwiRGF0ZSIsIm5vdyIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIkJFQVJFUl9UT0tFTiIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFuZGxlciIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/twitter.ts\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/twitter.ts"));
module.exports = __webpack_exports__;

})();