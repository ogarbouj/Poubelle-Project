import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {
  candidats: Candidat[];

  constructor(private router: Router, private service: CandidatService) { }

  ngOnInit() {
    this.fetchCandidats()
  }
  fetchCandidats(){

    this.service.getAll().subscribe(
      (data: Candidat[]) => {
        this.candidats = data;
        console.log(data)
      },
      (error) => {
        console.error('Erreur lors de la récupération des offres', error);
      }
    );

  }
  deleteCandidat(candidatId: string){
    this.service.deleteCandidat(candidatId).subscribe(()=>{
      console.log('appel offre supprimé')
      this.fetchCandidats()

    },
     error => {

      console.error('Erreur lors de la suppression d/offres', error);

    })


}
updateCandidat(candidatId) {
  this.router.navigate(['/updateCandidatByAdmin', candidatId]);

}

}
