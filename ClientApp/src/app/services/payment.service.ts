import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private endpoint = 'MemberShipPayment';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  //#region GetAllAsync
  getAllAsync(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${environment.baseURI}${this.endpoint}/?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  //#endregion

  //#region getByIdAsync
  getByIdAsync(id: string): Observable<any> {
    return this.http.get<any>(`${environment.baseURI}${this.endpoint}/${id}`);
  }
  //#endregion

  //#region PayAsync
  PayAsync(membershipId: string) {
    return this.http.post<any>(`${environment.baseURI}${this.endpoint}?membershipId=${membershipId}`, null);
  }
  //#endregion

  //#region initPaymentAsync
  initPaymentAsync(paymentAction: string, paymentId: string) {
    const body = {
      paymentAction: paymentAction,
      paymentId: paymentId,
    };
    return this.http.put<any>(`${environment.baseURI}${this.endpoint}/${paymentId}`, body, this.httpOptions);
  }
  //#endregion


}
