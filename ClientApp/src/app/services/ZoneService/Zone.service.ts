import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from 'src/app/models/zone/zone.model';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  url:string = environment.apiUrl+"Zones"

  constructor(private http: HttpClient) { }

  createZone(Zone: Zone): Observable<Zone> {
    return this.http.post<Zone>(this.url, Zone);
  }
  getAllZones(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.url);
  }

  updateZone(id: string, Zone: Zone): Observable<Zone> {
    return this.http.put<Zone>(`${this.url}/${id}`, Zone);
  }

  deleteZone(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
  getZone(id: string): Observable<Zone> {
    return this.http.get<Zone>(`${this.url}/${id}`);
  }

  findZonesNearby(latitude: string, longitude: string, radius: string): Observable<Zone[]> {
    return this.http.get<Zone[]>(`${this.url}/nearby`, {
        params: {
            latitude,
            longitude,
            radius
        }
    });
}

  
}
