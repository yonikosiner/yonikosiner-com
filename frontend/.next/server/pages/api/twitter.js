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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst cache = {\n  lastFetch: 0,\n  tweets: []\n}; //@ts-ignore\n\nasync function getTweets() {\n  // first see if we have a cache in 30 mins\n  const timeSinceLastFetch = Date.now() - cache.lastFetch;\n  if (timeSinceLastFetch <= 1800000) return cache.tweets;\n  const data = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"https://api.twitter.com/2/users/1249844874955948034/tweets?tweet.fields=public_metrics&user.fields=username&max_results=5\", {\n    method: 'GET',\n    headers: {\n      \"Authorization\": `Bearer ${process.env.BEARER_TOKEN}`\n    }\n  }).then(res => res.json());\n  cache.lastFetch = Date.now();\n  cache.tweets = data;\n  return data;\n}\n\n;\nasync function handler(req, res) {\n  req;\n  const tweets = await getTweets();\n  res.send(tweets);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdHdpdHRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUtBQyxrREFBQTs7QUFFQSxNQUFNRSxLQUFLLEdBQUc7QUFDVkMsRUFBQUEsU0FBUyxFQUFFLENBREQ7QUFFVkMsRUFBQUEsTUFBTSxFQUFFO0FBRkUsQ0FBZCxFQUtBOztBQUNBLGVBQWVDLFNBQWYsR0FBNEM7QUFDeEM7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEtBQWFOLEtBQUssQ0FBQ0MsU0FBOUM7QUFDQSxNQUFJRyxrQkFBa0IsSUFBSSxPQUExQixFQUFtQyxPQUFPSixLQUFLLENBQUNFLE1BQWI7QUFDbkMsUUFBTUssSUFBSSxHQUFHLE1BQU1WLGlEQUFLLENBQUMsMkhBQUQsRUFBOEg7QUFDbEpXLElBQUFBLE1BQU0sRUFBRSxLQUQwSTtBQUVsSkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsdUJBQWtCLFVBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUFhO0FBRC9DO0FBRnlJLEdBQTlILENBQUwsQ0FNbEJDLElBTmtCLENBTVpDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBTkksQ0FBbkI7QUFRQWYsRUFBQUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCSSxJQUFJLENBQUNDLEdBQUwsRUFBbEI7QUFDQU4sRUFBQUEsS0FBSyxDQUFDRSxNQUFOLEdBQWVLLElBQWY7QUFFQSxTQUFPQSxJQUFQO0FBQ0g7O0FBQUE7QUFFYyxlQUFlUyxPQUFmLENBQ2JDLEdBRGEsRUFFYkgsR0FGYSxFQUdiO0FBQ0VHLEVBQUFBLEdBQUc7QUFDSCxRQUFNZixNQUFNLEdBQUcsTUFBTUMsU0FBUyxFQUE5QjtBQUNBVyxFQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBU2hCLE1BQVQ7QUFDSDtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvdHdpdHRlci50cz9jYTJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG50eXBlIHR3ZWV0cyA9IG9iamVjdDtcblxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbmNvbnN0IGNhY2hlID0ge1xuICAgIGxhc3RGZXRjaDogMCxcbiAgICB0d2VldHM6IFtdLFxufTtcblxuLy9AdHMtaWdub3JlXG5hc3luYyBmdW5jdGlvbiBnZXRUd2VldHMoKTogUHJvbWlzZTx0d2VldHM+IHtcbiAgICAvLyBmaXJzdCBzZWUgaWYgd2UgaGF2ZSBhIGNhY2hlIGluIDMwIG1pbnNcbiAgICBjb25zdCB0aW1lU2luY2VMYXN0RmV0Y2ggPSBEYXRlLm5vdygpIC0gY2FjaGUubGFzdEZldGNoO1xuICAgIGlmICh0aW1lU2luY2VMYXN0RmV0Y2ggPD0gMTgwMDAwMCkgcmV0dXJuIGNhY2hlLnR3ZWV0cztcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS50d2l0dGVyLmNvbS8yL3VzZXJzLzEyNDk4NDQ4NzQ5NTU5NDgwMzQvdHdlZXRzP3R3ZWV0LmZpZWxkcz1wdWJsaWNfbWV0cmljcyZ1c2VyLmZpZWxkcz11c2VybmFtZSZtYXhfcmVzdWx0cz01XCIsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5CRUFSRVJfVE9LRU59YFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICAgIGNhY2hlLmxhc3RGZXRjaCA9IERhdGUubm93KCk7XG4gICAgY2FjaGUudHdlZXRzID0gZGF0YTtcblxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8dHdlZXRzPlxuKSB7XG4gICAgcmVxO1xuICAgIGNvbnN0IHR3ZWV0cyA9IGF3YWl0IGdldFR3ZWV0cygpO1xuICAgIHJlcy5zZW5kKHR3ZWV0cyk7XG59O1xuIl0sIm5hbWVzIjpbImZldGNoIiwicmVxdWlyZSIsImNvbmZpZyIsImNhY2hlIiwibGFzdEZldGNoIiwidHdlZXRzIiwiZ2V0VHdlZXRzIiwidGltZVNpbmNlTGFzdEZldGNoIiwiRGF0ZSIsIm5vdyIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIkJFQVJFUl9UT0tFTiIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFuZGxlciIsInJlcSIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/twitter.ts\n");

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