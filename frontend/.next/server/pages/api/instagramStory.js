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
exports.id = "pages/api/instagramStory";
exports.ids = ["pages/api/instagramStory"];
exports.modules = {

/***/ "./pages/api/instagramStory.ts":
/*!*************************************!*\
  !*** ./pages/api/instagramStory.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nconst url = `https://www.instagram.com/graphql/query/?query_hash=04334405dbdef91f2c4e207b84c204d7&variables={\"only_stories\":true,\"stories_prefetch\":true,\"stories_video_dash_manifest\":false}`;\nconst cache = {\n  lastFetch: 0,\n  posts: []\n};\n\nasync function getPosts() {\n  // first see if we have a cache in 5 mins\n  const timeSinceLastFetch = Date.now() - cache.lastFetch;\n\n  if (timeSinceLastFetch <= 300000) {\n    return cache.posts;\n  }\n\n  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {\n    headers: {\n      // get this value from your Storage tab in Firefox dev tools, or the application tab in chrome. As far as I can tell it's good for 1 year, but that seems to be updated daily...\n      cookie: `sessionid=${process.env.INSTAGRAM_COOKIE}`\n    }\n  }).then(x => x.json()).catch(err => console.log(err)); // Filter out stories that aren't mine. This only happens when I don't post a story, then it returns the stories of people I follow\n\n  const wesEdge = res.data.user.feed_reels_tray.edge_reels_tray_to_reel.edges.map(edge => edge.node).find(edge => edge.user.username === 'kosiner.codes'); // no Stories\n\n  if (!wesEdge) return {}; // Otherwise return the Stories\n\n  const posts = wesEdge.items.map(item => ({\n    media_preview: item.media_preview,\n    display_url: item.display_url\n  }));\n  cache.lastFetch = Date.now();\n  cache.posts = posts;\n  return cache.posts;\n}\n\nasync function handler(req, res) {\n  req;\n  const posts = await getPosts();\n  res.send(posts);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5zdGFncmFtU3RvcnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFFQSxNQUFNQyxHQUFHLEdBQUksa0xBQWI7QUFFSSxNQUFNQyxLQUFLLEdBQUc7QUFDZEMsRUFBQUEsU0FBUyxFQUFFLENBREc7QUFFZEMsRUFBQUEsS0FBSyxFQUFFO0FBRk8sQ0FBZDs7QUFLSixlQUFlQyxRQUFmLEdBQTBCO0FBQ3RCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxLQUFhTixLQUFLLENBQUNDLFNBQTlDOztBQUNBLE1BQUlHLGtCQUFrQixJQUFJLE1BQTFCLEVBQWtDO0FBQzlCLFdBQU9KLEtBQUssQ0FBQ0UsS0FBYjtBQUNIOztBQUNELFFBQU1LLEdBQUcsR0FBRyxNQUFNVCxpREFBSyxDQUFDQyxHQUFELEVBQU07QUFDekJTLElBQUFBLE9BQU8sRUFBRTtBQUNMO0FBQ0FDLE1BQUFBLE1BQU0sRUFBRyxhQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQWlCO0FBRjdDO0FBRGdCLEdBQU4sQ0FBTCxDQU1qQkMsSUFOaUIsQ0FNWEMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLElBQUYsRUFOSyxFQU9qQkMsS0FQaUIsQ0FPVkMsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVBFLENBQWxCLENBTnNCLENBZXRCOztBQUNBLFFBQU1HLE9BQU8sR0FBR2IsR0FBRyxDQUFDYyxJQUFKLENBQVNDLElBQVQsQ0FBY0MsZUFBZCxDQUE4QkMsdUJBQTlCLENBQXNEQyxLQUF0RCxDQUNmQyxHQURlLENBQ1ZDLElBQUQsSUFBZUEsSUFBSSxDQUFDQyxJQURULEVBRWZDLElBRmUsQ0FFVEYsSUFBRCxJQUFlQSxJQUFJLENBQUNMLElBQUwsQ0FBVVEsUUFBVixLQUF1QixlQUY1QixDQUFoQixDQWhCc0IsQ0FvQnRCOztBQUNBLE1BQUksQ0FBQ1YsT0FBTCxFQUFjLE9BQU8sRUFBUCxDQXJCUSxDQXVCdEI7O0FBQ0EsUUFBTWxCLEtBQUssR0FBR2tCLE9BQU8sQ0FBQ1csS0FBUixDQUFjTCxHQUFkLENBQW1CTSxJQUFELEtBQWdCO0FBQzVDQyxJQUFBQSxhQUFhLEVBQUVELElBQUksQ0FBQ0MsYUFEd0I7QUFFNUNDLElBQUFBLFdBQVcsRUFBRUYsSUFBSSxDQUFDRTtBQUYwQixHQUFoQixDQUFsQixDQUFkO0FBS0FsQyxFQUFBQSxLQUFLLENBQUNDLFNBQU4sR0FBa0JJLElBQUksQ0FBQ0MsR0FBTCxFQUFsQjtBQUNBTixFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBY0EsS0FBZDtBQUNBLFNBQU9GLEtBQUssQ0FBQ0UsS0FBYjtBQUNIOztBQUVjLGVBQWVpQyxPQUFmLENBQ1hDLEdBRFcsRUFFWDdCLEdBRlcsRUFHYjtBQUNFNkIsRUFBQUEsR0FBRztBQUNILFFBQU1sQyxLQUFLLEdBQUcsTUFBTUMsUUFBUSxFQUE1QjtBQUNBSSxFQUFBQSxHQUFHLENBQUM4QixJQUFKLENBQVNuQyxLQUFUO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9pbnN0YWdyYW1TdG9yeS50cz8zYmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5cbmNvbnN0IHVybCA9IGBodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2dyYXBocWwvcXVlcnkvP3F1ZXJ5X2hhc2g9MDQzMzQ0MDVkYmRlZjkxZjJjNGUyMDdiODRjMjA0ZDcmdmFyaWFibGVzPXtcIm9ubHlfc3Rvcmllc1wiOnRydWUsXCJzdG9yaWVzX3ByZWZldGNoXCI6dHJ1ZSxcInN0b3JpZXNfdmlkZW9fZGFzaF9tYW5pZmVzdFwiOmZhbHNlfWA7XG5cbiAgICBjb25zdCBjYWNoZSA9IHtcbiAgICBsYXN0RmV0Y2g6IDAsXG4gICAgcG9zdHM6IFtdLFxufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gICAgLy8gZmlyc3Qgc2VlIGlmIHdlIGhhdmUgYSBjYWNoZSBpbiA1IG1pbnNcbiAgICBjb25zdCB0aW1lU2luY2VMYXN0RmV0Y2ggPSBEYXRlLm5vdygpIC0gY2FjaGUubGFzdEZldGNoO1xuICAgIGlmICh0aW1lU2luY2VMYXN0RmV0Y2ggPD0gMzAwMDAwKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5wb3N0cztcbiAgICB9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vIGdldCB0aGlzIHZhbHVlIGZyb20geW91ciBTdG9yYWdlIHRhYiBpbiBGaXJlZm94IGRldiB0b29scywgb3IgdGhlIGFwcGxpY2F0aW9uIHRhYiBpbiBjaHJvbWUuIEFzIGZhciBhcyBJIGNhbiB0ZWxsIGl0J3MgZ29vZCBmb3IgMSB5ZWFyLCBidXQgdGhhdCBzZWVtcyB0byBiZSB1cGRhdGVkIGRhaWx5Li4uXG4gICAgICAgICAgICBjb29raWU6IGBzZXNzaW9uaWQ9JHtwcm9jZXNzLmVudi5JTlNUQUdSQU1fQ09PS0lFfWAsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigoeCkgPT4geC5qc29uKCkpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gICAgLy8gRmlsdGVyIG91dCBzdG9yaWVzIHRoYXQgYXJlbid0IG1pbmUuIFRoaXMgb25seSBoYXBwZW5zIHdoZW4gSSBkb24ndCBwb3N0IGEgc3RvcnksIHRoZW4gaXQgcmV0dXJucyB0aGUgc3RvcmllcyBvZiBwZW9wbGUgSSBmb2xsb3dcbiAgICBjb25zdCB3ZXNFZGdlID0gcmVzLmRhdGEudXNlci5mZWVkX3JlZWxzX3RyYXkuZWRnZV9yZWVsc190cmF5X3RvX3JlZWwuZWRnZXNcbiAgICAubWFwKChlZGdlOiBhbnkpID0+IGVkZ2Uubm9kZSlcbiAgICAuZmluZCgoZWRnZTogYW55KSA9PiBlZGdlLnVzZXIudXNlcm5hbWUgPT09ICdrb3NpbmVyLmNvZGVzJyk7XG5cbiAgICAvLyBubyBTdG9yaWVzXG4gICAgaWYgKCF3ZXNFZGdlKSByZXR1cm4ge307XG5cbiAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBTdG9yaWVzXG4gICAgY29uc3QgcG9zdHMgPSB3ZXNFZGdlLml0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiAoe1xuICAgICAgICBtZWRpYV9wcmV2aWV3OiBpdGVtLm1lZGlhX3ByZXZpZXcsXG4gICAgICAgIGRpc3BsYXlfdXJsOiBpdGVtLmRpc3BsYXlfdXJsLFxuICAgIH0pKTtcblxuICAgIGNhY2hlLmxhc3RGZXRjaCA9IERhdGUubm93KCk7XG4gICAgY2FjaGUucG9zdHMgPSBwb3N0cztcbiAgICByZXR1cm4gY2FjaGUucG9zdHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gICAgcmVxO1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcbiAgICByZXMuc2VuZChwb3N0cyk7XG59XG4iXSwibmFtZXMiOlsiZmV0Y2giLCJ1cmwiLCJjYWNoZSIsImxhc3RGZXRjaCIsInBvc3RzIiwiZ2V0UG9zdHMiLCJ0aW1lU2luY2VMYXN0RmV0Y2giLCJEYXRlIiwibm93IiwicmVzIiwiaGVhZGVycyIsImNvb2tpZSIsInByb2Nlc3MiLCJlbnYiLCJJTlNUQUdSQU1fQ09PS0lFIiwidGhlbiIsIngiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwid2VzRWRnZSIsImRhdGEiLCJ1c2VyIiwiZmVlZF9yZWVsc190cmF5IiwiZWRnZV9yZWVsc190cmF5X3RvX3JlZWwiLCJlZGdlcyIsIm1hcCIsImVkZ2UiLCJub2RlIiwiZmluZCIsInVzZXJuYW1lIiwiaXRlbXMiLCJpdGVtIiwibWVkaWFfcHJldmlldyIsImRpc3BsYXlfdXJsIiwiaGFuZGxlciIsInJlcSIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/instagramStory.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/instagramStory.ts"));
module.exports = __webpack_exports__;

})();