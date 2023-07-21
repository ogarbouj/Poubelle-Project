import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/models/appelOffre';
import { User } from 'src/app/models/user';
import { CandidatService } from 'src/app/services/candidat.service';
import { OffreServiceService } from 'src/app/services/offreService.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detailOffreByRecycleur',
  templateUrl: './detailOffreByRecycleur.component.html',
  styleUrls: ['./detailOffreByRecycleur.component.scss']
})
export class DetailOffreByRecycleurComponent implements OnInit {
  offer: Offre;
  description: any;
  daysRemaining: number
  userId: string = '64b9808bbfd0afff960b060e'
  user: User
  alertMessage: string;

  constructor(private route: ActivatedRoute, private offreService: OffreServiceService,private ngZone: NgZone, private router: Router, private serviceC: CandidatService, private su: UserService) { }

  ngOnInit() {
    this.getoffer();
    this.getUserDetails()
  }
  getoffer() {
    this.route.params.subscribe(params => {
      const offreId = params['id'];

      this.offreService.getOffreDetails(offreId).subscribe(
        res => {
          this.offer = res.appelOffre;
          this.calculateDaysRemaining()


        },
        error => {
          console.error('Erreur lors de la récupération des détails de l\'offre', error);
        }
      );
    });
  }
  calculateDaysRemaining() {
    // Calculer la différence entre la date de fin et la date actuelle en millisecondes
    const endDate = new Date(this.offer.dateFin).getTime();
    const today = new Date().getTime();
    const timeDiff = endDate - today;

    // Convertir la différence en jours
    this.daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
  getUserDetails() {
    this.su.getUserById(this.userId).subscribe(
      (user: User) => {
        this.user = user;
      },
      error => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur', error);
      }
    );
  }
  souscrire() {

    this.serviceC.souscrireCandidat(this.user, this.offer._id).subscribe(
      (data) => {
        // Gérez la réponse de l'API si nécessaire
        console.log('Souscription réussie !', data);
        this.alertMessage = 'Souscription réussie !'
      },
      (error) => {
        console.error('Erreur lors de la souscription', error);
        this.alertMessage = 'Vous avez déjà une candidature';
      }
    );
  }

}
