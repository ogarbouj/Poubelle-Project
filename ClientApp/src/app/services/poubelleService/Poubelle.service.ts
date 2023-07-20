import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poubelle } from 'src/app/models/poubelle/poubelle.model';

@Injectable({
  providedIn: 'root'
})
export class PoubelleService {
  url: string = environment.baseURI + "poubelles"

  constructor(private http: HttpClient) { }
  createPoubelle(poubelle: any): Observable<any> {
    return this.http.post(this.url, poubelle);
  }

  fetchPoubelles(): Observable<Poubelle[]> {
    return this.http.get<Poubelle[]>(this.url);
  }

  fetchPoubellesByType(type: string): Observable<Poubelle[]> {
    return this.http.get<Poubelle[]>(`${this.url}/type/${type}`);
  }

  fetchPoubellesByZone(zone: string): Observable<Poubelle[]> {
    return this.http.get<Poubelle[]>(`${this.url}/zone/${zone}`);
  }
  updatePoubelle(id: string, poubelle: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, poubelle);
  }

  fetchZones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}zones`);
  }

  fetchTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}types`);
  }

  searchPoubelles(searchCriteria: {}): Observable<Poubelle[]> {
    return this.http.get<Poubelle[]>(`${this.url}/search`, {
      params: searchCriteria
    });
  }

  deletePoubelle(id: string): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`);
  }

  fetchPoubellesByTaille(sortBy: 'asc' | 'desc'): Observable<Poubelle[]> {
    return this.http.get<Poubelle[]>(`${this.url}/sort`, {
      params: { sortBy: sortBy }
    });
  }
}
