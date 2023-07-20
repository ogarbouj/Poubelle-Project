import { Component, OnInit } from '@angular/core';
import { TablesService } from 'src/app/services/Tables.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/assets/scss/core/user';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  public users :User[]=[]
  constructor(private tableservice: TablesService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.tableservice.getAllUsers().subscribe((data)=>this.users=data)
  }

  onSubmit(form: NgForm) {
    // Manipuler les données du formulaire ici si nécessaire
  }

  deleteUser(userId: string) {
    if(confirm("Are you sure to delete "+userId)) {
    this.tableservice.deleteUser(userId).subscribe(
      () => {
        alert('utilisateur supprimé')
        console.log('Utilisateur supprimé avec succès');
        this.getUsers(); // Met à jour la liste des utilisateurs après la suppression
      },
      error => {
        console.log('Une erreur s\'est produite lors de la suppression de l\'utilisateur :', error);
      }
    );
  }
}
}
