import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PoubelleService } from "src/app/services/poubelleService/Poubelle.service";
import { Poubelle } from "src/app/models/poubelle/poubelle.model";

interface DataType {
  _id: string;
  nom: string;
}

interface ZoneType {
  _id: string;
  nom: string;
}

@Component({
  selector: "app-edit-poubelle",
  templateUrl: "./edit-poubelle.component.html",
  styleUrls: ["./edit-poubelle.component.scss"],
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
    private poubelleService: PoubelleService // PoubelleService injected here
  ) {
    this.poubelleForm = this.formBuilder.group({
      nom: "",
      capacite: 0,
      taille: "",
      statut: "",
      Type: "",
      Zone: "",
    });
  }

  ngOnInit() {
    this.fetchTypes();
    this.fetchZones();
    this.poubelleId = this.route.snapshot.paramMap.get("id");
    console.log(this.poubelleId);
    this.poubelleService
      .fetchPoubelleById(this.poubelleId)
      .subscribe((poubelle: Poubelle) => {
        console.log("response data", poubelle);
        console.log("nom", poubelle.nom);
        console.log("capacite", poubelle.capacite);
        console.log("taille", poubelle.taille);
        console.log("statut", poubelle.statut);
        console.log("Type", poubelle.idType);
        console.log("Zone", poubelle.idZone);

        this.poubelleForm.patchValue({
          nom: poubelle.nom,
          capacite: poubelle.capacite,
          taille: poubelle.taille,
          statut: poubelle.statut,
          Type: poubelle.idType._id, 
          Zone: poubelle.idZone._id
        });
      });
  }

  fetchTypes() {
    this.poubelleService.fetchTypes().subscribe((data) => {
      this.types = data;
    });
  }

  fetchZones() {
    this.poubelleService.fetchZones().subscribe((data) => {
      this.zones = data;
    });
  }

  onSubmit(): void {
    this.poubelleService
      .updatePoubelle(this.poubelleId, this.poubelleForm.value)
      .subscribe(
        () => {
          console.log("Poubelle mise à jour");
          this.router.navigate(["/listePoubelle"]); // redirection après la mise à jour
        },
        (error) => {
          console.error("Erreur lors de la mise à jour de la poubelle", error);
        }
      );
  }
}
