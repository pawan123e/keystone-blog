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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      .main {\n        padding-top: 5rem;\n        width: 90%;\n        margin: auto;\n        display: flex;\n        align-items: center;\n        height: 100vh;\n      }\n      .foodPic {\n        width: 50%;\n        margin-left: auto;\n      }\n      .foodPic img {\n        width: 100%;\n        height: auto;\n      }\n      "]);

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
      lineNumber: 88,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h1", {
    className: "content_heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    className: "content_detail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, amet provident possimus saepe at ab consectetur culpa, eos itaque aliquid iste sunt excepturi exercitationem ut dolor accusamus repudiandae, debitis eius!"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
    className: "btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "Get Started")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "foodPic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "../../public/images/food.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    className: "latest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Latest Posts"), loading ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "loading...") : error ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Error!") : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, data.allPosts.length ? data.allPosts.map(function (post) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Post, {
      post: post,
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 41
      }
    });
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsInNsdWciLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiaW1hZ2UiLCJwdWJsaWNVcmwiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsIl9faHRtbCIsImJvZHkiLCJib3JkZXJUb3AiLCJmb250U2l6ZSIsImNvbG9yIiwiYXV0aG9yIiwibmFtZSIsImZvcm1hdCIsInBhcnNlSVNPIiwicG9zdGVkIiwid2l0aEFwb2xsbyIsInVzZVF1ZXJ5IiwiZ3FsIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImNzcyIsImFsbFBvc3RzIiwibGVuZ3RoIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsU0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksOEJBQXVCQSxJQUFJLENBQUNDLElBQTVCLENBQVY7QUFBOEMsTUFBRSxrQkFBV0QsSUFBSSxDQUFDQyxJQUFoQixDQUFoRDtBQUF3RSxZQUFRLE1BQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRTtBQUNIQyxhQUFPLEVBQUUsT0FETjtBQUVIQyxnQkFBVSxFQUFFLE9BRlQ7QUFHSEMsZUFBUyxFQUFFLHlDQUhSO0FBSUhDLGtCQUFZLEVBQUUsRUFKWDtBQUtIQyxZQUFNLEVBQUUsU0FMTDtBQU1IQyxrQkFBWSxFQUFFLENBTlg7QUFPSEMsY0FBUSxFQUFFO0FBUFAsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0dSLElBQUksQ0FBQ1MsS0FBTCxHQUFhO0FBQUssT0FBRyxFQUFFVCxJQUFJLENBQUNTLEtBQUwsQ0FBV0MsU0FBckI7QUFBZ0MsT0FBRyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBYixHQUEwRSxJQVg3RSxFQVlFO0FBQVMsT0FBRyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksT0FBRyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QmIsSUFBSSxDQUFDYyxLQUFqQyxDQURGLEVBRUU7QUFBUywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVmLElBQUksQ0FBQ2dCO0FBQWYsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxPQUFHLEVBQUU7QUFBRUgsZUFBUyxFQUFFLEtBQWI7QUFBb0JJLGVBQVMsRUFBRTtBQUEvQixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRTtBQUFFQyxjQUFRLEVBQUUsT0FBWjtBQUFxQmIsa0JBQVksRUFBRSxDQUFuQztBQUFzQ2MsV0FBSyxFQUFFO0FBQTdDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYW5CLElBQUksQ0FBQ29CLE1BQUwsR0FBY3BCLElBQUksQ0FBQ29CLE1BQUwsQ0FBWUMsSUFBMUIsR0FBaUMsU0FEOUMsU0FDNEQsR0FENUQsRUFFR0MsdURBQU0sQ0FBQ0MseURBQVEsQ0FBQ3ZCLElBQUksQ0FBQ3dCLE1BQU4sQ0FBVCxFQUF3QixZQUF4QixDQUZULENBREYsQ0FIRixDQVpGLENBREYsQ0FERjtBQTJCRCxDQTVCRDs7S0FBTXpCLEk7QUE4QlMscUVBQUEwQiw4REFBVSxVQUFDLFlBQU07QUFBQTs7QUFBQSxrQkFDR0Msb0VBQVEsQ0FBQ0Msa0RBQUQsb0JBRFg7QUFBQSxNQUN0QkMsSUFEc0IsYUFDdEJBLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCLGFBQ2hCQSxPQURnQjtBQUFBLE1BQ1BDLEtBRE8sYUFDUEEsS0FETzs7QUFtQjlCLFNBQ0UsdUhBQ0EsMERBQUMsb0RBQUQ7QUFDQSxVQUFNLEVBQ0pDLHlEQURJLG9CQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQXVCQSwwREFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUcsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFHLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlFQURBLEVBRUE7QUFBRyxhQUFTLEVBQUcsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtT0FGQSxFQUdBO0FBQVEsYUFBUyxFQUFHLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEEsQ0FEQSxFQU1BO0FBQUssYUFBUyxFQUFHLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLE9BQUcsRUFBRyw4QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FOQSxDQUZGLEVBWUU7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFR0YsT0FBTyxHQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRE0sR0FFSkMsS0FBSyxHQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxHQUdQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsSUFBSSxDQUFDSSxRQUFMLENBQWNDLE1BQWQsR0FDQ0wsSUFBSSxDQUFDSSxRQUFMLENBQWNFLEdBQWQsQ0FBa0IsVUFBQWxDLElBQUk7QUFBQSxXQUFJLDBEQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBa0IsU0FBRyxFQUFFQSxJQUFJLENBQUNtQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUF0QixDQURELEdBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKSixDQVBKLENBWkYsQ0F2QkEsQ0FERjtBQXVERCxDQTFFd0I7QUFBQSxVQUNVVCw0REFEVjtBQUFBLEdBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wOWYyNTQ5OTA1YmM0MjgxZGY5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG5pbXBvcnQgeyBqc3gsIEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3RlbXBsYXRlcy9sYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnLi4vbGliL2Fwb2xsbyc7XG5cbi8qKiBAanN4IGpzeCAqL1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17YC9wb3N0L1tzbHVnXT9zbHVnPSR7cG9zdC5zbHVnfWB9IGFzPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICA8YVxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgYm94U2hhZG93OiAnMHB4IDEwcHggMjBweCBoc2xhKDIwMCwgMjAlLCAyMCUsIDAuMjApJyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDMyLFxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwb3N0LmltYWdlID8gPGltZyBzcmM9e3Bvc3QuaW1hZ2UucHVibGljVXJsfSBjc3M9e3sgd2lkdGg6ICcxMDAlJyB9fSAvPiA6IG51bGx9XG4gICAgICAgIDxhcnRpY2xlIGNzcz17eyBwYWRkaW5nOiAnMWVtJyB9fT5cbiAgICAgICAgICA8aDMgY3NzPXt7IG1hcmdpblRvcDogMCB9fT57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgIDxzZWN0aW9uIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5ib2R5IH19IC8+XG4gICAgICAgICAgPGRpdiBjc3M9e3sgbWFyZ2luVG9wOiAnMWVtJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIGhzbCgyMDAsIDIwJSwgODAlKScgfX0+XG4gICAgICAgICAgICA8cCBjc3M9e3sgZm9udFNpemU6ICcwLjhlbScsIG1hcmdpbkJvdHRvbTogMCwgY29sb3I6ICdoc2woMjAwLCAyMCUsIDUwJSknIH19PlxuICAgICAgICAgICAgICBQb3N0ZWQgYnkge3Bvc3QuYXV0aG9yID8gcG9zdC5hdXRob3IubmFtZSA6ICdzb21lb25lJ30gb257JyAnfVxuICAgICAgICAgICAgICB7Zm9ybWF0KHBhcnNlSVNPKHBvc3QucG9zdGVkKSwgJ2RkL01NL3l5eXknKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShncWxgXG4gICAgcXVlcnkge1xuICAgICAgYWxsUG9zdHMge1xuICAgICAgICB0aXRsZVxuICAgICAgICBpZFxuICAgICAgICBib2R5XG4gICAgICAgIHBvc3RlZFxuICAgICAgICBzbHVnXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxcbiAgICAgICAgfVxuICAgICAgICBhdXRob3Ige1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxHbG9iYWwgXG4gICAgc3R5bGVzPXtcbiAgICAgIGNzc2BcbiAgICAgIC5tYWluIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cbiAgICAgIC5mb29kUGljIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgICAuZm9vZFBpYyBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgYFxuICAgIH1cbiAgICAvPlxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdtYWluJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRlbnQnPlxuICAgICAgPGgxIGNsYXNzTmFtZT0nY29udGVudF9oZWFkaW5nJz5Mb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC48L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lID0gJ2NvbnRlbnRfZGV0YWlsJz5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWFxdWUsIGFtZXQgcHJvdmlkZW50IHBvc3NpbXVzIHNhZXBlIGF0IGFiIGNvbnNlY3RldHVyIGN1bHBhLCBlb3MgaXRhcXVlIGFsaXF1aWQgaXN0ZSBzdW50IGV4Y2VwdHVyaSBleGVyY2l0YXRpb25lbSB1dCBkb2xvciBhY2N1c2FtdXMgcmVwdWRpYW5kYWUsIGRlYml0aXMgZWl1cyE8L3A+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9ICdidG4nPkdldCBTdGFydGVkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2Zvb2RQaWMnPlxuICAgICAgPGltZyBzcmMgPSAnLi4vLi4vcHVibGljL2ltYWdlcy9mb29kLnBuZycvPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbGF0ZXN0Jz5cbiAgICAgICAgPGgyPkxhdGVzdCBQb3N0czwvaDI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxwPmxvYWRpbmcuLi48L3A+XG4gICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICA8cD5FcnJvciE8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtkYXRhLmFsbFBvc3RzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgZGF0YS5hbGxQb3N0cy5tYXAocG9zdCA9PiA8UG9zdCBwb3N0PXtwb3N0fSBrZXk9e3Bvc3QuaWR9IC8+KVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHA+Tm8gcG9zdHMgdG8gZGlzcGxheTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=