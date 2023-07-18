"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TablesService = void 0;
// Tables.service.ts
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var TablesService = /** @class */ (function () {
    function TablesService(http) {
        this.http = http;
        this.apiUrl = environment_1.environment.apiUrl + "user";
        this.token = localStorage.getItem('token');
    }
    TablesService.prototype.getAllUsers = function () {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + localStorage.getItem("access_token")
            })
        };
        var timestamp = new Date().getTime();
        return this.http.get(this.apiUrl + "/?timestamp=" + timestamp, httpOptions);
    };
    TablesService.prototype.deleteUser = function (userId) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + localStorage.getItem("access_token")
            })
        };
        return this.http["delete"](this.apiUrl + "/" + userId, httpOptions);
    };
    TablesService.prototype.update = function (userId, updateData) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + localStorage.getItem("access_token")
            })
        };
        return this.http.patch(this.apiUrl + "/" + userId, updateData, httpOptions);
    };
    TablesService.prototype.getUserById = function (id) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + localStorage.getItem("access_token")
            })
        };
        return this.http.get(this.apiUrl + "/" + id, httpOptions);
    };
    TablesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TablesService);
    return TablesService;
}());
exports.TablesService = TablesService;
