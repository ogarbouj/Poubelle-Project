import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreServiceService } from 'src/app/services/offreService.service';

@Component({
  selector: 'app-updateOffreByEntreprise',
  templateUrl: './updateOffreByEntreprise.component.html',
  styleUrls: ['./updateOffreByEntreprise.component.scss']
})
export class UpdateOffreByEntrepriseComponent implements OnInit {
  offreForm: FormGroup
  offreId: string

  constructor(private route: ActivatedRoute, private router: Router, private FormBuilder: FormBuilder, private service: OffreServiceService) {
    this.offreForm= this.FormBuilder.group({
      titre:'',
      description:'',
      dateDebut:'',
      dateFin:'',
      statut:''
    })
  }

  ngOnInit() {
    this.offreId=this.route.snapshot.paramMap.get('id')
    this.service.getOffre(this.offreId)
    .subscribe((data:any)=>{
      this.offreForm.patchValue({
        titre:data.titre,
        description: data.description,
        dateDebut: data.dateDebut,
        dateFin: data.dateFin,
        statut: data.statut

      })
    })
  }
  onSubmit(): void{
    this.service.updateOffre(this.offreId,this.offreForm.value)
      .subscribe(() => {
        console.log('appel d\'offre mise à jour');
        this.router.navigate(['/offresByEntreprise']); // redirection après la mise à jour
      }, error => {
        console.error('Erreur lors de la mise à jour de l\'offre', error);
      });

  }

}
