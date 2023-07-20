"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TablesComponent = void 0;
var core_1 = require("@angular/core");
var TablesComponent = /** @class */ (function () {
    function TablesComponent(tableservice) {
        this.tableservice = tableservice;
        this.users = [];
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    TablesComponent.prototype.getUsers = function () {
        var _this = this;
        this.tableservice.getAllUsers().subscribe(function (data) { return _this.users = data; });
    };
    TablesComponent.prototype.onSubmit = function (form) {
        // Manipuler les données du formulaire ici si nécessaire
    };
    TablesComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        if (confirm("Are you sure to delete " + userId)) {
            this.tableservice.deleteUser(userId).subscribe(function () {
                alert('utilisateur supprimé');
                console.log('Utilisateur supprimé avec succès');
                _this.getUsers(); // Met à jour la liste des utilisateurs après la suppression
            }, function (error) {
                console.log('Une erreur s\'est produite lors de la suppression de l\'utilisateur :', error);
            });
        }
    };
    TablesComponent = __decorate([
        core_1.Component({
            selector: 'app-tables',
            templateUrl: './tables.component.html',
            styleUrls: ['./tables.component.scss']
        })
    ], TablesComponent);
    return TablesComponent;
}());
exports.TablesComponent = TablesComponent;
