import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${userId}`);
  }

}
