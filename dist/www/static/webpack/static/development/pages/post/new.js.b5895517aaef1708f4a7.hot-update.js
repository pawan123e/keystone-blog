webpackHotUpdate("static\\development\\pages\\post\\new.js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiYm94U2l6aW5nIiwiYm9keSIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJoMiIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciIsIm9wYWNpdHkiLCJwYWRkaW5nIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ2IsdUhBQ0UsMERBQUMsb0RBQUQ7QUFDRSxVQUFNLEVBQUU7QUFDTixXQUFLO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQURDO0FBRU5DLFVBQUksRUFBRTtBQUNKQyxjQUFNLEVBQUUsQ0FESjtBQUVKQyxrQkFBVSxFQUFFLE9BRlI7QUFHSkMsYUFBSyxFQUFFLG9CQUhIO0FBSUpDLGtCQUFVLEVBQUU7QUFKUixPQUZBO0FBUU5DLFFBQUUsRUFBRTtBQUNGQyxnQkFBUSxFQUFFLEtBRFI7QUFFRkMscUJBQWEsRUFBRSxXQUZiO0FBR0ZKLGFBQUssRUFBRTtBQUhMLE9BUkU7QUFhTixvQkFBYztBQUNaSyxjQUFNLEVBQUUsYUFESTtBQUVaQyxlQUFPLEVBQUU7QUFGRztBQWJSLEtBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBcUJFLDBEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdFO0FBQU0sUUFBSSxFQUFDLCtDQUFYO0FBQTJELE9BQUcsRUFBQyxZQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FyQkYsRUEwQkU7QUFDRSxPQUFHLEVBQUU7QUFDSEMsYUFBTyxFQUFFLEdBRE47QUFFSEMsV0FBSyxFQUFFLE1BRko7QUFHSFYsWUFBTSxFQUFFO0FBSEwsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dILFFBUEgsRUFRRTtBQUNFLE9BQUcsRUFBRTtBQUNIYSxXQUFLLEVBQUUsTUFESjtBQUVIQyxlQUFTLEVBQUUsUUFGUjtBQUdIWCxZQUFNLEVBQUUsUUFITDtBQUlIRSxXQUFLLEVBQUU7QUFKSixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUXlCLEdBUnpCLEVBU0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLE9BQUcsRUFBRTtBQUNIQSxXQUFLLEVBQUUsb0JBREo7QUFFSFUsZ0JBQVUsRUFBRSxHQUZUO0FBR0hDLG9CQUFjLEVBQUUsTUFIYjtBQUlILGlCQUFXO0FBQUVBLHNCQUFjLEVBQUU7QUFBbEI7QUFKUixLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEYsTUFSRixDQTFCRixDQURhO0FBQUEsQ0FBZjs7S0FBTWpCLE07QUE2RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxuZXcuanMuYjU4OTU1MTdhYWVmMTcwOGY0YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBqc3gsIEdsb2JhbCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiogQGpzeCBqc3ggKi9cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8PlxuICAgIDxHbG9iYWxcbiAgICAgIHN0eWxlcz17e1xuICAgICAgICAnKic6IHsgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgIGNvbG9yOiAnaHNsKDIwMCwgMjAlLCAyMCUpJyxcbiAgICAgICAgICBmb250RmFtaWx5OiBcIidSdWJpaycsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgfSxcbiAgICAgICAgaDI6IHtcbiAgICAgICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgY29sb3I6ICdoc2woMjAwLCAyMCUsIDUwJSknLFxuICAgICAgICB9LFxuICAgICAgICAnW2Rpc2FibGVkXSc6IHtcbiAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAvPlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPHRpdGxlPktleXN0b25lIEJsb2c8L3RpdGxlPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpa1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8Zm9vdGVyXG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBtYXJnaW46ICc0OHB4IDAnLFxuICAgICAgICAgIGNvbG9yOiAnaHNsKDIwMCwgMjAlLCA1MCUpJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQnVpbHQgd2l0aCBLZXlzdG9uZUpTLnsnICd9XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cIi9hZG1pblwiXG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBjb2xvcjogJ2hzbCgyMDAsIDIwJSwgNTAlKScsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgJyY6aG92ZXInOiB7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBHbyB0byBBZG1pbiBDb25zb2xlXG4gICAgICAgIDwvYT5cbiAgICAgICAgLlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==