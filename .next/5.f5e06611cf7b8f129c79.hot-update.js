webpackHotUpdate(5,{

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel__ = __webpack_require__("./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__("./style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var _jsxFileName = "/Users/yongchunwu/Desktop/workSpace/PossibleMaybe.github.io/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
          className: "jsx-14082258" + " " + " theme-bg"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          className: "jsx-14082258" + " " + "framework home-header"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          className: "jsx-14082258" + " " + "home-logo"
        }, "\u6E2F\u673A\u9500\u552E"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          className: "jsx-14082258" + " " + "home-contact"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          className: "jsx-14082258" + " " + "mail-icon"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          spin: true,
          style: {
            'margin-right': '5px',
            'font-size': '18px'
          },
          type: "mail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }), "youlikeisthebest@163.com"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          className: "jsx-14082258"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          spin: true,
          style: {
            'margin-right': '5px',
            'font-size': '18px'
          },
          type: "mobile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }), "17602170958"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "14082258",
          css: ".home-header.jsx-14082258{color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.home-logo.jsx-14082258{font-size:40px;font-family:'Righteous',cursive;}.mail-icon.jsx-14082258{padding-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCaUIsQUFHbUIsQUFNSSxBQUlJLFdBVE4sSUFNb0IsSUFJbEMsNEJBSEEsc0NBTitCLG1IQUNYLDZGQUNwQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9uZ2NodW53dS9EZXNrdG9wL3dvcmtTcGFjZS9Qb3NzaWJsZU1heWJlLmdpdGh1Yi5pbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnYW50ZC9saWIvY2Fyb3VzZWwnO1xuaW1wb3J0IEljb24gZnJvbSAnYW50ZC9saWIvaWNvbic7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0XG5cblx0cmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHRoZW1lLWJnXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcmFtZXdvcmsgaG9tZS1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1sb2dvXCI+XG5cdFx0XHRcdFx0XHRcdOa4r+acuumUgOWUrlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtY29udGFjdFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYWlsLWljb25cIj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtYWlsXCIgLz55b3VsaWtlaXN0aGViZXN0QDE2My5jb208L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxJY29uIHNwaW49e3RydWV9IHN0eWxlPXt7J21hcmdpbi1yaWdodCc6ICc1cHgnLCAnZm9udC1zaXplJzogJzE4cHgnfX0gdHlwZT1cIm1vYmlsZVwiIC8+MTc2MDIxNzA5NTg8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuaG9tZS1oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhvbWUtbG9nbyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm1haWwtaWNvbiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxuXHRyZW5kZXJDYXJvdXNlbCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyYW1ld29ya1wiPlxuXHRcdFx0XHRcdDxDYXJvdXNlbCBhdXRvcGxheT5cblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWdcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nhcm91c2VsLTEuanBlZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1nXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJvdXNlbC0yLmpwZWdcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2Fyb3VzZWwtMy5qcGVnXCIgLz48L2Rpdj5cblx0XHRcdCAgICBcdDwvQ2Fyb3VzZWw+XG5cdFx0XHQgICAgXHQ8c3R5bGUganN4PntgXG5cdFx0XHQgICAgXHRcdC5jYXJvdXNlbC1pbWcge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcm91c2VsLWltZyBpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHQgICAgXHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0KVxuXG5cdH1cblxuXHRyZW5kZXJCb3R0b20gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGJvdHRvbS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5maXJzdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+c2Vjb25kPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj50aGlyZDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPmhvbWU8L3RpdGxlPlxuXHRcdFx0XHQgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXHRcdFx0XHQgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuNi4zL2FudGQuY3NzJy8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJDYXJvdXNlbCgpfVxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckJvdHRvbSgpfVxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmhvbWUtaGVhZGVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XHRcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
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
            lineNumber: 47
          },
          className: "jsx-1876831245" + " " + "framework"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel___default.a, {
          autoplay: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          className: "jsx-1876831245" + " " + "carousel-img"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-1.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          className: "jsx-1876831245"
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          className: "jsx-1876831245" + " " + "carousel-img"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-2.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          className: "jsx-1876831245"
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          className: "jsx-1876831245" + " " + "carousel-img"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-3.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          className: "jsx-1876831245"
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1876831245",
          css: ".carousel-img.jsx-1876831245{height:400px;}.carousel-img.jsx-1876831245 img.jsx-1876831245{width:100%;height:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Eb0IsQUFHcUIsQUFHRixXQUNFLEVBSGQsV0FJQSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9uZ2NodW53dS9EZXNrdG9wL3dvcmtTcGFjZS9Qb3NzaWJsZU1heWJlLmdpdGh1Yi5pbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnYW50ZC9saWIvY2Fyb3VzZWwnO1xuaW1wb3J0IEljb24gZnJvbSAnYW50ZC9saWIvaWNvbic7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0XG5cblx0cmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHRoZW1lLWJnXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcmFtZXdvcmsgaG9tZS1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1sb2dvXCI+XG5cdFx0XHRcdFx0XHRcdOa4r+acuumUgOWUrlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtY29udGFjdFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYWlsLWljb25cIj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtYWlsXCIgLz55b3VsaWtlaXN0aGViZXN0QDE2My5jb208L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxJY29uIHNwaW49e3RydWV9IHN0eWxlPXt7J21hcmdpbi1yaWdodCc6ICc1cHgnLCAnZm9udC1zaXplJzogJzE4cHgnfX0gdHlwZT1cIm1vYmlsZVwiIC8+MTc2MDIxNzA5NTg8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuaG9tZS1oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhvbWUtbG9nbyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm1haWwtaWNvbiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxuXHRyZW5kZXJDYXJvdXNlbCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyYW1ld29ya1wiPlxuXHRcdFx0XHRcdDxDYXJvdXNlbCBhdXRvcGxheT5cblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWdcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nhcm91c2VsLTEuanBlZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1nXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJvdXNlbC0yLmpwZWdcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2Fyb3VzZWwtMy5qcGVnXCIgLz48L2Rpdj5cblx0XHRcdCAgICBcdDwvQ2Fyb3VzZWw+XG5cdFx0XHQgICAgXHQ8c3R5bGUganN4PntgXG5cdFx0XHQgICAgXHRcdC5jYXJvdXNlbC1pbWcge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcm91c2VsLWltZyBpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHQgICAgXHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0KVxuXG5cdH1cblxuXHRyZW5kZXJCb3R0b20gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGJvdHRvbS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5maXJzdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+c2Vjb25kPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj50aGlyZDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPmhvbWU8L3RpdGxlPlxuXHRcdFx0XHQgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXHRcdFx0XHQgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuNi4zL2FudGQuY3NzJy8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJDYXJvdXNlbCgpfVxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckJvdHRvbSgpfVxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmhvbWUtaGVhZGVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XHRcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
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
            lineNumber: 70
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "framework bottom-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "flex-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, "first"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "flex-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, "second"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "flex-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, "third")));
      }
    }), _temp));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-707452663"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-707452663"
      }, "home"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-707452663"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.6.3/antd.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-707452663"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-707452663"
      }, this.renderHeader(), this.renderCarousel(), this.renderBottom()), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "707452663",
        css: ".home-header.jsx-707452663{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGZ0IsQUFHb0IsMEVBQ2lCLG1IQUNYLDZGQUNwQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9uZ2NodW53dS9EZXNrdG9wL3dvcmtTcGFjZS9Qb3NzaWJsZU1heWJlLmdpdGh1Yi5pbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnYW50ZC9saWIvY2Fyb3VzZWwnO1xuaW1wb3J0IEljb24gZnJvbSAnYW50ZC9saWIvaWNvbic7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0XG5cblx0cmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHRoZW1lLWJnXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcmFtZXdvcmsgaG9tZS1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1sb2dvXCI+XG5cdFx0XHRcdFx0XHRcdOa4r+acuumUgOWUrlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtY29udGFjdFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYWlsLWljb25cIj48SWNvbiBzcGluPXt0cnVlfSBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnNXB4JywgJ2ZvbnQtc2l6ZSc6ICcxOHB4J319IHR5cGU9XCJtYWlsXCIgLz55b3VsaWtlaXN0aGViZXN0QDE2My5jb208L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxJY29uIHNwaW49e3RydWV9IHN0eWxlPXt7J21hcmdpbi1yaWdodCc6ICc1cHgnLCAnZm9udC1zaXplJzogJzE4cHgnfX0gdHlwZT1cIm1vYmlsZVwiIC8+MTc2MDIxNzA5NTg8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuaG9tZS1oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmhvbWUtbG9nbyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm1haWwtaWNvbiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxuXHRyZW5kZXJDYXJvdXNlbCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyYW1ld29ya1wiPlxuXHRcdFx0XHRcdDxDYXJvdXNlbCBhdXRvcGxheT5cblx0XHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWdcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nhcm91c2VsLTEuanBlZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1nXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJvdXNlbC0yLmpwZWdcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2Fyb3VzZWwtMy5qcGVnXCIgLz48L2Rpdj5cblx0XHRcdCAgICBcdDwvQ2Fyb3VzZWw+XG5cdFx0XHQgICAgXHQ8c3R5bGUganN4PntgXG5cdFx0XHQgICAgXHRcdC5jYXJvdXNlbC1pbWcge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNhcm91c2VsLWltZyBpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHQgICAgXHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0KVxuXG5cdH1cblxuXHRyZW5kZXJCb3R0b20gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJhbWV3b3JrIGJvdHRvbS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5maXJzdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+c2Vjb25kPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj50aGlyZDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPmhvbWU8L3RpdGxlPlxuXHRcdFx0XHQgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXHRcdFx0XHQgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuNi4zL2FudGQuY3NzJy8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJDYXJvdXNlbCgpfVxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckJvdHRvbSgpfVxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmhvbWUtaGVhZGVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XHRcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/Users/yongchunwu/Desktop/workSpace/PossibleMaybe.github.io/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.f5e06611cf7b8f129c79.hot-update.js.map