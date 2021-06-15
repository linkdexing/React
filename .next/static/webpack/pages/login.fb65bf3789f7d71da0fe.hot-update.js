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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("login"),
      form = _useState[0],
      setForm = _useState[1];

  var _useGoogleReCaptcha = (0,react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_6__.useGoogleReCaptcha)(),
      executeRecaptcha = _useGoogleReCaptcha.executeRecaptcha;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      verified = _useState2[0],
      setVerified = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),
      user = _useState3[0],
      setUser = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      disableResend = _useState4[0],
      setDisableResend = _useState4[1];

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
              setUser(res.data.user);
              localStorage.setItem("linkdexing_token", res.data.token);
              console.log(res.data);

              if (res.data.verified) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", setForm("otp"));

            case 12:
              props.setRefresh(true);
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error(_context2.t0.response.data.message);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    return function onSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onOtpSubmit = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(values) {
      return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_8__.publicApi.post("".concat(_api_endpoints__WEBPACK_IMPORTED_MODULE_9__.authUrl, "/verify-otp/").concat(user._id), {
                otp: values.otp.toString()
              });

            case 3:
              react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success("Account verified successfully");
              props.setRefresh(true);
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error(_context3.t0.error || _context3.t0.response.data.message);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function onOtpSubmit(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var run = /*#__PURE__*/function () {
      var _ref4 = (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (executeRecaptcha) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return executeRecaptcha();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function run() {
        return _ref4.apply(this, arguments);
      };
    }();

    run();
  }, [executeRecaptcha]);

  var handleResend = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setDisableResend(true);
              _context5.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_8__.publicApi.post("".concat(_api_endpoints__WEBPACK_IMPORTED_MODULE_9__.authUrl, "/send-otp/").concat(user._id));

            case 3:
              setTimeout(function () {
                setDisableResend(false);
              }, 60000);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleResend() {
      return _ref5.apply(this, arguments);
    };
  }();

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
            children: form === "login" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
                    lineNumber: 107,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
                    type: "email",
                    className: "form-control",
                    "aria-describedby": "emailHelp"
                  }, register("email", {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 23
                  }, this), (errors === null || errors === void 0 ? void 0 : errors.email) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-danger",
                    children: "Incorrect Email."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "exampleInputPassword1",
                    className: "form-label",
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
                    type: "password",
                    className: "form-control"
                  }, register("password", {
                    required: true
                  })), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 23
                  }, this), (errors === null || errors === void 0 ? void 0 : errors.password) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-danger",
                    children: "Incorrect Password."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_6__.GoogleReCaptcha, {
                  onVerify: handleReCaptchaVerify
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/forgot-password",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "Forgot Password?"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    type: "submit",
                    className: "btn btn-primary w-100",
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "Not a member? "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/register",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "Register Now"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 21
                }, this)]
              }, void 0, true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              className: "form-control-sm",
              onSubmit: handleSubmit(onOtpSubmit),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "otp",
                    className: "form-label",
                    children: "One-time password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
                    type: "number",
                    className: "form-control"
                  }, register("otp", {
                    required: true,
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: "Invalid OTP format"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 23
                  }, this), (errors === null || errors === void 0 ? void 0 : errors.otp) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-danger",
                    children: errors.otp.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "submit",
                  className: "btn btn-primary w-100",
                  children: "Verify"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-link w-100",
                  onClick: handleResend,
                  disabled: disableResend,
                  children: "Resend OTP"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 21
                }, this)]
              }, void 0, true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

