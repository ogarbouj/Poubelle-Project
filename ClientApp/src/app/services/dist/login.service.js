"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var rxjs_1 = require("rxjs");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.apiUrl = environment_1.environment.apiUrl + "user/sign";
        this.isLogin = false;
    }
    // Méthode pour se connecter
    LoginService.prototype.login = function (email, pwd) {
        var loginData = { email: email, pwd: pwd };
        return this.http.post(this.apiUrl + "/", loginData);
    };
    LoginService.prototype.isLoggedIn = function () {
        return !!localStorage.getItem("access_token");
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem('access_token');
    };
    LoginService.prototype.loginin = function (value) {
        this.isLogin = true;
        this.roleAs = value;
        localStorage.setItem('STATE', 'true');
        localStorage.setItem('ROLE', this.roleAs);
        return rxjs_1.of({ success: this.isLogin, role: this.roleAs });
    };
    LoginService.prototype.logOut = function () {
        localStorage.setItem("access_token", "");
        localStorage.setItem("role", "");
        window.location.reload();
    };
    LoginService.prototype.getRole = function () {
        return localStorage.getItem('role');
    };
    LoginService.prototype.sendForgotPasswordEmail = function (email) {
        return this.http.post(this.apiUrl + "/forgot-password", { email: email });
    };
    LoginService.prototype.verifyVerificationCode = function (email, verificationCode, newPassword) {
        return this.http.post(this.apiUrl + "/reset-password", { email: email, verificationCode: verificationCode, newPassword: newPassword });
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
