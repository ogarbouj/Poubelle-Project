import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceOffreRecyService {





  private baseUrl = 'http://localhost:3000/Offrerecyclage';



  constructor(private http: HttpClient) { }



  getofferRecyclags(): Observable<any> {

    return this.http.get<any>(this.baseUrl);

  }



  getofferRecyclag(id: String): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.get<any>(url);

  }



  createofferRecyclag(offerRecyclag: any): Observable<any> {

    console.log(offerRecyclag);

    return this.http.post<any>(this.baseUrl, offerRecyclag);

  }



  updateofferRecyclag(id: String, offerRecyclag: any): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.put<any>(url, offerRecyclag);

  }



  deleteofferRecyclag(id: number): Observable<any> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<any>(url);

  }
  assignOfferRecyclagUser(id: number): Observable<any> {

   let  user_id = localStorage.getItem("user");
    user_id ="649402062480f279c727cd27"
    const url = `${this.baseUrl}`+"/user-get-offrecycle";
    return this.http.post<any>(url, {"id":id ,"user_id" :user_id});

  }


}
