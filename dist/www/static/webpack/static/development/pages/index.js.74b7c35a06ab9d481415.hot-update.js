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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n background: white;\n width: 90%;\n margin: auto;\n display: flex;\n justify-content: space-between;\n align-items: center;\n padding: 1rem 0;\n .logo {\n   font-size: 2rem;\n   margin: 0;\n }\n .links {\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   width: 40%;\n   margin-left: auto;\n   p{\n     cursor: pointer;\n     transition: all 0.5s ease;\n     &:hover {\n       color: orange;\n     }\n   }\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // import styled from 'styled-components';

/** @jsx jsx */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("header", {
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
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "My Blog"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/new",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Add Post")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, "Contact")));
});
var HeaderWrap = styled.div(_templateObject());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsIkhlYWRlcldyYXAiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFFZTtBQUFBLFNBQ2I7QUFDQSxPQUFHLEVBQUU7QUFDSEEsZ0JBQVUsRUFBRSxPQURUO0FBRU5DLFdBQUssRUFBRSxLQUZEO0FBR05DLFlBQU0sRUFBRSxNQUhGO0FBSU5DLGFBQU8sRUFBRSxNQUpIO0FBS05DLG9CQUFjLEVBQUUsZUFMVjtBQU1OQyxnQkFBVSxFQUFFLFFBTk47QUFPTkMsYUFBTyxFQUFFO0FBUEgsS0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsRUFZRztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQXVCLFlBQVEsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsQ0FEQSxFQUlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQyxFQUtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEMsRUFNRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkMsQ0FaSCxDQURhO0FBQUEsQ0FBZjtBQXdCQSxJQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc0YjdjMzVhMDZhYjlkNDgxNDE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8qKiBAanN4IGpzeCAqL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxoZWFkZXJcbiAgY3NzPXt7XG4gICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuIHdpZHRoOiBcIjkwJVwiLFxuIG1hcmdpbjogXCJhdXRvXCIsXG4gZGlzcGxheTogXCJmbGV4XCIsXG4ganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gcGFkZGluZzogXCIxcmVtIDBcIixcbiAgfX1cbiAgPlxuICAgIDxwIGNsYXNzTmFtZT0nbG9nbyc+TXkgQmxvZzwvcD5cbiAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzJz5cbiAgICAgPExpbmsgaHJlZj1cIi9wb3N0L25ld1wiIHBhc3NIcmVmID5cbiAgICAgIDxhID5BZGQgUG9zdDwvYT4gXG4gICAgPC9MaW5rPlxuICAgIDxwPlJlY2lwZTwvcD5cbiAgICA8cD5BYm91dCBNZTwvcD5cbiAgICA8cD5Db250YWN0PC9wPlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbik7XG5cbmNvbnN0IEhlYWRlcldyYXAgPSBzdHlsZWQuZGl2YFxuIGJhY2tncm91bmQ6IHdoaXRlO1xuIHdpZHRoOiA5MCU7XG4gbWFyZ2luOiBhdXRvO1xuIGRpc3BsYXk6IGZsZXg7XG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gcGFkZGluZzogMXJlbSAwO1xuIC5sb2dvIHtcbiAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgIG1hcmdpbjogMDtcbiB9XG4gLmxpbmtzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgd2lkdGg6IDQwJTtcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgcHtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAmOmhvdmVyIHtcbiAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICB9XG4gICB9XG4gfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==