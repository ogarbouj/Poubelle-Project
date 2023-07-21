import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PoubelleService } from 'src/app/services/poubelleService/Poubelle.service';
interface DataType {
  _id: string;
  nom: string;
}


interface ZoneType {
  _id: string;
  nom: string;
}
@Component({
  selector: 'app-edit-poubelle',
  templateUrl: './edit-poubelle.component.html',
  styleUrls: ['./edit-poubelle.component.scss']
})
export class EditPoubelleComponent implements OnInit {
  
  poubelleForm: FormGroup;
  poubelleId: string;
  types: DataType[];
  zones: ZoneType[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private poubelleService: PoubelleService  // Injecting PoubelleService
  ) {
    this.poubelleForm = this.formBuilder.group({
      nom: '',
      capacite: 0,
      taille: '',
      statut: '',
      Type: '',
      Zone: ''
    });
  }

  ngOnInit() {
    this.fetchTypes();
    this.fetchZones();
    this.poubelleId = this.route.snapshot.paramMap.get('id');
    this.poubelleService.fetchPoubelles().subscribe((data: any) => {
        const poubelle = data.find(poubelle => poubelle._id === this.poubelleId);
        this.poubelleForm.patchValue({
          nom: poubelle.nom,
          capacite: poubelle.capacite,
          taille: poubelle.taille,
          statut: poubelle.statut,
          Type: poubelle.idType, 
          Zone: poubelle.idZone
        });
      });
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
  onSubmit(): void {
    this.poubelleService.updatePoubelle(this.poubelleId, this.poubelleForm.value)
      .subscribe(() => {
        console.log('Poubelle mise à jour');
        this.router.navigate(['/listePoubelle']); // redirection après la mise à jour
      }, error => {
        console.error('Erreur lors de la mise à jour de la poubelle', error);
      });
  }

}
