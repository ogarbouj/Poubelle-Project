import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

export class forgetPasswordComponent implements OnInit {
  email: string;
  verificationCode: string;
  newPassword: string;

  constructor(private loginservice: LoginService) { }

  ngOnInit() {
  }

  sendForgotPasswordEmail() {
    this.loginservice. sendForgotPasswordEmail(this.email)
      .subscribe(
        (response) => {
          alert('verifier votre boite de reception')
          console.log('Email sent:', response.message);
          // Afficher un message à l'utilisateur indiquant que l'e-mail a été envoyé avec succès.
        },
        (error) => {
          alert('vous etes pas inscrit')
          console.error('Error sending email:', error);
         
        }
      );
  }

  resetPassword() {
    this.loginservice.verifyVerificationCode(this.email, this.verificationCode, this.newPassword)
      .subscribe(
        (response) => {
          alert('Votre mot de passe a été modifié avec succès');
          console.log('Password reset:', response.message);
          
        },
        (error) => {
          alert('Une erreur s\'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer.')
          console.error('Error resetting password:', error);
          
        }
      );
  }
}

