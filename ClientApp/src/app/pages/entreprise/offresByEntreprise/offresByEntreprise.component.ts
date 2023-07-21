import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/appelOffre';
import { OffreServiceService } from 'src/app/services/offreService.service';

@Component({
  selector: 'app-offresByEntreprise',
  templateUrl: './offresByEntreprise.component.html',
  styleUrls: ['./offresByEntreprise.component.scss']
})
export class OffresByEntrepriseComponent implements OnInit {
  offres: Offre[]

  constructor(private service: OffreServiceService, private router: Router) { }

  ngOnInit() {
    this.fetchOffres()
  }
  fetchOffres(){
    const userId = '64a96fe35561a21522119fe1';
    this.service.getOffresByEntreprise(userId).subscribe(
      (data: Offre[]) => {
        this.offres = data;
        console.log(data);
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
    this.router.navigate(['/updateOffreByEntreprise', offresId]);

  }
  addOffre(){
    this.router.navigate(['/addOffre'])
  }
  listCandidats(offreId){
    this.router.navigateByUrl(`/listCandidatsByEntreprise/${offreId}`);
    console.log('offreId'+offreId)
  }
  voirDetailsOffre(offreId: string) {
    this.router.navigate(['/detailOffresByEntreprise', offreId]);
  }


}

