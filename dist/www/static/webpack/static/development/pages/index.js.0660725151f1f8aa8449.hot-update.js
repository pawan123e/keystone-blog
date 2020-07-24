webpackHotUpdate("static\\development\\pages\\index.js",{

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


var _this = undefined,
    _jsxFileName = "E:\\web Developer Projects\\keystone_blog\\app\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        .header {\n          background: white;\n          width: 100%;\n          margin: auto;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: 1rem 2rem;\n          position: fixed;\n          // box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.75);\n        }\n        .logo {\n          font-size: 2rem;\n          margin: 0;\n        }\n        .links {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          width: 40%;\n          margin-left: auto;\n        }\n        .nav-btn {\n          padding: 0.5rem 1.5rem;\n          background: gray;\n          border-radius: 25px;\n          color: white;\n          text-decoration: none;\n        }\n        .nav-link {\n          cursor: pointer;\n          transition: all 0.5s ease;\n          &:hover {\n            color: orange;\n          }\n        }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/** @jsx jsx */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["Global"], {
    styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("header", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "My Blog"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/new",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: "nav-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Add Post")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "nav_link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "nav_link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "nav_link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Contact"))));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlO0FBQUEsU0FDYix1SEFDQSwwREFBQyxvREFBRDtBQUNJLFVBQU0sRUFDSkEseURBREksbUJBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBMkNBO0FBQ0UsYUFBUyxFQUFHLFFBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLEVBTUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUF1QixZQUFRLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQUlFO0FBQUcsYUFBUyxFQUFHLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUcsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLEVBTUU7QUFBRyxhQUFTLEVBQUcsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsQ0FORixDQTNDQSxDQURhO0FBQUEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDY2MDcyNTE1MWYxZjhhYTg0NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGpzeCwgR2xvYmFsLCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuLyoqIEBqc3gganN4ICovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPD5cbiAgPEdsb2JhbFxuICAgICAgc3R5bGVzPXtcbiAgICAgICAgY3NzYFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDNweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYtYnRuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBgXG4gICAgICB9XG4gICAgLz5cbiAgPGhlYWRlclxuICAgIGNsYXNzTmFtZSA9ICdoZWFkZXInXG4gICAgPlxuICAgIDxwIGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICBNeSBCbG9nXG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG4gICAgICA8TGluayBocmVmPVwiL3Bvc3QvbmV3XCIgcGFzc0hyZWYgPlxuICAgICAgICA8YSBjbGFzc05hbWU9J25hdi1idG4nPkFkZCBQb3N0PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHAgY2xhc3NOYW1lID0gJ25hdl9saW5rJz5SZWNpcGU8L3A+XG4gICAgICA8cCBjbGFzc05hbWUgPSAnbmF2X2xpbmsnPkFib3V0IE1lPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lID0gJ25hdl9saW5rJz5Db250YWN0PC9wPlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbiAgPC8+XG4pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9