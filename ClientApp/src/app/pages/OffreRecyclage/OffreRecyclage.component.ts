import { Component, OnInit } from '@angular/core';
import { OffreRecyclage } from 'src/app/core/OffreRecyclage';
import { ServiceOffreRecyService } from 'src/app/services/ServiceOffreRecy.service';

@Component({
  selector: 'app-OffreRecyclage',
  templateUrl: './OffreRecyclage.component.html',
  styleUrls: ['./OffreRecyclage.component.scss']
})
export class OffreRecyclageComponent implements OnInit {

  offreRecyclage: OffreRecyclage[] = [];
  searchTerm: string = '';
  constructor(private _serviceOffreRecyService: ServiceOffreRecyService) { }

  ngOnInit() {
    this._serviceOffreRecyService.getofferRecyclags().subscribe((data: any) => {
      console.log(data.type);
      this.offreRecyclage = data
    })
  }

  addToCart(offer: OffreRecyclage) {
    this._serviceOffreRecyService.createofferRecyclag(offer).subscribe(() => alert('successfully! Product  added  to cart successfully. success'), () => alert(' was Added! Exist in Cart error'))
  }




  removeProduct(offer: OffreRecyclage) {
    this._serviceOffreRecyService.deleteofferRecyclag(offer.id).subscribe(() => {

      this._serviceOffreRecyService.getofferRecyclags().subscribe((data) => this.offreRecyclage = data)
      alert('Removed!Product removed successfully. success')

    })
  }
  assignofferRecylge(offer: OffreRecyclage) {
    this._serviceOffreRecyService.assignOfferRecyclagUser(offer.id).subscribe(() => {


      alert('assign offerRecyclqge successfully. success')

    })



  }

}
