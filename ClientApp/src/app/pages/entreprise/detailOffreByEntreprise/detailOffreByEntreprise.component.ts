import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Offre } from 'src/app/models/appelOffre';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat.service';
import { OffreServiceService } from 'src/app/services/offreService.service';

@Component({
  selector: 'app-detailOffreByEntreprise',
  templateUrl: './detailOffreByEntreprise.component.html',
  styleUrls: ['./detailOffreByEntreprise.component.scss']
})
export class DetailOffreByEntrepriseComponent implements OnInit {
  offer: Offre
  candidats: Candidat[]


  constructor(private route: ActivatedRoute, private service: OffreServiceService, private serviceC: CandidatService) { }

  ngOnInit() {
    //this.getoffer()
    this.getOfferAndCandidats()
  }
  getOfferAndCandidats() {
    this.route.params.pipe(
      switchMap(params => {
        const offreId = params['id'];
        return this.service.getOffreDetails(offreId);
      })
    ).subscribe(
      res => {
        this.offer = res.appelOffre;
        this.service.getCandidatsByOffre(this.offer._id).subscribe(
          candidats => {
            this.candidats = candidats;
            console.log('candidats:'+this.candidats)
          },
          error => {
            console.error('Erreur lors de la récupération des candidats associés à l\'offre', error);
          }
        );
      },
      error => {
        console.error('Erreur lors de la récupération des détails de l\'offre', error);
      }
    );
  }
  updateCandidatStatut(candidat: Candidat, statut: string) {
    candidat.statut = statut;
    // Appel du service pour mettre à jour le statut dans la base de données
    this.serviceC.updateCandidat(candidat._id, candidat).subscribe(
      updatedCandidat => {
        console.log('Statut du candidat mis à jour:', updatedCandidat);
      },
      error => {
        console.error('Erreur lors de la mise à jour du statut du candidat', error);
      }
    );
  }
  saveCandidat(candidat: Candidat) {
    // Appel du service pour mettre à jour le candidat dans la base de données
    this.serviceC.updateCandidat(candidat._id, candidat).subscribe(
      updatedCandidat => {
        console.log('Candidat mis à jour:', updatedCandidat);
      },
      error => {
        console.error('Erreur lors de la mise à jour du candidat', error);
      }
    );
  }

}
