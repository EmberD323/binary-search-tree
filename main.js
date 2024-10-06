/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binarysearchtree.js":
/*!*********************************!*\
  !*** ./src/binarysearchtree.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tree: () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _mergeSort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSort.js */ \"./src/mergeSort.js\");\n\n\n\n//node constructor\nclass Node {\n    constructor(data) {\n        this.data = data;\n        this.left = null;\n        this.right =null;\n    }\n}\n\nclass Tree{\n    constructor(root){\n        this.root = root;\n    }\n    buildTree(array){\n        //sort array\n        //remove duplicates\n\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmluYXJ5c2VhcmNodHJlZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2JpbmFyeXNlYXJjaHRyZWUuanM/NWIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7bWVyZ2VTb3J0fSBmcm9tIFwiLi9tZXJnZVNvcnQuanNcIlxuXG4vL25vZGUgY29uc3RydWN0b3JcbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodCA9bnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIFRyZWV7XG4gICAgY29uc3RydWN0b3Iocm9vdCl7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgfVxuICAgIGJ1aWxkVHJlZShhcnJheSl7XG4gICAgICAgIC8vc29ydCBhcnJheVxuICAgICAgICAvL3JlbW92ZSBkdXBsaWNhdGVzXG5cbiAgICB9XG59XG5cbmV4cG9ydCB7VHJlZX0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/binarysearchtree.js\n");

