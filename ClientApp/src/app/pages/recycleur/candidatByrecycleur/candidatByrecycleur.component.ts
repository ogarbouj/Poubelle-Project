import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre, AppleOffre } from 'src/app/models/appelOffre';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat.service';
import { OffreServiceService } from 'src/app/services/offreService.service';

@Component({
  selector: 'app-candidatByrecycleur',
  templateUrl: './candidatByrecycleur.component.html',
  styleUrls: ['./candidatByrecycleur.component.scss']
})
export class CandidatByrecycleurComponent implements OnInit {
  candidats: Candidat[]
  candidatDeletedMessage: string = '';


  constructor(private route: ActivatedRoute, private service: CandidatService, private router: Router, private offreService: OffreServiceService) { }

  ngOnInit() {
    this.getCandidatByUserId()

  }
  getCandidatByUserId(){
    const userId = '64b9808bbfd0afff960b060e'
    this.service.getCandidatByUserId(userId).subscribe(
      (candidats: Candidat[]) => {
        this.candidats = candidats;
        this.candidats.forEach((candidat)=>{
          this.offreService.getOffreDetails(candidat.offres[0]).subscribe(
            (appelOffre: AppleOffre)=>{
              candidat.offreDetails= appelOffre.appelOffre
            },
            (error) => {
              console.error('Error fetching offre details', error);
            }
          )
        })
      },
      (error) => {
        console.error('Error fetching candidats', error);
      }
    );
  }
  offresByRecycleur() {
    this.router.navigate(['/offresByRecycleur']);
  }
  annulerCandidature(CandidatId: string){
    this.service.deleteCandidat(CandidatId).subscribe(()=>{
      console.log('candidat supprimé')
      this.candidatDeletedMessage = 'Votre candidature a été supprimée. Vous pouvez souscrire à une nouvelle offre.';


    },
     error => {

      console.error('Erreur lors de la suppression de candidat', error);

    })

  }
  }
