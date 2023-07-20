"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.forgetPasswordComponent = void 0;
var core_1 = require("@angular/core");
var forgetPasswordComponent = /** @class */ (function () {
    function forgetPasswordComponent(loginservice) {
        this.loginservice = loginservice;
    }
    forgetPasswordComponent.prototype.ngOnInit = function () {
    };
    forgetPasswordComponent.prototype.sendForgotPasswordEmail = function () {
        this.loginservice.sendForgotPasswordEmail(this.email)
            .subscribe(function (response) {
            alert('verifier votre boite de reception');
            console.log('Email sent:', response.message);
            // Afficher un message à l'utilisateur indiquant que l'e-mail a été envoyé avec succès.
        }, function (error) {
            alert('vous etes pas inscrit');
            console.error('Error sending email:', error);
        });
    };
    forgetPasswordComponent.prototype.resetPassword = function () {
        this.loginservice.verifyVerificationCode(this.email, this.verificationCode, this.newPassword)
            .subscribe(function (response) {
            alert('Votre mot de passe a été modifié avec succès');
            console.log('Password reset:', response.message);
        }, function (error) {
            alert('Une erreur s\'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer.');
            console.error('Error resetting password:', error);
        });
    };
    forgetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.scss']
        })
    ], forgetPasswordComponent);
    return forgetPasswordComponent;
}());
exports.forgetPasswordComponent = forgetPasswordComponent;
