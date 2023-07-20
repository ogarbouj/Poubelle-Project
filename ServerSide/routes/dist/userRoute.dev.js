"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController.js");

var _expressValidator = require("express-validator");

var _auth = _interopRequireDefault(require("../Middlewares/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route("/").post((0, _expressValidator.body)('phone').isLength({
  min: 8,
  max: 8
}), _userController.addUser).get(_auth["default"], _userController.getAllUsers);
router.route("/:id").get(_auth["default"], _userController.getUser);
router.route("/sign").post(_userController.signIn);
router.post('/sign/reset-password', _userController.verifyVerificationCode);
router.post('/sign/forgot-password', _userController.sendForgotPasswordEmail);
router.route("/:id").patch(_auth["default"], _userController.patchUser)["delete"](_auth["default"], _userController.deleteUser);
router.route("/logout").post(_auth["default"], _userController.logoutUser);
var _default = router;
exports["default"] = _default;