import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
 import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { Component } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { UpdateComponent } from 'src/app/pages/Update-user/Update-user.component';
import { AuthGuard } from 'src/app/auth.guard';
0
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent , canActivate: [AuthGuard],
    data: {
      role: 'admin'
    }},
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard], data: {
        role: 'admin'
      } },
    { path: 'tables',         component: TablesComponent , canActivate: [AuthGuard], data: {
        role: 'admin'
      } },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
 {path:'update/:id', component:UpdateComponent},
 
];
