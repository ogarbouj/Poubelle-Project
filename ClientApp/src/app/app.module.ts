import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { SignupComponent } from './pages/signup/signup.component';
import { UpdateComponent } from './pages/Update-user/Update-user.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
@NgModule({
  imports: [
    BrowserAnimationsModule,
   
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  declarations: [	
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
   
   
  
   
     
   ],
  providers: [TokenInterceptorService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
