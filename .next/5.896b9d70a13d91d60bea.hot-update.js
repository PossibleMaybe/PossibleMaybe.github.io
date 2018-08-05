webpackHotUpdate(5,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css__ = __webpack_require__("./style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_css__);
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
          className: "home-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "home-logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, "logo"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "home-contact",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, "\u8054\u7CFB\u7535\u8BDD \u90AE\u7BB1"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, "\n\t\t\t\t\t\t.home-header {\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t}\n\t\t\t\t\t"));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderCarousel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_carousel___default.a, {
          autoplay: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "carousel-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-1.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "carousel-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-2.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "carousel-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "/static/img/carousel-3.jpeg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        })));
      }
    }), _temp));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-3465714283"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-3465714283"
      }, "home"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3465714283"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.6.3/antd.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-3465714283"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3465714283" + " " + "framework"
      }, this.renderHeader(), this.renderCarousel(), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3465714283"
      }, "\u6E2F\u673A\u9500\u552E"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default.a, {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Button")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3465714283",
        css: ".home-header.jsx-3465714283{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.carousel-img.jsx-3465714283{height:400px;}.carousel-img.jsx-3465714283 img.jsx-3465714283{height:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEZ0IsQUFHb0IsQUFLQSxBQUdBLGFBRmQsQUFHQSw2REFSK0IsbUhBQ1gsNkZBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b25nY2h1bnd1L0Rlc2t0b3Avd29ya1NwYWNlL1Bvc3NpYmxlTWF5YmUuZ2l0aHViLmlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9saWIvYnV0dG9uJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdhbnRkL2xpYi9jYXJvdXNlbCc7XG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0XG5cblx0cmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbG9nb1wiPlxuXHRcdFx0XHRcdFx0bG9nb1xuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWN0XCI+XG5cdFx0XHRcdFx0XHTogZTns7vnlLXor51cblx0XHRcdFx0XHRcdOmCrueusVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzdHlsZT57YFxuXHRcdFx0XHRcdFx0LmhvbWUtaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdH1cblx0cmVuZGVyQ2Fyb3VzZWwgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PENhcm91c2VsIGF1dG9wbGF5PlxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWdcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Nhcm91c2VsLTEuanBlZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltZ1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvY2Fyb3VzZWwtMi5qcGVnXCIgLz48L2Rpdj5cblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1nXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9jYXJvdXNlbC0zLmpwZWdcIiAvPjwvZGl2PlxuXHRcdFx0ICAgIDwvQ2Fyb3VzZWw+XG5cdFx0XHQpXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPmhvbWU8L3RpdGxlPlxuXHRcdFx0XHQgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXHRcdFx0XHQgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuNi4zL2FudGQuY3NzJy8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcmFtZXdvcmtcIj5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyQ2Fyb3VzZWwoKX1cblx0XHRcdFx0XHQ8cD7muK/mnLrplIDllK48L3A+XG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkJ1dHRvbjwvQnV0dG9uPlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmhvbWUtaGVhZGVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2Fyb3VzZWwtaW1nIHtcblx0XHRcdFx0XHRcdGhlaWdodDogNDAwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5jYXJvdXNlbC1pbWcgaW1nIHtcblx0XHRcdFx0XHRcdGhlaWdodDogNDAwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cdFxuIl19 */\n/*@ sourceURL=pages/index.js */"
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
//# sourceMappingURL=5.896b9d70a13d91d60bea.hot-update.js.map