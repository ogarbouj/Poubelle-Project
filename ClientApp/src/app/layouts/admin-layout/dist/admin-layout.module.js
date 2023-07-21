"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminLayoutModule = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ngx_clipboard_1 = require("ngx-clipboard");
var admin_layout_routing_1 = require("./admin-layout.routing");
var dashboard_component_1 = require("../../pages/dashboard/dashboard.component");
var icons_component_1 = require("../../pages/icons/icons.component");
var maps_component_1 = require("../../pages/maps/maps.component");
var user_profile_component_1 = require("../../pages/user-profile/user-profile.component");
var tables_component_1 = require("../../pages/tables/tables.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var signup_component_1 = require("src/app/pages/signup/signup.component");
var Update_user_component_1 = require("src/app/pages/Update-user/Update-user.component");
// import { ToastrModule } from 'ngx-toastr';
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(admin_layout_routing_1.AdminLayoutRoutes),
                forms_1.FormsModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule,
                ngx_clipboard_1.ClipboardModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                user_profile_component_1.UserProfileComponent,
                tables_component_1.TablesComponent,
                icons_component_1.IconsComponent,
                maps_component_1.MapsComponent,
                signup_component_1.SignupComponent,
                Update_user_component_1.UpdateComponent
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
exports.AdminLayoutModule = AdminLayoutModule;
