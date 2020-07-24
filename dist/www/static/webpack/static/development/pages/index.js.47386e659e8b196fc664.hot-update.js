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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      .main {\n        margin-top: 2rem;\n      }\n      .foodPic {\n        height: 500px;\n        width: auto;\n      }\n      "]);

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
      lineNumber: 79,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "../../public/images/food.png",
    className: "foddPic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    className: "latest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Latest Posts"), loading ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "loading...") : error ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Error!") : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, data.allPosts.length ? data.allPosts.map(function (post) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Post, {
      post: post,
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 41
      }
    });
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsInNsdWciLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiaW1hZ2UiLCJwdWJsaWNVcmwiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsIl9faHRtbCIsImJvZHkiLCJib3JkZXJUb3AiLCJmb250U2l6ZSIsImNvbG9yIiwiYXV0aG9yIiwibmFtZSIsImZvcm1hdCIsInBhcnNlSVNPIiwicG9zdGVkIiwid2l0aEFwb2xsbyIsInVzZVF1ZXJ5IiwiZ3FsIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImNzcyIsImFsbFBvc3RzIiwibGVuZ3RoIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsU0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksOEJBQXVCQSxJQUFJLENBQUNDLElBQTVCLENBQVY7QUFBOEMsTUFBRSxrQkFBV0QsSUFBSSxDQUFDQyxJQUFoQixDQUFoRDtBQUF3RSxZQUFRLE1BQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRTtBQUNIQyxhQUFPLEVBQUUsT0FETjtBQUVIQyxnQkFBVSxFQUFFLE9BRlQ7QUFHSEMsZUFBUyxFQUFFLHlDQUhSO0FBSUhDLGtCQUFZLEVBQUUsRUFKWDtBQUtIQyxZQUFNLEVBQUUsU0FMTDtBQU1IQyxrQkFBWSxFQUFFLENBTlg7QUFPSEMs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a0IsVUFBQWxDLElBQUk7QUFBQSxXQUFJLDBEQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBa0IsU0FBRyxFQUFFQSxJQUFJLENBQUNtQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUF0QixDQURELEdBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKSixDQVBKLENBTEYsQ0FkQSxDQURGO0FBdUNELENBMUR3QjtBQUFBLFVBQ1VULDREQURWO0FBQUEsR0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ3Mzg2ZTY1OWU4YjE5NmZjNjY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5cbmltcG9ydCB7IGpzeCwgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vdGVtcGxhdGVzL2xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICcuLi9saWIvYXBvbGxvJztcblxuLyoqIEBqc3gganN4ICovXG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtgL3Bvc3QvW3NsdWddP3NsdWc9JHtwb3N0LnNsdWd9YH0gYXM9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgIDxhXG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICBib3hTaGFkb3c6ICcwcHggMTBweCAyMHB4IGhzbGEoMjAwLCAyMCUsIDIwJSwgMC4yMCknLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzIsXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Bvc3QuaW1hZ2UgPyA8aW1nIHNyYz17cG9zdC5pbWFnZS5wdWJsaWNVcmx9IGNzcz17eyB3aWR0aDogJzEwMCUnIH19IC8+IDogbnVsbH1cbiAgICAgICAgPGFydGljbGUgY3NzPXt7IHBhZGRpbmc6ICcxZW0nIH19PlxuICAgICAgICAgIDxoMyBjc3M9e3sgbWFyZ2luVG9wOiAwIH19Pntwb3N0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHNlY3Rpb24gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmJvZHkgfX0gLz5cbiAgICAgICAgICA8ZGl2IGNzcz17eyBtYXJnaW5Ub3A6ICcxZW0nLCBib3JkZXJUb3A6ICcxcHggc29saWQgaHNsKDIwMCwgMjAlLCA4MCUpJyB9fT5cbiAgICAgICAgICAgIDxwIGNzcz17eyBmb250U2l6ZTogJzAuOGVtJywgbWFyZ2luQm90dG9tOiAwLCBjb2xvcjogJ2hzbCgyMDAsIDIwJSwgNTAlKScgfX0+XG4gICAgICAgICAgICAgIFBvc3RlZCBieSB7cG9zdC5hdXRob3IgPyBwb3N0LmF1dGhvci5uYW1lIDogJ3NvbWVvbmUnfSBvbnsnICd9XG4gICAgICAgICAgICAgIHtmb3JtYXQocGFyc2VJU08ocG9zdC5wb3N0ZWQpLCAnZGQvTU0veXl5eScpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbygoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICBhbGxQb3N0cyB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGlkXG4gICAgICAgIGJvZHlcbiAgICAgICAgcG9zdGVkXG4gICAgICAgIHNsdWdcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHB1YmxpY1VybFxuICAgICAgICB9XG4gICAgICAgIGF1dGhvciB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEdsb2JhbCBcbiAgICBzdHlsZXM9e1xuICAgICAgY3NzYFxuICAgICAgLm1haW4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLmZvb2RQaWMge1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgIH1cbiAgICAgIGBcbiAgICB9XG4gICAgLz5cbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbWFpbic+XG4gICAgICA8aW1nIHNyYyA9ICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2Zvb2QucG5nJyBjbGFzc05hbWUgPSAnZm9kZFBpYycvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2xhdGVzdCc+XG4gICAgICAgIDxoMj5MYXRlc3QgUG9zdHM8L2gyPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8cD5sb2FkaW5nLi4uPC9wPlxuICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgPHA+RXJyb3IhPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZGF0YS5hbGxQb3N0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIGRhdGEuYWxsUG9zdHMubWFwKHBvc3QgPT4gPFBvc3QgcG9zdD17cG9zdH0ga2V5PXtwb3N0LmlkfSAvPilcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPk5vIHBvc3RzIHRvIGRpc3BsYXk8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9