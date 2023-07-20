import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceOffrePromoService {






  private baseUrl = 'http://localhost:3000/OffrePromotionelle';



  constructor(private http: HttpClient) { }



  getofferPromotionnelle(): Observable<any> {

    return this.http.get<any>(this.baseUrl);

  }

  getofferPromotionnell(id: String): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.get<any>(url);

  }



  createofferPromo(offerRecyclag: any): Observable<any> {

    return this.http.post<any>(this.baseUrl, offerRecyclag);

  }




  deleteofferPromo(id: number): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<any>(url);

  }

  updateofferPromo(id: String, offerRecyclag: any): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.put<any>(url, offerRecyclag);

  }


/*export class UserService {

  private baseUrl = 'https://localhost:3000/api/users';



  constructor(private http: HttpClient) { }



  getUsers(): Observable<any> {

    return this.http.get<any>(this.baseUrl);

  }



  getUser(id: number): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.get<any>(url);

  }



  createUser(user: any): Observable<any> {

    return this.http.post<any>(this.baseUrl, user);

  }



  updateUser(id: number, user: any): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.put<any>(url, user);

  }



  deleteUser(id: number): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<any>(url);

  }

}*/
}


