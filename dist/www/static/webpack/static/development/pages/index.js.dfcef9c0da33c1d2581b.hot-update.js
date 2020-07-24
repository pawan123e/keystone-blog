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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "E:\\web Developer Projects\\keystone_blog\\app\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n background: white;\n width: 90%;\n margin: auto;\n display: flex;\n justify-content: space-between;\n align-items: center;\n padding: 1rem 0;\n .logo {\n   font-size: 2rem;\n   margin: 0;\n }\n .links {\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   width: 40%;\n   margin-left: auto;\n\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




/** @jsx jsx */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(HeaderWrap, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "My Blog"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, "Contact"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/new",
    passHref: true,
    className: "postLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "Add Post")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXJXcmFwIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUFBLFNBQ2IsMERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREMsRUFFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZDLEVBR0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhDLEVBSUQsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUF1QixZQUFRLE1BQS9CO0FBQWdDLGFBQVMsRUFBRyxVQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpDLENBRkgsQ0FEYTtBQUFBLENBQWY7QUFlQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWhCO0tBQU1GLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRmY2VmOWMwZGEzM2MxZDI1ODFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8qKiBAanN4IGpzeCAqL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxIZWFkZXJXcmFwPiBcbiAgICA8cCBjbGFzc05hbWU9J2xvZ28nPk15IEJsb2c8L3A+XG4gICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG4gICAgPHA+UmVjaXBlPC9wPlxuICAgIDxwPkFib3V0IE1lPC9wPlxuICAgIDxwPkNvbnRhY3Q8L3A+XG4gICAgPExpbmsgaHJlZj1cIi9wb3N0L25ld1wiIHBhc3NIcmVmIGNsYXNzTmFtZSA9ICdwb3N0TGluayc+XG4gICAgICBBZGQgUG9zdFxuICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPC9IZWFkZXJXcmFwPlxuKTtcblxuY29uc3QgSGVhZGVyV3JhcCA9IHN0eWxlZC5kaXZgXG4gYmFja2dyb3VuZDogd2hpdGU7XG4gd2lkdGg6IDkwJTtcbiBtYXJnaW46IGF1dG87XG4gZGlzcGxheTogZmxleDtcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiBwYWRkaW5nOiAxcmVtIDA7XG4gLmxvZ28ge1xuICAgZm9udC1zaXplOiAycmVtO1xuICAgbWFyZ2luOiAwO1xuIH1cbiAubGlua3Mge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICB3aWR0aDogNDAlO1xuICAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cbiB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9