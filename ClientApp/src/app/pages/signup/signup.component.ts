import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/scss/core/user';
import { SignupService } from 'src/app/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  form: any = {
    name: null,
    surname: null,
    phone: "123456879",
    email: null,
    pwd: null,
    role:null

  };
  constructor(private signupService: SignupService,private route : Router  ) { }

  ngOnInit() {
  }

  signUp() {
    this.signupService.signup(this.form)
      .subscribe(
        response => {
          // Traitement de la réponse en cas de succès
          alert("Eneregister avec succees")
          console.log(response);
          this.route.navigate(['/login'])
        },
        error => {
      console.log(error)
          alert(error.error.message )
          
          this.errorMessage = 'Erreur lors de la connexion. Veuillez réessayer.';
        }
      );
  }
}
