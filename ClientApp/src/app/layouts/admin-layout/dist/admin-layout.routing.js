"use strict";
exports.__esModule = true;
exports.AdminLayoutRoutes = void 0;
var dashboard_component_1 = require("../../pages/dashboard/dashboard.component");
var icons_component_1 = require("../../pages/icons/icons.component");
var maps_component_1 = require("../../pages/maps/maps.component");
var user_profile_component_1 = require("../../pages/user-profile/user-profile.component");
var tables_component_1 = require("../../pages/tables/tables.component");
var Update_user_component_1 = require("src/app/pages/Update-user/Update-user.component");
var auth_guard_1 = require("src/app/auth.guard");
0;
exports.AdminLayoutRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard],
        data: {
            role: 'admin'
        } },
    { path: 'user-profile', component: user_profile_component_1.UserProfileComponent, canActivate: [auth_guard_1.AuthGuard], data: {
            role: 'admin'
        } },
    { path: 'tables', component: tables_component_1.TablesComponent, canActivate: [auth_guard_1.AuthGuard], data: {
            role: 'admin'
        } },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'update/:id', component: Update_user_component_1.UpdateComponent },
];
