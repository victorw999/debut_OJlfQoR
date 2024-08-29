/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/demo_metaobj.js":
/*!*****************************!*\
  !*** ./src/demo_metaobj.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _productsLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsLoader.js */ \"./src/productsLoader.js\");\n\r\n\r\nconst SHOPIFY_STOREFRONT_API = '7205448e608af45a59ff19512e93792b';\r\n\r\n(async function () {\r\n  let products = await (0,_productsLoader_js__WEBPACK_IMPORTED_MODULE_0__.productsLoader)(SHOPIFY_STOREFRONT_API);\r\n  console.log('===> demo_metaobj: products ', products);\r\n})()\r\n\n\n//# sourceURL=webpack://debut_ojlfqor/./src/demo_metaobj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo_metaobj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo_metaobj.js */ \"./src/demo_metaobj.js\");\n// all js files will be bundled into assets/webpack_bundle.js \r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://debut_ojlfqor/./src/index.js?");

/***/ }),

/***/ "./src/productsLoader.js":
/*!*******************************!*\
  !*** ./src/productsLoader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productsLoader: () => (/* binding */ productsLoader)\n/* harmony export */ });\n\r\n// shopify Storefront API\r\n\r\nconst query = ` {\r\n  products(first: 10) {\r\n    edges {\r\n      node {\r\n        id\r\n        title\r\n        handle\r\n        description\r\n        variants(first: 5) {\r\n          edges {\r\n            node {              \r\n              id\r\n              selectedOptions {\r\n                name\r\n                value\r\n              }\r\n              priceV2 {\r\n                amount\r\n                currencyCode\r\n              }\r\n            }\r\n          }\r\n        }\r\n        featuredImage {\r\n          originalSrc           \r\n        }\r\n        media(first: 1) {\r\n          edges {\r\n            node {              \r\n              previewImage {\r\n                transformedSrc(maxHeight: 200, maxWidth: 200)\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}`\r\nconst productsLoader = async function (Storefront_api) {\r\n\r\n  const response = await fetch(\r\n    'https://vzine.myshopify.com/api/2024-07/graphql.json',\r\n    {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n        'X-Shopify-Storefront-Access-Token': Storefront_api\r\n      },\r\n      body: JSON.stringify({ query })\r\n    }\r\n  )\r\n\r\n  const data = await response.json()\r\n  // console.log('===> productLoader()', data.data.products.edges) // Access product data\r\n\r\n  // massage \"products\" data for easy usage\r\n  const products = data.data.products.edges.map(i => i.node)\r\n  return products\r\n}\r\n\r\n\n\n//# sourceURL=webpack://debut_ojlfqor/./src/productsLoader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;