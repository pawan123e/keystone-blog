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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "E:\\web Developer Projects\\keystone_blog\\app\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n background: white;\n height: 100vh;\n"]);

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
      lineNumber: 18,
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
      lineNumber: 19,
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
      lineNumber: 30,
      columnNumber: 23
    }
  }) : null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("article", {
    css: {
      padding: '1em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
    css: {
      marginTop: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, post.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    dangerouslySetInnerHTML: {
      __html: post.body
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
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
      lineNumber: 35,
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

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(IndexWrap, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_templates_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    css: {
      margin: '48px 0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "About"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "This blog was created in KeystoneJS, a fantastic open source framework for developing database-driven websites, applications and APIs in Node.js and GraphQL.")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    css: {
      margin: '48px 0'
    },
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
var IndexWrap = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject2());
_c4 = IndexWrap;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "%default%$withApollo");
$RefreshReg$(_c3, "%default%");
$RefreshReg$(_c4, "IndexWrap");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsInNsdWciLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiaW1hZ2UiLCJwdWJsaWNVcmwiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsIl9faHRtbCIsImJvZHkiLCJib3JkZXJUb3AiLCJmb250U2l6ZSIsImNvbG9yIiwiYXV0aG9yIiwibmFtZSIsImZvcm1hdCIsInBhcnNlSVNPIiwicG9zdGVkIiwid2l0aEFwb2xsbyIsInVzZVF1ZXJ5IiwiZ3FsIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1hcmdpbiIsImFsbFBvc3RzIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJJbmRleFdyYXAiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsU0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksOEJBQXVCQSxJQUFJLENBQUNDLElBQTVCLENBQVY7QUFBOEMsTUFBRSxrQkFBV0QsSUFBSSxDQUFDQyxJQUFoQixDQUFoRDtBQUF3RSxZQUFRLE1BQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRTtBQUNIQyxhQUFPLEVBQUUsT0FETjtBQUVIQyxnQkFBVSxFQUFFLE9BRlQ7QUFHSEMsZUFBUyxFQUFFLHlDQUhSO0FBSUhDLGtCQUFZLEVBQUUsRUFKWDtBQUtIQyxZQUFNLEVBQUUsU0FMTDtBQU1IQyxrQkFBWSxFQUFFLENBTlg7QUFPSEMsY0FBUSxFQUFFO0FBUFAsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0dSLElBQUksQ0FBQ1MsS0FBTCxHQUFhO0FBQUssT0FBRyxFQUFFVCxJQUFJLENBQUNTLEtBQUwsQ0FBV0MsU0FBckI7QUFBZ0MsT0FBRyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBYixHQUEwRSxJQVg3RSxFQVlFO0FBQVMsT0FBRyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksT0FBRyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QmIsSUFBSSxDQUFDYyxLQUFqQyxDQURGLEVBRUU7QUFBUywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVmLElBQUksQ0FBQ2dCO0FBQWYsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxPQUFHLEVBQUU7QUFBRUgsZUFBUyxFQUFFLEtBQWI7QUFBb0JJLGVBQVMsRUFBRTtBQUEvQixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRTtBQUFFQyxjQUFRLEVBQUUsT0FBWjtBQUFxQmIsa0JBQVksRUFBRSxDQUFuQztBQUFzQ2MsV0FBSyxFQUFFO0FBQTdDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYW5CLElBQUksQ0FBQ29CLE1BQUwsR0FBY3BCLElBQUksQ0FBQ29CLE1BQUwsQ0FBWUMsSUFBMUIsR0FBaUMsU0FEOUMsU0FDNEQsR0FENUQsRUFFR0MsdURBQU0sQ0FBQ0MseURBQVEsQ0FBQ3ZCLElBQUksQ0FBQ3dCLE1BQU4sQ0FBVCxFQUF3QixZQUF4QixDQUZULENBREYsQ0FIRixDQVpGLENBREYsQ0FERjtBQTJCRCxDQTVCRDs7S0FBTXpCLEk7QUE4QlMscUVBQUEwQiw4REFBVSxVQUFDLFlBQU07QUFBQTs7QUFBQSxrQkFDR0Msb0VBQVEsQ0FBQ0Msa0RBQUQsb0JBRFg7QUFBQSxNQUN0QkMsSUFEc0IsYUFDdEJBLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCLGFBQ2hCQSxPQURnQjtBQUFBLE1BQ1BDLEtBRE8sYUFDUEEsS0FETzs7QUFtQjlCLFNBQ0UsMERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsMERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVMsT0FBRyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUtBRkYsQ0FGRixFQVVFO0FBQVMsT0FBRyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFR0YsT0FBTyxHQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRE0sR0FFSkMsS0FBSyxHQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxHQUdQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsSUFBSSxDQUFDSSxRQUFMLENBQWNDLE1BQWQsR0FDQ0wsSUFBSSxDQUFDSSxRQUFMLENBQWNFLEdBQWQsQ0FBa0IsVUFBQWxDLElBQUk7QUFBQSxXQUFJLDBEQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBa0IsU0FBRyxFQUFFQSxJQUFJLENBQUNtQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUF0QixDQURELEdBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKSixDQVBKLENBVkYsQ0FEQSxDQURGO0FBK0JELENBbER3QjtBQUFBLFVBQ1VULDREQURWO0FBQUEsR0FBekI7QUFvREEsSUFBTVUsU0FBUyxHQUFHQywwREFBTSxDQUFDQyxHQUFWLG9CQUFmO01BQU1GLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjM0ZWNjYWI3N2UxMjMwOGE3ODhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi90ZW1wbGF0ZXMvbGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJy4uL2xpYi9hcG9sbG8nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qKiBAanN4IGpzeCAqL1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17YC9wb3N0L1tzbHVnXT9zbHVnPSR7cG9zdC5zbHVnfWB9IGFzPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICA8YVxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgYm94U2hhZG93OiAnMHB4IDEwcHggMjBweCBoc2xhKDIwMCwgMjAlLCAyMCUsIDAuMjApJyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDMyLFxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwb3N0LmltYWdlID8gPGltZyBzcmM9e3Bvc3QuaW1hZ2UucHVibGljVXJsfSBjc3M9e3sgd2lkdGg6ICcxMDAlJyB9fSAvPiA6IG51bGx9XG4gICAgICAgIDxhcnRpY2xlIGNzcz17eyBwYWRkaW5nOiAnMWVtJyB9fT5cbiAgICAgICAgICA8aDMgY3NzPXt7IG1hcmdpblRvcDogMCB9fT57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgIDxzZWN0aW9uIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5ib2R5IH19IC8+XG4gICAgICAgICAgPGRpdiBjc3M9e3sgbWFyZ2luVG9wOiAnMWVtJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIGhzbCgyMDAsIDIwJSwgODAlKScgfX0+XG4gICAgICAgICAgICA8cCBjc3M9e3sgZm9udFNpemU6ICcwLjhlbScsIG1hcmdpbkJvdHRvbTogMCwgY29sb3I6ICdoc2woMjAwLCAyMCUsIDUwJSknIH19PlxuICAgICAgICAgICAgICBQb3N0ZWQgYnkge3Bvc3QuYXV0aG9yID8gcG9zdC5hdXRob3IubmFtZSA6ICdzb21lb25lJ30gb257JyAnfVxuICAgICAgICAgICAgICB7Zm9ybWF0KHBhcnNlSVNPKHBvc3QucG9zdGVkKSwgJ2RkL01NL3l5eXknKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShncWxgXG4gICAgcXVlcnkge1xuICAgICAgYWxsUG9zdHMge1xuICAgICAgICB0aXRsZVxuICAgICAgICBpZFxuICAgICAgICBib2R5XG4gICAgICAgIHBvc3RlZFxuICAgICAgICBzbHVnXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxcbiAgICAgICAgfVxuICAgICAgICBhdXRob3Ige1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYCk7XG5cbiAgcmV0dXJuIChcbiAgICA8SW5kZXhXcmFwPlxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8c2VjdGlvbiBjc3M9e3sgbWFyZ2luOiAnNDhweCAwJyB9fT5cbiAgICAgICAgPGgyPkFib3V0PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhpcyBibG9nIHdhcyBjcmVhdGVkIGluIEtleXN0b25lSlMsIGEgZmFudGFzdGljIG9wZW4gc291cmNlIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZ1xuICAgICAgICAgIGRhdGFiYXNlLWRyaXZlbiB3ZWJzaXRlcywgYXBwbGljYXRpb25zIGFuZCBBUElzIGluIE5vZGUuanMgYW5kIEdyYXBoUUwuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY3NzPXt7IG1hcmdpbjogJzQ4cHggMCcgfX0+XG4gICAgICAgIDxoMj5MYXRlc3QgUG9zdHM8L2gyPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8cD5sb2FkaW5nLi4uPC9wPlxuICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgPHA+RXJyb3IhPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZGF0YS5hbGxQb3N0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIGRhdGEuYWxsUG9zdHMubWFwKHBvc3QgPT4gPFBvc3QgcG9zdD17cG9zdH0ga2V5PXtwb3N0LmlkfSAvPilcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPk5vIHBvc3RzIHRvIGRpc3BsYXk8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICAgIDwvSW5kZXhXcmFwPlxuICApO1xufSk7XG5cbmNvbnN0IEluZGV4V3JhcCA9IHN0eWxlZC5kaXZgXG4gYmFja2dyb3VuZDogd2hpdGU7XG4gaGVpZ2h0OiAxMDB2aDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=