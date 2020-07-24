webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "../node_modules/date-fns/esm/index.js");
/* harmony import */ var _templates_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/layout */ "./templates/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");


var _this = undefined,
    _jsxFileName = "E:\\web Developer Projects\\keystone_blog\\app\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      .header {}\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      allPosts {\n        title\n        id\n        body\n        posted\n        slug\n        image {\n          publicUrl\n        }\n        author {\n          name\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









/** @jsx jsx */

var Post = function Post(_ref) {
  var post = _ref.post;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[slug]?slug=".concat(post.slug),
    as: "/post/".concat(post.slug),
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
    css: {
      display: 'block',
      background: 'white',
      boxShadow: '0px 10px 20px hsla(200, 20%, 20%, 0.20)',
      marginBottom: 32,
      cursor: 'pointer',
      borderRadius: 6,
      overflow: 'hidden'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, post.image ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: post.image.publicUrl,
    css: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 23
    }
  }) : null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("article", {
    css: {
      padding: '1em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
    css: {
      marginTop: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, post.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    dangerouslySetInnerHTML: {
      __html: post.body
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    css: {
      marginTop: '1em',
      borderTop: '1px solid hsl(200, 20%, 80%)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    css: {
      fontSize: '0.8em',
      marginBottom: 0,
      color: 'hsl(200, 20%, 50%)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Posted by ", post.author ? post.author.name : 'someone', " on", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["parseISO"])(post.posted), 'dd/MM/yyyy'))))));
};

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_9__["withApollo"])(_c2 = _s(function () {
  _s();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject())),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["Global"], {
    styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject2()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_templates_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "../../public/images/food.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    className: "latest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Latest Posts"), loading ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "loading...") : error ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "Error!") : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, data.allPosts.length ? data.allPosts.map(function (post) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Post, {
      post: post,
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 41
      }
    });
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, "No posts to display")))));
}, "tP+6C5plfRwxqCbBj3cMUcL7Opk=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
})));

var _c, _c2, _c3;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "%default%$withApollo");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsInNsdWciLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiaW1hZ2UiLCJwdWJsaWNVcmwiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsIl9faHRtbCIsImJvZHkiLCJib3JkZXJUb3AiLCJmb250U2l6ZSIsImNvbG9yIiwiYXV0aG9yIiwibmFtZSIsImZvcm1hdCIsInBhcnNlSVNPIiwicG9zdGVkIiwid2l0aEFwb2xsbyIsInVzZVF1ZXJ5IiwiZ3FsIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImNzcyIsImFsbFBvc3RzIiwibGVuZ3RoIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsU0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksOEJBQXVCQSxJQUFJLENBQUNDLElBQTVCLENBQVY7QUFBOEMsTUFBRSxrQkFBV0QsSUFBSSxDQUFDQyxJQUFoQixDQUFoRDtBQUF3RSxZQUFRLE1BQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRTtBQUNIQyxhQUFPLEVBQUUsT0FETjtBQUVIQyxnQkFBVSxFQUFFLE9BRlQ7QUFHSEMsZUFBUyxFQUFFLHlDQUhSO0FBSUhDLGtCQUFZLEVBQUUsRUFKWDtBQUtIQyxZQUFNLEVBQUUsU0FMTDtBQU1IQyxrQkFBWSxFQUFFLENBTlg7QUFPSEMs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QTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSjtBQUFBLEdBQXRCLENBREQsR0FHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKLENBUEosQ0FKRixDQVJBLENBREY7QUFnQ0QsQ0FuRHdCO0FBQUEsVUFDVVQsNERBRFY7QUFBQSxHQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTg1YmFmNGJlNzMzZWRkMDRjNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcblxuaW1wb3J0IHsganN4LCBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi90ZW1wbGF0ZXMvbGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJy4uL2xpYi9hcG9sbG8nO1xuXG4vKiogQGpzeCBqc3ggKi9cblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2AvcG9zdC9bc2x1Z10/c2x1Zz0ke3Bvc3Quc2x1Z31gfSBhcz17YC9wb3N0LyR7cG9zdC5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgPGFcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgIGJveFNoYWRvdzogJzBweCAxMHB4IDIwcHggaHNsYSgyMDAsIDIwJSwgMjAlLCAwLjIwKScsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cG9zdC5pbWFnZSA/IDxpbWcgc3JjPXtwb3N0LmltYWdlLnB1YmxpY1VybH0gY3NzPXt7IHdpZHRoOiAnMTAwJScgfX0gLz4gOiBudWxsfVxuICAgICAgICA8YXJ0aWNsZSBjc3M9e3sgcGFkZGluZzogJzFlbScgfX0+XG4gICAgICAgICAgPGgzIGNzcz17eyBtYXJnaW5Ub3A6IDAgfX0+e3Bvc3QudGl0bGV9PC9oMz5cbiAgICAgICAgICA8c2VjdGlvbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYm9keSB9fSAvPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IG1hcmdpblRvcDogJzFlbScsIGJvcmRlclRvcDogJzFweCBzb2xpZCBoc2woMjAwLCAyMCUsIDgwJSknIH19PlxuICAgICAgICAgICAgPHAgY3NzPXt7IGZvbnRTaXplOiAnMC44ZW0nLCBtYXJnaW5Cb3R0b206IDAsIGNvbG9yOiAnaHNsKDIwMCwgMjAlLCA1MCUpJyB9fT5cbiAgICAgICAgICAgICAgUG9zdGVkIGJ5IHtwb3N0LmF1dGhvciA/IHBvc3QuYXV0aG9yLm5hbWUgOiAnc29tZW9uZSd9IG9ueycgJ31cbiAgICAgICAgICAgICAge2Zvcm1hdChwYXJzZUlTTyhwb3N0LnBvc3RlZCksICdkZC9NTS95eXl5Jyl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKCgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIGFsbFBvc3RzIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgaWRcbiAgICAgICAgYm9keVxuICAgICAgICBwb3N0ZWRcbiAgICAgICAgc2x1Z1xuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgcHVibGljVXJsXG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8R2xvYmFsIFxuICAgIHN0eWxlcz17XG4gICAgICBjc3NgXG4gICAgICAuaGVhZGVyIHt9XG4gICAgICBgXG4gICAgfVxuICAgIC8+XG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxpbWcgc3JjID0gJy4uLy4uL3B1YmxpYy9pbWFnZXMvZm9vZC5wbmcnLz5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdsYXRlc3QnPlxuICAgICAgICA8aDI+TGF0ZXN0IFBvc3RzPC9oMj5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPHA+bG9hZGluZy4uLjwvcD5cbiAgICAgICAgKSA6IGVycm9yID8gKFxuICAgICAgICAgIDxwPkVycm9yITwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2RhdGEuYWxsUG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICBkYXRhLmFsbFBvc3RzLm1hcChwb3N0ID0+IDxQb3N0IHBvc3Q9e3Bvc3R9IGtleT17cG9zdC5pZH0gLz4pXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cD5ObyBwb3N0cyB0byBkaXNwbGF5PC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==