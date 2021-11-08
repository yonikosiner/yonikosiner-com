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
exports.id = "pages/api/instagram";
exports.ids = ["pages/api/instagram"];
exports.modules = {

/***/ "./pages/api/instagram.ts":
/*!********************************!*\
  !*** ./pages/api/instagram.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nconst url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={%22id%22:%225910880527%22,%22first%22:8}`;\nconst cache = {\n  lastFetch: 0,\n  posts: []\n};\n\nfunction slimUpPosts(response) {\n  return response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({\n    biggie: edge.node.thumbnail_src,\n    thumbnail: edge.node.thumbnail_resources[2].src,\n    url: `https://instagram.com/p/${edge.node.shortcode}`,\n    caption: edge.node.edge_media_to_caption.edges.length > 0 ? edge.node.edge_media_to_caption.edges[0].node.text : null,\n    id: edge.node.id\n  }));\n}\n\nasync function getPosts() {\n  // first see if we have a cache in 30 mins\n  const timeSinceLastFetch = Date.now() - cache.lastFetch;\n\n  if (timeSinceLastFetch <= 1800000) {\n    return cache.posts;\n  }\n\n  const data = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(res => res.json());\n  const posts = slimUpPosts(data); // const posts = data;\n\n  cache.lastFetch = Date.now();\n  cache.posts = posts;\n  return posts;\n}\n\nasync function handler(req, res) {\n  req;\n  const posts = await getPosts();\n  res.send(posts);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5zdGFncmFtLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBRUEsTUFBTUMsR0FBRyxHQUFJLDBJQUFiO0FBRUEsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLEVBQUFBLFNBQVMsRUFBRSxDQURDO0FBRVpDLEVBQUFBLEtBQUssRUFBRTtBQUZLLENBQWQ7O0FBS0EsU0FBU0MsV0FBVCxDQUFxQkMsUUFBckIsRUFBb0M7QUFDbEMsU0FBT0EsUUFBUSxDQUFDQyxJQUFULENBQWNDLElBQWQsQ0FBbUJDLDRCQUFuQixDQUFnREMsS0FBaEQsQ0FBc0RDLEdBQXRELENBQTJEQyxJQUFELEtBQWdCO0FBQy9FQyxJQUFBQSxNQUFNLEVBQUVELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxhQUQ2RDtBQUUvRUMsSUFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNFLElBQUwsQ0FBVUcsbUJBQVYsQ0FBOEIsQ0FBOUIsRUFBaUNDLEdBRm1DO0FBRy9FakIsSUFBQUEsR0FBRyxFQUFHLDJCQUEwQlcsSUFBSSxDQUFDRSxJQUFMLENBQVVLLFNBQVUsRUFIMkI7QUFJL0VDLElBQUFBLE9BQU8sRUFDTFIsSUFBSSxDQUFDRSxJQUFMLENBQVVPLHFCQUFWLENBQWdDWCxLQUFoQyxDQUFzQ1ksTUFBdEMsR0FBK0MsQ0FBL0MsR0FDSVYsSUFBSSxDQUFDRSxJQUFMLENBQVVPLHFCQUFWLENBQWdDWCxLQUFoQyxDQUFzQyxDQUF0QyxFQUF5Q0ksSUFBekMsQ0FBOENTLElBRGxELEdBRUksSUFQeUU7QUFRL0VDLElBQUFBLEVBQUUsRUFBRVosSUFBSSxDQUFDRSxJQUFMLENBQVVVO0FBUmlFLEdBQWhCLENBQTFELENBQVA7QUFVRDs7QUFFRCxlQUFlQyxRQUFmLEdBQTBCO0FBQ3hCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxLQUFhMUIsS0FBSyxDQUFDQyxTQUE5Qzs7QUFDQSxNQUFJdUIsa0JBQWtCLElBQUksT0FBMUIsRUFBbUM7QUFDakMsV0FBT3hCLEtBQUssQ0FBQ0UsS0FBYjtBQUNEOztBQUNELFFBQU1HLElBQUksR0FBRyxNQUFNUCxpREFBSyxDQUFDQyxHQUFELENBQUwsQ0FBVzRCLElBQVgsQ0FBaUJDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQXpCLENBQW5CO0FBQ0EsUUFBTTNCLEtBQUssR0FBR0MsV0FBVyxDQUFDRSxJQUFELENBQXpCLENBUHdCLENBUXhCOztBQUNBTCxFQUFBQSxLQUFLLENBQUNDLFNBQU4sR0FBa0J3QixJQUFJLENBQUNDLEdBQUwsRUFBbEI7QUFDQTFCLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjQSxLQUFkO0FBQ0EsU0FBT0EsS0FBUDtBQUNEOztBQUVjLGVBQWU0QixPQUFmLENBQ2JDLEdBRGEsRUFFYkgsR0FGYSxFQUdiO0FBQ0VHLEVBQUFBLEdBQUc7QUFDSCxRQUFNN0IsS0FBSyxHQUFHLE1BQU1xQixRQUFRLEVBQTVCO0FBQ0FLLEVBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTOUIsS0FBVDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvaW5zdGFncmFtLnRzPzhhNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuXG5jb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ncmFwaHFsL3F1ZXJ5Lz9xdWVyeV9oYXNoPWU3NjlhYTEzMDY0N2QyMzU0YzQwZWE2YTQzOWJmYzA4JnZhcmlhYmxlcz17JTIyaWQlMjI6JTIyNTkxMDg4MDUyNyUyMiwlMjJmaXJzdCUyMjo4fWA7XG5cbmNvbnN0IGNhY2hlID0ge1xuICBsYXN0RmV0Y2g6IDAsXG4gIHBvc3RzOiBbXSxcbn07XG5cbmZ1bmN0aW9uIHNsaW1VcFBvc3RzKHJlc3BvbnNlOiBhbnkpIHtcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEudXNlci5lZGdlX293bmVyX3RvX3RpbWVsaW5lX21lZGlhLmVkZ2VzLm1hcCgoZWRnZTogYW55KSA9PiAoe1xuICAgIGJpZ2dpZTogZWRnZS5ub2RlLnRodW1ibmFpbF9zcmMsXG4gICAgdGh1bWJuYWlsOiBlZGdlLm5vZGUudGh1bWJuYWlsX3Jlc291cmNlc1syXS5zcmMsXG4gICAgdXJsOiBgaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3AvJHtlZGdlLm5vZGUuc2hvcnRjb2RlfWAsXG4gICAgY2FwdGlvbjpcbiAgICAgIGVkZ2Uubm9kZS5lZGdlX21lZGlhX3RvX2NhcHRpb24uZWRnZXMubGVuZ3RoID4gMFxuICAgICAgICA/IGVkZ2Uubm9kZS5lZGdlX21lZGlhX3RvX2NhcHRpb24uZWRnZXNbMF0ubm9kZS50ZXh0XG4gICAgICAgIDogbnVsbCxcbiAgICBpZDogZWRnZS5ub2RlLmlkLFxuICB9KSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAvLyBmaXJzdCBzZWUgaWYgd2UgaGF2ZSBhIGNhY2hlIGluIDMwIG1pbnNcbiAgY29uc3QgdGltZVNpbmNlTGFzdEZldGNoID0gRGF0ZS5ub3coKSAtIGNhY2hlLmxhc3RGZXRjaDtcbiAgaWYgKHRpbWVTaW5jZUxhc3RGZXRjaCA8PSAxODAwMDAwKSB7XG4gICAgcmV0dXJuIGNhY2hlLnBvc3RzO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHBvc3RzID0gc2xpbVVwUG9zdHMoZGF0YSk7XG4gIC8vIGNvbnN0IHBvc3RzID0gZGF0YTtcbiAgY2FjaGUubGFzdEZldGNoID0gRGF0ZS5ub3coKTtcbiAgY2FjaGUucG9zdHMgPSBwb3N0cztcbiAgcmV0dXJuIHBvc3RzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gICAgcmVxO1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcbiAgICByZXMuc2VuZChwb3N0cyk7XG59XG4iXSwibmFtZXMiOlsiZmV0Y2giLCJ1cmwiLCJjYWNoZSIsImxhc3RGZXRjaCIsInBvc3RzIiwic2xpbVVwUG9zdHMiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyIiwiZWRnZV9vd25lcl90b190aW1lbGluZV9tZWRpYSIsImVkZ2VzIiwibWFwIiwiZWRnZSIsImJpZ2dpZSIsIm5vZGUiLCJ0aHVtYm5haWxfc3JjIiwidGh1bWJuYWlsIiwidGh1bWJuYWlsX3Jlc291cmNlcyIsInNyYyIsInNob3J0Y29kZSIsImNhcHRpb24iLCJlZGdlX21lZGlhX3RvX2NhcHRpb24iLCJsZW5ndGgiLCJ0ZXh0IiwiaWQiLCJnZXRQb3N0cyIsInRpbWVTaW5jZUxhc3RGZXRjaCIsIkRhdGUiLCJub3ciLCJ0aGVuIiwicmVzIiwianNvbiIsImhhbmRsZXIiLCJyZXEiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/instagram.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/instagram.ts"));
module.exports = __webpack_exports__;

})();