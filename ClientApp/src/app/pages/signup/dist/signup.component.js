"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var user_1 = require("src/assets/scss/core/user");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupService, route) {
        this.signupService = signupService;
        this.route = route;
        this.user = new user_1.User();
        this.form = {
            name: null,
            surname: null,
            phone: "123456879",
            email: null,
            pwd: null,
            role: null
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.signupService.signup(this.form)
            .subscribe(function (response) {
            // Traitement de la réponse en cas de succès
            alert("Eneregister avec succees");
            console.log(response);
            _this.route.navigate(['/login']);
        }, function (error) {
            console.log(error);
            alert(error.error.message);
            _this.errorMessage = 'Erreur lors de la connexion. Veuillez réessayer.';
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