_s(login, "j092z9S0IomPoWGsVc9EjoX1gao=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbImxvZ2luIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImZvcm0iLCJzZXRGb3JtIiwidXNlR29vZ2xlUmVDYXB0Y2hhIiwiZXhlY3V0ZVJlY2FwdGNoYSIsInZlcmlmaWVkIiwic2V0VmVyaWZpZWQiLCJ1c2VyIiwic2V0VXNlciIsImRpc2FibGVSZXNlbmQiLCJzZXREaXNhYmxlUmVzZW5kIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwiaGFuZGxlUmVDYXB0Y2hhVmVyaWZ5IiwidXNlQ2FsbGJhY2siLCJ0b2tlbiIsInB1YmxpY0FwaSIsImNhcHRjaGFVcmwiLCJyZXMiLCJkYXRhIiwib2siLCJvblN1Ym1pdCIsInZhbHVlcyIsInRvYXN0IiwiYXV0aFVybCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0UmVmcmVzaCIsInJlc3BvbnNlIiwibWVzc2FnZSIsIm9uT3RwU3VibWl0IiwiX2lkIiwib3RwIiwidG9TdHJpbmciLCJlcnJvciIsInVzZUVmZmVjdCIsInJ1biIsImhhbmRsZVJlc2VuZCIsInNldFRpbWVvdXQiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsa0JBQ1hDLCtDQUFRLENBQUMsT0FBRCxDQURHO0FBQUEsTUFDNUJDLElBRDRCO0FBQUEsTUFDdEJDLE9BRHNCOztBQUFBLDRCQUVOQyw2RUFBa0IsRUFGWjtBQUFBLE1BRTNC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RTtBQUNFLHdCQUFJLEVBQUMsUUFEUDtBQUVFLDZCQUFTLEVBQUM7QUFGWixxQkFHTXZCLFFBQVEsQ0FBQyxLQUFELEVBQVE7QUFDbEJtQyw0QkFBUSxFQUFFLElBRFE7QUFFbEJDLDJCQUFPLEVBQUU7QUFDUEcsMkJBQUssRUFBRSxZQURBO0FBRVBqQiw2QkFBTyxFQUFFO0FBRkY7QUFGUyxtQkFBUixDQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkYsRUFlRyxDQUFBcEIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUV1QixHQUFSLGtCQUNDO0FBQU0sNkJBQVMsRUFBQyxhQUFoQjtBQUFBLDhCQUNHdkIsTUFBTSxDQUFDdUIsR0FBUCxDQUFXSDtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQXNCRTtBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFzQiwyQkFBUyxFQUFDLHVCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF0QkYsZUF5QkU7QUFDRSxzQkFBSSxFQUFDLFFBRFA7QUFFRSwyQkFBUyxFQUFDLG9CQUZaO0FBR0UseUJBQU8sRUFBRVEsWUFIWDtBQUlFLDBCQUFRLEVBQUVqQyxhQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXpCRjtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0hEOztHQXpNdUJYLEs7VUFFT0sseUUsRUFXekJRLG9EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmZiNjViZjM3ODlmN2Q3MWRhMGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdvb2dsZVJlQ2FwdGNoYSwgdXNlR29vZ2xlUmVDYXB0Y2hhIH0gZnJvbSBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGEtdjNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgcHVibGljQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBhdXRoVXJsLCBjYXB0Y2hhVXJsIH0gZnJvbSBcIi4uL2FwaS9lbmRwb2ludHNcIjtcclxuaW1wb3J0IFB1YmxpY0hPQyBmcm9tIFwiLi4vY29tcG9uZW50cy9wdWJsaWNIT0NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKHByb3BzKSB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoXCJsb2dpblwiKTtcclxuICBjb25zdCB7IGV4ZWN1dGVSZWNhcHRjaGEgfSA9IHVzZUdvb2dsZVJlQ2FwdGNoYSgpO1xyXG4gIGNvbnN0IFt2ZXJpZmllZCwgc2V0VmVyaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbZGlzYWJsZVJlc2VuZCwgc2V0RGlzYWJsZVJlc2VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gIH0gPSB1c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlQ2FwdGNoYVZlcmlmeSA9IHVzZUNhbGxiYWNrKGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcHVibGljQXBpLnBvc3QoY2FwdGNoYVVybCwgeyB0b2tlbiB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5vaykge1xyXG4gICAgICAgIHNldFZlcmlmaWVkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFZlcmlmaWVkKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldFZlcmlmaWVkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF2ZXJpZmllZCkge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiQ2FwdGNoYSBub3QgdmVyaWZpZWRcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBwdWJsaWNBcGkucG9zdChgJHthdXRoVXJsfS9sb2dpbmAsIHZhbHVlcyk7XHJcblxyXG4gICAgICBzZXRVc2VyKHJlcy5kYXRhLnVzZXIpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaW5rZGV4aW5nX3Rva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICBpZiAoIXJlcy5kYXRhLnZlcmlmaWVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldEZvcm0oXCJvdHBcIik7XHJcbiAgICAgIH1cclxuICAgICAgcHJvcHMuc2V0UmVmcmVzaCh0cnVlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbk90cFN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHB1YmxpY0FwaS5wb3N0KGAke2F1dGhVcmx9L3ZlcmlmeS1vdHAvJHt1c2VyLl9pZH1gLCB7XHJcbiAgICAgICAgb3RwOiB2YWx1ZXMub3RwLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiQWNjb3VudCB2ZXJpZmllZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHByb3BzLnNldFJlZnJlc2godHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyLmVycm9yIHx8IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghZXhlY3V0ZVJlY2FwdGNoYSkgcmV0dXJuO1xyXG4gICAgICBhd2FpdCBleGVjdXRlUmVjYXB0Y2hhKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJ1bigpO1xyXG4gIH0sIFtleGVjdXRlUmVjYXB0Y2hhXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2VuZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldERpc2FibGVSZXNlbmQodHJ1ZSk7XHJcbiAgICBhd2FpdCBwdWJsaWNBcGkucG9zdChgJHthdXRoVXJsfS9zZW5kLW90cC8ke3VzZXIuX2lkfWApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREaXNhYmxlUmVzZW5kKGZhbHNlKTtcclxuICAgIH0sIDYwMDAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFB1YmxpY0hPQyB1c2VyPXtwcm9wcy51c2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIGNvbC04XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDUwMCwgbWFyZ2luVG9wOiAxMzAsIG1hcmdpbkxlZnQ6IDIwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAge2Zvcm0gPT09IFwibG9naW5cIiA/IChcclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycz8uZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkluY29ycmVjdCBFbWFpbC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzPy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+SW5jb3JyZWN0IFBhc3N3b3JkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVSZUNhcHRjaGEgb25WZXJpZnk9e2hhbmRsZVJlQ2FwdGNoYVZlcmlmeX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3QgYSBtZW1iZXI/IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+UmVnaXN0ZXIgTm93PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXNtXCJcclxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvbk90cFN1Ym1pdCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90cFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT25lLXRpbWUgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcIm90cFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eWzAtOV17Nn0kLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBPVFAgZm9ybWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycz8ub3RwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm90cC5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVmVyaWZ5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVSZXNlbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUmVzZW5kIE9UUFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUHVibGljSE9DPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==