"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isEmail = _validator["default"].isEmail;
var rolesEnum = Object.freeze({
  ADMIN: "admin",
  USER: "user",
  COLLECT: "collect",
  ENTREPRISE: "entreprise",
  RECYCLEUR: "recycleur"
});
var schemaUser = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    options: {
      min: 8
    },
    errorMessage: 'phone should be at  8 digits '
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail],
    unique: true
  },
  pwd: {
    type: String,
    required: false
  },
  token: {
    type: String,
    required: false
  },
  role: {
    type: String,
    "enum": Object.values(rolesEnum),
    "default": rolesEnum.USER
  },
  verificationCode: {
    type: String,
    required: false
  },
  verificationCodeExpiresAt: {
    type: Date,
    required: false
  },
  langitude: {
    type: Number,
    required: false
  },
  latitude: {
    type: Number,
    required: false
  }
}, {
  timestamps: true
}); // play function before save into  display :'block';

schemaUser.pre("save", function _callee(next) {
  var salt;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_bcryptjs["default"].genSalt());

        case 2:
          salt = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(this.pwd, salt));

        case 5:
          this.pwd = _context.sent;
          next();

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}); // decrypt le login et verfiy if user existe

schemaUser.statics.login = function _callee2(email, pwd) {
  var user, auth;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(this.findOne({
            email: email
          }));

        case 2:
          user = _context2.sent;

          if (!user) {
            _context2.next = 11;
            break;
          }

          _context2.next = 6;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(pwd, user.pwd));

        case 6:
          auth = _context2.sent;
          console.log(auth);

          if (!auth) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", user);

        case 10:
          throw Error("incorrect password");

        case 11:
          throw Error("incorrect email");

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this);
};

var _default = (0, _mongoose.model)("User", schemaUser);

exports["default"] = _default;