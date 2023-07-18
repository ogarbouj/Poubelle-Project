// Update-user.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/scss/core/user';
import { TablesService } from '../../services/Tables.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './Update-user.component.html',
  styleUrls: ['./Update-user.component.scss']
})
export class UpdateComponent implements OnInit {
  submitted: boolean = false;
  updateForm: User = new User(); // Utilisateur à mettre à jour
  errorMessage: string;

  constructor(private tableservice: TablesService,private route:ActivatedRoute) {}
  user: any;
  id : String;
  ngOnInit() {
    this.route.params.subscribe( params =>
      this.id = params['id']  )
  
    this.tableservice.getUserById(this.id).subscribe( user =>
        this.user =user )
  }



  onSubmit() {
    this.update();
  }

  selectUserForUpdate(user: User) {
    // Remplit le modèle de l'utilisateur à mettre à jour
    this.updateForm = { ...user };
  }

  update() {
    if (!this.id ) {
      console.error("ID d'utilisateur non défini. Veuillez sélectionner un utilisateur avant de mettre à jour.");
      return;
    }
  console.log(this.user);
    this.tableservice.update(this.id, this.user)
      .subscribe(
        response => {
          console.log('Utilisateur mis à jour avec succès :', response);
        alert('Utilisateur mis à jour avec succès :');
          this.submitted = true;
        
        },
        error => {
          console.error('Une erreur s\'est produite lors de la mise à jour de l\'utilisateur :', error);
          this.errorMessage = 'Erreur lors de la mise à jour. Veuillez réessayer.';
        }
      );
  }

  navigate() {
    // Vous pouvez rediriger vers une autre page après la mise à jour réussie si nécessaire.
    // Par exemple, naviguer vers la liste des utilisateurs.
  }
}
