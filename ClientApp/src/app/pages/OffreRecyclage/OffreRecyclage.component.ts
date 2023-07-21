import { MembershipService } from 'src/app/services/membership.service';
import { Component, OnInit } from '@angular/core';
import { OffreRecyclage } from 'src/app/core/OffreRecyclage';
import { ServiceOffreRecyService } from 'src/app/services/ServiceOffreRecy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-OffreRecyclage',
  templateUrl: './OffreRecyclage.component.html',
  styleUrls: ['./OffreRecyclage.component.scss']
})
export class OffreRecyclageComponent implements OnInit {

  offreRecyclage: OffreRecyclage[] = [];
  searchTerm: string = '';
  constructor(private _serviceOffreRecyService: ServiceOffreRecyService, private membershipServices: MembershipService, private router: Router) { }

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

      this.membershipServices.PostMembershipAsync("64b6dedf627e779936bae9a0", offer.id.toString()).subscribe(
        (res) => {
          this.router.navigateByUrl(`/getMembershipByIdComponent/${res.id}`);
        },
        (err) => {
          console.log(err);
        })

    });

  }

}
