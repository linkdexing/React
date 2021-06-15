self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RegisterPage; }
/* harmony export */ });
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _api_endpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/endpoints */ "./api/endpoints.js");
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-recaptcha-v3 */ "./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js");
/* harmony import */ var _components_publicHOC__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/publicHOC */ "./components/publicHOC.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\JasmeetSingh\\Documents\\Linkdexing.com\\practice nextjs\\nextjs-blog\\pages\\register.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function RegisterPage(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();

  var _useGoogleReCaptcha = (0,react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_8__.useGoogleReCaptcha)(),
      executeRecaptcha = _useGoogleReCaptcha.executeRecaptcha;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false),
      verified = _useState[0],
      setVerified = _useState[1];

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var handleRecaptchaVerify = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)( /*#__PURE__*/function () {
    var _ref = (0,C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(token) {
      var res;
      return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_6__.publicApi.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_7__.captchaUrl, {
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
      return C_Users_JasmeetSingh_Documents_Linkdexing_com_practice_nextjs_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (verified) {
                _context2.next = 4;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Captcha not Verified");
              return _context2.abrupt("return");

            case 4:
              _context2.next = 6;
              return _api__WEBPACK_IMPORTED_MODULE_6__.publicApi.post(_api_endpoints__WEBPACK_IMPORTED_MODULE_7__.authUrl, values);

            case 6:
              react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Registered successfully");
              router.push("/login");
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error(_context2.t0.response.data.message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function onSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_publicHOC__WEBPACK_IMPORTED_MODULE_9__.default, {
    user: props.user,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "card",
        style: {
          width: 500,
          marginTop: "6rem"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
            className: "form-control-sm",
            onSubmit: handleSubmit(onSubmit),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                htmlFor: "exampleInputName",
                className: "form-label",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
                type: "text",
                className: "form-control",
                name: "name"
              }, register("name", {
                required: true,
                minLength: 4
              })), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this), (errors === null || errors === void 0 ? void 0 : errors.name) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "text-danger",
                children: "Name is too short"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                "for": "exampleInputEmail1",
                className: "form-label",
                children: "Email address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
                type: "email",
                className: "form-control",
                "aria-describedby": "emailHelp"
              }, register("email", {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this), (errors === null || errors === void 0 ? void 0 : errors.email) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "text-danger",
                children: "Invalid Email format"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                htmlFor: "exampleInputPassword1",
                className: "form-label",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({
                type: "password",
                className: "form-control"
              }, register("password", {
                required: true,
                pattern: /^.{5,}$/
              })), {}, {
                "aria-describedby": "passwordlHelp"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this), (errors === null || errors === void 0 ? void 0 : errors.password) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "text-danger",
                children: "Password must be atleast 5 characters long"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_8__.GoogleReCaptcha, {
              onVerify: handleRecaptchaVerify
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-primary w-100",
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mt-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  children: "Already registered? Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(RegisterPage, "UU4rMaCJ8Tz0913s7bXtqLbiXIQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter, react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_8__.useGoogleReCaptcha, react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm];
});

_c = RegisterPage;

var _c;

$RefreshReg$(_c, "RegisterPage");

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

/***/ "./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleReCaptcha": function() { return /* binding */ b; },
/* harmony export */   "GoogleReCaptchaConsumer": function() { return /* binding */ y; },
/* harmony export */   "GoogleReCaptchaContext": function() { return /* binding */ p; },
/* harmony export */   "GoogleReCaptchaProvider": function() { return /* binding */ d; },
/* harmony export */   "useGoogleReCaptcha": function() { return /* binding */ m; },
/* harmony export */   "withGoogleReCaptcha": function() { return /* binding */ ee; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(){return(i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function s(e,t,r,o){return new(r||(r=Promise))((function(n,c){function a(e){try{s(o.next(e))}catch(e){c(e)}}function i(e){try{s(o.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}s((o=o.apply(e,t||[])).next())}))}function u(e,t){var r,o,n,c,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(n=2&c[0]?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){a.label=c[1];break}if(6===c[0]&&a.label<n[1]){a.label=n[1],n=c;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(c);break}n[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],o=0}finally{r=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}var f,l=function(e){var t=e.reCaptchaKey,r=e.language,o=e.onLoad,n=e.useRecaptchaNet,c=e.useEnterprise,a=e.scriptProps,i=void 0===a?{}:a,s=i.nonce,u=void 0===s?"":s,f=i.defer,l=void 0!==f&&f,p=i.async,y=void 0!==p&&p,d=i.id,m=void 0===d?"":d,b=i.appendTo,h=void 0===b?void 0:b,v=m||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(v))o();else{var S=function(e){var t=e.useRecaptchaNet,r=e.useEnterprise;return"https://www."+(t&&!r?"recaptcha.net":"google.com")+"/recaptcha/"+(r?"enterprise.js":"api.js")}({useEnterprise:c,useRecaptchaNet:n}),g=document.createElement("script");g.id=v,g.src=S+"?render="+t+(r?"&hl="+r:""),u&&(g.nonce=u),g.defer=!!l,g.async=!!y,g.onload=o,("body"===h?document.body:document.getElementsByTagName("head")[0]).appendChild(g)}};!function(e){e.SCRIPT_NOT_AVAILABLE="Recaptcha script is not available"}(f||(f={}));var p=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}}),y=p.Consumer;function d(t){var a=this,i=t.reCaptchaKey,y=t.useEnterprise,d=void 0!==y&&y,m=t.useRecaptchaNet,b=void 0!==m&&m,h=t.scriptProps,v=t.language,S=t.children,g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),$=g[0],w=g[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(i){var e=(null==h?void 0:h.id)||"google-recaptcha-v3";return l({reCaptchaKey:i,useEnterprise:d,useRecaptchaNet:b,scriptProps:h,language:v,onLoad:function(){if(window&&window.grecaptcha){var e=d?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){w(e)}))}else console.warn("<GoogleRecaptchaProvider /> "+f.SCRIPT_NOT_AVAILABLE)}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var r=document.querySelector("#"+e);r&&r.remove()}(e)}}console.warn("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[d,b,h,v]);var P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){return s(a,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:if(!$||!$.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,$.execute(i,{action:e})];case 1:return[2,t.sent()]}}))}))}),[$]),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{executeRecaptcha:$?P:void 0}}),[P,$]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(p.Provider,{value:C},S)}var m=function(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(p)};function b(e){var t=this,r=e.action,n=e.onVerify,c=m();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var e=c.executeRecaptcha;s(t,void 0,void 0,(function(){var t;return u(this,(function(o){switch(o.label){case 0:return e?[4,e(r)]:(console.warn("Execute recaptcha function not defined"),[2]);case 1:return t=o.sent(),n?(n(t),[2]):(console.warn("Please define an onVerify function"),[2])}}))}))}),[r,n,c]),null}function h(e,t){return e(t={exports:{}},t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var v="function"==typeof Symbol&&Symbol.for,S=v?Symbol.for("react.element"):60103,g=v?Symbol.for("react.portal"):60106,$=v?Symbol.for("react.fragment"):60107,w=v?Symbol.for("react.strict_mode"):60108,P=v?Symbol.for("react.profiler"):60114,C=v?Symbol.for("react.provider"):60109,x=v?Symbol.for("react.context"):60110,E=v?Symbol.for("react.async_mode"):60111,R=v?Symbol.for("react.concurrent_mode"):60111,M=v?Symbol.for("react.forward_ref"):60112,N=v?Symbol.for("react.suspense"):60113,O=v?Symbol.for("react.suspense_list"):60120,T=v?Symbol.for("react.memo"):60115,j=v?Symbol.for("react.lazy"):60116,_=v?Symbol.for("react.block"):60121,F=v?Symbol.for("react.fundamental"):60117,A=v?Symbol.for("react.responder"):60118,L=v?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case S:switch(e=e.type){case E:case R:case $:case P:case w:case N:return e;default:switch(e=e&&e.$$typeof){case x:case M:case j:case T:case C:return e;default:return t}}case g:return t}}}function G(e){return k(e)===R}var V={AsyncMode:E,ConcurrentMode:R,ContextConsumer:x,ContextProvider:C,Element:S,ForwardRef:M,Fragment:$,Lazy:j,Memo:T,Portal:g,Profiler:P,StrictMode:w,Suspense:N,isAsyncMode:function(e){return G(e)||k(e)===E},isConcurrentMode:G,isContextConsumer:function(e){return k(e)===x},isContextProvider:function(e){return k(e)===C},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===S},isForwardRef:function(e){return k(e)===M},isFragment:function(e){return k(e)===$},isLazy:function(e){return k(e)===j},isMemo:function(e){return k(e)===T},isPortal:function(e){return k(e)===g},isProfiler:function(e){return k(e)===P},isStrictMode:function(e){return k(e)===w},isSuspense:function(e){return k(e)===N},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===$||e===R||e===P||e===w||e===N||e===O||"object"==typeof e&&null!==e&&(e.$$typeof===j||e.$$typeof===T||e.$$typeof===C||e.$$typeof===x||e.$$typeof===M||e.$$typeof===F||e.$$typeof===A||e.$$typeof===L||e.$$typeof===_)},typeOf:k},z=h((function(e,t){ true&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,c=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var y=e.type;switch(y){case u:case f:case n:case a:case c:case p:return y;default:var b=y&&y.$$typeof;switch(b){case s:case l:case m:case d:case i:return b;default:return t}}case o:return t}}}var $=u,w=f,P=s,C=i,x=r,E=l,R=n,M=m,N=d,O=o,T=a,j=c,_=p,F=!1;function A(e){return g(e)===f}t.AsyncMode=$,t.ConcurrentMode=w,t.ContextConsumer=P,t.ContextProvider=C,t.Element=x,t.ForwardRef=E,t.Fragment=R,t.Lazy=M,t.Memo=N,t.Portal=O,t.Profiler=T,t.StrictMode=j,t.Suspense=_,t.isAsyncMode=function(e){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||g(e)===u},t.isConcurrentMode=A,t.isContextConsumer=function(e){return g(e)===s},t.isContextProvider=function(e){return g(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return g(e)===l},t.isFragment=function(e){return g(e)===n},t.isLazy=function(e){return g(e)===m},t.isMemo=function(e){return g(e)===d},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===a},t.isStrictMode=function(e){return g(e)===c},t.isSuspense=function(e){return g(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===f||e===a||e===c||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===i||e.$$typeof===s||e.$$typeof===l||e.$$typeof===h||e.$$typeof===v||e.$$typeof===S||e.$$typeof===b)},t.typeOf=g}()})),I=(z.AsyncMode,z.ConcurrentMode,z.ContextConsumer,z.ContextProvider,z.Element,z.ForwardRef,z.Fragment,z.Lazy,z.Memo,z.Portal,z.Profiler,z.StrictMode,z.Suspense,z.isAsyncMode,z.isConcurrentMode,z.isContextConsumer,z.isContextProvider,z.isElement,z.isForwardRef,z.isFragment,z.isLazy,z.isMemo,z.isPortal,z.isProfiler,z.isStrictMode,z.isSuspense,z.isValidElementType,z.typeOf,h((function(e){ false?0:e.exports=z}))),D={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},B={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},K={};function U(e){return I.isMemo(e)?B:K[e.$$typeof]||D}K[I.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},K[I.Memo]=B;var H=Object.defineProperty,J=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,W=Object.getOwnPropertyDescriptor,X=Object.getPrototypeOf,Y=Object.prototype;var Z=function e(t,r,o){if("string"!=typeof r){if(Y){var n=X(r);n&&n!==Y&&e(t,n,o)}var c=J(r);Q&&(c=c.concat(Q(r)));for(var a=U(t),i=U(r),s=0;s<c.length;++s){var u=c[s];if(!(q[u]||o&&o[u]||i&&i[u]||a&&a[u])){var f=W(r,u);try{H(t,u,f)}catch(e){}}}}return t},ee=function(t){var r=function(r){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(y,null,(function(o){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t,i({},r,{googleReCaptchaProps:o}))}))};return r.displayName="withGoogleReCaptcha("+(t.displayName||t.name||"Component")+")",Z(r,t),r};
//# sourceMappingURL=react-google-recaptcha-v3.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ29vZ2xlLXJlY2FwdGNoYS12My9kaXN0L3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEtdjMuZXNtLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdGVyUGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlR29vZ2xlUmVDYXB0Y2hhIiwiZXhlY3V0ZVJlY2FwdGNoYSIsInVzZVN0YXRlIiwidmVyaWZpZWQiLCJzZXRWZXJpZmllZCIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImhhbmRsZVJlY2FwdGNoYVZlcmlmeSIsInVzZUNhbGxiYWNrIiwidG9rZW4iLCJwdWJsaWNBcGkiLCJjYXB0Y2hhVXJsIiwicmVzIiwiZGF0YSIsIm9rIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJ0b2FzdCIsImF1dGhVcmwiLCJwdXNoIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwicnVuIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibmFtZSIsInBhdHRlcm4iLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQzFDLE1BQU1DLE1BQU0sR0FBR0MsdURBQVMsRUFBeEI7O0FBRDBDLDRCQUViQyw2RUFBa0IsRUFGTDtBQUFBLE1BRWxDQyxnQkFGa0MsdUJBRWxDQSxnQkFGa0M7O0FBQUEsa0JBR1ZDLGdEQUFRLENBQUMsS0FBRCxDQUhFO0FBQUEsTUFHbkNDLFFBSG1DO0FBQUEsTUFHekJDLFdBSHlCOztBQUFBLGlCQVN0Q0Msd0RBQU8sRUFUK0I7QUFBQSxNQU14Q0MsUUFOd0MsWUFNeENBLFFBTndDO0FBQUEsTUFPeENDLFlBUHdDLFlBT3hDQSxZQVB3QztBQUFBLE1BUTNCQyxNQVIyQixZQVF4Q0MsU0FSd0MsQ0FRM0JELE1BUjJCOztBQVcxQyxNQUFNRSxxQkFBcUIsR0FBR0MsbURBQVc7QUFBQSxxV0FBQyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRXBCQyxnREFBQSxDQUFlQyxzREFBZixFQUEyQjtBQUFFRixxQkFBSyxFQUFMQTtBQUFGLGVBQTNCLENBRm9COztBQUFBO0FBRWhDRyxpQkFGZ0M7O0FBR3RDLGtCQUFJQSxHQUFHLENBQUNDLElBQUosQ0FBU0MsRUFBYixFQUFpQjtBQUNmYiwyQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELGVBRkQsTUFFTztBQUNMQSwyQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEOztBQVBxQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVN0Q0EseUJBQVcsQ0FBQyxLQUFELENBQVg7O0FBVHNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FXdEMsRUFYc0MsQ0FBekM7O0FBYUEsTUFBTWMsUUFBUTtBQUFBLHNXQUFHLGtCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFFUmhCLFFBRlE7QUFBQTtBQUFBO0FBQUE7O0FBR1hpQixzRUFBQSxDQUFZLHNCQUFaO0FBSFc7O0FBQUE7QUFBQTtBQUFBLHFCQU1QUCxnREFBQSxDQUFlUSxtREFBZixFQUF3QkYsTUFBeEIsQ0FOTzs7QUFBQTtBQU9iQyx3RUFBQSxDQUFjLHlCQUFkO0FBQ0F0QixvQkFBTSxDQUFDd0IsSUFBUCxDQUFZLFFBQVo7QUFSYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVViRixzRUFBQSxDQUFZLGFBQUlHLFFBQUosQ0FBYVAsSUFBYixDQUFrQlEsT0FBOUI7O0FBVmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQWNBTyxtREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxHQUFHO0FBQUEsd1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNMekIsZ0JBREs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVCQUVKQSxnQkFBZ0IsRUFGWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFIeUIsR0FBRztBQUFBO0FBQUE7QUFBQSxPQUFUOztBQUlBQSxPQUFHO0FBQ0osR0FOUSxFQU1OLENBQUN6QixnQkFBRCxDQU5NLENBQVQ7QUFRQTBCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsZ0JBQVo7QUFFQSxzQkFDRSw4REFBQywwREFBRDtBQUFXLFFBQUksRUFBRUosS0FBSyxDQUFDZ0MsSUFBdkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxHQUFUO0FBQWNDLG1CQUFTLEVBQUU7QUFBekIsU0FBN0I7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFO0FBQU0scUJBQVMsRUFBQyxpQkFBaEI7QUFBa0Msb0JBQVEsRUFBRXhCLFlBQVksQ0FBQ1csUUFBRCxDQUF4RDtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEsc0NBQ0U7QUFBTyx1QkFBTyxFQUFDLGtCQUFmO0FBQWtDLHlCQUFTLEVBQUMsWUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUNFLG9CQUFJLEVBQUMsTUFEUDtBQUVFLHlCQUFTLEVBQUMsY0FGWjtBQUdFLG9CQUFJLEVBQUM7QUFIUCxpQkFJTVosUUFBUSxDQUFDLE1BQUQsRUFBUztBQUFFMEIsd0JBQVEsRUFBRSxJQUFaO0FBQWtCQyx5QkFBUyxFQUFFO0FBQTdCLGVBQVQsQ0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLEVBVUcsQ0FBQXpCLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFMEIsSUFBUixrQkFDQztBQUFNLHlCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBZUU7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDRTtBQUFPLHVCQUFJLG9CQUFYO0FBQWdDLHlCQUFTLEVBQUMsWUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUNFLG9CQUFJLEVBQUMsT0FEUDtBQUVFLHlCQUFTLEVBQUMsY0FGWjtBQUdFLG9DQUFpQjtBQUhuQixpQkFJTTVCLFFBQVEsQ0FBQyxPQUFELEVBQVU7QUFDcEIwQix3QkFBUSxFQUFFLElBRFU7QUFFcEJHLHVCQUFPLEVBQ0w7QUFIa0IsZUFBVixDQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsRUFjRyxDQUFBM0IsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUU0QixLQUFSLGtCQUNDO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkYsZUFpQ0U7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDRTtBQUFPLHVCQUFPLEVBQUMsdUJBQWY7QUFBdUMseUJBQVMsRUFBQyxZQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQ0Usb0JBQUksRUFBQyxVQURQO0FBRUUseUJBQVMsRUFBQztBQUZaLGlCQUdNOUIsUUFBUSxDQUFDLFVBQUQsRUFBYTtBQUN2QjBCLHdCQUFRLEVBQUUsSUFEYTtBQUV2QkcsdUJBQU8sRUFBRTtBQUZjLGVBQWIsQ0FIZDtBQU9FLG9DQUFpQjtBQVBuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLEVBYUcsQ0FBQTNCLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFNkIsUUFBUixrQkFDQztBQUFNLHlCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpDRixlQXFERSw4REFBQyxzRUFBRDtBQUFpQixzQkFBUSxFQUFFM0I7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFyREYsZUF1REU7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQVMsRUFBQyx1QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkRGLGVBMERFO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEscUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLFFBQVg7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwRUQ7O0dBMUh1QmQsWTtVQUNQRyxtRCxFQUNjQyx5RSxFQU96Qkssb0Q7OztLQVRrQlQsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y0RjtBQUNwSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpR0FBaUcsb0NBQW9DLGlDQUFpQyxJQUFJLHVGQUF1RixTQUFTLHlCQUF5QixvQkFBb0IsMENBQTBDLGNBQWMsSUFBSSxhQUFhLFNBQVMsTUFBTSxjQUFjLElBQUksY0FBYyxTQUFTLE1BQU0sY0FBYyxNQUFNLGlFQUFpRSxLQUFLLGNBQWMsK0JBQStCLEdBQUcsZ0JBQWdCLGVBQWUsd0JBQXdCLHFCQUFxQixZQUFZLGlCQUFpQixVQUFVLGlDQUFpQywyREFBMkQsWUFBWSxJQUFJLGNBQWMsbUJBQW1CLG1CQUFtQiw0REFBNEQsS0FBSyxFQUFFLEtBQUssa0hBQWtILHlDQUF5QyxrQkFBa0IsTUFBTSx5QkFBeUIsb0JBQW9CLDhCQUE4QixTQUFTLGtDQUFrQyxTQUFTLDBFQUEwRSxJQUFJLFNBQVMseUNBQXlDLGFBQWEsTUFBTSwyQkFBMkIsaUJBQWlCLE1BQU0sb0JBQW9CLDJCQUEyQixNQUFNLCtCQUErQixTQUFTLGNBQWMsU0FBUyxZQUFZLFFBQVEsTUFBTSxxQkFBcUIsT0FBTyxnQ0FBZ0MsVUFBVSxvQkFBb0Isa0hBQWtILDBLQUEwSyxlQUFlLHNDQUFzQyxRQUFRLEtBQUssa0JBQWtCLDBDQUEwQyxxR0FBcUcsRUFBRSxrQ0FBa0MscUNBQXFDLG1MQUFtTCxhQUFhLDJEQUEyRCxTQUFTLEdBQUcsTUFBTSxvREFBQyxFQUFFLDRCQUE0QixpTUFBaU0sZUFBZSxjQUFjLDhJQUE4SSwrQ0FBQyxxQkFBcUIsZ0RBQUMsYUFBYSxNQUFNLG1EQUFtRCxVQUFVLDRGQUE0Riw4QkFBOEIsdURBQXVELG9CQUFvQixLQUFLLEdBQUcsMEVBQTBFLGFBQWEsYUFBYSxrREFBa0QseURBQXlELG9DQUFvQyxjQUFjLEtBQUssdUVBQXVFLGFBQWEsTUFBTSxrREFBQyxjQUFjLHFDQUFxQywyQkFBMkIsZ0JBQWdCLDZHQUE2RyxzQkFBc0IsU0FBUyxHQUFHLDJCQUEyQixHQUFHLEdBQUcsU0FBUyw4Q0FBQyxhQUFhLE9BQU8sNkJBQTZCLFNBQVMsT0FBTywwREFBZSxhQUFhLFFBQVEsSUFBSSxpQkFBaUIsT0FBTyxpREFBQyxLQUFLLGNBQWMseUNBQXlDLE9BQU8sZ0RBQUMsYUFBYSx5QkFBeUIsOEJBQThCLE1BQU0sMkJBQTJCLGdCQUFnQixzRkFBc0YsZ0dBQWdHLEdBQUcsR0FBRyxnQkFBZ0IsZ0JBQWdCLFlBQVksV0FBVztBQUM3ekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGd2QkFBZ3ZCLGNBQWMsaUNBQWlDLGlCQUFpQixVQUFVLHdCQUF3QixtREFBbUQsZ0NBQWdDLDRDQUE0QyxrQkFBa0Isa0JBQWtCLGNBQWMsZ0JBQWdCLE9BQU8scUxBQXFMLHNCQUFzQixrREFBa0QsZ0JBQWdCLCtCQUErQixnQkFBZ0IsdUJBQXVCLG1EQUFtRCwwQkFBMEIsZ0JBQWdCLHdCQUF3QixnQkFBZ0Isb0JBQW9CLGdCQUFnQixvQkFBb0IsZ0JBQWdCLHNCQUFzQixnQkFBZ0Isd0JBQXdCLGdCQUFnQiwwQkFBMEIsZ0JBQWdCLHdCQUF3QixnQkFBZ0IsZ0NBQWdDLHlRQUF5USxVQUFVLG9CQUFvQixLQUFtQyxhQUFhLGd2QkFBZ3ZCLGNBQWMsaUNBQWlDLGlCQUFpQixVQUFVLG9CQUFvQixVQUFVLG1EQUFtRCw0QkFBNEIsVUFBVSw0Q0FBNEMsa0JBQWtCLGtCQUFrQiw2REFBNkQsY0FBYyxnQkFBZ0IsaU5BQWlOLDhOQUE4TixzREFBc0QsZ0JBQWdCLGlDQUFpQyxnQkFBZ0IseUJBQXlCLG1EQUFtRCw0QkFBNEIsZ0JBQWdCLDBCQUEwQixnQkFBZ0Isc0JBQXNCLGdCQUFnQixzQkFBc0IsZ0JBQWdCLHdCQUF3QixnQkFBZ0IsMEJBQTBCLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLDBCQUEwQixnQkFBZ0Isa0NBQWtDLHlRQUF5USxZQUFZLEdBQUcsdVlBQXVZLE1BQW1DLENBQUMsQ0FBVyxhQUFhLE9BQU8sNkxBQTZMLElBQUkseUVBQXlFLElBQUksMkVBQTJFLE1BQU0sY0FBYyxzQ0FBc0MsaUJBQWlCLGtFQUFrRSxhQUFhLHFLQUFxSyx3QkFBd0IsdUJBQXVCLE1BQU0sV0FBVyxtQkFBbUIsV0FBVyxzQkFBc0IsMEJBQTBCLFdBQVcsS0FBSyxXQUFXLHVDQUF1QyxhQUFhLElBQUksU0FBUyxhQUFhLFNBQVMsZ0JBQWdCLGtCQUFrQixPQUFPLDBEQUFlLHFCQUFxQixPQUFPLDBEQUFlLE9BQU8sSUFBSSx1QkFBdUIsR0FBRyxJQUFJLCtGQUFvUTtBQUN6cE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMWViZDk2ZmI2MWU0YWRhZGVlZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgcHVibGljQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyBhdXRoVXJsLCBjYXB0Y2hhVXJsIH0gZnJvbSBcIi4uL2FwaS9lbmRwb2ludHNcIjtcclxuaW1wb3J0IHsgR29vZ2xlUmVDYXB0Y2hhLCB1c2VHb29nbGVSZUNhcHRjaGEgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYS12M1wiO1xyXG5pbXBvcnQgUHVibGljSE9DIGZyb20gXCIuLi9jb21wb25lbnRzL3B1YmxpY0hPQ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZXhlY3V0ZVJlY2FwdGNoYSB9ID0gdXNlR29vZ2xlUmVDYXB0Y2hhKCk7XHJcbiAgY29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gIH0gPSB1c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlY2FwdGNoYVZlcmlmeSA9IHVzZUNhbGxiYWNrKGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcHVibGljQXBpLnBvc3QoY2FwdGNoYVVybCwgeyB0b2tlbiB9KTtcclxuICAgICAgaWYgKHJlcy5kYXRhLm9rKSB7XHJcbiAgICAgICAgc2V0VmVyaWZpZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VmVyaWZpZWQoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0VmVyaWZpZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXZlcmlmaWVkKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJDYXB0Y2hhIG5vdCBWZXJpZmllZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgcHVibGljQXBpLnBvc3QoYXV0aFVybCwgdmFsdWVzKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoIWV4ZWN1dGVSZWNhcHRjaGEpIHJldHVybjtcclxuICAgICAgYXdhaXQgZXhlY3V0ZVJlY2FwdGNoYSgpO1xyXG4gICAgfTtcclxuICAgIHJ1bigpO1xyXG4gIH0sIFtleGVjdXRlUmVjYXB0Y2hhXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGV4ZWN1dGVSZWNhcHRjaGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFB1YmxpY0hPQyB1c2VyPXtwcm9wcy51c2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyB3aWR0aDogNTAwLCBtYXJnaW5Ub3A6IFwiNnJlbVwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXNtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXROYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJuYW1lXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogNCB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzPy5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5OYW1lIGlzIHRvbyBzaG9ydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjpcclxuICAgICAgICAgICAgICAgICAgICAgIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzPy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+SW52YWxpZCBFbWFpbCBmb3JtYXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXi57NSx9JC8sXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFzc3dvcmRsSGVscFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycz8ucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIG11c3QgYmUgYXRsZWFzdCA1IGNoYXJhY3RlcnMgbG9uZ1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8R29vZ2xlUmVDYXB0Y2hhIG9uVmVyaWZ5PXtoYW5kbGVSZWNhcHRjaGFWZXJpZnl9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGE+QWxyZWFkeSByZWdpc3RlcmVkPyBMb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QdWJsaWNIT0M+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgZSx7Y3JlYXRlQ29udGV4dCBhcyB0LHVzZVN0YXRlIGFzIHIsdXNlRWZmZWN0IGFzIG8sdXNlQ2FsbGJhY2sgYXMgbix1c2VNZW1vIGFzIGMsdXNlQ29udGV4dCBhcyBhfWZyb21cInJlYWN0XCI7XG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi92YXIgaT1mdW5jdGlvbigpe3JldHVybihpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxyPTEsbz1hcmd1bWVudHMubGVuZ3RoO3I8bztyKyspZm9yKHZhciBuIGluIHQ9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiYoZVtuXT10W25dKTtyZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07ZnVuY3Rpb24gcyhlLHQscixvKXtyZXR1cm4gbmV3KHJ8fChyPVByb21pc2UpKSgoZnVuY3Rpb24obixjKXtmdW5jdGlvbiBhKGUpe3RyeXtzKG8ubmV4dChlKSl9Y2F0Y2goZSl7YyhlKX19ZnVuY3Rpb24gaShlKXt0cnl7cyhvLnRocm93KGUpKX1jYXRjaChlKXtjKGUpfX1mdW5jdGlvbiBzKGUpe3ZhciB0O2UuZG9uZT9uKGUudmFsdWUpOih0PWUudmFsdWUsdCBpbnN0YW5jZW9mIHI/dDpuZXcgcigoZnVuY3Rpb24oZSl7ZSh0KX0pKSkudGhlbihhLGkpfXMoKG89by5hcHBseShlLHR8fFtdKSkubmV4dCgpKX0pKX1mdW5jdGlvbiB1KGUsdCl7dmFyIHIsbyxuLGMsYT17bGFiZWw6MCxzZW50OmZ1bmN0aW9uKCl7aWYoMSZuWzBdKXRocm93IG5bMV07cmV0dXJuIG5bMV19LHRyeXM6W10sb3BzOltdfTtyZXR1cm4gYz17bmV4dDppKDApLHRocm93OmkoMSkscmV0dXJuOmkoMil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKGNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksYztmdW5jdGlvbiBpKGMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24oYyl7aWYocil0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2E7KXRyeXtpZihyPTEsbyYmKG49MiZjWzBdP28ucmV0dXJuOmNbMF0/by50aHJvd3x8KChuPW8ucmV0dXJuKSYmbi5jYWxsKG8pLDApOm8ubmV4dCkmJiEobj1uLmNhbGwobyxjWzFdKSkuZG9uZSlyZXR1cm4gbjtzd2l0Y2gobz0wLG4mJihjPVsyJmNbMF0sbi52YWx1ZV0pLGNbMF0pe2Nhc2UgMDpjYXNlIDE6bj1jO2JyZWFrO2Nhc2UgNDpyZXR1cm4gYS5sYWJlbCsrLHt2YWx1ZTpjWzFdLGRvbmU6ITF9O2Nhc2UgNTphLmxhYmVsKyssbz1jWzFdLGM9WzBdO2NvbnRpbnVlO2Nhc2UgNzpjPWEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobj1hLnRyeXMsKG49bi5sZW5ndGg+MCYmbltuLmxlbmd0aC0xXSl8fDYhPT1jWzBdJiYyIT09Y1swXSkpe2E9MDtjb250aW51ZX1pZigzPT09Y1swXSYmKCFufHxjWzFdPm5bMF0mJmNbMV08blszXSkpe2EubGFiZWw9Y1sxXTticmVha31pZig2PT09Y1swXSYmYS5sYWJlbDxuWzFdKXthLmxhYmVsPW5bMV0sbj1jO2JyZWFrfWlmKG4mJmEubGFiZWw8blsyXSl7YS5sYWJlbD1uWzJdLGEub3BzLnB1c2goYyk7YnJlYWt9blsyXSYmYS5vcHMucG9wKCksYS50cnlzLnBvcCgpO2NvbnRpbnVlfWM9dC5jYWxsKGUsYSl9Y2F0Y2goZSl7Yz1bNixlXSxvPTB9ZmluYWxseXtyPW49MH1pZig1JmNbMF0pdGhyb3cgY1sxXTtyZXR1cm57dmFsdWU6Y1swXT9jWzFdOnZvaWQgMCxkb25lOiEwfX0oW2MsaV0pfX19dmFyIGYsbD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlQ2FwdGNoYUtleSxyPWUubGFuZ3VhZ2Usbz1lLm9uTG9hZCxuPWUudXNlUmVjYXB0Y2hhTmV0LGM9ZS51c2VFbnRlcnByaXNlLGE9ZS5zY3JpcHRQcm9wcyxpPXZvaWQgMD09PWE/e306YSxzPWkubm9uY2UsdT12b2lkIDA9PT1zP1wiXCI6cyxmPWkuZGVmZXIsbD12b2lkIDAhPT1mJiZmLHA9aS5hc3luYyx5PXZvaWQgMCE9PXAmJnAsZD1pLmlkLG09dm9pZCAwPT09ZD9cIlwiOmQsYj1pLmFwcGVuZFRvLGg9dm9pZCAwPT09Yj92b2lkIDA6Yix2PW18fFwiZ29vZ2xlLXJlY2FwdGNoYS12M1wiO2lmKGZ1bmN0aW9uKGUpe3JldHVybiEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitlKX0odikpbygpO2Vsc2V7dmFyIFM9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS51c2VSZWNhcHRjaGFOZXQscj1lLnVzZUVudGVycHJpc2U7cmV0dXJuXCJodHRwczovL3d3dy5cIisodCYmIXI/XCJyZWNhcHRjaGEubmV0XCI6XCJnb29nbGUuY29tXCIpK1wiL3JlY2FwdGNoYS9cIisocj9cImVudGVycHJpc2UuanNcIjpcImFwaS5qc1wiKX0oe3VzZUVudGVycHJpc2U6Yyx1c2VSZWNhcHRjaGFOZXQ6bn0pLGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtnLmlkPXYsZy5zcmM9UytcIj9yZW5kZXI9XCIrdCsocj9cIiZobD1cIityOlwiXCIpLHUmJihnLm5vbmNlPXUpLGcuZGVmZXI9ISFsLGcuYXN5bmM9ISF5LGcub25sb2FkPW8sKFwiYm9keVwiPT09aD9kb2N1bWVudC5ib2R5OmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSkuYXBwZW5kQ2hpbGQoZyl9fTshZnVuY3Rpb24oZSl7ZS5TQ1JJUFRfTk9UX0FWQUlMQUJMRT1cIlJlY2FwdGNoYSBzY3JpcHQgaXMgbm90IGF2YWlsYWJsZVwifShmfHwoZj17fSkpO3ZhciBwPXQoe2V4ZWN1dGVSZWNhcHRjaGE6ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcihcIkdvb2dsZVJlQ2FwdGNoYSBDb250ZXh0IGhhcyBub3QgeWV0IGJlZW4gaW1wbGVtZW50ZWQsIGlmIHlvdSBhcmUgdXNpbmcgdXNlR29vZ2xlUmVDYXB0Y2hhIGhvb2ssIG1ha2Ugc3VyZSB0aGUgaG9vayBpcyBjYWxsZWQgaW5zaWRlIGNvbXBvbmVudCB3cmFwcGVkIGJ5IEdvb2dsZVJlY2FwdGNoYVByb3ZpZGVyXCIpfX0pLHk9cC5Db25zdW1lcjtmdW5jdGlvbiBkKHQpe3ZhciBhPXRoaXMsaT10LnJlQ2FwdGNoYUtleSx5PXQudXNlRW50ZXJwcmlzZSxkPXZvaWQgMCE9PXkmJnksbT10LnVzZVJlY2FwdGNoYU5ldCxiPXZvaWQgMCE9PW0mJm0saD10LnNjcmlwdFByb3BzLHY9dC5sYW5ndWFnZSxTPXQuY2hpbGRyZW4sZz1yKG51bGwpLCQ9Z1swXSx3PWdbMV07bygoZnVuY3Rpb24oKXtpZihpKXt2YXIgZT0obnVsbD09aD92b2lkIDA6aC5pZCl8fFwiZ29vZ2xlLXJlY2FwdGNoYS12M1wiO3JldHVybiBsKHtyZUNhcHRjaGFLZXk6aSx1c2VFbnRlcnByaXNlOmQsdXNlUmVjYXB0Y2hhTmV0OmIsc2NyaXB0UHJvcHM6aCxsYW5ndWFnZTp2LG9uTG9hZDpmdW5jdGlvbigpe2lmKHdpbmRvdyYmd2luZG93LmdyZWNhcHRjaGEpe3ZhciBlPWQ/d2luZG93LmdyZWNhcHRjaGEuZW50ZXJwcmlzZTp3aW5kb3cuZ3JlY2FwdGNoYTtlLnJlYWR5KChmdW5jdGlvbigpe3coZSl9KSl9ZWxzZSBjb25zb2xlLndhcm4oXCI8R29vZ2xlUmVjYXB0Y2hhUHJvdmlkZXIgLz4gXCIrZi5TQ1JJUFRfTk9UX0FWQUlMQUJMRSl9fSksZnVuY3Rpb24oKXshZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmVjYXB0Y2hhLWJhZGdlXCIpO3QmJnQucGFyZW50Tm9kZSYmZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0LnBhcmVudE5vZGUpO3ZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZSk7ciYmci5yZW1vdmUoKX0oZSl9fWNvbnNvbGUud2FybihcIjxHb29nbGVSZUNhcHRjaGFQcm92aWRlciAvPiByZWNhcHRjaGEga2V5IG5vdCBwcm92aWRlZFwiKX0pLFtkLGIsaCx2XSk7dmFyIFA9bigoZnVuY3Rpb24oZSl7cmV0dXJuIHMoYSx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiB1KHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6aWYoISR8fCEkLmV4ZWN1dGUpdGhyb3cgbmV3IEVycm9yKFwiPEdvb2dsZVJlQ2FwdGNoYVByb3ZpZGVyIC8+IEdvb2dsZSBSZWNhcHRjaGEgaGFzIG5vdCBiZWVuIGxvYWRlZFwiKTtyZXR1cm5bNCwkLmV4ZWN1dGUoaSx7YWN0aW9uOmV9KV07Y2FzZSAxOnJldHVyblsyLHQuc2VudCgpXX19KSl9KSl9KSxbJF0pLEM9YygoZnVuY3Rpb24oKXtyZXR1cm57ZXhlY3V0ZVJlY2FwdGNoYTokP1A6dm9pZCAwfX0pLFtQLCRdKTtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KHAuUHJvdmlkZXIse3ZhbHVlOkN9LFMpfXZhciBtPWZ1bmN0aW9uKCl7cmV0dXJuIGEocCl9O2Z1bmN0aW9uIGIoZSl7dmFyIHQ9dGhpcyxyPWUuYWN0aW9uLG49ZS5vblZlcmlmeSxjPW0oKTtyZXR1cm4gbygoZnVuY3Rpb24oKXt2YXIgZT1jLmV4ZWN1dGVSZWNhcHRjaGE7cyh0LHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIHUodGhpcywoZnVuY3Rpb24obyl7c3dpdGNoKG8ubGFiZWwpe2Nhc2UgMDpyZXR1cm4gZT9bNCxlKHIpXTooY29uc29sZS53YXJuKFwiRXhlY3V0ZSByZWNhcHRjaGEgZnVuY3Rpb24gbm90IGRlZmluZWRcIiksWzJdKTtjYXNlIDE6cmV0dXJuIHQ9by5zZW50KCksbj8obih0KSxbMl0pOihjb25zb2xlLndhcm4oXCJQbGVhc2UgZGVmaW5lIGFuIG9uVmVyaWZ5IGZ1bmN0aW9uXCIpLFsyXSl9fSkpfSkpfSksW3IsbixjXSksbnVsbH1mdW5jdGlvbiBoKGUsdCl7cmV0dXJuIGUodD17ZXhwb3J0czp7fX0sdC5leHBvcnRzKSx0LmV4cG9ydHNcbi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL312YXIgdj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsUz12P1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGc9dj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LCQ9dj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsdz12P1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxQPXY/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LEM9dj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDkseD12P1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLEU9dj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxSPXY/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxNPXY/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLE49dj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMsTz12P1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOjYwMTIwLFQ9dj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSxqPXY/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsXz12P1N5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKTo2MDEyMSxGPXY/U3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpOjYwMTE3LEE9dj9TeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpOjYwMTE4LEw9dj9TeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik6NjAxMTk7ZnVuY3Rpb24gayhlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWUpe3ZhciB0PWUuJCR0eXBlb2Y7c3dpdGNoKHQpe2Nhc2UgUzpzd2l0Y2goZT1lLnR5cGUpe2Nhc2UgRTpjYXNlIFI6Y2FzZSAkOmNhc2UgUDpjYXNlIHc6Y2FzZSBOOnJldHVybiBlO2RlZmF1bHQ6c3dpdGNoKGU9ZSYmZS4kJHR5cGVvZil7Y2FzZSB4OmNhc2UgTTpjYXNlIGo6Y2FzZSBUOmNhc2UgQzpyZXR1cm4gZTtkZWZhdWx0OnJldHVybiB0fX1jYXNlIGc6cmV0dXJuIHR9fX1mdW5jdGlvbiBHKGUpe3JldHVybiBrKGUpPT09Un12YXIgVj17QXN5bmNNb2RlOkUsQ29uY3VycmVudE1vZGU6UixDb250ZXh0Q29uc3VtZXI6eCxDb250ZXh0UHJvdmlkZXI6QyxFbGVtZW50OlMsRm9yd2FyZFJlZjpNLEZyYWdtZW50OiQsTGF6eTpqLE1lbW86VCxQb3J0YWw6ZyxQcm9maWxlcjpQLFN0cmljdE1vZGU6dyxTdXNwZW5zZTpOLGlzQXN5bmNNb2RlOmZ1bmN0aW9uKGUpe3JldHVybiBHKGUpfHxrKGUpPT09RX0saXNDb25jdXJyZW50TW9kZTpHLGlzQ29udGV4dENvbnN1bWVyOmZ1bmN0aW9uKGUpe3JldHVybiBrKGUpPT09eH0saXNDb250ZXh0UHJvdmlkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGsoZSk9PT1DfSxpc0VsZW1lbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiZlLiQkdHlwZW9mPT09U30saXNGb3J3YXJkUmVmOmZ1bmN0aW9uKGUpe3JldHVybiBrKGUpPT09TX0saXNGcmFnbWVudDpmdW5jdGlvbihlKXtyZXR1cm4gayhlKT09PSR9LGlzTGF6eTpmdW5jdGlvbihlKXtyZXR1cm4gayhlKT09PWp9LGlzTWVtbzpmdW5jdGlvbihlKXtyZXR1cm4gayhlKT09PVR9LGlzUG9ydGFsOmZ1bmN0aW9uKGUpe3JldHVybiBrKGUpPT09Z30saXNQcm9maWxlcjpmdW5jdGlvbihlKXtyZXR1cm4gayhlKT09PVB9LGlzU3RyaWN0TW9kZTpmdW5jdGlvbihlKXtyZXR1cm4gayhlKT09PXd9LGlzU3VzcGVuc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIGsoZSk9PT1OfSxpc1ZhbGlkRWxlbWVudFR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fGU9PT0kfHxlPT09Unx8ZT09PVB8fGU9PT13fHxlPT09Tnx8ZT09PU98fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmKGUuJCR0eXBlb2Y9PT1qfHxlLiQkdHlwZW9mPT09VHx8ZS4kJHR5cGVvZj09PUN8fGUuJCR0eXBlb2Y9PT14fHxlLiQkdHlwZW9mPT09TXx8ZS4kJHR5cGVvZj09PUZ8fGUuJCR0eXBlb2Y9PT1BfHxlLiQkdHlwZW9mPT09THx8ZS4kJHR5cGVvZj09PV8pfSx0eXBlT2Y6a30sej1oKChmdW5jdGlvbihlLHQpe1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmZ1bmN0aW9uKCl7dmFyIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLHI9ZT9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxvPWU/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixuPWU/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGM9ZT9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsYT1lP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxpPWU/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LHM9ZT9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCx1PWU/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsZj1lP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbD1lP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWU/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHk9ZT9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTo2MDEyMCxkPWU/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsbT1lP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LGI9ZT9TeW1ib2wuZm9yKFwicmVhY3QuYmxvY2tcIik6NjAxMjEsaD1lP1N5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTo2MDExNyx2PWU/U3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTo2MDExOCxTPWU/U3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpOjYwMTE5O2Z1bmN0aW9uIGcoZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lKXt2YXIgdD1lLiQkdHlwZW9mO3N3aXRjaCh0KXtjYXNlIHI6dmFyIHk9ZS50eXBlO3N3aXRjaCh5KXtjYXNlIHU6Y2FzZSBmOmNhc2UgbjpjYXNlIGE6Y2FzZSBjOmNhc2UgcDpyZXR1cm4geTtkZWZhdWx0OnZhciBiPXkmJnkuJCR0eXBlb2Y7c3dpdGNoKGIpe2Nhc2UgczpjYXNlIGw6Y2FzZSBtOmNhc2UgZDpjYXNlIGk6cmV0dXJuIGI7ZGVmYXVsdDpyZXR1cm4gdH19Y2FzZSBvOnJldHVybiB0fX19dmFyICQ9dSx3PWYsUD1zLEM9aSx4PXIsRT1sLFI9bixNPW0sTj1kLE89byxUPWEsaj1jLF89cCxGPSExO2Z1bmN0aW9uIEEoZSl7cmV0dXJuIGcoZSk9PT1mfXQuQXN5bmNNb2RlPSQsdC5Db25jdXJyZW50TW9kZT13LHQuQ29udGV4dENvbnN1bWVyPVAsdC5Db250ZXh0UHJvdmlkZXI9Qyx0LkVsZW1lbnQ9eCx0LkZvcndhcmRSZWY9RSx0LkZyYWdtZW50PVIsdC5MYXp5PU0sdC5NZW1vPU4sdC5Qb3J0YWw9Tyx0LlByb2ZpbGVyPVQsdC5TdHJpY3RNb2RlPWosdC5TdXNwZW5zZT1fLHQuaXNBc3luY01vZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIEZ8fChGPSEwLGNvbnNvbGUud2FybihcIlRoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuXCIpKSxBKGUpfHxnKGUpPT09dX0sdC5pc0NvbmN1cnJlbnRNb2RlPUEsdC5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihlKXtyZXR1cm4gZyhlKT09PXN9LHQuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIGcoZSk9PT1pfSx0LmlzRWxlbWVudD1mdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWUmJmUuJCR0eXBlb2Y9PT1yfSx0LmlzRm9yd2FyZFJlZj1mdW5jdGlvbihlKXtyZXR1cm4gZyhlKT09PWx9LHQuaXNGcmFnbWVudD1mdW5jdGlvbihlKXtyZXR1cm4gZyhlKT09PW59LHQuaXNMYXp5PWZ1bmN0aW9uKGUpe3JldHVybiBnKGUpPT09bX0sdC5pc01lbW89ZnVuY3Rpb24oZSl7cmV0dXJuIGcoZSk9PT1kfSx0LmlzUG9ydGFsPWZ1bmN0aW9uKGUpe3JldHVybiBnKGUpPT09b30sdC5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGUpe3JldHVybiBnKGUpPT09YX0sdC5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGcoZSk9PT1jfSx0LmlzU3VzcGVuc2U9ZnVuY3Rpb24oZSl7cmV0dXJuIGcoZSk9PT1wfSx0LmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZXx8ZT09PW58fGU9PT1mfHxlPT09YXx8ZT09PWN8fGU9PT1wfHxlPT09eXx8XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiYoZS4kJHR5cGVvZj09PW18fGUuJCR0eXBlb2Y9PT1kfHxlLiQkdHlwZW9mPT09aXx8ZS4kJHR5cGVvZj09PXN8fGUuJCR0eXBlb2Y9PT1sfHxlLiQkdHlwZW9mPT09aHx8ZS4kJHR5cGVvZj09PXZ8fGUuJCR0eXBlb2Y9PT1TfHxlLiQkdHlwZW9mPT09Yil9LHQudHlwZU9mPWd9KCl9KSksST0oei5Bc3luY01vZGUsei5Db25jdXJyZW50TW9kZSx6LkNvbnRleHRDb25zdW1lcix6LkNvbnRleHRQcm92aWRlcix6LkVsZW1lbnQsei5Gb3J3YXJkUmVmLHouRnJhZ21lbnQsei5MYXp5LHouTWVtbyx6LlBvcnRhbCx6LlByb2ZpbGVyLHouU3RyaWN0TW9kZSx6LlN1c3BlbnNlLHouaXNBc3luY01vZGUsei5pc0NvbmN1cnJlbnRNb2RlLHouaXNDb250ZXh0Q29uc3VtZXIsei5pc0NvbnRleHRQcm92aWRlcix6LmlzRWxlbWVudCx6LmlzRm9yd2FyZFJlZix6LmlzRnJhZ21lbnQsei5pc0xhenksei5pc01lbW8sei5pc1BvcnRhbCx6LmlzUHJvZmlsZXIsei5pc1N0cmljdE1vZGUsei5pc1N1c3BlbnNlLHouaXNWYWxpZEVsZW1lbnRUeXBlLHoudHlwZU9mLGgoKGZ1bmN0aW9uKGUpe1wicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ZS5leHBvcnRzPVY6ZS5leHBvcnRzPXp9KSkpLEQ9e2NoaWxkQ29udGV4dFR5cGVzOiEwLGNvbnRleHRUeXBlOiEwLGNvbnRleHRUeXBlczohMCxkZWZhdWx0UHJvcHM6ITAsZGlzcGxheU5hbWU6ITAsZ2V0RGVmYXVsdFByb3BzOiEwLGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjohMCxnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6ITAsbWl4aW5zOiEwLHByb3BUeXBlczohMCx0eXBlOiEwfSxxPXtuYW1lOiEwLGxlbmd0aDohMCxwcm90b3R5cGU6ITAsY2FsbGVyOiEwLGNhbGxlZTohMCxhcmd1bWVudHM6ITAsYXJpdHk6ITB9LEI9eyQkdHlwZW9mOiEwLGNvbXBhcmU6ITAsZGVmYXVsdFByb3BzOiEwLGRpc3BsYXlOYW1lOiEwLHByb3BUeXBlczohMCx0eXBlOiEwfSxLPXt9O2Z1bmN0aW9uIFUoZSl7cmV0dXJuIEkuaXNNZW1vKGUpP0I6S1tlLiQkdHlwZW9mXXx8RH1LW0kuRm9yd2FyZFJlZl09eyQkdHlwZW9mOiEwLHJlbmRlcjohMCxkZWZhdWx0UHJvcHM6ITAsZGlzcGxheU5hbWU6ITAscHJvcFR5cGVzOiEwfSxLW0kuTWVtb109Qjt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHksSj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxRPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsVz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLFk9T2JqZWN0LnByb3RvdHlwZTt2YXIgWj1mdW5jdGlvbiBlKHQscixvKXtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil7aWYoWSl7dmFyIG49WChyKTtuJiZuIT09WSYmZSh0LG4sbyl9dmFyIGM9SihyKTtRJiYoYz1jLmNvbmNhdChRKHIpKSk7Zm9yKHZhciBhPVUodCksaT1VKHIpLHM9MDtzPGMubGVuZ3RoOysrcyl7dmFyIHU9Y1tzXTtpZighKHFbdV18fG8mJm9bdV18fGkmJmlbdV18fGEmJmFbdV0pKXt2YXIgZj1XKHIsdSk7dHJ5e0godCx1LGYpfWNhdGNoKGUpe319fX1yZXR1cm4gdH0sZWU9ZnVuY3Rpb24odCl7dmFyIHI9ZnVuY3Rpb24ocil7cmV0dXJuIGUuY3JlYXRlRWxlbWVudCh5LG51bGwsKGZ1bmN0aW9uKG8pe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQodCxpKHt9LHIse2dvb2dsZVJlQ2FwdGNoYVByb3BzOm99KSl9KSl9O3JldHVybiByLmRpc3BsYXlOYW1lPVwid2l0aEdvb2dsZVJlQ2FwdGNoYShcIisodC5kaXNwbGF5TmFtZXx8dC5uYW1lfHxcIkNvbXBvbmVudFwiKStcIilcIixaKHIsdCkscn07ZXhwb3J0e2IgYXMgR29vZ2xlUmVDYXB0Y2hhLHkgYXMgR29vZ2xlUmVDYXB0Y2hhQ29uc3VtZXIscCBhcyBHb29nbGVSZUNhcHRjaGFDb250ZXh0LGQgYXMgR29vZ2xlUmVDYXB0Y2hhUHJvdmlkZXIsbSBhcyB1c2VHb29nbGVSZUNhcHRjaGEsZWUgYXMgd2l0aEdvb2dsZVJlQ2FwdGNoYX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1nb29nbGUtcmVjYXB0Y2hhLXYzLmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=