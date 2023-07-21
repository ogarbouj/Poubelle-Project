import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/appelOffre';
import { OffreServiceService } from 'src/app/services/offreService.service';

@Component({
  selector: 'app-offresByRecycleur',
  templateUrl: './offresByRecycleur.component.html',
  styleUrls: ['./offresByRecycleur.component.scss']
})
export class OffresByRecycleurComponent implements OnInit {
  offres:Offre[]
  offresEnAttente: Offre[] = [];
  currentDate: Date = new Date();
  userId: string = '64b5e2c0d6c2d6e8b11a33aa'


  constructor(private service : OffreServiceService, private router: Router) { }

  ngOnInit() {
    this.fetchOffres();
  }
  fetchOffres() {
    this.service.getListOffres().subscribe(
      (data: Offre[]) => {
        this.offres = data;
        this.offresEnAttente = this.offres.filter(offre => offre.statut === 'En attente' && new Date(offre.dateFin) >= this.currentDate);
      },
      (error) => {
        console.error('Erreur lors de la récupération des offres', error);
      }
    );
  }

  voirDetailsOffre(offreId: string) {
    this.router.navigate(['/detailOffreByRecycleur', offreId]);
  }


  }


