import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/appelOffre';
import { OffreServiceService } from 'src/app/services/offreService.service';


@Component({
  selector: 'app-appelOffres',
  templateUrl: './appelOffres.component.html',
  styleUrls: ['./appelOffres.component.scss']
})
export class AppelOffresComponent implements OnInit {
  offres: Offre[]


  constructor(private router: Router, private service: OffreServiceService) { }

  ngOnInit() {
    this.fetchOffres()
  }
  fetchOffres(){

    this.service.getListOffres().subscribe(
      (data: Offre[]) => {
        this.offres = data;
        console.log(data)

      },
      (error) => {
        console.error('Erreur lors de la récupération des offres', error);
      }
    );

  }
  deleteOffre(offreId: string){
    this.service.deleteOffre(offreId).subscribe(()=>{
      console.log('appel offre supprimé')
      this.fetchOffres()

    },
     error => {

      console.error('Erreur lors de la suppression d/offres', error);

    })



}
updateOffre(offresId) {
  this.router.navigate(['/updateAdmin', offresId]);

}
}
