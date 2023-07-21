import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-updateCandidat',
  templateUrl: './updateCandidat.component.html',
  styleUrls: ['./updateCandidat.component.scss']
})
export class UpdateCandidatComponent implements OnInit {
  candidatForm: FormGroup
  candidatId: string
  constructor(private route: ActivatedRoute, private router: Router, private FormBuilder: FormBuilder, private service: CandidatService) {
    this.candidatForm= this.FormBuilder.group({
      nom:'',
      email:'',
      numero:''
    })
   }

  ngOnInit() {
    this.candidatId=this.route.snapshot.paramMap.get('id')
    this.service.getCandidat(this.candidatId)
    .subscribe((data:any)=>{
      this.candidatForm.patchValue({
        nom:data.nom,
        email: data.email,
        numero: data.numer

      })
    })
  }
  onSubmit(): void{
    this.service.updateCandidat(this.candidatId,this.candidatForm.value)
      .subscribe(() => {
        console.log('candidature mise à jour');
        this.router.navigate(['/candidats']); // redirection après la mise à jour
      }, error => {
        console.error('Erreur lors de la mise à jour de l\'offre', error);
      });

  }

}
