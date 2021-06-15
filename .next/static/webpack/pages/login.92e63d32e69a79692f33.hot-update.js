self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/publicHOC.jsx":
/*!**********************************!*\
  !*** ./components/publicHOC.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();




var PublicHOC = function PublicHOC(_ref) {
  _s();

  var user = _ref.user,
      children = _ref.children;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (user) {
      if (!user.verified) {
        router.replace("/verification");
      } else {
        router.replace("/dashboard");
      }
    }
  }, [user]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children
  }, void 0, false);
};

_s(PublicHOC, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = PublicHOC;
/* harmony default export */ __webpack_exports__["default"] = (PublicHOC);

var _c;

$RefreshReg$(_c, "PublicHOC");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ }),

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-recaptcha-v3 */ "./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _api_endpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/endpoints */ "./api/endpoints.js");
/* harmony import */ var _components_publicHOC__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/publicHOC */ "./components/publicHOC.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\JasmeetSingh\\Documents\\Linkdexing.com\\practice nextjs\\nextjs-blog\\pages\\login.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function login(props) {
  _s();

  var _useGoogleReCaptcha = (0,react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_6__.useGoogleReCaptcha)(),
      executeRecaptcha = _useGoogleReCaptcha.executeRecaptcha;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      verified = _useState[0],
      setVerified = _useState[1];

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var handleReCaptchaVerify = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)( /*#__PURE__*/function () {
    var _ref = (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(token) {
      var res;
      return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_8__.publicApi.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_9__.captchaUrl, {
                token: token
              });

            case 3:
              res = _context.sent;

              if (res.data.ok) {
                setVerified(true);
              } else {
                setVerified(false);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setVerified(false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(values) {
      var res;
      return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (verified) {
                _context2.next = 4;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Captcha not verified");
              return _context2.abrupt("return");

            case 4:
              _context2.next = 6;
              return _api__WEBPACK_IMPORTED_MODULE_8__.publicApi.post("".concat(_api_endpoints__WEBPACK_IMPORTED_MODULE_9__.authUrl, "/login"), values);

            case 6:
              res = _context2.sent;
              localStorage.setItem("linkdexing_token", res.data.token);
              console.log(res.data);

              if (res.data.verified) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", setForm("otp"));

            case 11:
              props.setRefresh(true);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error(_context2.t0.response.data.message);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function onSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var run = function run() {
      if (!executeRecaptcha) return;
      executeRecaptcha();
    };

    run();
  }, [executeRecaptcha]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_publicHOC__WEBPACK_IMPORTED_MODULE_10__.default, {
    user: props.user,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card col-8",
          style: {
            width: 500,
            marginTop: 130,
            marginLeft: 20
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              className: "form-control-sm",
              onSubmit: handleSubmit(onSubmit),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "exampleInputEmail1",
                    className: "form-label",
                    children: "Email address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
                    type: "email",
                    className: "form-control",
                    "aria-describedby": "emailHelp"
                  }, register("email", {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, this), (errors === null || errors === void 0 ? void 0 : errors.email) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-danger",
                    children: "Incorrect Email."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "exampleInputPassword1",
                    className: "form-label",
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
                    type: "password",
                    className: "form-control"
                  }, register("password", {
                    required: true
                  })), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, this), (errors === null || errors === void 0 ? void 0 : errors.password) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-danger",
                    children: "Incorrect Password."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_6__.GoogleReCaptcha, {
                  onVerify: handleReCaptchaVerify
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/forgot-password",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "Forgot Password?"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    type: "submit",
                    className: "btn btn-primary w-100",
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "Not a member? "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/register",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "Register Now"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, this)]
              }, void 0, true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

_s(login, "TRqICQQI1SFKPwNc1WJLw4ix3ZE=", false, function () {
  return [react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_6__.useGoogleReCaptcha, react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWNIT0MuanN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qc3giXSwibmFtZXMiOlsiUHVibGljSE9DIiwidXNlciIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidmVyaWZpZWQiLCJyZXBsYWNlIiwibG9naW4iLCJwcm9wcyIsInVzZUdvb2dsZVJlQ2FwdGNoYSIsImV4ZWN1dGVSZWNhcHRjaGEiLCJ1c2VTdGF0ZSIsInNldFZlcmlmaWVkIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwiaGFuZGxlUmVDYXB0Y2hhVmVyaWZ5IiwidXNlQ2FsbGJhY2siLCJ0b2tlbiIsInB1YmxpY0FwaSIsImNhcHRjaGFVcmwiLCJyZXMiLCJkYXRhIiwib2siLCJvblN1Ym1pdCIsInZhbHVlcyIsInRvYXN0IiwiYXV0aFVybCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0Rm9ybSIsInNldFJlZnJlc2giLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJydW4iLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixJQUFKLEVBQVU7QUFDUixVQUFJLENBQUNBLElBQUksQ0FBQ0ssUUFBVixFQUFvQjtBQUNsQkgsY0FB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QUEsd0JBaERGO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRDs7R0FoSXVCWCxLO1VBQ09FLHlFLEVBT3pCSSxvRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi45MmU2M2QzMmU2OWE3OTY5MmYzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHVibGljSE9DID0gKHsgdXNlciwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgaWYgKCF1c2VyLnZlcmlmaWVkKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvdmVyaWZpY2F0aW9uXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdWJsaWNIT0M7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR29vZ2xlUmVDYXB0Y2hhLCB1c2VHb29nbGVSZUNhcHRjaGEgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYS12M1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBwdWJsaWNBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IGF1dGhVcmwsIGNhcHRjaGFVcmwgfSBmcm9tIFwiLi4vYXBpL2VuZHBvaW50c1wiO1xyXG5pbXBvcnQgUHVibGljSE9DIGZyb20gXCIuLi9jb21wb25lbnRzL3B1YmxpY0hPQ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW4ocHJvcHMpIHtcclxuICBjb25zdCB7IGV4ZWN1dGVSZWNhcHRjaGEgfSA9IHVzZUdvb2dsZVJlQ2FwdGNoYSgpO1xyXG4gIGNvbnN0IFt2ZXJpZmllZCwgc2V0VmVyaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZUNhcHRjaGFWZXJpZnkgPSB1c2VDYWxsYmFjayhhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHB1YmxpY0FwaS5wb3N0KGNhcHRjaGFVcmwsIHsgdG9rZW4gfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEub2spIHtcclxuICAgICAgICBzZXRWZXJpZmllZCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRWZXJpZmllZChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRWZXJpZmllZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdmVyaWZpZWQpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIkNhcHRjaGEgbm90IHZlcmlmaWVkXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcHVibGljQXBpLnBvc3QoYCR7YXV0aFVybH0vbG9naW5gLCB2YWx1ZXMpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaW5rZGV4aW5nX3Rva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICBpZiAoIXJlcy5kYXRhLnZlcmlmaWVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldEZvcm0oXCJvdHBcIik7XHJcbiAgICAgIH1cclxuICAgICAgcHJvcHMuc2V0UmVmcmVzaCh0cnVlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcnVuID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWV4ZWN1dGVSZWNhcHRjaGEpIHJldHVybjtcclxuICAgICAgZXhlY3V0ZVJlY2FwdGNoYSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBydW4oKTtcclxuICB9LCBbZXhlY3V0ZVJlY2FwdGNoYV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFB1YmxpY0hPQyB1c2VyPXtwcm9wcy51c2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZCBjb2wtOCdcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDUwMCwgbWFyZ2luVG9wOiAxMzAsIG1hcmdpbkxlZnQ6IDIwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbC1zbSdcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZXhhbXBsZUlucHV0RW1haWwxJyBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT0nZW1haWxIZWxwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycz8uZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+SW5jb3JyZWN0IEVtYWlsLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nZXhhbXBsZUlucHV0UGFzc3dvcmQxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzPy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz5JbmNvcnJlY3QgUGFzc3dvcmQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdvb2dsZVJlQ2FwdGNoYSBvblZlcmlmeT17aGFuZGxlUmVDYXB0Y2hhVmVyaWZ5fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZm9yZ290LXBhc3N3b3JkJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3QgYSBtZW1iZXI/IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVnaXN0ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+UmVnaXN0ZXIgTm93PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QdWJsaWNIT0M+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9