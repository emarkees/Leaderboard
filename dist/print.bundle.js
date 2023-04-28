/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ (() => {

eval("const container = document.querySelector('.content');\r\n\r\nconst data = [\r\n  {\r\n    Name: 'Adeyemi',\r\n    Score: 20,\r\n    id: 1,\r\n  },\r\n  {\r\n    Name: 'Adeyemi',\r\n    Score: 21,\r\n    id: 2,\r\n  },\r\n  {\r\n    Name: 'Adeyemi',\r\n    Score: 23,\r\n    id: 3,\r\n  },\r\n  {\r\n    Name: 'Adedayo',\r\n    Score: 23,\r\n    id: 3,\r\n  },\r\n  {\r\n    Name: 'Adeyemi ',\r\n    Score: 23,\r\n    id: 3,\r\n  },\r\n  {\r\n    Name: 'Adedayo',\r\n    Score: 23,\r\n    id: 3,\r\n  },\r\n  {\r\n    Name: 'Adeyemi',\r\n    Score: 23,\r\n    id: 3,\r\n  },\r\n  {\r\n    Name: 'Adedayo',\r\n    Score: 23,\r\n    id: 3,\r\n  },\r\n];\r\ndata.sort((a, b) => a.id - b.id);\r\n\r\nlet html = '';\r\n\r\ndata.forEach((item) => {\r\n  html += `\r\n  <ul class=\"contentlist\">\r\n\r\n    <li class=\"board\">${item.Name}</li>\r\n    <li class=\"semi-column\">: </li>\r\n    <li class=\"board\">${item.Score} </li>\r\n  </ul>\r\n  \r\n  `;\r\n});\r\n\r\ncontainer.innerHTML = html;\n\n//# sourceURL=webpack://leaderboard/./src/print.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);