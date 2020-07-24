webpackHotUpdate("static\\development\\pages\\post\\[slug].js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "E:\\web Developer Projects\\keystone_blog\\app\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n background: white;\n width: 90%;\n margin: auto;\n display: flex;\n justify-content: space-between;\n align-items: center;\n padding: 1rem 0;\n .logo {\n   font-size: 2rem;\n   margin: 0;\n }\n .links {\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   width: 40%;\n   margin-left: auto;\n  //  a {\n  //    text-decoration: none;\n  //    color: orange;\n  //  }\n   p {\n     cursor: pointer;\n     transition: all 0.5s ease;\n     &:hover {\n       color: orange;\n     }\n   }\n  //  .postLink {\n  //    color: gray;\n  //    text-decoration: none;\n  //  }\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




/** @jsx jsx */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(HeaderWrap, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "My Blog"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/new",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Add Post")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, "Contact"))));
});
var HeaderWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c = HeaderWrap;

var _c;

$RefreshReg$(_c, "HeaderWrap");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXJXcmFwIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLDBEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0c7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUF1QixZQUFRLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELENBREEsRUFJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkMsRUFLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxDLEVBTUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5DLENBSEgsQ0FEQSxDQURhO0FBQUEsQ0FBZjtBQW1CQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWhCO0tBQU1GLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtzbHVnXS5qcy5kMWY2YTYyNzQ3YzVlOTc4MmQ4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vKiogQGpzeCBqc3ggKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aGVhZGVyPlxuICA8SGVhZGVyV3JhcD4gXG5cbiAgICA8cCBjbGFzc05hbWU9J2xvZ28nPk15IEJsb2c8L3A+XG4gICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG4gICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9uZXdcIiBwYXNzSHJlZiA+XG4gICAgICA8YSA+QWRkIFBvc3Q8L2E+IFxuICAgIDwvTGluaz5cbiAgICA8cD5SZWNpcGU8L3A+XG4gICAgPHA+QWJvdXQgTWU8L3A+XG4gICAgPHA+Q29udGFjdDwvcD5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgPC9IZWFkZXJXcmFwPlxuICA8L2hlYWRlcj5cbik7XG5cbmNvbnN0IEhlYWRlcldyYXAgPSBzdHlsZWQuZGl2YFxuIGJhY2tncm91bmQ6IHdoaXRlO1xuIHdpZHRoOiA5MCU7XG4gbWFyZ2luOiBhdXRvO1xuIGRpc3BsYXk6IGZsZXg7XG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gcGFkZGluZzogMXJlbSAwO1xuIC5sb2dvIHtcbiAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgIG1hcmdpbjogMDtcbiB9XG4gLmxpbmtzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgd2lkdGg6IDQwJTtcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAvLyAgYSB7XG4gIC8vICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLy8gICAgY29sb3I6IG9yYW5nZTtcbiAgLy8gIH1cbiAgIHAge1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICY6aG92ZXIge1xuICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgIH1cbiAgIH1cbiAgLy8gIC5wb3N0TGluayB7XG4gIC8vICAgIGNvbG9yOiBncmF5O1xuICAvLyAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8vICB9XG4gfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==