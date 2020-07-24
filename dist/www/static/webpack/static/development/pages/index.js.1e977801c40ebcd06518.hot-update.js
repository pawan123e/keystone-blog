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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFFZTtBQUFBLFNBQ2I7QUFDRSxPQUFHLEVBQUU7QUFDSEEsZ0JBQVUsRUFBRSxPQURUO0FBRUhDLFdBQUssRUFBRSxLQUZKO0FBR0hDLFlBQU0sRUFBRSxNQUhMO0FBSUhDLGFBQU8sRUFBRSxNQUpOO0FBS0hDLG9CQUFjLEVBQUUsZUFMYjtBQU1IQyxnQkFBVSxFQUFFLFFBTlQ7QUFPSEMsYUFBTyxFQUFFO0FBUE4sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLE9BQUcsRUFBRTtBQUNIQyxjQUFRLEVBQUUsTUFEUDtBQUVITCxZQUFNLEVBQUU7QUFGTCxLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixFQW9CRTtBQUNFLGFBQVMsRUFBQyxPQURaO0FBRUUsT0FBRyxFQUFFO0FBQ0hDLGFBQU8sRUFBRSxNQUROO0FBRUhFLGdCQUFVLEVBQUUsUUFGVDtBQUdIRCxvQkFBYyxFQUFFLGVBSGI7QUFJSEgsV0FBSyxFQUFFLEtBSko7QUFLSE8sZ0JBQVUsRUFBRTtBQUxULEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLDBEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBdUIsWUFBUSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQVZGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixDQXBCRixDQURhO0FBQUEsQ0FBZixFLENBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWU5Nzc4MDFjNDBlYmNkMDY1MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8qKiBAanN4IGpzeCAqL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxoZWFkZXJcbiAgICBjc3M9e3tcbiAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IFwiMXJlbSAwXCJcbiAgICB9fVxuICA+XG4gICAgPHBcbiAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxuICAgICAgY3NzPXt7XG4gICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgICAgbWFyZ2luOiBcIjBcIlxuICAgICAgfX1cbiAgICA+XG4gICAgICBNeSBCbG9nXG4gICAgPC9wPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImxpbmtzXCJcbiAgICAgIGNzcz17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICB3aWR0aDogXCI0MCVcIixcbiAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L25ld1wiIHBhc3NIcmVmPlxuICAgICAgICA8YT5BZGQgUG9zdDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxwPlJlY2lwZTwvcD5cbiAgICAgIDxwPkFib3V0IE1lPC9wPlxuICAgICAgPHA+Q29udGFjdDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4pO1xuXG4vLyBjb25zdCBIZWFkZXJXcmFwID0gc3R5bGVkLmRpdmBcbi8vICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICB3aWR0aDogOTAlO1xuLy8gIG1hcmdpbjogYXV0bztcbi8vICBkaXNwbGF5OiBmbGV4O1xuLy8gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gIHBhZGRpbmc6IDFyZW0gMDtcbi8vICAubG9nbyB7XG4vLyAgICBmb250LXNpemU6IDJyZW07XG4vLyAgICBtYXJnaW46IDA7XG4vLyAgfVxuLy8gIC5saW5rcyB7XG4vLyAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgIHdpZHRoOiA0MCU7XG4vLyAgICBtYXJnaW4tbGVmdDogYXV0bztcbi8vICAgIHB7XG4vLyAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbi8vICAgICAgJjpob3ZlciB7XG4vLyAgICAgICAgY29sb3I6IG9yYW5nZTtcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIH1cbi8vIGBcbiJdLCJzb3VyY2VSb290IjoiIn0=