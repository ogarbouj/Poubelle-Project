"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var admin_layout_component_1 = require("./layouts/admin-layout/admin-layout.component");
var auth_layout_component_1 = require("./layouts/auth-layout/auth-layout.component");
var Home_component_1 = require("./components/Home/Home.component");
var routes = [
    { path: '/', component: Home_component_1.HomeComponent },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: admin_layout_component_1.AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return require('src/app/layouts/admin-layout/admin-layout.module'); }).then(function (m) { return m.AdminLayoutModule; }); }
            },
        ]
    }, {
        path: '',
        component: auth_layout_component_1.AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return require('src/app/layouts/auth-layout/auth-layout.module'); }).then(function (m) { return m.AuthLayoutModule; }); }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true
                })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
