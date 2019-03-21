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
    console.log(context, 'context');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, generateArticles());
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ArticleList */ "./components/ArticleList.js");
var _jsxFileName = "/Users/joelhoelting/Dev/dbox/next-context-api-test/pages/index.js";



var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.40be2ca534b4cef559b8.hot-update.js.map