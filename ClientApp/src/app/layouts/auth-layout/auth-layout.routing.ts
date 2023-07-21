import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';


import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { Component } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { forgetPasswordComponent } from 'src/app/pages/forget-password/forget-password.component';
import { AuthLayoutComponent } from './auth-layout.component';
export const AuthLayoutRoutes: Routes = [
    { path: 'signup',      component: SignupComponent },
    { path: 'login',   component: LoginComponent },
  {path : 'forget-pasword', component: forgetPasswordComponent}
 
];
