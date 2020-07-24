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
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["Global"], {
    styles: {
      '*': {
        boxSizing: 'border-box'
      },
      body: {
        margin: 0,
        background: 'white',
        color: 'hsl(200, 20%, 20%)',
        fontFamily: "'Rubik', sans-serif"
      },
      h2: {
        fontSize: '1em',
        textTransform: 'uppercase',
        color: 'hsl(200, 20%, 50%)'
      },
      '[disabled]': {
        cursor: 'not-allowed',
        opacity: 0.6
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
    className: "header",
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
      lineNumber: 28,
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
      lineNumber: 40,
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
      lineNumber: 49,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/new",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Add Post")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Recipe"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "About Me"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJib3hTaXppbmciLCJib2R5IiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZm9udEZhbWlseSIsImgyIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiY3Vyc29yIiwib3BhY2l0eSIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOztBQUVlO0FBQUEsU0FDYix1SEFDQSwwREFBQyxvREFBRDtBQUNJLFVBQU0sRUFBRTtBQUNOLFdBQUs7QUFBRUEsaUJBQVMsRUFBRTtBQUFiLE9BREM7QUFFTkMsVUFBSSxFQUFFO0FBQ0pDLGNBQU0sRUFBRSxDQURKO0FBRUpDLGtCQUFVLEVBQUUsT0FGUjtBQUdKQyxhQUFLLEVBQUUsb0JBSEg7QUFJSkMsa0JBQVUsRUFBRTtBQUpSLE9BRkE7QUFRTkMsUUFBRSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUUsS0FEUjtBQUVGQyxxQkFBYSxFQUFFLFdBRmI7QUFHRkosYUFBSyxFQUFFO0FBSEwsT0FSRTtBQWFOLG9CQUFjO0FBQ1pLLGNBQU0sRUFBRSxhQURJO0FBRVpDLGVBQU8sRUFBRTtBQUZHO0FBYlIsS0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFxQkE7QUFDRSxhQUFTLEVBQUcsUUFEZDtBQUVFLE9BQUcsRUFBRTtBQUNIUCxnQkFBVSxFQUFFLE9BRFQ7QUFFSFEsV0FBSyxFQUFFLEtBRko7QUFHSFQsWUFBTSxFQUFFLE1BSEw7QUFJSFUsYUFBTyxFQUFFLE1BSk47QUFLSEMsb0JBQWMsRUFBRSxlQUxiO0FBTUhDLGdCQUFVLEVBQUUsUUFOVDtBQU9IQyxhQUFPLEVBQUU7QUFQTixLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRTtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsT0FBRyxFQUFFO0FBQ0hSLGNBQVEsRUFBRSxNQURQO0FBRUhMLFlBQU0sRUFBRTtBQUZMLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLEVBcUJFO0FBQ0UsYUFBUyxFQUFDLE9BRFo7QUFFRSxPQUFHLEVBQUU7QUFDSFUsYUFBTyxFQUFFLE1BRE47QUFFSEUsZ0JBQVUsRUFBRSxRQUZUO0FBR0hELG9CQUFjLEVBQUUsZUFIYjtBQUlIRixXQUFLLEVBQUUsS0FKSjtBQUtISyxnQkFBVSxFQUFFO0FBTFQsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUF1QixZQUFRLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBVkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLENBckJGLENBckJBLENBRGE7QUFBQSxDQUFmLEUsQ0FnRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41ZGZkZWQzOWVhZDJkYTJjNDgzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsganN4LCBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vKiogQGpzeCBqc3ggKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8PlxuICA8R2xvYmFsXG4gICAgICBzdHlsZXM9e3tcbiAgICAgICAgJyonOiB7IGJveFNpemluZzogJ2JvcmRlci1ib3gnIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICBjb2xvcjogJ2hzbCgyMDAsIDIwJSwgMjAlKScsXG4gICAgICAgICAgZm9udEZhbWlseTogXCInUnViaWsnLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGgyOiB7XG4gICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgIGNvbG9yOiAnaHNsKDIwMCwgMjAlLCA1MCUpJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ1tkaXNhYmxlZF0nOiB7XG4gICAgICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgLz5cbiAgPGhlYWRlclxuICAgIGNsYXNzTmFtZSA9ICdoZWFkZXInXG4gICAgY3NzPXt7XG4gICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICB3aWR0aDogXCI5MCVcIixcbiAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjFyZW0gMFwiXG4gICAgfX1cbiAgPlxuICAgIDxwXG4gICAgICBjbGFzc05hbWU9XCJsb2dvXCJcbiAgICAgIGNzcz17e1xuICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgIG1hcmdpbjogXCIwXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgTXkgQmxvZ1xuICAgIDwvcD5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJsaW5rc1wiXG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgd2lkdGg6IFwiNDAlXCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9uZXdcIiBwYXNzSHJlZj5cbiAgICAgICAgPGE+QWRkIFBvc3Q8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8cD5SZWNpcGU8L3A+XG4gICAgICA8cD5BYm91dCBNZTwvcD5cbiAgICAgIDxwPkNvbnRhY3Q8L3A+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuICA8Lz5cbik7XG5cbi8vIGNvbnN0IEhlYWRlcldyYXAgPSBzdHlsZWQuZGl2YFxuLy8gIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gIHdpZHRoOiA5MCU7XG4vLyAgbWFyZ2luOiBhdXRvO1xuLy8gIGRpc3BsYXk6IGZsZXg7XG4vLyAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgcGFkZGluZzogMXJlbSAwO1xuLy8gIC5sb2dvIHtcbi8vICAgIGZvbnQtc2l6ZTogMnJlbTtcbi8vICAgIG1hcmdpbjogMDtcbi8vICB9XG4vLyAgLmxpbmtzIHtcbi8vICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgd2lkdGg6IDQwJTtcbi8vICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuLy8gICAgcHtcbi8vICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuLy8gICAgICAmOmhvdmVyIHtcbi8vICAgICAgICBjb2xvcjogb3JhbmdlO1xuLy8gICAgICB9XG4vLyAgICB9XG4vLyAgfVxuLy8gYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==