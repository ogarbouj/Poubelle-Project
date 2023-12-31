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
import { GetAllMembershipsAdminComponent } from 'src/app/pages/getAllMembershipsAdmin/getAllMembershipsAdmin.component';
import { GetMembershipByIdComponent } from 'src/app/pages/getMembershipById/getMembershipById.component';
import { GetAllMembershipClientComponent } from 'src/app/pages/GetAllMembershipClient/GetAllMembershipClient.component';
import { GetAllPaymentAdminComponent } from 'src/app/pages/GetAllPaymentAdmin/GetAllPaymentAdmin.component';
import { GetPaymentByIdComponent } from 'src/app/pages/GetPaymentById/GetPaymentById.component';
import { GetAllInvoiceAdminComponent } from 'src/app/pages/GetAllInvoiceAdmin/GetAllInvoiceAdmin.component';
import { GetInvoiceByIdComponent } from 'src/app/pages/GetInvoiceById/GetInvoiceById.component';
import { GetAllInvoiceClientComponent } from 'src/app/pages/GetAllInvoiceClient/GetAllInvoiceClient.component';
import { AjoutPoubelleComponent } from 'src/app/pages/ajoutPoubelle/ajoutPoubelle.component';
import { PoubellesComponent } from 'src/app/pages/Poubelles/Poubelles.component';
import { EditPoubelleComponent } from 'src/app/pages/edit-poubelle/edit-poubelle.component';
import { SearchPoubellesComponent } from 'src/app/pages/searchPoubelles/searchPoubelles.component';
import { ZoneComponent } from 'src/app/pages/Zone/Zone.component';
import { ListZoneComponent } from 'src/app/pages/listZone/listZone.component';
import { AjoutTypeComponent } from 'src/app/pages/AjoutType/AjoutType.component';
import { ListeTypeComponent } from 'src/app/pages/listeType/listeType.component';
import { EditTypeComponent } from 'src/app/pages/editType/editType.component';
import { EditZoneComponent } from 'src/app/pages/editZone/editZone.component';
import { OffreRecyclageComponent } from 'src/app/pages/OffreRecyclage/OffreRecyclage.component';
import { OffrePromoUpdateComponentComponent } from 'src/app/pages/OffrePromoUpdateComponent/OffrePromoUpdateComponent.component';
import { AdminAjoutOffrePromotionnelleComponent } from 'src/app/pages/AdminAjoutOffrePromotionnelle/AdminAjoutOffrePromotionnelle.component';
import { AdminGestionOffreRecyclageComponent } from 'src/app/pages/AdminGestionOffreRecyclage/AdminGestionOffreRecyclage.component';
import { OffreRecyclageUpdateComponent } from 'src/app/pages/OffreRecyclageUpdate/OffreRecyclageUpdate.component';
import { OffreRecyclageUserADMINComponent } from 'src/app/pages/OffreRecyclage-UserADMIN/OffreRecyclage-UserADMIN.component';
import { PayMembershipComponent } from 'src/app/pages/PayMembership/PayMembership.component';
import { UpdateOffresComponent } from 'src/app/pages/updateOffres/updateOffres.component';
import { DetailsOffreComponent } from 'src/app/pages/detailsOffre/detailsOffre.component';
import { OffresByRecycleurComponent } from 'src/app/pages/recycleur/offresByRecycleur/offresByRecycleur.component';

import { CandidatsComponent } from 'src/app/pages/admin/candidats/candidats.component';
import { CandidatByrecycleurComponent } from 'src/app/pages/recycleur/candidatByrecycleur/candidatByrecycleur.component';
import { AppelOffresComponent } from 'src/app/pages/admin/appelOffres/appelOffres.component';
import { UpdateOffreComponent } from 'src/app/pages/admin/updateOffre/updateOffre.component';
import { UpdateCandidatComponent } from 'src/app/pages/admin/updateCandidat/updateCandidat.component';
import { OffresByEntrepriseComponent } from 'src/app/pages/entreprise/offresByEntreprise/offresByEntreprise.component';
import { UpdateOffreByEntrepriseComponent } from 'src/app/pages/entreprise/updateOffreByEntreprise/updateOffreByEntreprise.component';
import { AddOffreComponent } from 'src/app/pages/entreprise/addOffre/addOffre.component';
import { ListCandidatsByEntrepriseComponent } from 'src/app/pages/entreprise/listCandidatsByEntreprise/listCandidatsByEntreprise.component';
import { DetailOffreByRecycleurComponent } from 'src/app/pages/recycleur/detailOffreByRecycleur/detailOffreByRecycleur.component';
import { DetailOffreByEntrepriseComponent } from 'src/app/pages/entreprise/detailOffreByEntreprise/detailOffreByEntreprise.component';



