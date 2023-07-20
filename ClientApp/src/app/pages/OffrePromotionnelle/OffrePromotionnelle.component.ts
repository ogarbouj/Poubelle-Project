import { Component, OnInit } from '@angular/core';


import { catchError } from 'rxjs';
import { OffrePromotionnelle } from 'src/app/core/OffrePromotionnelle';
import { ServiceOffrePromoService } from 'src/app/services/service-offre-promo.service';


@Component({
  selector: 'app-OffrePromotionnelle',
  templateUrl: './OffrePromotionnelle.component.html',
  styleUrls: ['./OffrePromotionnelle.component.scss']
})
export class OffrePromotionnelleComponent implements OnInit {

  offrePromo:OffrePromotionnelleComponent[]=[];



  title:string;
  type:string;
  pourcentageReduction:number;
  user:string
  offre: any = {};

  constructor( private _serviceOffreRecyPromotionnelle: ServiceOffrePromoService) { }


  ngOnInit() {
     this.getListeOffrePromo()
  }


 getListeOffrePromo () {


  try {
    this._serviceOffreRecyPromotionnelle.getofferPromotionnelle().subscribe((liste) => {
      console.log(liste);
      this.offrePromo=liste;


    });
  } catch (err) {
    console.log(err);
  }

 }


 removeProduct(offer:OffrePromotionnelle ){
  this._serviceOffreRecyPromotionnelle.deleteofferPromo(offer.id).subscribe( ()=>  {

    this._serviceOffreRecyPromotionnelle.getofferPromotionnelle().subscribe((data)=>this.offrePromo=data)
 alert('Removed!Product removed successfully. success')

  })
}


}
