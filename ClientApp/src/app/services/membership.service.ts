import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  private endpoint = 'Membership';

  constructor(private http: HttpClient) { }

  //#region GetAllAsync
  getAllAsync(pageNumber: number, pageSize: number):  Observable<any> {
    return this.http.get<any>(`${environment.baseURI}${this.endpoint}/?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  //#endregion

    //#region GetAllAsync
    getAllByUserAsync(userId: string, pageNumber: number, pageSize: number):  Observable<any> {
      return this.http.get<any>(`${environment.baseURI}${this.endpoint}/ByUser/${userId}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }
    //#endregion

  //#region getByIdAsync
  getByIdAsync(id: string):  Observable<any> {
    return this.http.get<any>(`${environment.baseURI}${this.endpoint}/${id}`);
  }
  //#endregion

  //#region PostMembershipAsync
  PostMembershipAsync(userId: string, recycleOfferId: string) {
    const body = {
      userId: userId,
      recycleOfferId: recycleOfferId,
    };

    return this.http.post<any>(`${environment.baseURI}${this.endpoint}`, body);
  }
  //#endregion
}
