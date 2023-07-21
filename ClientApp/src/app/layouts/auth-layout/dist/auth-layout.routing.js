"use strict";
exports.__esModule = true;
exports.AuthLayoutRoutes = void 0;
var signup_component_1 = require("src/app/pages/signup/signup.component");
var login_component_1 = require("../../pages/login/login.component");
var forget_password_component_1 = require("src/app/pages/forget-password/forget-password.component");
exports.AuthLayoutRoutes = [
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'forget-pasword', component: forget_password_component_1.forgetPasswordComponent }
];
