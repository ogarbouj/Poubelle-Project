import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ServiceOffreRecyService } from 'src/app/services/ServiceOffreRecy.service';

@Component({
  selector: 'app-OffreRecyclageUpdate',
  templateUrl: './OffreRecyclageUpdate.component.html',
  styleUrls: ['./OffreRecyclageUpdate.component.scss']
})
export class OffreRecyclageUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _serviceOfferRecy: ServiceOffreRecyService) { }
  id: String;
  offre: any = {};
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._serviceOfferRecy.getofferRecyclag(this.id).subscribe((liste) => {
      console.log(liste);
      this.offre = liste;


    });

  }

  update() {
    this._serviceOfferRecy.updateofferRecyclag(this.id, this.offre).subscribe((liste) => {

      this.offre = liste;


    });
  }

}
