// Tables.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/assets/scss/core/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private apiUrl: string = environment.apiUrl + "user";
  private token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAllUsers(): Observable<User[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("access_token")
      })
    };

    const timestamp = new Date().getTime();
    return this.http.get<User[]>(`${this.apiUrl}/?timestamp=${timestamp}`, httpOptions);
  }

  deleteUser(userId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("access_token")
      })
    };

    return this.http.delete<any>(`${this.apiUrl}/${userId}`, httpOptions);
  }

  update(userId: String, updateData: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("access_token")
      })
    };
    return this.http.patch<any>(`${this.apiUrl}/${userId}`, updateData, httpOptions);
  }
  getUserById(id:String){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + localStorage.getItem("access_token")
      })
    };
    return this.http.get<any>(`${this.apiUrl}/${id}`, httpOptions);
  }
}
