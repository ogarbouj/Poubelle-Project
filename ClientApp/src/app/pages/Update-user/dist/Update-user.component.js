"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateComponent = void 0;
// Update-user.component.ts
var core_1 = require("@angular/core");
var user_1 = require("src/assets/scss/core/user");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(tableservice, route) {
        this.tableservice = tableservice;
        this.route = route;
        this.submitted = false;
        this.updateForm = new user_1.User(); // Utilisateur à mettre à jour
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            return _this.id = params['id'];
        });
        this.tableservice.getUserById(this.id).subscribe(function (user) {
            return _this.user = user;
        });
    };
    UpdateComponent.prototype.onSubmit = function () {
        this.update();
    };
    UpdateComponent.prototype.selectUserForUpdate = function (user) {
        // Remplit le modèle de l'utilisateur à mettre à jour
        this.updateForm = __assign({}, user);
    };
    UpdateComponent.prototype.update = function () {
        var _this = this;
        if (!this.id) {
            console.error("ID d'utilisateur non défini. Veuillez sélectionner un utilisateur avant de mettre à jour.");
            return;
        }
        console.log(this.user);
        this.tableservice.update(this.id, this.user)
            .subscribe(function (response) {
            console.log('Utilisateur mis à jour avec succès :', response);
            alert('Utilisateur mis à jour avec succès :');
            _this.submitted = true;
        }, function (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour de l\'utilisateur :', error);
            _this.errorMessage = 'Erreur lors de la mise à jour. Veuillez réessayer.';
        });
    };
    UpdateComponent.prototype.navigate = function () {
        // Vous pouvez rediriger vers une autre page après la mise à jour réussie si nécessaire.
        // Par exemple, naviguer vers la liste des utilisateurs.
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-update',
            templateUrl: './Update-user.component.html',
            styleUrls: ['./Update-user.component.scss']
        })
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;
