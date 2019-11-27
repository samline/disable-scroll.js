/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/disable-scroll.js":
/*!*******************************!*\
  !*** ./src/disable-scroll.js ***!
  \*******************************/
/*! exports provided: disabled, enabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disabled\", function() { return disabled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enabled\", function() { return enabled; });\n/**\n * import * as scroll from 'path/to/scroll'\n *\n * scroll.enabled()\n * scroll.disabled()\n */\nvar $html = document.querySelector('html');\nvar scrollDisabledClass = 'scroll-disabled';\nvar state = {\n  'scrolled': null\n};\n\nvar _enabled = function _enabled() {\n  state.scrolled = state.scrolled || 0;\n  if (!$html.classList.contains(scrollDisabledClass)) return false;\n  $html.classList.remove(scrollDisabledClass);\n  $html.style = '';\n  window.scrollTo(0, state.scrolled);\n};\n\nvar _disabled = function _disabled() {\n  var scrolled = window.pageYOffset;\n  if ($html.classList.contains(scrollDisabledClass)) return false;\n  $html.classList.add(scrollDisabledClass);\n  $html.style = 'overflow-x: hidden; position: fixed; top: -' + scrolled + 'px';\n  state.scrolled = scrolled;\n};\n\nvar disabled = _disabled;\nvar enabled = _enabled;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGlzYWJsZS1zY3JvbGwuanM/ODRmNCJdLCJuYW1lcyI6WyIkaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbERpc2FibGVkQ2xhc3MiLCJzdGF0ZSIsIl9lbmFibGVkIiwic2Nyb2xsZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJfZGlzYWJsZWQiLCJwYWdlWU9mZnNldCIsImFkZCIsImRpc2FibGVkIiwiZW5hYmxlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWQ7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxpQkFBNUI7QUFDQSxJQUFJQyxLQUFLLEdBQUc7QUFDVixjQUFZO0FBREYsQ0FBWjs7QUFJQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCRCxPQUFLLENBQUNFLFFBQU4sR0FBaUJGLEtBQUssQ0FBQ0UsUUFBTixJQUFrQixDQUFuQztBQUVBLE1BQUksQ0FBQ04sS0FBSyxDQUFDTyxTQUFOLENBQWdCQyxRQUFoQixDQUF5QkwsbUJBQXpCLENBQUwsRUFDRSxPQUFPLEtBQVA7QUFFRkgsT0FBSyxDQUFDTyxTQUFOLENBQWdCRSxNQUFoQixDQUF1Qk4sbUJBQXZCO0FBQ0FILE9BQUssQ0FBQ1UsS0FBTixHQUFjLEVBQWQ7QUFFQUMsUUFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CUixLQUFLLENBQUNFLFFBQXpCO0FBQ0QsQ0FWRDs7QUFXQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLE1BQU1QLFFBQVEsR0FBR0ssTUFBTSxDQUFDRyxXQUF4QjtBQUVBLE1BQUlkLEtBQUssQ0FBQ08sU0FBTixDQUFnQkMsUUFBaEIsQ0FBeUJMLG1CQUF6QixDQUFKLEVBQ0UsT0FBTyxLQUFQO0FBRUZILE9BQUssQ0FBQ08sU0FBTixDQUFnQlEsR0FBaEIsQ0FBb0JaLG1CQUFwQjtBQUNBSCxPQUFLLENBQUNVLEtBQU4sR0FBYyxnREFBZ0RKLFFBQWhELEdBQTJELElBQXpFO0FBRUFGLE9BQUssQ0FBQ0UsUUFBTixHQUFpQkEsUUFBakI7QUFDRCxDQVZEOztBQVlPLElBQU1VLFFBQVEsR0FBSUgsU0FBbEI7QUFDQSxJQUFNSSxPQUFPLEdBQUtaLFFBQWxCIiwiZmlsZSI6Ii4vc3JjL2Rpc2FibGUtc2Nyb2xsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBpbXBvcnQgKiBhcyBzY3JvbGwgZnJvbSAncGF0aC90by9zY3JvbGwnXG4gKlxuICogc2Nyb2xsLmVuYWJsZWQoKVxuICogc2Nyb2xsLmRpc2FibGVkKClcbiAqL1xuXG5jb25zdCAkaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxuY29uc3Qgc2Nyb2xsRGlzYWJsZWRDbGFzcyA9ICdzY3JvbGwtZGlzYWJsZWQnXG5sZXQgc3RhdGUgPSB7XG4gICdzY3JvbGxlZCc6IG51bGxcbn1cblxuY29uc3QgX2VuYWJsZWQgPSAoKSA9PiB7XG4gIHN0YXRlLnNjcm9sbGVkID0gc3RhdGUuc2Nyb2xsZWQgfHwgMFxuXG4gIGlmICghJGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNjcm9sbERpc2FibGVkQ2xhc3MpKVxuICAgIHJldHVybiBmYWxzZVxuXG4gICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsRGlzYWJsZWRDbGFzcylcbiAgJGh0bWwuc3R5bGUgPSAnJ1xuXG4gIHdpbmRvdy5zY3JvbGxUbygwLCBzdGF0ZS5zY3JvbGxlZClcbn1cbmNvbnN0IF9kaXNhYmxlZCA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXRcblxuICBpZiAoJGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNjcm9sbERpc2FibGVkQ2xhc3MpKVxuICAgIHJldHVybiBmYWxzZVxuXG4gICRodG1sLmNsYXNzTGlzdC5hZGQoc2Nyb2xsRGlzYWJsZWRDbGFzcylcbiAgJGh0bWwuc3R5bGUgPSAnb3ZlcmZsb3cteDogaGlkZGVuOyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogLScgKyBzY3JvbGxlZCArICdweCdcblxuICBzdGF0ZS5zY3JvbGxlZCA9IHNjcm9sbGVkXG59XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZCA9ICBfZGlzYWJsZWRcbmV4cG9ydCBjb25zdCBlbmFibGVkICA9ICBfZW5hYmxlZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/disable-scroll.js\n");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/disable-scroll.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuel.olvera/Documents/sites/htdocs/samline/disable-scroll/src/disable-scroll.js */"./src/disable-scroll.js");


/***/ })

/******/ });