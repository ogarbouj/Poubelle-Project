import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoubelleService } from 'src/app/services/poubelleService/Poubelle.service';
import { Poubelle } from 'src/app/models/poubelle/poubelle.model';

@Component({
  selector: 'app-poubelles',
  templateUrl: './poubelles.component.html',
  styleUrls: ['./poubelles.component.scss']
})
export class PoubellesComponent implements OnInit {

  poubelles: Poubelle[];
  searchTerm: string = '';
  selectedOption: string = '';
  selectedType: string;
  selectedZone: string;
  types: any[] = [];
  zones: any[] = [];


  constructor(private poubellesService: PoubelleService, private router: Router) { }

  ngOnInit() {
    this.fetchPoubelles();
    this.fetchZones();
    this.fetchTypes();
  }


  
  fetchPoubelles() {
    this.poubellesService.fetchPoubelles().subscribe(data => {
      this.poubelles = data;
    }, error => {
      console.error('Erreur lors de la récupération des poubelles', error);
    });
  }
  fetchPoubellesByType() {
    this.poubellesService.fetchPoubellesByType(this.selectedType).subscribe(data => {
      this.poubelles = data;
    }, error => {
      console.error('Erreur lors de la récupération des poubelles', error);
    });
  }

  fetchPoubellesByZone() {
    this.poubellesService.fetchPoubellesByZone(this.selectedZone).subscribe(data => {
      this.poubelles = data;
    }, error => {
      console.error('Erreur lors de la récupération des poubelles', error);
    });
  }
  fetchZones() {
    this.poubellesService.fetchZones().subscribe(data => {
      this.zones = data;
    }, error => {
      console.error('Erreur lors de la récupération des zones', error);
    });
  }
  fetchTypes() {
    this.poubellesService.fetchTypes().subscribe(data => {
      this.types = data;
    }, error => {
      console.error('Erreur lors de la récupération des types', error);
    });
  }
  searchPoubelles(event: any = null) {
    if (event) {
      this.selectedOption = event.target.value;
    }
    let searchCriteria = {};
    searchCriteria[this.selectedOption] = this.searchTerm;

    this.poubellesService.searchPoubelles(searchCriteria).subscribe(data => {
      this.poubelles = data;
    }, error => {
      console.error('Erreur lors de la recherche des poubelles', error);
    });
  }



  
  modifierPoubelle(poubelleId: string) {
    this.router.navigate(['/edit-poubelle', poubelleId]);
  }

  supprimerPoubelle(poubelleId: string) {
    this.poubellesService.deletePoubelle(poubelleId).subscribe(() => {
      console.log('Poubelle supprimée');
      this.fetchPoubelles();
    }, error => {
      console.error('Erreur lors de la suppression de la poubelle', error);
    });
  }



  fetchPoubellesByTaille(sortBy: 'asc' | 'desc') {
    this.poubellesService.fetchPoubellesByTaille(sortBy).subscribe(data => {
      this.poubelles = data;
    }, error => {
      console.error('Erreur lors de la récupération des poubelles', error);
    });
  }
}

