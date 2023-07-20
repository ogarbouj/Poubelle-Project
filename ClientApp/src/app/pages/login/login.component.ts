import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { error } from 'console';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  form: any = {
    email: null,
    pwd: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService :LoginService, private router : Router) { }

 ngOnInit(): void {
 //  if (this.tokenStorage.getToken()) {
  //  this.isLoggedIn = true;
  //  this.roles = this.tokenStorage.getUser().roles;
    }
// }
  onSubmit(): void {
    
    const { email, pwd } = this.form;


    this.authService.login(email, pwd).subscribe({
      next: data => {
       localStorage.setItem("access_token", data.token);
       localStorage.setItem("role", data.role);
       localStorage.setItem("user-id", data.id);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        const role = this.authService.getRole()
        console.log(role)
        if( role == "admin"){
          this.router.navigate(['/dashboard']);
        } else if( role == "user"){ 
          this.router.navigate(['/entreprise']);
        } else if( role == "user"){
          // this.router.navigate(['/user'])
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}