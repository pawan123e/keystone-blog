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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        .header {\n          background: white;\n          width: 90%;\n          margin: auto;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: 1rem 0;\n        }\n        .logo {\n          font-size: 2rem;\n          margin: 0;\n        }\n        .links {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          width: 40%;\n          margin-left: auto;\n        }\n        .nav_link {\n          padding: 0.5rem 1rem;\n          background: gray;\n          border-radius: 25px;\n          color: black;\n          text-decoration: none;\n        }\n        p, a {\n          cursor: pointer;\n          transition: all 0.5s ease;\n          &:hover {\n            color: orange;\n          }\n        }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // import styled from 'styled-components';

/** @jsx jsx */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["Global"], {
    styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("header", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "My Blog"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/new",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: "nav_link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Add Post")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Contact"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFFZTtBQUFBLFNBQ2IsdUhBQ0EsMERBQUMsb0RBQUQ7QUFDSSxVQUFNLEVBQ0pBLHlEQURJLG1CQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQXlDQTtBQUNFLGFBQVMsRUFBRyxRQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixFQU1FO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBdUIsWUFBUSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLENBTkYsQ0F6Q0EsQ0FEYTtBQUFBLENBQWYsRSxDQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ5Mzk5Y2UyNjg5NWVjOTdkODJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBqc3gsIEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLyoqIEBqc3gganN4ICovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPD5cbiAgPEdsb2JhbFxuICAgICAgc3R5bGVzPXtcbiAgICAgICAgY3NzYFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAubGlua3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubmF2X2xpbmsge1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHAsIGEge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYFxuICAgICAgfVxuICAgIC8+XG4gIDxoZWFkZXJcbiAgICBjbGFzc05hbWUgPSAnaGVhZGVyJ1xuICAgID5cbiAgICA8cCBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgTXkgQmxvZ1xuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L25ld1wiIHBhc3NIcmVmID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSduYXZfbGluayc+QWRkIFBvc3Q8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8cD5SZWNpcGU8L3A+XG4gICAgICA8cD5BYm91dCBNZTwvcD5cbiAgICAgIDxwPkNvbnRhY3Q8L3A+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuICA8Lz5cbik7XG5cbi8vIGNvbnN0IEhlYWRlcldyYXAgPSBzdHlsZWQuZGl2YFxuLy8gIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gIHdpZHRoOiA5MCU7XG4vLyAgbWFyZ2luOiBhdXRvO1xuLy8gIGRpc3BsYXk6IGZsZXg7XG4vLyAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgcGFkZGluZzogMXJlbSAwO1xuLy8gIC5sb2dvIHtcbi8vICAgIGZvbnQtc2l6ZTogMnJlbTtcbi8vICAgIG1hcmdpbjogMDtcbi8vICB9XG4vLyAgLmxpbmtzIHtcbi8vICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgd2lkdGg6IDQwJTtcbi8vICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuLy8gICAgcHtcbi8vICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuLy8gICAgICAmOmhvdmVyIHtcbi8vICAgICAgICBjb2xvcjogb3JhbmdlO1xuLy8gICAgICB9XG4vLyAgICB9XG4vLyAgfVxuLy8gYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==