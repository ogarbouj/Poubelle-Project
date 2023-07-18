import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = environment.apiUrl + "user/sign";
  isLogin = false;

  roleAs: string;
  constructor(private http: HttpClient) { }

  // Méthode pour se connecter
  login(email: string, pwd: string): Observable<any> {
    const loginData = { email, pwd };
    return this.http.post(`${this.apiUrl}/`, loginData);
  }
  isLoggedIn(){
    return !!localStorage.getItem("access_token")
  }
  getToken() {
    return localStorage.getItem('access_token')
  }

  loginin(value: string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    return of({ success: this.isLogin, role: this.roleAs });
  }

 logOut()
 {
  localStorage.setItem("access_token","")
  localStorage.setItem("role","")
  window.location.reload();
 }




  getRole() {
   return localStorage.getItem('role');
    
  }
}
