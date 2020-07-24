webpackHotUpdate("static\\development\\pages\\post\\[slug].js",{

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
    css: {
      fontSize: "2rem",
      margin: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "My Blog"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "links",
    css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "40%",
      marginLeft: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/new",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Add Post")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFFZTtBQUFBLFNBQ2I7QUFDRSxPQUFHLEVBQUU7QUFDSEEsZ0JBQVUsRUFBRSxPQURUO0FBRUhDLFdBQUssRUFBRSxLQUZKO0FBR0hDLFlBQU0sRUFBRSxNQUhMO0FBSUhDLGFBQU8sRUFBRSxNQUpOO0FBS0hDLG9CQUFjLEVBQUUsZUFMYjtBQU1IQyxnQkFBVSxFQUFFLFFBTlQ7QUFPSEMsYUFBTyxFQUFFO0FBUE4sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLE9BQUcsRUFBRTtBQUNIQyxjQUFRLEVBQUUsTUFEUDtBQUVITCxZQUFNLEVBQUU7QUFGTCxLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixFQW9CRTtBQUNFLGFBQVMsRUFBQyxPQURaO0FBRUUsT0FBRyxFQUFFO0FBQ0hDLGFBQU8sRUFBRSxNQUROO0FBRUhFLGdCQUFVLEVBQUUsUUFGVDtBQUdIRCxvQkFBYyxFQUFFLGVBSGI7QUFJSEgsV0FBSyxFQUFFLEtBSko7QUFLSE8sZ0JBQVUsRUFBRTtBQUxULEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLDBEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBdUIsWUFBUSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQVZGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixDQXBCRixDQURhO0FBQUEsQ0FBZixFLENBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdFxcW3NsdWddLmpzLjFlOTc3ODAxYzQwZWJjZDA2NTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vKiogQGpzeCBqc3ggKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aGVhZGVyXG4gICAgY3NzPXt7XG4gICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICB3aWR0aDogXCI5MCVcIixcbiAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjFyZW0gMFwiXG4gICAgfX1cbiAgPlxuICAgIDxwXG4gICAgICBjbGFzc05hbWU9XCJsb2dvXCJcbiAgICAgIGNzcz17e1xuICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgIG1hcmdpbjogXCIwXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgTXkgQmxvZ1xuICAgIDwvcD5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJsaW5rc1wiXG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgd2lkdGg6IFwiNDAlXCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9uZXdcIiBwYXNzSHJlZj5cbiAgICAgICAgPGE+QWRkIFBvc3Q8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8cD5SZWNpcGU8L3A+XG4gICAgICA8cD5BYm91dCBNZTwvcD5cbiAgICAgIDxwPkNvbnRhY3Q8L3A+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuKTtcblxuLy8gY29uc3QgSGVhZGVyV3JhcCA9IHN0eWxlZC5kaXZgXG4vLyAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgd2lkdGg6IDkwJTtcbi8vICBtYXJnaW46IGF1dG87XG4vLyAgZGlzcGxheTogZmxleDtcbi8vICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICBwYWRkaW5nOiAxcmVtIDA7XG4vLyAgLmxvZ28ge1xuLy8gICAgZm9udC1zaXplOiAycmVtO1xuLy8gICAgbWFyZ2luOiAwO1xuLy8gIH1cbi8vICAubGlua3Mge1xuLy8gICAgZGlzcGxheTogZmxleDtcbi8vICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICB3aWR0aDogNDAlO1xuLy8gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgICBwe1xuLy8gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4vLyAgICAgICY6aG92ZXIge1xuLy8gICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vLyBgXG4iXSwic291cmNlUm9vdCI6IiJ9