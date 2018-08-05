module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel__ = __webpack_require__("antd/lib/carousel");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__("./style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var _jsxFileName = "/Users/yongchunwu/Desktop/workSpace/PossibleMaybe.github.io/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Home =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderHeader", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          className: "jsx-2293673829" + " " + "outer-framework"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          className: "jsx-2293673829" + " " + "fix-header"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          className: "jsx-2293673829" + " " + "theme-bg"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          className: "jsx-2293673829" + " " + "framework home-header"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          className: "jsx-2293673829" + " " + "home-logo"
        }, "\u6E2F\u673A\u9500\u552E"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          className: "jsx-2293673829" + " " + "home-contact"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          className: "jsx-2293673829" + " " + "mail-icon"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          spin: true,
          style: {
            'margin-right': '5px',
            'font-size': '18px'
          },
          type: "mail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }), "youlikeisthebest@163.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          className: "jsx-2293673829"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          spin: true,
          style: {
            'margin-right': '5px',
            'font-size': '18px'
          },
          type: "mobile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }), "17602170958"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "2293673829",
          css: ".outer-framework.jsx-2293673829{height:60px;}.fix-header.jsx-2293673829{width:100%;position:fixed;z-index:10;}.home-header.jsx-2293673829{color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.home-logo.jsx-2293673829{font-size:40px;font-family:'Righteous',cursive;}.mail-icon.jsx-2293673829{padding-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFHb0IsQUFHRCxBQUtBLEFBTUksQUFJSSxXQWRKLEFBS0YsQ0FSZCxHQWNrQyxJQUlsQyxPQWRZLFdBQ1osVUFVQSxzQ0FOK0IsbUhBQ1gsNkZBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b25nY2h1bnd1L0Rlc2t0b3Avd29ya1NwYWNlL1Bvc3NpYmxlTWF5YmUuZ2l0aHViLmlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9saWIvYnV0dG9uJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdhbnRkL2xpYi9jYXJvdXNlbCc7XG5pbXBvcnQgSWNvbiBmcm9tICdhbnRkL2xpYi9pY29uJztcbmltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXHRcblxuXHRyZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXRlci1mcmFtZXdvcmtcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtYmdcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcmFtZXdvcmsgaG9tZS1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbG9nb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx05riv5py66ZSA5ZSuXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lLWNvbnRhY3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1haWwtaWNvblwiPjxJY29uIHNwaW49e3RydWV9IHN0eWxlPXt7J21hcmdpbi1yaWdodCc6ICc1cHgnLCAnZm9udC1zaXplJzogJzE4cHgnfX0gdHlwZT1cIm1haWxcIiAvPnlvdWxpa2Vpc3RoZWJlc3RAMTYzLmNvbTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjxJY29uIHNwaW49e3RydWV9IHN0eWxlPXt7J21hcmdpbi1yaWdodCc6ICc1cHgnLCAnZm9udC1zaXplJzogJzE4cHgnfX0gdHlwZT1cIm1vYmlsZVwiIC8+MTc2MDIxNzA5NTg8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdC5vdXRlci1mcmFtZXdvcmsge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuZml4LWhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDEwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhvbWUtaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ob21lLWxvZ28ge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDQwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5tYWlsLWljb24ge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0KVxuXHR9XG5cdHJlbmRlckNhcm91c2VsID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrXCI+XG5cdFx0XHRcdFx0PENhcm91c2VsIGF1dG9wbGF5PlxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2Fyb3VzZWwtMS5qcGVnXCIgLz48L2Rpdj5cblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWdcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nhcm91c2VsLTIuanBlZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1nXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJvdXNlbC0zLmpwZWdcIiAvPjwvZGl2PlxuXHRcdFx0ICAgIFx0PC9DYXJvdXNlbD5cblx0XHRcdCAgICBcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdCAgICBcdFx0LmNhcm91c2VsLWltZyB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY2Fyb3VzZWwtaW1nIGltZyB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdCAgICBcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHQpXG5cblx0fVxuXG5cdHJlbmRlckJvdHRvbSA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b20tYmdcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcmFtZXdvcmsgYm90dG9tLXdyYXBwZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPiBcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG90LWJvcmRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uIHR5cGU9XCJlbnZpcm9ubWVudC1vXCIgc3R5bGU9e3snZm9udC1zaXplJzogJzE4cHgnLCAnY29sb3InOiAncmdiKDE4LDE2NywyMDIpJ319IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aDM+QWRkcmVzczwvaDM+XG5cdFx0XHRcdFx0XHQ8cD7msZ/oi4/nnIHml6DplKHluILmg6DlsbHljLrpmLPlsbHplYc8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG90LWJvcmRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uIHR5cGU9XCJtb2JpbGVcIiBzdHlsZT17eydmb250LXNpemUnOiAnMThweCcsICdjb2xvcic6ICdyZ2IoMTgsMTY3LDIwMiknfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoMz5DYWxsIFVzPC9oMz5cblx0XHRcdFx0XHRcdDxwPjE3NjAyMTcwOTU4PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvdC1ib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwid2VjaGF0XCIgc3R5bGU9e3snZm9udC1zaXplJzogJzE4cHgnLCAnY29sb3InOiAncmdiKDE4LDE2NywyMDIpJ319IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aDM+d2VjaGF0PC9oMz5cblx0XHRcdFx0XHRcdDxwPjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuYm90dG9tLWJnIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDQwcHggMDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYigzNCwzNCwzNCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5ib3R0b20td3JhcHBlciB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5mbGV4LTEge1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmRvdC1ib3JkZXIge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBkb3R0ZWQgcmdiKDE4LDE2NywyMDIpO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHJnYigxOCwxNjcsMjAyKTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPmhvbWU8L3RpdGxlPlxuXHRcdFx0XHQgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXHRcdFx0XHQgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuNi4zL2FudGQuY3NzJy8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJDYXJvdXNlbCgpfVxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckJvdHRvbSgpfVxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmhvbWUtaGVhZGVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XHRcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
        }));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderCarousel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          className: "jsx-1876831245" + " " + "framework"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel___default.a, {
          autoplay: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          className: "jsx-1876831245" + " " + "carousel-img"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-1.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          className: "jsx-1876831245"
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          className: "jsx-1876831245" + " " + "carousel-img"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-2.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          className: "jsx-1876831245"
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          className: "jsx-1876831245" + " " + "carousel-img"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-3.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          className: "jsx-1876831245"
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1876831245",
          css: ".carousel-img.jsx-1876831245{height:400px;}.carousel-img.jsx-1876831245 img.jsx-1876831245{width:100%;height:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFb0IsQUFHcUIsQUFHRixXQUNFLEVBSGQsV0FJQSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9uZ2NodW53dS9EZXNrdG9wL3dvcmtTcGFjZS9Qb3NzaWJsZU1heWJlLmdpdGh1Yi5pbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnYW50ZC9saWIvY2Fyb3VzZWwnO1xuaW1wb3J0IEljb24gZnJvbSAnYW50ZC9saWIvaWNvbic7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0XG5cblx0cmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItZnJhbWV3b3JrXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXgtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWJnXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGhvbWUtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lLWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHRcdOa4r+acuumUgOWUrlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYWlsLWljb25cIj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtYWlsXCIgLz55b3VsaWtlaXN0aGViZXN0QDE2My5jb208L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtb2JpbGVcIiAvPjE3NjAyMTcwOTU4PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQub3V0ZXItZnJhbWV3b3JrIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZpeC1oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ob21lLWhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaG9tZS1sb2dvIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubWFpbC1pY29uIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdClcblx0fVxuXHRyZW5kZXJDYXJvdXNlbCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyYW1ld29ya1wiPlxuXHRcdFx0XHRcdDxDYXJvdXNlbCBhdXRvcGxheT5cblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWdcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nhcm91c2VsLTEuanBlZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1nXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJvdXNlbC0yLmpwZWdcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2Fyb3VzZWwtMy5qcGVnXCIgLz48L2Rpdj5cblx0XHRcdCAgICBcdDwvQ2Fyb3VzZWw+XG5cdFx0XHQgICAgXHQ8c3R5bGUganN4PntgXG5cdFx0XHQgICAgXHRcdC5jYXJvdXNlbC1pbWcge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcm91c2VsLWltZyBpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHQgICAgXHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0KVxuXG5cdH1cblxuXHRyZW5kZXJCb3R0b20gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJnXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGJvdHRvbS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj4gXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvdC1ib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwiZW52aXJvbm1lbnQtb1wiIHN0eWxlPXt7J2ZvbnQtc2l6ZSc6ICcxOHB4JywgJ2NvbG9yJzogJ3JnYigxOCwxNjcsMjAyKSd9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGgzPkFkZHJlc3M8L2gzPlxuXHRcdFx0XHRcdFx0PHA+5rGf6IuP55yB5peg6ZSh5biC5oOg5bGx5Yy66Ziz5bGx6ZWHPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvdC1ib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwibW9iaWxlXCIgc3R5bGU9e3snZm9udC1zaXplJzogJzE4cHgnLCAnY29sb3InOiAncmdiKDE4LDE2NywyMDIpJ319IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aDM+Q2FsbCBVczwvaDM+XG5cdFx0XHRcdFx0XHQ8cD4xNzYwMjE3MDk1ODwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb3QtYm9yZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PEljb24gdHlwZT1cIndlY2hhdFwiIHN0eWxlPXt7J2ZvbnQtc2l6ZSc6ICcxOHB4JywgJ2NvbG9yJzogJ3JnYigxOCwxNjcsMjAyKSd9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGgzPndlY2hhdDwvaDM+XG5cdFx0XHRcdFx0XHQ8cD48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmJvdHRvbS1iZyB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0MHB4IDA7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMzQsMzQsMzQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYm90dG9tLXdyYXBwZXIge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZmxleC0xIHtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5kb3QtYm9yZGVyIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggZG90dGVkIHJnYigxOCwxNjcsMjAyKTtcblx0XHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdGNvbG9yOiByZ2IoMTgsMTY3LDIwMik7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5ob21lPC90aXRsZT5cblx0XHRcdFx0ICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cblx0XHRcdFx0ICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjYuMy9hbnRkLmNzcycvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVySGVhZGVyKCl9XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyQ2Fyb3VzZWwoKX1cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJCb3R0b20oKX1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5ob21lLWhlYWRlciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVx0XG4iXX0= */\n/*@ sourceURL=pages/index.js */"
        }));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderBottom", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          className: "jsx-380648298" + " " + "bottom-bg"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          className: "jsx-380648298" + " " + "framework bottom-wrapper"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          className: "jsx-380648298" + " " + "flex-1"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          className: "jsx-380648298"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          className: "jsx-380648298" + " " + "dot-border"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          type: "environment-o",
          style: {
            'font-size': '18px',
            'color': 'rgb(18,167,202)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          className: "jsx-380648298"
        }, "Address"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          className: "jsx-380648298"
        }, "\u6C5F\u82CF\u7701\u65E0\u9521\u5E02\u60E0\u5C71\u533A\u9633\u5C71\u9547")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          className: "jsx-380648298" + " " + "flex-1"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          className: "jsx-380648298"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          className: "jsx-380648298" + " " + "dot-border"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          type: "mobile",
          style: {
            'font-size': '18px',
            'color': 'rgb(18,167,202)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          className: "jsx-380648298"
        }, "Call Us"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          className: "jsx-380648298"
        }, "17602170958")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          className: "jsx-380648298" + " " + "flex-1"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          className: "jsx-380648298"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          className: "jsx-380648298" + " " + "dot-border"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          type: "wechat",
          style: {
            'font-size': '18px',
            'color': 'rgb(18,167,202)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          className: "jsx-380648298"
        }, "wechat"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          className: "jsx-380648298"
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "380648298",
          css: ".bottom-bg.jsx-380648298{padding:40px 0;background:rgb(34,34,34);}.bottom-wrapper.jsx-380648298{color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flex-1.jsx-380648298{-webkit-flex:1;-ms-flex:1;flex:1;}.dot-border.jsx-380648298{margin:0 auto;border:1px dotted rgb(18,167,202);width:40px;height:40px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h3.jsx-380648298{font-family:'Righteous',cursive;color:rgb(18,167,202);font-size:20px;text-align:center;padding:10px 0;}p.jsx-380648298{font-family:'Righteous',cursive;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHZ0IsQUFHc0IsQUFJSixBQUlKLEFBR08sQUFVbUIsQUFPQSxXQXZCcEIsR0FPcUIsQ0FYVCxpQkFxQkgsQUFPSixDQXBCbkIsT0FQQSxRQVdZLEVBaUJaLElBUGdCLEtBVEgsVUFVTSxFQVRJLGNBVHZCLEVBbUJnQixNQVRGLFNBVWQsaUVBVG9CLDZGQUNJLG1HQUN4QiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9uZ2NodW53dS9EZXNrdG9wL3dvcmtTcGFjZS9Qb3NzaWJsZU1heWJlLmdpdGh1Yi5pbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnYW50ZC9saWIvY2Fyb3VzZWwnO1xuaW1wb3J0IEljb24gZnJvbSAnYW50ZC9saWIvaWNvbic7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0XG5cblx0cmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItZnJhbWV3b3JrXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXgtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWJnXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGhvbWUtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lLWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHRcdOa4r+acuumUgOWUrlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYWlsLWljb25cIj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtYWlsXCIgLz55b3VsaWtlaXN0aGViZXN0QDE2My5jb208L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtb2JpbGVcIiAvPjE3NjAyMTcwOTU4PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQub3V0ZXItZnJhbWV3b3JrIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZpeC1oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ob21lLWhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaG9tZS1sb2dvIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubWFpbC1pY29uIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdClcblx0fVxuXHRyZW5kZXJDYXJvdXNlbCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyYW1ld29ya1wiPlxuXHRcdFx0XHRcdDxDYXJvdXNlbCBhdXRvcGxheT5cblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWdcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nhcm91c2VsLTEuanBlZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1nXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJvdXNlbC0yLmpwZWdcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2Fyb3VzZWwtMy5qcGVnXCIgLz48L2Rpdj5cblx0XHRcdCAgICBcdDwvQ2Fyb3VzZWw+XG5cdFx0XHQgICAgXHQ8c3R5bGUganN4PntgXG5cdFx0XHQgICAgXHRcdC5jYXJvdXNlbC1pbWcge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcm91c2VsLWltZyBpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHQgICAgXHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0KVxuXG5cdH1cblxuXHRyZW5kZXJCb3R0b20gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJnXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGJvdHRvbS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj4gXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvdC1ib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwiZW52aXJvbm1lbnQtb1wiIHN0eWxlPXt7J2ZvbnQtc2l6ZSc6ICcxOHB4JywgJ2NvbG9yJzogJ3JnYigxOCwxNjcsMjAyKSd9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGgzPkFkZHJlc3M8L2gzPlxuXHRcdFx0XHRcdFx0PHA+5rGf6IuP55yB5peg6ZSh5biC5oOg5bGx5Yy66Ziz5bGx6ZWHPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvdC1ib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwibW9iaWxlXCIgc3R5bGU9e3snZm9udC1zaXplJzogJzE4cHgnLCAnY29sb3InOiAncmdiKDE4LDE2NywyMDIpJ319IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aDM+Q2FsbCBVczwvaDM+XG5cdFx0XHRcdFx0XHQ8cD4xNzYwMjE3MDk1ODwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb3QtYm9yZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PEljb24gdHlwZT1cIndlY2hhdFwiIHN0eWxlPXt7J2ZvbnQtc2l6ZSc6ICcxOHB4JywgJ2NvbG9yJzogJ3JnYigxOCwxNjcsMjAyKSd9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGgzPndlY2hhdDwvaDM+XG5cdFx0XHRcdFx0XHQ8cD48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmJvdHRvbS1iZyB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0MHB4IDA7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMzQsMzQsMzQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYm90dG9tLXdyYXBwZXIge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZmxleC0xIHtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5kb3QtYm9yZGVyIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggZG90dGVkIHJnYigxOCwxNjcsMjAyKTtcblx0XHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdGNvbG9yOiByZ2IoMTgsMTY3LDIwMik7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5ob21lPC90aXRsZT5cblx0XHRcdFx0ICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cblx0XHRcdFx0ICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjYuMy9hbnRkLmNzcycvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVySGVhZGVyKCl9XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyQ2Fyb3VzZWwoKX1cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJCb3R0b20oKX1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5ob21lLWhlYWRlciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVx0XG4iXX0= */\n/*@ sourceURL=pages/index.js */"
        }));
      }
    }), _temp));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: "jsx-707452663"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: "jsx-707452663"
      }, "home"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: "jsx-707452663"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.6.3/antd.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-707452663"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        className: "jsx-707452663"
      }, this.renderHeader(), this.renderCarousel(), this.renderBottom()), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "707452663",
        css: ".home-header.jsx-707452663{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9LZ0IsQUFHb0IsMEVBQ2lCLG1IQUNYLDZGQUNwQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9uZ2NodW53dS9EZXNrdG9wL3dvcmtTcGFjZS9Qb3NzaWJsZU1heWJlLmdpdGh1Yi5pbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnYW50ZC9saWIvY2Fyb3VzZWwnO1xuaW1wb3J0IEljb24gZnJvbSAnYW50ZC9saWIvaWNvbic7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0XG5cblx0cmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItZnJhbWV3b3JrXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXgtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWJnXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGhvbWUtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lLWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHRcdOa4r+acuumUgOWUrlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYWlsLWljb25cIj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtYWlsXCIgLz55b3VsaWtlaXN0aGViZXN0QDE2My5jb208L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtb2JpbGVcIiAvPjE3NjAyMTcwOTU4PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQub3V0ZXItZnJhbWV3b3JrIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmZpeC1oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ob21lLWhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaG9tZS1sb2dvIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubWFpbC1pY29uIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdClcblx0fVxuXHRyZW5kZXJDYXJvdXNlbCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyYW1ld29ya1wiPlxuXHRcdFx0XHRcdDxDYXJvdXNlbCBhdXRvcGxheT5cblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWdcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nhcm91c2VsLTEuanBlZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1nXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJvdXNlbC0yLmpwZWdcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2Fyb3VzZWwtMy5qcGVnXCIgLz48L2Rpdj5cblx0XHRcdCAgICBcdDwvQ2Fyb3VzZWw+XG5cdFx0XHQgICAgXHQ8c3R5bGUganN4PntgXG5cdFx0XHQgICAgXHRcdC5jYXJvdXNlbC1pbWcge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcm91c2VsLWltZyBpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHQgICAgXHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0KVxuXG5cdH1cblxuXHRyZW5kZXJCb3R0b20gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJnXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGJvdHRvbS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj4gXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvdC1ib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwiZW52aXJvbm1lbnQtb1wiIHN0eWxlPXt7J2ZvbnQtc2l6ZSc6ICcxOHB4JywgJ2NvbG9yJzogJ3JnYigxOCwxNjcsMjAyKSd9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGgzPkFkZHJlc3M8L2gzPlxuXHRcdFx0XHRcdFx0PHA+5rGf6IuP55yB5peg6ZSh5biC5oOg5bGx5Yy66Ziz5bGx6ZWHPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvdC1ib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwibW9iaWxlXCIgc3R5bGU9e3snZm9udC1zaXplJzogJzE4cHgnLCAnY29sb3InOiAncmdiKDE4LDE2NywyMDIpJ319IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aDM+Q2FsbCBVczwvaDM+XG5cdFx0XHRcdFx0XHQ8cD4xNzYwMjE3MDk1ODwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb3QtYm9yZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PEljb24gdHlwZT1cIndlY2hhdFwiIHN0eWxlPXt7J2ZvbnQtc2l6ZSc6ICcxOHB4JywgJ2NvbG9yJzogJ3JnYigxOCwxNjcsMjAyKSd9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGgzPndlY2hhdDwvaDM+XG5cdFx0XHRcdFx0XHQ8cD48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmJvdHRvbS1iZyB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0MHB4IDA7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMzQsMzQsMzQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYm90dG9tLXdyYXBwZXIge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZmxleC0xIHtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5kb3QtYm9yZGVyIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggZG90dGVkIHJnYigxOCwxNjcsMjAyKTtcblx0XHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdGNvbG9yOiByZ2IoMTgsMTY3LDIwMik7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5ob21lPC90aXRsZT5cblx0XHRcdFx0ICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cblx0XHRcdFx0ICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjYuMy9hbnRkLmNzcycvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVySGVhZGVyKCl9XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyQ2Fyb3VzZWwoKX1cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJCb3R0b20oKX1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5ob21lLWhlYWRlciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVx0XG4iXX0= */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);



/***/ }),

/***/ "./style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/carousel":
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map