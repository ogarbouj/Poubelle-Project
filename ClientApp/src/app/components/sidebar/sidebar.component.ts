import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },

    { path: '/getAllMembershipAdmin', title: 'Manage Memberships',  icon:'ni-single-copy-04 text-pink', class: '' },
    { path: '/getAllMembershipClient', title: 'Manage Memberships Client',  icon:'ni-single-copy-04 text-pink', class: '' },
    { path: '/GetAllPaymentAdmin', title: 'Manage Payments',  icon:'ni-credit-card text-pink', class: '' },
    { path: '/GetAllInvoiceAdminComponent', title: 'Manage Invoices',  icon:'ni-money-coins text-pink', class: '' },
    { path: '/GetAllInvoiceClient', title: 'Manage Invoices Client',  icon:'ni-money-coins text-pink', class: '' },

    { path: '/ajoutPoubelle', title: 'AjoutPoubelle',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/listePoubelle', title: 'ListPoubelle',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/zone', title: 'AjouterZone',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/listeZone', title: 'ListZone',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/type', title: 'AjouterType',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/listeType', title: 'ListType',  icon:'ni-circle-08 text-pink', class: '' },

    { path: '/OffreRecyclage', title: ' User(Cleint) Consultation-Adhésion Offre Recyclage',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/OffrePoromotionnelle', title: ' User(Admin) Gestion Offre Poromotionnelle',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/OffreRecyclageUser', title: ' User(Admin) Ajout Offre Recyclage',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/AdminAjoutOffrePromotionnelle', title: ' User(Admin) Ajout Offre Promotionnelle',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/AdminGestionOffreRecyclage', title: ' User (Admin) Gestion Offre Recyclage',  icon:'ni-circle-08 text-pink', class: '' },
    // { path: '/AdminGestionOffreRecyclage', title: ' User (Admin) Gestion Offre Recyclage',  icon:'ni-circle-08 text-pink', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
