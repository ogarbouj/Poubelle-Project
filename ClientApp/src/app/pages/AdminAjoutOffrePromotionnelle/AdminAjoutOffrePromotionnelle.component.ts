import { Component, OnInit } from "@angular/core";
import { ServiceOffrePromoService } from "src/app/services/service-offre-promo.service";

@Component({
  selector: "app-AdminAjoutOffrePromotionnelle",
  templateUrl: "./AdminAjoutOffrePromotionnelle.component.html",
  styleUrls: ["./AdminAjoutOffrePromotionnelle.component.scss"],
})
export class AdminAjoutOffrePromotionnelleComponent implements OnInit {
  searchTerm: string = "";

  offre: any = {};

  constructor(private _serviceOffreRecyPromotionnelle: ServiceOffrePromoService) { }

  ngOnInit() { }

  addToCart() {
    try {
      this._serviceOffreRecyPromotionnelle
        .createofferPromo(this.offre)
        .subscribe(
          (res) => alert("successfully! Product  added  successfully. success"),
          (err) => {
            alert(`error: ${err}`);
            console.log(err);
          }
        );
    } catch (err) {
      console.log(err);
    }
  }
}
