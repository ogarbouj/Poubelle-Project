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
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { UpdateComponent } from 'src/app/pages/Update-user/Update-user.component';

import { GetAllMembershipsAdminComponent } from 'src/app/pages/getAllMembershipsAdmin/getAllMembershipsAdmin.component';
import { GetAllMembershipClientComponent } from 'src/app/pages/GetAllMembershipClient/GetAllMembershipClient.component';
import { GetAllPaymentAdminComponent } from 'src/app/pages/GetAllPaymentAdmin/GetAllPaymentAdmin.component';
import { GetPaymentByIdComponent } from 'src/app/pages/GetPaymentById/GetPaymentById.component';
import { GetAllInvoiceAdminComponent } from 'src/app/pages/GetAllInvoiceAdmin/GetAllInvoiceAdmin.component';
import { GetInvoiceByIdComponent } from 'src/app/pages/GetInvoiceById/GetInvoiceById.component';
import { GetAllInvoiceClientComponent } from 'src/app/pages/GetAllInvoiceClient/GetAllInvoiceClient.component';

import { TestComponentComponent } from 'src/app/pages/Test-Component/Test-Component.component';
import { AjoutPoubelleComponent } from 'src/app/pages/ajoutPoubelle/ajoutPoubelle.component';
import { PoubellesComponent } from 'src/app/pages/Poubelles/Poubelles.component';
import { EditPoubelleComponent } from 'src/app/pages/edit-poubelle/edit-poubelle.component';

import { SearchBarComponent } from 'src/app/pages/searchBar/searchBar.component';
import { SearchPoubellesComponent } from 'src/app/pages/searchPoubelles/searchPoubelles.component';

import { ListeTypeComponent } from 'src/app/pages/listeType/listeType.component';
import { ListZoneComponent } from 'src/app/pages/listZone/listZone.component';
import { AjoutTypeComponent } from 'src/app/pages/AjoutType/AjoutType.component';
import { ZoneComponent } from 'src/app/pages/Zone/Zone.component';
import { EditTypeComponent } from 'src/app/pages/editType/editType.component';
import { EditZoneComponent } from 'src/app/pages/editZone/editZone.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AdminAjoutOffrePromotionnelleComponent } from 'src/app/pages/AdminAjoutOffrePromotionnelle/AdminAjoutOffrePromotionnelle.component';
import { AdminGestionOffreRecyclageComponent } from 'src/app/pages/AdminGestionOffreRecyclage/AdminGestionOffreRecyclage.component';
import { OffrePromoUpdateComponentComponent } from 'src/app/pages/OffrePromoUpdateComponent/OffrePromoUpdateComponent.component';
import { OffreRecyclageUserADMINComponent } from 'src/app/pages/OffreRecyclage-UserADMIN/OffreRecyclage-UserADMIN.component';
import { OffreRecyclageComponent } from 'src/app/pages/OffreRecyclage/OffreRecyclage.component';
import { OffreRecyclageUpdateComponent } from 'src/app/pages/OffreRecyclageUpdate/OffreRecyclageUpdate.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    SignupComponent,
    UpdateComponent,
    GetAllMembershipsAdminComponent,
    GetAllMembershipClientComponent,
    GetAllPaymentAdminComponent,
    GetPaymentByIdComponent,
    GetAllInvoiceAdminComponent,
    GetInvoiceByIdComponent,
    GetAllInvoiceClientComponent,
    TestComponentComponent,
    AjoutPoubelleComponent,
    PoubellesComponent,
    EditPoubelleComponent,
    SearchPoubellesComponent ,
    SearchBarComponent,
    ListeTypeComponent,
    ListZoneComponent,
    AjoutTypeComponent,
    ZoneComponent,
    EditTypeComponent,
    EditZoneComponent,
    AdminAjoutOffrePromotionnelleComponent,
    AdminGestionOffreRecyclageComponent,
    AdminAjoutOffrePromotionnelleComponent,
    OffrePromoUpdateComponentComponent,
    OffreRecyclageUserADMINComponent,
    OffreRecyclageComponent,
    OffreRecyclageUpdateComponent,
  ]
})

export class AdminLayoutModule {}
