webpackHotUpdate("static\\development\\pages\\index.js",{

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
      padding: '0',
      width: '100%',
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
      lineNumber: 41,
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
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiYm94U2l6aW5nIiwiYm9keSIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJoMiIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciIsIm9wYWNpdHkiLCJwYWRkaW5nIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ2IsdUhBQ0UsMERBQUMsb0RBQUQ7QUFDRSxVQUFNLEVBQUU7QUFDTixXQUFLO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQURDO0FBRU5DLFVBQUksRUFBRTtBQUNKQyxjQUFNLEVBQUUsQ0FESjtBQUVKQyxrQkFBVSxFQUFFLE9BRlI7QUFHSkMsYUFBSyxFQUFFLG9CQUhIO0FBSUpDLGtCQUFVLEVBQUU7QUFKUixPQUZBO0FBUU5DLFFBQUUsRUFBRTtBQUNGQyxnQkFBUSxFQUFFLEtBRFI7QUFFRkMscUJBQWEsRUFBRSxXQUZiO0FBR0ZKLGFBQUssRUFBRTtBQUhMLE9BUkU7QUFhTixvQkFBYztBQUNaSyxjQUFNLEVBQUUsYUFESTtBQUVaQyxlQUFPLEVBQUU7QUFGRztBQWJSLEtBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBcUJFLDBEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdFO0FBQU0sUUFBSSxFQUFDLCtDQUFYO0FBQTJELE9BQUcsRUFBQyxZQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FyQkYsRUEwQkU7QUFDRSxPQUFHLEVBQUU7QUFDSEMsYUFBTyxFQUFFLEdBRE47QUFFSEMsV0FBSyxFQUFFLE1BRko7QUFHSFYsWUFBTSxFQUFFO0FBSEwsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dILFFBUEgsRUFRRTtBQUNFLE9BQUcsRUFBRTtBQUNIYSxXQUFLLEVBQUUsTUFESjtBQUVIQyxlQUFTLEVBQUUsUUFGUjtBQUdIWCxZQUFNLEVBQUUsUUFITDtBQUlIRSxXQUFLLEVBQUU7QUFKSixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUXlCLEdBUnpCLEVBU0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLE9BQUcsRUFBRTtBQUNIQSxXQUFLLEVBQUUsb0JBREo7QUFFSFUsZ0JBQVUsRUFBRSxHQUZUO0FBR0hDLG9CQUFjLEVBQUUsTUFIYjtBQUlILGlCQUFXO0FBQUVBLHNCQUFjLEVBQUU7QUFBbEI7QUFKUixLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEYsTUFSRixDQTFCRixDQURhO0FBQUEsQ0FBZjs7S0FBTWpCLE07QUE2RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iNTg5NTUxN2FhZWYxNzA4ZjRhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGpzeCwgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8qKiBAanN4IGpzeCAqL1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDw+XG4gICAgPEdsb2JhbFxuICAgICAgc3R5bGVzPXt7XG4gICAgICAgICcqJzogeyBib3hTaXppbmc6ICdib3JkZXItYm94JyB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgY29sb3I6ICdoc2woMjAwLCAyMCUsIDIwJSknLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1J1YmlrJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICB9LFxuICAgICAgICBoMjoge1xuICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBjb2xvcjogJ2hzbCgyMDAsIDIwJSwgNTAlKScsXG4gICAgICAgIH0sXG4gICAgICAgICdbZGlzYWJsZWRdJzoge1xuICAgICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgIC8+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8dGl0bGU+S2V5c3RvbmUgQmxvZzwvdGl0bGU+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBwYWRkaW5nOiAnMCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxmb290ZXJcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIG1hcmdpbjogJzQ4cHggMCcsXG4gICAgICAgICAgY29sb3I6ICdoc2woMjAwLCAyMCUsIDUwJSknLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBCdWlsdCB3aXRoIEtleXN0b25lSlMueycgJ31cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiL2FkbWluXCJcbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIGNvbG9yOiAnaHNsKDIwMCwgMjAlLCA1MCUpJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDgwMCxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAnJjpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEdvIHRvIEFkbWluIENvbnNvbGVcbiAgICAgICAgPC9hPlxuICAgICAgICAuXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9