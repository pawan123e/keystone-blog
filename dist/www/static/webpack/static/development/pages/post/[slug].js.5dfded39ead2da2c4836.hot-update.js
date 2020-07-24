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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJib3hTaXppbmciLCJib2R5IiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZm9udEZhbWlseSIsImgyIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiY3Vyc29yIiwib3BhY2l0eSIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOztBQUVlO0FBQUEsU0FDYix1SEFDQSwwREFBQyxvREFBRDtBQUNJLFVBQU0sRUFBRTtBQUNOLFdBQUs7QUFBRUEsaUJBQVMsRUFBRTtBQUFiLE9BREM7QUFFTkMsVUFBSSxFQUFFO0FBQ0pDLGNBQU0sRUFBRSxDQURKO0FBRUpDLGtCQUFVLEVBQUUsT0FGUjtBQUdKQyxhQUFLLEVBQUUsb0JBSEg7QUFJSkMsa0JBQVUsRUFBRTtBQUpSLE9BRkE7QUFRTkMsUUFBRSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUUsS0FEUjtBQUVGQyxxQkFBYSxFQUFFLFdBRmI7QUFHRkosYUFBSyxFQUFFO0FBSEwsT0FSRTtBQWFOLG9CQUFjO0FBQ1pLLGNBQU0sRUFBRSxhQURJO0FBRVpDLGVBQU8sRUFBRTtBQUZHO0FBYlIsS0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFxQkE7QUFDRSxhQUFTLEVBQUcsUUFEZDtBQUVFLE9BQUcsRUFBRTtBQUNIUCxnQkFBVSxFQUFFLE9BRFQ7QUFFSFEsV0FBSyxFQUFFLEtBRko7QUFHSFQsWUFBTSxFQUFFLE1BSEw7QUFJSFUsYUFBTyxFQUFFLE1BSk47QUFLSEMsb0JBQWMsRUFBRSxlQUxiO0FBTUhDLGdCQUFVLEVBQUUsUUFOVDtBQU9IQyxhQUFPLEVBQUU7QUFQTixLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRTtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsT0FBRyxFQUFFO0FBQ0hSLGNBQVEsRUFBRSxNQURQO0FBRUhMLFlBQU0sRUFBRTtBQUZMLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLEVBcUJFO0FBQ0UsYUFBUyxFQUFDLE9BRFo7QUFFRSxPQUFHLEVBQUU7QUFDSFUsYUFBTyxFQUFFLE1BRE47QUFFSEUsZ0JBQVUsRUFBRSxRQUZUO0FBR0hELG9CQUFjLEVBQUUsZUFIYjtBQUlIRixXQUFLLEVBQUUsS0FKSjtBQUtISyxnQkFBVSxFQUFFO0FBTFQsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUF1QixZQUFRLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBVkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLENBckJGLENBckJBLENBRGE7QUFBQSxDQUFmLEUsQ0FnRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbc2x1Z10uanMuNWRmZGVkMzllYWQyZGEyYzQ4MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGpzeCwgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLyoqIEBqc3gganN4ICovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPD5cbiAgPEdsb2JhbFxuICAgICAgc3R5bGVzPXt7XG4gICAgICAgICcqJzogeyBib3hTaXppbmc6ICdib3JkZXItYm94JyB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgY29sb3I6ICdoc2woMjAwLCAyMCUsIDIwJSknLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICB9LFxuICAgICAgICBoMjoge1xuICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBjb2xvcjogJ2hzbCgyMDAsIDIwJSwgNTAlKScsXG4gICAgICAgIH0sXG4gICAgICAgICdbZGlzYWJsZWRdJzoge1xuICAgICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgIC8+XG4gIDxoZWFkZXJcbiAgICBjbGFzc05hbWUgPSAnaGVhZGVyJ1xuICAgIGNzcz17e1xuICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgcGFkZGluZzogXCIxcmVtIDBcIlxuICAgIH19XG4gID5cbiAgICA8cFxuICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICBjc3M9e3tcbiAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICBtYXJnaW46IFwiMFwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIE15IEJsb2dcbiAgICA8L3A+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwibGlua3NcIlxuICAgICAgY3NzPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgIHdpZHRoOiBcIjQwJVwiLFxuICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TGluayBocmVmPVwiL3Bvc3QvbmV3XCIgcGFzc0hyZWY+XG4gICAgICAgIDxhPkFkZCBQb3N0PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHA+UmVjaXBlPC9wPlxuICAgICAgPHA+QWJvdXQgTWU8L3A+XG4gICAgICA8cD5Db250YWN0PC9wPlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbiAgPC8+XG4pO1xuXG4vLyBjb25zdCBIZWFkZXJXcmFwID0gc3R5bGVkLmRpdmBcbi8vICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICB3aWR0aDogOTAlO1xuLy8gIG1hcmdpbjogYXV0bztcbi8vICBkaXNwbGF5OiBmbGV4O1xuLy8gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gIHBhZGRpbmc6IDFyZW0gMDtcbi8vICAubG9nbyB7XG4vLyAgICBmb250LXNpemU6IDJyZW07XG4vLyAgICBtYXJnaW46IDA7XG4vLyAgfVxuLy8gIC5saW5rcyB7XG4vLyAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgIHdpZHRoOiA0MCU7XG4vLyAgICBtYXJnaW4tbGVmdDogYXV0bztcbi8vICAgIHB7XG4vLyAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbi8vICAgICAgJjpob3ZlciB7XG4vLyAgICAgICAgY29sb3I6IG9yYW5nZTtcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIH1cbi8vIGBcbiJdLCJzb3VyY2VSb290IjoiIn0=