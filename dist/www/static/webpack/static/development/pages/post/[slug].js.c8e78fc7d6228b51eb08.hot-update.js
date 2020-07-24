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
      fontSize: '2rem',
      margin: '0'
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '40%',
      marginLeft: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/new",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Add Post")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFFZTtBQUFBLFNBQ2I7QUFDQSxPQUFHLEVBQUU7QUFDSEEsZ0JBQVUsRUFBRSxPQURUO0FBRU5DLFdBQUssRUFBRSxLQUZEO0FBR05DLFlBQU0sRUFBRSxNQUhGO0FBSU5DLGFBQU8sRUFBRSxNQUpIO0FBS05DLG9CQUFjLEVBQUUsZUFMVjtBQU1OQyxnQkFBVSxFQUFFLFFBTk47QUFPTkMsYUFBTyxFQUFFO0FBUEgsS0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFvQixPQUFHLEVBQUk7QUFDekJDLGNBQVEsRUFBRSxNQURlO0FBRXpCTCxZQUFNLEVBQUU7QUFGaUIsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLEVBZUc7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixPQUFHLEVBQUk7QUFDNUJDLGFBQU8sRUFBRSxNQURtQjtBQUU1QkUsZ0JBQVUsRUFBRSxRQUZnQjtBQUc1QkQsb0JBQWMsRUFBRSxlQUhZO0FBSTVCSCxXQUFLLEVBQUUsS0FKcUI7QUFLNUJPLGdCQUFVLEVBQUU7QUFMZ0IsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9BLDBEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBdUIsWUFBUSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxDQVBBLEVBVUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZDLEVBV0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYQyxFQVlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaQyxDQWZILENBRGE7QUFBQSxDQUFmLEUsQ0FpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbc2x1Z10uanMuYzhlNzhmYzdkNjIyOGI1MWViMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLyoqIEBqc3gganN4ICovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlclxuICBjc3M9e3tcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gd2lkdGg6IFwiOTAlXCIsXG4gbWFyZ2luOiBcImF1dG9cIixcbiBkaXNwbGF5OiBcImZsZXhcIixcbiBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiBwYWRkaW5nOiBcIjFyZW0gMFwiLFxuICB9fVxuICA+XG4gICAgPHAgY2xhc3NOYW1lPSdsb2dvJyBjc3MgPSB7e1xuICAgICAgZm9udFNpemU6ICcycmVtJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfX0+TXkgQmxvZzwvcD5cbiAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzJyBjc3MgPSB7e1xuICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgIHdpZHRoOiAnNDAlJyxcbiAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bydcbiAgICAgfX0+XG4gICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9uZXdcIiBwYXNzSHJlZiA+XG4gICAgICA8YSA+QWRkIFBvc3Q8L2E+IFxuICAgIDwvTGluaz5cbiAgICA8cD5SZWNpcGU8L3A+XG4gICAgPHA+QWJvdXQgTWU8L3A+XG4gICAgPHA+Q29udGFjdDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4pO1xuXG4vLyBjb25zdCBIZWFkZXJXcmFwID0gc3R5bGVkLmRpdmBcbi8vICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICB3aWR0aDogOTAlO1xuLy8gIG1hcmdpbjogYXV0bztcbi8vICBkaXNwbGF5OiBmbGV4O1xuLy8gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gIHBhZGRpbmc6IDFyZW0gMDtcbi8vICAubG9nbyB7XG4vLyAgICBmb250LXNpemU6IDJyZW07XG4vLyAgICBtYXJnaW46IDA7XG4vLyAgfVxuLy8gIC5saW5rcyB7XG4vLyAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgIHdpZHRoOiA0MCU7XG4vLyAgICBtYXJnaW4tbGVmdDogYXV0bztcbi8vICAgIHB7XG4vLyAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbi8vICAgICAgJjpob3ZlciB7XG4vLyAgICAgICAgY29sb3I6IG9yYW5nZTtcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIH1cbi8vIGBcbiJdLCJzb3VyY2VSb290IjoiIn0=