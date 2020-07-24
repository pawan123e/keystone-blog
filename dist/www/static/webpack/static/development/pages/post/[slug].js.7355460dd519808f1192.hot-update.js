webpackHotUpdate("static\\development\\pages\\post\\[slug].js",{

/***/ "./templates/layout.js":
/*!*****************************!*\
  !*** ./templates/layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "../node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\web Developer Projects\\keystone_blog\\app\\templates\\layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/** @jsx jsx */

var Layout = function Layout(_ref) {
  var children = _ref.children;
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
      columnNumber: 5
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Keystone Blog"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
    href: "https://fonts.googleapis.com/css?family=Rubik",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: {
      padding: '0 48px',
      width: '100%',
      maxWidth: 960,
      margin: '0 auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, children, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("footer", {
    css: {
      width: '100%',
      textAlign: 'center',
      margin: '48px 0',
      color: 'hsl(200, 20%, 50%)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Built with KeystoneJS.", ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    href: "/admin",
    css: {
      color: 'hsl(200, 20%, 50%)',
      fontWeight: 800,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Go to Admin Console"), ".")));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiYm94U2l6aW5nIiwiYm9keSIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJoMiIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciIsIm9wYWNpdHkiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDYix1SEFDRSwwREFBQyxvREFBRDtBQUNFLFVBQU0sRUFBRTtBQUNOLFdBQUs7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BREM7QUFFTkMsVUFBSSxFQUFFO0FBQ0pDLGNBQU0sRUFBRSxDQURKO0FBRUpDLGtCQUFVLEVBQUUsT0FGUjtBQUdKQyxhQUFLLEVBQUUsb0JBSEg7QUFJSkMsa0JBQVUsRUFBRTtBQUpSLE9BRkE7QUFRTkMsUUFBRSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUUsS0FEUjtBQUVGQyxxQkFBYSxFQUFFLFdBRmI7QUFHRkosYUFBSyxFQUFFO0FBSEwsT0FSRTtBQWFOLG9CQUFjO0FBQ1pLLGNBQU0sRUFBRSxhQURJO0FBRVpDLGVBQU8sRUFBRTtBQUZHO0FBYlIsS0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFxQkUsMERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsK0NBQVg7QUFBMkQsT0FBRyxFQUFDLFlBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQXJCRixFQTBCRTtBQUNFLE9BQUcsRUFBRTtBQUNIQyxhQUFPLEVBQUUsUUFETjtBQUVIQyxXQUFLLEVBQUUsTUFGSjtBQUdIQyxjQUFRLEVBQUUsR0FIUDtBQUlIWCxZQUFNLEVBQUU7QUFKTCxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR0gsUUFSSCxFQVNFO0FBQ0UsT0FBRyxFQUFFO0FBQ0hhLFdBQUssRUFBRSxNQURKO0FBRUhFLGVBQVMsRUFBRSxRQUZSO0FBR0haLFlBQU0sRUFBRSxRQUhMO0FBSUhFLFdBQUssRUFBRTtBQUpKLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFReUIsR0FSekIsRUFTRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsT0FBRyxFQUFFO0FBQ0hBLFdBQUssRUFBRSxvQkFESjtBQUVIVyxnQkFBVSxFQUFFLEdBRlQ7QUFHSEMsb0JBQWMsRUFBRSxNQUhiO0FBSUgsaUJBQVc7QUFBRUEsc0JBQWMsRUFBRTtBQUFsQjtBQUpSLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFURixNQVRGLENBMUJGLENBRGE7QUFBQSxDQUFmOztLQUFNbEIsTTtBQThEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtzbHVnXS5qcy43MzU1NDYwZGQ1MTk4MDhmMTE5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGpzeCwgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8qKiBAanN4IGpzeCAqL1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDw+XG4gICAgPEdsb2JhbFxuICAgICAgc3R5bGVzPXt7XG4gICAgICAgICcqJzogeyBib3hTaXppbmc6ICdib3JkZXItYm94JyB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgY29sb3I6ICdoc2woMjAwLCAyMCUsIDIwJSknLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICB9LFxuICAgICAgICBoMjoge1xuICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBjb2xvcjogJ2hzbCgyMDAsIDIwJSwgNTAlKScsXG4gICAgICAgIH0sXG4gICAgICAgICdbZGlzYWJsZWRdJzoge1xuICAgICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgIC8+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8dGl0bGU+S2V5c3RvbmUgQmxvZzwvdGl0bGU+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBwYWRkaW5nOiAnMCA0OHB4JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6IDk2MCxcbiAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPGZvb3RlclxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgbWFyZ2luOiAnNDhweCAwJyxcbiAgICAgICAgICBjb2xvcjogJ2hzbCgyMDAsIDIwJSwgNTAlKScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEJ1aWx0IHdpdGggS2V5c3RvbmVKUy57JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCIvYWRtaW5cIlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgY29sb3I6ICdoc2woMjAwLCAyMCUsIDUwJSknLFxuICAgICAgICAgICAgZm9udFdlaWdodDogODAwLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICcmOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgR28gdG8gQWRtaW4gQ29uc29sZVxuICAgICAgICA8L2E+XG4gICAgICAgIC5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=