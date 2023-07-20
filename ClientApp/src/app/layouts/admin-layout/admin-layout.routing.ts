import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { GetAllMembershipsAdminComponent } from 'src/app/pages/getAllMembershipsAdmin/getAllMembershipsAdmin.component';
import { GetMembershipByIdComponent } from 'src/app/pages/getMembershipById/getMembershipById.component';
import { GetAllMembershipClientComponent } from 'src/app/pages/GetAllMembershipClient/GetAllMembershipClient.component';
import { GetAllPaymentAdminComponent } from 'src/app/pages/GetAllPaymentAdmin/GetAllPaymentAdmin.component';
import { GetPaymentByIdComponent } from 'src/app/pages/GetPaymentById/GetPaymentById.component';
import { GetAllInvoiceAdminComponent } from 'src/app/pages/GetAllInvoiceAdmin/GetAllInvoiceAdmin.component';
import { GetInvoiceByIdComponent } from 'src/app/pages/GetInvoiceById/GetInvoiceById.component';
import { GetAllInvoiceClientComponent } from 'src/app/pages/GetAllInvoiceClient/GetAllInvoiceClient.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'getAllMembershipAdmin', component: GetAllMembershipsAdminComponent },
  { path: 'getMembershipByIdComponent/:id', component: GetMembershipByIdComponent },
  { path: 'getAllMembershipClient', component: GetAllMembershipClientComponent },
  { path: 'GetAllPaymentAdmin', component: GetAllPaymentAdminComponent },
  { path: 'GetPaymentByIdComponent/:id', component: GetPaymentByIdComponent },
  { path: 'GetAllInvoiceAdminComponent', component: GetAllInvoiceAdminComponent },
  { path: 'GetAllInvoiceClient', component: GetAllInvoiceClientComponent },
  { path: 'GetInvoiceById/:id', component: GetInvoiceByIdComponent },
];
