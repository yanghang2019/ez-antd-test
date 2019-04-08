(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("antd"), require("react"), require("react-copy-to-clipboard"));
	else if(typeof define === 'function' && define.amd)
		define("@ezbuy/ez-antd", ["antd", "react", "react-copy-to-clipboard"], factory);
	else if(typeof exports === 'object')
		exports["@ezbuy/ez-antd"] = factory(require("antd"), require("react"), require("react-copy-to-clipboard"));
	else
		root["@ezbuy/ez-antd"] = factory(root["antd"], root["react"], root["react-copy-to-clipboard"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_copy_to_clipboard__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Component/Copy/index.tsx":
/*!**************************************!*\
  !*** ./src/Component/Copy/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = __webpack_require__(/*! antd */ "antd");
const React = __webpack_require__(/*! react */ "react");
const react_copy_to_clipboard_1 = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
const styles = __webpack_require__(/*! ./styles.scss */ "./src/Component/Copy/styles.scss");
function Copy(props) {
    return (React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: props.text, onCopy: () => antd_1.message.success(`${props.msg}: 复制成功!`, 2) },
        React.createElement("span", { className: styles.mln }, props.content || props.text)));
}
exports.Copy = Copy;
function CopyFloat(props) {
    return (React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: props.text, onCopy: () => antd_1.message.success(`${props.title}: 复制成功!`, 2) }, props.content && !props.href ? (React.createElement("span", { className: styles.mln }, props.content)) : (React.createElement("a", { style: { color: props.content ? "" : "orange" }, type: "primary", target: "_blank", href: props.href ? props.href : "javascript:void(0)" }, props.href ? props.text : "复制"))));
}
exports.CopyFloat = CopyFloat;


/***/ }),

/***/ "./src/Component/Copy/styles.scss":
/*!****************************************!*\
  !*** ./src/Component/Copy/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"mln":"src-Component-Copy-styles_mln_2Jefg"};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Copy_1 = __webpack_require__(/*! ./Component/Copy */ "./src/Component/Copy/index.tsx");
exports.Copy = Copy_1.Copy;
exports.CopyFloat = Copy_1.CopyFloat;


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_copy_to_clipboard__;

/***/ })

/******/ });
});
//# sourceMappingURL=main.bundle.js.map