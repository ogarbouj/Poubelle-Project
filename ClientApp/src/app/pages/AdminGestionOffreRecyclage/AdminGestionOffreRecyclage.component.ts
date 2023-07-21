import { Component, OnInit } from '@angular/core';
import { OffreRecyclage } from 'src/app/core/OffreRecyclage';
import { ServiceOffreRecyService } from 'src/app/services/ServiceOffreRecy.service';

@Component({
  selector: 'app-AdminGestionOffreRecyclage',
  templateUrl: './AdminGestionOffreRecyclage.component.html',
  styleUrls: ['./AdminGestionOffreRecyclage.component.scss']
})
export class AdminGestionOffreRecyclageComponent implements OnInit {
  offreRecyclage:OffreRecyclage[]=[];
  searchTerm:string = '';

  constructor(private _serviceOffreRecyService:ServiceOffreRecyService ) { }

  ngOnInit() {

    this._serviceOffreRecyService.getofferRecyclags().subscribe((data:any)=>{
      console.log(data.type);
      this.offreRecyclage=data
    })
  }





  removeProduct(offer:OffreRecyclage){
    this._serviceOffreRecyService.deleteofferRecyclag(offer.id).subscribe( ()=>  {

      this._serviceOffreRecyService.getofferRecyclags().subscribe((data)=>this.offreRecyclage=data)
   alert('Removed!Product removed successfully. success')

    })
  }
    assignofferRecylge(offer:OffreRecyclage){
      this._serviceOffreRecyService.assignOfferRecyclagUser(offer.id).subscribe( ()=>  {


     alert('assign offerRecyclqge successfully. success')

      })
  }
}
