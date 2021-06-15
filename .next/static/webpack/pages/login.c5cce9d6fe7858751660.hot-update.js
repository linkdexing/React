self["webpackHotUpdate_N_E"]("pages/login",{

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
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-recaptcha-v3 */ "./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _api_endpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/endpoints */ "./api/endpoints.js");
/* harmony import */ var _components_publicHOC__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/publicHOC */ "./components/publicHOC.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\JasmeetSingh\\Documents\\Linkdexing.com\\practice nextjs\\nextjs-blog\\pages\\login.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function login(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useGoogleReCaptcha = (0,react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_7__.useGoogleReCaptcha)(),
      executeRecaptcha = _useGoogleReCaptcha.executeRecaptcha;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      verified = _useState[0],
      setVerified = _useState[1];

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var handleReCaptchaVerify = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)( /*#__PURE__*/function () {
    var _ref = (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(token) {
      var res;
      return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_9__.publicApi.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_10__.captchaUrl, {
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

              react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Captcha not verified");
              return _context2.abrupt("return");

            case 4:
              _context2.next = 6;
              return _api__WEBPACK_IMPORTED_MODULE_9__.publicApi.post("".concat(_api_endpoints__WEBPACK_IMPORTED_MODULE_10__.authUrl, "/login"), values);

            case 6:
              res = _context2.sent;
              localStorage.setItem("linkdexing_token", res.data.token);
              props.setUser(res.data);
              router.push("/dashboard");
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error(_context2.t0.response.data.message);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function onSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    var run = /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (executeRecaptcha) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return executeRecaptcha();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function run() {
        return _ref3.apply(this, arguments);
      };
    }();

    run();
  }, [executeRecaptcha]);
  console.log(executeRecaptcha);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_publicHOC__WEBPACK_IMPORTED_MODULE_11__.default, {
    user: props.user,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "card col-8",
          style: {
            width: 500,
            marginTop: 130,
            marginLeft: 20
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
              className: "form-control-sm",
              onSubmit: handleSubmit(onSubmit),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "mb-3",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                  htmlFor: "exampleInputEmail1",
                  className: "form-label",
                  children: "Email address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
                  type: "email",
                  className: "form-control",
                  "aria-describedby": "emailHelp"
                }, register("email", {
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, this), (errors === null || errors === void 0 ? void 0 : errors.email) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  className: "text-danger",
                  children: "Incorrect Email."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "mb-3",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                  htmlFor: "exampleInputPassword1",
                  className: "form-label",
                  children: "Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
                  type: "password",
                  className: "form-control"
                }, register("password", {
                  required: true
                })), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, this), (errors === null || errors === void 0 ? void 0 : errors.password) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  className: "text-danger",
                  children: "Incorrect Password."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_7__.GoogleReCaptcha, {
                onVerify: handleReCaptchaVerify
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/register",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    children: "Forgot Password?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary w-100",
                  children: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Not a member? "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/register",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    children: "Register Now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
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

_s(login, "vAvDcl4u4dUtmkM9Bqq/CUjbqFA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_7__.useGoogleReCaptcha, react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbImxvZ2luIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VHb29nbGVSZUNhcHRjaGEiLCJleGVjdXRlUmVjYXB0Y2hhIiwidXNlU3RhdGUiLCJ2ZXJpZmllZCIsInNldFZlcmlmaWVkIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwiaGFuZGxlUmVDYXB0Y2hhVmVyaWZ5IiwidXNlQ2FsbGJhY2siLCJ0b2tlbiIsInB1YmxpY0FwaSIsImNhcHRjaGFVcmwiLCJyZXMiLCJkYXRhIiwib2siLCJvblN1Ym1pdCIsInZhbHVlcyIsInRvYXN0IiwiYXV0aFVybCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRVc2VyIiwicHVzaCIsInJlc3BvbnNlIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsInJ1biIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEbUMsNEJBRU5DLDZFQUFrQixFQUZaO0FBQUEsTUFFM0JDLGdCQUYyQix1QkFFM0JBLGdCQUYyQjs7QUFBQSxrQkFHSEMsK0NBQVEsQ0FBQyxLQUFELENBSEw7QUFBQSxNQUc1QkMsUUFINEI7QUFBQSxNQUdsQkMsV0FIa0I7O0FBQUEsaUJBUy9CQyx3REFBTyxFQVR3QjtBQUFBLE1BTWpDQyxRQU5pQyxZQU1qQ0Es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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFzQiwyQkFBUyxFQUFDLHVCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBeENGLGVBZ0RFO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsV0FBWDtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzRUQ7O0dBMUh1QmQsSztVQUNQRyxrRCxFQUNjQyx5RSxFQU96Qkssb0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYzVjY2U5ZDZmZTc4NTg3NTE2NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdvb2dsZVJlQ2FwdGNoYSwgdXNlR29vZ2xlUmVDYXB0Y2hhIH0gZnJvbSBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGEtdjNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgcHVibGljQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBhdXRoVXJsLCBjYXB0Y2hhVXJsIH0gZnJvbSBcIi4uL2FwaS9lbmRwb2ludHNcIjtcclxuaW1wb3J0IFB1YmxpY0hPQyBmcm9tIFwiLi4vY29tcG9uZW50cy9wdWJsaWNIT0NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBleGVjdXRlUmVjYXB0Y2hhIH0gPSB1c2VHb29nbGVSZUNhcHRjaGEoKTtcclxuICBjb25zdCBbdmVyaWZpZWQsIHNldFZlcmlmaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVDYXB0Y2hhVmVyaWZ5ID0gdXNlQ2FsbGJhY2soYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBwdWJsaWNBcGkucG9zdChjYXB0Y2hhVXJsLCB7IHRva2VuIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhLm9rKSB7XHJcbiAgICAgICAgc2V0VmVyaWZpZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VmVyaWZpZWQoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0VmVyaWZpZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXZlcmlmaWVkKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJDYXB0Y2hhIG5vdCB2ZXJpZmllZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHB1YmxpY0FwaS5wb3N0KGAke2F1dGhVcmx9L2xvZ2luYCwgdmFsdWVzKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaW5rZGV4aW5nX3Rva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgcHJvcHMuc2V0VXNlcihyZXMuZGF0YSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoIWV4ZWN1dGVSZWNhcHRjaGEpIHJldHVybjtcclxuICAgICAgYXdhaXQgZXhlY3V0ZVJlY2FwdGNoYSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBydW4oKTtcclxuICB9LCBbZXhlY3V0ZVJlY2FwdGNoYV0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhleGVjdXRlUmVjYXB0Y2hhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQdWJsaWNIT0MgdXNlcj17cHJvcHMudXNlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBjb2wtOFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA1MDAsIG1hcmdpblRvcDogMTMwLCBtYXJnaW5MZWZ0OiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtc21cIlxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8sXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnM/LmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkluY29ycmVjdCBFbWFpbC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnM/LnBhc3N3b3JkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkluY29ycmVjdCBQYXNzd29yZC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlUmVDYXB0Y2hhIG9uVmVyaWZ5PXtoYW5kbGVSZUNhcHRjaGFWZXJpZnl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPk5vdCBhIG1lbWJlcj8gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UmVnaXN0ZXIgTm93PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QdWJsaWNIT0M+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9