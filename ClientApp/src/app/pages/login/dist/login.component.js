"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = {
            email: null,
            pwd: null
        };
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        //  if (this.tokenStorage.getToken()) {
        //  this.isLoggedIn = true;
        //  this.roles = this.tokenStorage.getUser().roles;
    };
    // }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form, email = _a.email, pwd = _a.pwd;
        this.authService.login(email, pwd).subscribe({
            next: function (data) {
                localStorage.setItem("access_token", data.token);
                localStorage.setItem("role", data.role);
                localStorage.setItem("user-id", data.id);
                _this.isLoginFailed = false;
                _this.isLoggedIn = true;
                var role = _this.authService.getRole();
                console.log(role);
                if (role == "admin") {
                    _this.router.navigate(['/dashboard']);
                }
                else if (role == "user") {
                    _this.router.navigate(['/entreprise']);
                }
                else if (role == "user") {
                    // this.router.navigate(['/user'])
                }
            },
            error: function (err) {
                _this.errorMessage = err.error.message;
                _this.isLoginFailed = true;
            }
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
