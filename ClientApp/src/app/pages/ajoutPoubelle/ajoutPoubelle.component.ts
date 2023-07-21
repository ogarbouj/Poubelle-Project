import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { PoubelleService } from 'src/app/services/poubelleService/Poubelle.service'; // Import PoubelleService

interface DataType {
  _id: string;
  nom: string;
}


interface ZoneType {
  _id: string;
  nom: string;
}

@Component({
  selector: 'app-ajoutPoubelle',
  templateUrl: './ajoutPoubelle.component.html',
  styleUrls: ['./ajoutPoubelle.component.scss']
})
export class AjoutPoubelleComponent implements OnInit {

  types: DataType[];
  zones: ZoneType[];

  poubelleForm = new FormGroup({
    idType: new FormControl(''),
    idZone: new FormControl(''),
    nom: new FormControl(''),
    capacite: new FormControl(''),
    taille: new FormControl(''),
    statut: new FormControl(''),
  });

  constructor(private poubelleService: PoubelleService, private router: Router) { }

  ngOnInit() {
    this.fetchTypes();
    this.fetchZones();
  }

  fetchTypes() {
    this.poubelleService.fetchTypes().subscribe(data => {
      this.types = data;
    });
  }

  fetchZones() {
    this.poubelleService.fetchZones().subscribe(data => {
      this.zones = data;
    });
  }

  onSubmit() {
    this.poubelleService.createPoubelle(this.poubelleForm.value).subscribe(
      () => {
        alert('Poubelle added successfully');
        this.router.navigate(['/listePoubelle']); 

      },
      error => {
        console.error(error);
        // Handle error cases if needed
      }
    );
  }
}
