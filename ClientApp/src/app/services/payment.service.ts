import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'MemberShipPayment';

  constructor(private http: HttpClient) { }

  //#region GetAllAsync
  getAllAsync(pageNumber: number, pageSize: number):  Observable<any> {
    return this.http.get<any>(`${environment.baseURI}${this.apiUrl}/?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  //#endregion

  //#region getByIdAsync
  getByIdAsync(id: string):  Observable<any> {
    return this.http.get<any>(`${environment.baseURI}${this.apiUrl}/${id}`);
  }
  //#endregion

}
