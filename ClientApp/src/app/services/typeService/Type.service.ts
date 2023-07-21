import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Type } from 'src/app/models/type/type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TypeService {
  url:string = environment.baseURI+"types"

  constructor(private http: HttpClient) { }

  createType(type: Type): Observable<Type> {
    return this.http.post<Type>(this.url, type);
  }
  getAllTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.url);
  }

  updateType(id: string, type: Type): Observable<Type> {
    return this.http.put<Type>(`${this.url}/${id}`, type);
  }

  deleteType(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
  getType(id: string): Observable<Type> {
    return this.http.get<Type>(`${this.url}/${id}`);
  }

}
