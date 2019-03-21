webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ArticleList.js":
/*!***********************************!*\
  !*** ./components/ArticleList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/Context */ "./config/Context.js");
var _jsxFileName = "/Users/joelhoelting/Dev/dbox/next-context-api-test/components/ArticleList.js";



var ArticleList = function ArticleList() {
  var generateArticles = function generateArticles() {
    var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_config_Context__WEBPACK_IMPORTED_MODULE_1__["default"]);
    console.log(context, 'context'); // Context returns undefined

    return context.articles.map(function (article) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, article.title);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Article List"), generateArticles());
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=index.js.2fec4bd683a3b28e8a94.hot-update.js.map