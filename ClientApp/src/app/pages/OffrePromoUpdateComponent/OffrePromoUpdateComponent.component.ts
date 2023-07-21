import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceOffrePromoService } from 'src/app/services/service-offre-promo.service';

@Component({
  selector: 'app-OffrePromoUpdateComponent',
  templateUrl: './OffrePromoUpdateComponent.component.html',
  styleUrls: ['./OffrePromoUpdateComponent.component.scss']
})
export class OffrePromoUpdateComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _serviceOfferPromo: ServiceOffrePromoService) { }
  id: String;
  offre: any = {};
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._serviceOfferPromo.getofferPromotionnell(this.id).subscribe((liste) => {
      console.log(liste);
      this.offre = liste;


    });

  }

  update() {
    this._serviceOfferPromo.updateofferPromo(this.id, this.offre).subscribe((liste) => {

      this.offre = liste;


    });
  }
}