/***/ }),

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mergeSort: () => (/* binding */ mergeSort)\n/* harmony export */ });\nfunction mergeSort(inputArray){\n    if(inputArray.length == 1){ \n        //dont split\n        return inputArray\n    }\n    else{// split, sort,merge\n        \n        //split array to left and right\n        let arrayLeft = [];\n        let arrayRight = [];\n        let midpoint = inputArray.length/2;\n        for (let i=0;i<midpoint;i++){\n            arrayLeft.push(inputArray[i]);\n        }\n        for (let i=Math.round(midpoint);i<inputArray.length;i++){\n            arrayRight.push(inputArray[i]);\n        }\n        let sortedLeft = mergeSort(arrayLeft);\n        let sortedLeftLength = sortedLeft.length\n        let sortedRight = mergeSort(arrayRight);\n        let sortedRightLength = sortedRight.length\n\n       \n        let sortedArray = [];\n        let j=0;\n        let h=0;\n    mergeLoop:for(let k=0;k<(sortedLeftLength+sortedRightLength);k++){\n            \n            if(sortedLeft[h]<sortedRight[j]){\n                sortedArray.push(sortedLeft[h]);\n                h++;\n                //if h>sortedLeftLength - 1 then push the rest of sortedright and break\n                if(h >= sortedLeftLength){\n                    for(j;j<sortedRightLength;j++){\n                        sortedArray.push(sortedRight[j]);\n                    }\n                    break mergeLoop;\n                }\n            }\n            else{\n                sortedArray.push(sortedRight[j]);\n                j++;\n                //if j>sortedRightLength - 1 then push the rest of sortedleft and break\n                if(j >= sortedRightLength){\n                    for(h;h<sortedLeftLength;h++){\n                        sortedArray.push(sortedLeft[h]);\n                    }\n                    break mergeLoop;\n                }\n            }\n        }\n\n        return sortedArray;\n\n    }\n    \n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVyZ2VTb3J0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0Esd0NBQXdDLG9CQUFvQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUNBQXVDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQkFBb0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUJBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbWVyZ2VTb3J0LmpzP2Q0ZTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWVyZ2VTb3J0KGlucHV0QXJyYXkpe1xuICAgIGlmKGlucHV0QXJyYXkubGVuZ3RoID09IDEpeyBcbiAgICAgICAgLy9kb250IHNwbGl0XG4gICAgICAgIHJldHVybiBpbnB1dEFycmF5XG4gICAgfVxuICAgIGVsc2V7Ly8gc3BsaXQsIHNvcnQsbWVyZ2VcbiAgICAgICAgXG4gICAgICAgIC8vc3BsaXQgYXJyYXkgdG8gbGVmdCBhbmQgcmlnaHRcbiAgICAgICAgbGV0IGFycmF5TGVmdCA9IFtdO1xuICAgICAgICBsZXQgYXJyYXlSaWdodCA9IFtdO1xuICAgICAgICBsZXQgbWlkcG9pbnQgPSBpbnB1dEFycmF5Lmxlbmd0aC8yO1xuICAgICAgICBmb3IgKGxldCBpPTA7aTxtaWRwb2ludDtpKyspe1xuICAgICAgICAgICAgYXJyYXlMZWZ0LnB1c2goaW5wdXRBcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT1NYXRoLnJvdW5kKG1pZHBvaW50KTtpPGlucHV0QXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBhcnJheVJpZ2h0LnB1c2goaW5wdXRBcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNvcnRlZExlZnQgPSBtZXJnZVNvcnQoYXJyYXlMZWZ0KTtcbiAgICAgICAgbGV0IHNvcnRlZExlZnRMZW5ndGggPSBzb3J0ZWRMZWZ0Lmxlbmd0aFxuICAgICAgICBsZXQgc29ydGVkUmlnaHQgPSBtZXJnZVNvcnQoYXJyYXlSaWdodCk7XG4gICAgICAgIGxldCBzb3J0ZWRSaWdodExlbmd0aCA9IHNvcnRlZFJpZ2h0Lmxlbmd0aFxuXG4gICAgICAgXG4gICAgICAgIGxldCBzb3J0ZWRBcnJheSA9IFtdO1xuICAgICAgICBsZXQgaj0wO1xuICAgICAgICBsZXQgaD0wO1xuICAgIG1lcmdlTG9vcDpmb3IobGV0IGs9MDtrPChzb3J0ZWRMZWZ0TGVuZ3RoK3NvcnRlZFJpZ2h0TGVuZ3RoKTtrKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihzb3J0ZWRMZWZ0W2hdPHNvcnRlZFJpZ2h0W2pdKXtcbiAgICAgICAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKHNvcnRlZExlZnRbaF0pO1xuICAgICAgICAgICAgICAgIGgrKztcbiAgICAgICAgICAgICAgICAvL2lmIGg+c29ydGVkTGVmdExlbmd0aCAtIDEgdGhlbiBwdXNoIHRoZSByZXN0IG9mIHNvcnRlZHJpZ2h0IGFuZCBicmVha1xuICAgICAgICAgICAgICAgIGlmKGggPj0gc29ydGVkTGVmdExlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGZvcihqO2o8c29ydGVkUmlnaHRMZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goc29ydGVkUmlnaHRbal0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrIG1lcmdlTG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goc29ydGVkUmlnaHRbal0pO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAvL2lmIGo+c29ydGVkUmlnaHRMZW5ndGggLSAxIHRoZW4gcHVzaCB0aGUgcmVzdCBvZiBzb3J0ZWRsZWZ0IGFuZCBicmVha1xuICAgICAgICAgICAgICAgIGlmKGogPj0gc29ydGVkUmlnaHRMZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBmb3IoaDtoPHNvcnRlZExlZnRMZW5ndGg7aCsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goc29ydGVkTGVmdFtoXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWsgbWVyZ2VMb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3J0ZWRBcnJheTtcblxuICAgIH1cbiAgICBcblxufVxuXG5leHBvcnR7bWVyZ2VTb3J0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mergeSort.js\n");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _binarysearchtree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarysearchtree.js */ \"./src/binarysearchtree.js\");\n\nlet test = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];\nconsole.log(test);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7O0FBQTBDO0FBQzFDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHQuanM/NjhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZWV9IGZyb20gXCIuL2JpbmFyeXNlYXJjaHRyZWUuanNcIlxubGV0IHRlc3QgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdO1xuY29uc29sZS5sb2codGVzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;