import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
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
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'ajoutPoubelle',           component: AjoutPoubelleComponent },
    { path: 'listePoubelle',           component: PoubellesComponent },
    { path: 'edit-poubelle/:id', component: EditPoubelleComponent },
    {path: 'zone' , component:ZoneComponent},
    { path: 'search', component: SearchPoubellesComponent },
    { path: 'listeZone' , component:ListZoneComponent},
    { path:'type' , component:AjoutTypeComponent },
    { path:'listeType' , component:ListeTypeComponent},
    {path:'editType/:id' , component:EditTypeComponent },
    {path:'editZone/:id' , component:EditZoneComponent },


   
   
 
    
];
