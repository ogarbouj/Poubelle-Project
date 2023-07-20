"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserProfileComponent = void 0;
var core_1 = require("@angular/core");
var user_1 = require("src/assets/scss/core/user");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(tableservice, route) {
        this.tableservice = tableservice;
        this.route = route;
        this.getForm = new user_1.User();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getUserById();
    };
    UserProfileComponent.prototype.getUserById = function () {
        var _this = this;
        var id = localStorage.getItem("user-id");
        this.tableservice.getUserById(id).subscribe(function (user) {
            return _this.user = user;
        });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.scss']
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
