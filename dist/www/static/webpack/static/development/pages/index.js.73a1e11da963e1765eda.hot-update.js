webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "../node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\web Developer Projects\\keystone_blog\\app\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import styled from 'styled-components';

/** @jsx jsx */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
    css: {
      background: "white",
      width: "90%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "My Blog"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/new",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Add Post")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, "Contact")));
}); // const HeaderWrap = styled.div`
//  background: white;
//  width: 90%;
//  margin: auto;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//  padding: 1rem 0;
//  .logo {
//    font-size: 2rem;
//    margin: 0;
//  }
//  .links {
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    width: 40%;
//    margin-left: auto;
//    p{
//      cursor: pointer;
//      transition: all 0.5s ease;
//      &:hover {
//        color: orange;
//      }
//    }
//  }
// `

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFFZTtBQUFBLFNBQ2I7QUFDQSxPQUFHLEVBQUU7QUFDSEEsZ0JBQVUsRUFBRSxPQURUO0FBRU5DLFdBQUssRUFBRSxLQUZEO0FBR05DLFlBQU0sRUFBRSxNQUhGO0FBSU5DLGFBQU8sRUFBRSxNQUpIO0FBS05DLG9CQUFjLEVBQUUsZUFMVjtBQU1OQyxnQkFBVSxFQUFFLFFBTk47QUFPTkMsYUFBTyxFQUFFO0FBUEgsS0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsRUFZRztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQXVCLFlBQVEsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsQ0FEQSxFQUlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQyxFQUtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEMsRUFNRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkMsQ0FaSCxDQURhO0FBQUEsQ0FBZixFLENBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzNhMWUxMWRhOTYzZTE3NjVlZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLyoqIEBqc3gganN4ICovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlclxuICBjc3M9e3tcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gd2lkdGg6IFwiOTAlXCIsXG4gbWFyZ2luOiBcImF1dG9cIixcbiBkaXNwbGF5OiBcImZsZXhcIixcbiBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiBwYWRkaW5nOiBcIjFyZW0gMFwiLFxuICB9fVxuICA+XG4gICAgPHAgY2xhc3NOYW1lPSdsb2dvJz5NeSBCbG9nPC9wPlxuICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICA8TGluayBocmVmPVwiL3Bvc3QvbmV3XCIgcGFzc0hyZWYgPlxuICAgICAgPGEgPkFkZCBQb3N0PC9hPiBcbiAgICA8L0xpbms+XG4gICAgPHA+UmVjaXBlPC9wPlxuICAgIDxwPkFib3V0IE1lPC9wPlxuICAgIDxwPkNvbnRhY3Q8L3A+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuKTtcblxuLy8gY29uc3QgSGVhZGVyV3JhcCA9IHN0eWxlZC5kaXZgXG4vLyAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgd2lkdGg6IDkwJTtcbi8vICBtYXJnaW46IGF1dG87XG4vLyAgZGlzcGxheTogZmxleDtcbi8vICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICBwYWRkaW5nOiAxcmVtIDA7XG4vLyAgLmxvZ28ge1xuLy8gICAgZm9udC1zaXplOiAycmVtO1xuLy8gICAgbWFyZ2luOiAwO1xuLy8gIH1cbi8vICAubGlua3Mge1xuLy8gICAgZGlzcGxheTogZmxleDtcbi8vICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICB3aWR0aDogNDAlO1xuLy8gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgICBwe1xuLy8gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4vLyAgICAgICY6aG92ZXIge1xuLy8gICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vLyBgXG4iXSwic291cmNlUm9vdCI6IiJ9