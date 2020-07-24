webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "../node_modules/date-fns/esm/index.js");
/* harmony import */ var _templates_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../templates/layout */ "./templates/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");



var _this = undefined,
    _jsxFileName = "E:\\web Developer Projects\\keystone_blog\\app\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n background: white;\n height: 100vh;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query {\n      allPosts {\n        title\n        id\n        body\n        posted\n        slug\n        image {\n          publicUrl\n        }\n        author {\n          name\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










/** @jsx jsx */

var Post = function Post(_ref) {
  var post = _ref.post;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/post/[slug]?slug=".concat(post.slug),
    as: "/post/".concat(post.slug),
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
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
  }, post.image ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
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
  }) : null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("article", {
    css: {
      padding: '1em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h3", {
    css: {
      marginTop: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, post.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("section", {
    dangerouslySetInnerHTML: {
      __html: post.body
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
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
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
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
  }, "Posted by ", post.author ? post.author.name : 'someone', " on", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["parseISO"])(post.posted), 'dd/MM/yyyy'))))));
};

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_10__["withApollo"])(_c2 = _s(function () {
  _s();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject())),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(IndexWrap, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_templates_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("section", {
    css: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      margin: '1rem 0',
      width: '80%'
    }, "margin", 'auto'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "About"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "This blog was created in KeystoneJS, a fantastic open source framework for developing database-driven websites, applications and APIs in Node.js and GraphQL.")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("section", {
    css: {
      margin: '48px 0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Latest Posts"), loading ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "loading...") : error ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "Error!") : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, data.allPosts.length ? data.allPosts.map(function (post) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Post, {
      post: post,
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 41
      }
    });
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, "No posts to display")))));
}, "tP+6C5plfRwxqCbBj3cMUcL7Opk=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"]];
})));
var IndexWrap = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject2());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0Iiwic2x1ZyIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwibWFyZ2luQm90dG9tIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJpbWFnZSIsInB1YmxpY1VybCIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsInRpdGxlIiwiX19odG1sIiwiYm9keSIsImJvcmRlclRvcCIsImZvbnRTaXplIiwiY29sb3IiLCJhdXRob3IiLCJuYW1lIiwiZm9ybWF0IiwicGFyc2VJU08iLCJwb3N0ZWQiLCJ3aXRoQXBvbGxvIiwidXNlUXVlcnkiLCJncWwiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWFyZ2luIiwiYWxsUG9zdHMiLCJsZW5ndGgiLCJtYXAiLCJpZCIsIkluZGV4V3JhcCIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLFNBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLDhCQUF1QkEsSUFBSSxDQUFDQyxJQUE1QixDQUFWO0FBQThDLE1BQUUsa0JBQVdELElBQUksQ0FBQ0MsSUFBaEIsQ0FB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QUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUdGLE9BQU8sR0FDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURNLEdBRUpDLEtBQUssR0FDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE8sR0FHUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLElBQUksQ0FBQ0ksUUFBTCxDQUFjQyxNQUFkLEdBQ0NMLElBQUksQ0FBQ0ksUUFBTCxDQUFjRSxHQUFkLENBQWtCLFVBQUFsQyxJQUFJO0FBQUEsV0FBSSwwREFBQyxJQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFaO0FBQWtCLFNBQUcsRUFBRUEsSUFBSSxDQUFDbUMsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKO0FBQUEsR0FBdEIsQ0FERCxHQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkosQ0FQSixDQVZGLENBREEsQ0FERjtBQStCRCxDQWxEd0I7QUFBQSxVQUNVVCw0REFEVjtBQUFBLEdBQXpCO0FBb0RBLElBQU1VLFNBQVMsR0FBR0MsMERBQU0sQ0FBQ0MsR0FBVixvQkFBZjtNQUFNRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40MjllMWExZDhiYTQ3Y2NlYmY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vdGVtcGxhdGVzL2xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICcuLi9saWIvYXBvbGxvJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vKiogQGpzeCBqc3ggKi9cblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2AvcG9zdC9bc2x1Z10/c2x1Zz0ke3Bvc3Quc2x1Z31gfSBhcz17YC9wb3N0LyR7cG9zdC5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgPGFcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgIGJveFNoYWRvdzogJzBweCAxMHB4IDIwcHggaHNsYSgyMDAsIDIwJSwgMjAlLCAwLjIwKScsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cG9zdC5pbWFnZSA/IDxpbWcgc3JjPXtwb3N0LmltYWdlLnB1YmxpY1VybH0gY3NzPXt7IHdpZHRoOiAnMTAwJScgfX0gLz4gOiBudWxsfVxuICAgICAgICA8YXJ0aWNsZSBjc3M9e3sgcGFkZGluZzogJzFlbScgfX0+XG4gICAgICAgICAgPGgzIGNzcz17eyBtYXJnaW5Ub3A6IDAgfX0+e3Bvc3QudGl0bGV9PC9oMz5cbiAgICAgICAgICA8c2VjdGlvbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYm9keSB9fSAvPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IG1hcmdpblRvcDogJzFlbScsIGJvcmRlclRvcDogJzFweCBzb2xpZCBoc2woMjAwLCAyMCUsIDgwJSknIH19PlxuICAgICAgICAgICAgPHAgY3NzPXt7IGZvbnRTaXplOiAnMC44ZW0nLCBtYXJnaW5Cb3R0b206IDAsIGNvbG9yOiAnaHNsKDIwMCwgMjAlLCA1MCUpJyB9fT5cbiAgICAgICAgICAgICAgUG9zdGVkIGJ5IHtwb3N0LmF1dGhvciA/IHBvc3QuYXV0aG9yLm5hbWUgOiAnc29tZW9uZSd9IG9ueycgJ31cbiAgICAgICAgICAgICAge2Zvcm1hdChwYXJzZUlTTyhwb3N0LnBvc3RlZCksICdkZC9NTS95eXl5Jyl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKCgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIGFsbFBvc3RzIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgaWRcbiAgICAgICAgYm9keVxuICAgICAgICBwb3N0ZWRcbiAgICAgICAgc2x1Z1xuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgcHVibGljVXJsXG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGApO1xuXG4gIHJldHVybiAoXG4gICAgPEluZGV4V3JhcD5cbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPHNlY3Rpb24gY3NzPXt7IG1hcmdpbjogJzFyZW0gMCcsIHdpZHRoOiAnODAlJywgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgIDxoMj5BYm91dDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgYmxvZyB3YXMgY3JlYXRlZCBpbiBLZXlzdG9uZUpTLCBhIGZhbnRhc3RpYyBvcGVuIHNvdXJjZSBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmdcbiAgICAgICAgICBkYXRhYmFzZS1kcml2ZW4gd2Vic2l0ZXMsIGFwcGxpY2F0aW9ucyBhbmQgQVBJcyBpbiBOb2RlLmpzIGFuZCBHcmFwaFFMLlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNzcz17eyBtYXJnaW46ICc0OHB4IDAnIH19PlxuICAgICAgICA8aDI+TGF0ZXN0IFBvc3RzPC9oMj5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPHA+bG9hZGluZy4uLjwvcD5cbiAgICAgICAgKSA6IGVycm9yID8gKFxuICAgICAgICAgIDxwPkVycm9yITwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2RhdGEuYWxsUG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICBkYXRhLmFsbFBvc3RzLm1hcChwb3N0ID0+IDxQb3N0IHBvc3Q9e3Bvc3R9IGtleT17cG9zdC5pZH0gLz4pXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cD5ObyBwb3N0cyB0byBkaXNwbGF5PC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgICA8L0luZGV4V3JhcD5cbiAgKTtcbn0pO1xuXG5jb25zdCBJbmRleFdyYXAgPSBzdHlsZWQuZGl2YFxuIGJhY2tncm91bmQ6IHdoaXRlO1xuIGhlaWdodDogMTAwdmg7XG5cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=