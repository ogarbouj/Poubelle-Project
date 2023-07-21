
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {  Offre } from 'src/app/models/appelOffre';

import { OffreServiceService } from 'src/app/services/offreService.service';
import { Candidat } from 'src/app/models/candidat';

@Component({
  selector: 'app-listCandidatsByEntreprise',
  templateUrl: './listCandidatsByEntreprise.component.html',
  styleUrls: ['./listCandidatsByEntreprise.component.scss']
})
export class ListCandidatsByEntrepriseComponent implements OnInit {
 offre: Offre
 candidats: Candidat[];

  constructor(private route: ActivatedRoute, private service: OffreServiceService ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { offre: Offre }) => {
      this.offre = data.offre;
      console.log('Offre:', this.offre); // Vérifier si l'objet Offre est correctement récupéré
      this.fetchCandidats(); // Appeler la méthode fetchCandidats après avoir obtenu l'objet Offre
    });


  }

  fetchCandidats() {
    if (this.offre && this.offre._id) { // Vérifier que l'objet offre est défini et que _id est défini
      console.log(this.offre._id);
      this.service.getCandidatsByOffre(this.offre._id).subscribe(
        (data: Candidat[]) => {
          this.candidats = data;
          console.log('Candidats:', data);
        },
        (error) => {
          console.error('Erreur lors de la récupération des candidats', error);
        }
      );
    } else {
      console.error('Objet offre non défini ou propriété _id manquante.');
    }
  }
  }


