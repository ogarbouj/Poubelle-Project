import { Component, OnInit } from "@angular/core";
import { OffreRecyclage } from "src/app/core/OffreRecyclage";
import { ServiceOffreRecyService } from "src/app/services/ServiceOffreRecy.service";


@Component({
  selector: 'app-OffreRecyclage-UserADMIN',
  templateUrl: './OffreRecyclage-UserADMIN.component.html',
  styleUrls: ['./OffreRecyclage-UserADMIN.component.scss']
})
export class OffreRecyclageUserADMINComponent implements OnInit {
  offreRecyclage: OffreRecyclage[] = [];
  searchTerm: string = "";
  // offre: any = {};
  offre: OffreRecyclage = new OffreRecyclage();


  constructor(private _serviceOffreRecyService: ServiceOffreRecyService) { }

  ngOnInit() {
    /*this._serviceOffreRecyService.getofferRecyclags().subscribe((data:any)=>{
      console.log(data.type);
      this.offreRecyclage=data
    })*/
    this.getListeOffrePromo();
  }

  getListeOffrePromo() {
    try {
      this._serviceOffreRecyService.getofferRecyclags().subscribe((liste) => {
        console.log(liste);
        this.offreRecyclage = liste;
      });
    } catch (err) {
      console.log(err);
    }
  }
  addToCart() {
    this._serviceOffreRecyService.createofferRecyclag(this.offre).subscribe(
      () => alert("successfully! Product  added  successfully. success"),
      (err) => {
        alert(" was Added! Exist  error");
        console.log(err);
      }
    );
  }

  removeProduct(offer: OffreRecyclage) {
    this._serviceOffreRecyService
      .deleteofferRecyclag(offer.id)
      .subscribe(() => {
        this._serviceOffreRecyService
          .getofferRecyclags()
          .subscribe((data) => (this.offreRecyclage = data));
        alert("Removed!Product removed successfully. success");
      });
  }
  assignofferRecylge(offer: OffreRecyclage) {
    this._serviceOffreRecyService
      .assignOfferRecyclagUser(offer.id)
      .subscribe(() => {
        alert("assign offerRecyclqge successfully. success");
      });
  }
}
