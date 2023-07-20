import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetAllMembershipsAdminComponent } from 'src/app/pages/getAllMembershipsAdmin/getAllMembershipsAdmin.component';
import { GetAllMembershipClientComponent } from 'src/app/pages/GetAllMembershipClient/GetAllMembershipClient.component';
import { GetAllPaymentAdminComponent } from 'src/app/pages/GetAllPaymentAdmin/GetAllPaymentAdmin.component';
import { GetPaymentByIdComponent } from 'src/app/pages/GetPaymentById/GetPaymentById.component';
import { GetAllInvoiceAdminComponent } from 'src/app/pages/GetAllInvoiceAdmin/GetAllInvoiceAdmin.component';
import { GetInvoiceByIdComponent } from 'src/app/pages/GetInvoiceById/GetInvoiceById.component';
import { GetAllInvoiceClientComponent } from 'src/app/pages/GetAllInvoiceClient/GetAllInvoiceClient.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    GetAllMembershipsAdminComponent,
    GetAllMembershipClientComponent,
    GetAllPaymentAdminComponent,
    GetPaymentByIdComponent,
    GetAllInvoiceAdminComponent,
    GetInvoiceByIdComponent,
    GetAllInvoiceClientComponent
  ]
})

export class AdminLayoutModule {}
