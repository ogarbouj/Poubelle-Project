import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/assets/scss/core/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl: string = environment.apiUrl + "user";
  token = localStorage.getItem('token') // Will return if it is not set 



    constructor(private http: HttpClient) { }
    

    signup(user: User): Observable<any> {
      this.token =  this.token
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " +localStorage.getItem("access_token")
      })
    }
      return this.http.post(`${this.apiUrl}/`, user, httpOptions);
    }
    forgotPassword(data:any){
      return this.http.post(this.apiUrl+"/forgotPassword/",data,{
        headers:new HttpHeaders().set('content-type',"application/json")
      })
      }

    }
  
  