// export const AdminLayoutRoutes: Routes = [
//     { path: 'dashboard',      component: DashboardComponent , canActivate: [AuthGuard],
//     data: {
//       role: 'admin'
//     }},
//     { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard], data: {
//         role: 'admin'
//       } },
//     { path: 'tables',         component: TablesComponent , canActivate: [AuthGuard], data: {
//         role: 'admin'
//       } },
//     { path: 'icons',          component: IconsComponent },
//     { path: 'maps',           component: MapsComponent },
//     {path:'update/:id', component:UpdateComponent},




export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'zone', component: ZoneComponent },
  { path: 'search', component: SearchPoubellesComponent },
  { path: 'listeZone', component: ListZoneComponent },
  { path: 'type', component: AjoutTypeComponent },
  { path: 'listeType', component: ListeTypeComponent },
  { path: 'editType/:id', component: EditTypeComponent },
  { path: 'editZone/:id', component: EditZoneComponent },
  { path: 'getAllMembershipAdmin', component: GetAllMembershipsAdminComponent },
  { path: 'getMembershipByIdComponent/:id', component: GetMembershipByIdComponent },
  { path: 'getAllMembershipClient', component: GetAllMembershipClientComponent },
  { path: 'GetAllPaymentAdmin', component: GetAllPaymentAdminComponent },
  { path: 'PayMembership/:id', component: PayMembershipComponent },
  { path: 'GetPaymentByIdComponent/:id', component: GetPaymentByIdComponent },
  { path: 'GetAllInvoiceAdminComponent', component: GetAllInvoiceAdminComponent },
  { path: 'GetAllInvoiceClient', component: GetAllInvoiceClientComponent },
  { path: 'GetInvoiceById/:id', component: GetInvoiceByIdComponent },
  { path: 'OffreRecyclage', component: OffreRecyclageComponent },
  { path: 'OffrePoromotionnelle', component: OffrePromoUpdateComponentComponent },
  { path: 'AdminAjoutOffrePromotionnelle', component: AdminAjoutOffrePromotionnelleComponent },
  { path: 'AdminGestionOffreRecyclage', component: AdminGestionOffreRecyclageComponent },
  { path: 'OffreRecyclageUserUpdate/:id', component: OffreRecyclageUpdateComponent },
  { path: 'OffrePromoUserUpdate/:id', component: OffrePromoUpdateComponentComponent },
  { path: 'OffreRecyclageUser', component: OffreRecyclageUserADMINComponent },
  { path: 'ajoutPoubelle', component: AjoutPoubelleComponent },
  { path: 'listePoubelle', component: PoubellesComponent },
  { path: 'edit-poubelle/:id', component: EditPoubelleComponent },
  { path: 'updateOffres/:id', component: UpdateOffresComponent },
  { path: 'detailsoffre/:id', component: DetailsOffreComponent },
  { path: 'offresByRecycleur', component: OffresByRecycleurComponent },
  { path: 'candidats', component: CandidatsComponent },
  { path: 'candidatByRecycleur/:idUser', component: CandidatByrecycleurComponent },
  { path: 'offresByAdmin', component: AppelOffresComponent },
  { path: 'updateAdmin/:id', component: UpdateOffreComponent },
  { path: 'updateCandidatByAdmin/:id', component: UpdateCandidatComponent },
  { path: 'offresByEntreprise', component: OffresByEntrepriseComponent },
  { path: 'updateOffreByEntreprise/:id', component: UpdateOffreByEntrepriseComponent },
  { path: 'addOffre', component: AddOffreComponent },
  { path: 'listCandidatsByEntreprise/:id ', component: ListCandidatsByEntrepriseComponent },
  { path: 'detailOffreByRecycleur/:id', component: DetailOffreByRecycleurComponent },
  { path: 'detailOffresByEntreprise/:id', component: DetailOffreByEntrepriseComponent }


];
