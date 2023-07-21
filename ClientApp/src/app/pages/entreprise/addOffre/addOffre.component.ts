import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/appelOffre';
import { OffreServiceService } from 'src/app/services/offreService.service';
interface AppelOffres {
  titre: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  UserId: string

}

@Component({
  selector: 'app-addOffre',
  templateUrl: './addOffre.component.html',
  styleUrls: ['./addOffre.component.scss']
})


export class AddOffreComponent implements OnInit {
  nouvelAppelOffres: Offre = {
    _id: null,
    titre: '',
    description: '',
    dateDebut: null,
    dateFin: null,
    statut: '',
    idUser: '' //
  };


  constructor(private service: OffreServiceService, private router: Router) { }

  ngOnInit() {
  }
  ajouterAppelOffres() {

      this.service.createOffre(this.nouvelAppelOffres).subscribe(
        (data) => {
          console.log('Appel d\'offres ajouté avec succès', data);
          // Réinitialiser les champs ou effectuer d'autres actions après l'ajout réussi
          this.nouvelAppelOffres = {
            _id: null,
            titre: '',
            description: '',
            dateDebut: null,
            dateFin: null,
            statut: '',
            idUser: '64a96fe35561a21522119fe1'
          };
          this.router.navigate(['/offresByEntreprise'])
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'appel d\'offres', error);
          // Gérer l'erreur et afficher un message approprié à l'utilisateur
        }
      );
    }


}
