import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  getAll(): Observable<Candidat[]>{
    return this.http.get<Candidat[]>('http://localhost:3000/candidat/')

  }
  getCandidatByUserId(userId: string):Observable<Candidat[]>{
    return this.http.get<Candidat[]>(`${this.baseUrl}/candidat/${userId}`)

  }
  deleteCandidat(candidatId: string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/candidat/${candidatId}`)
  }

  updateCandidat(candidatId: string, candidat: Candidat): Observable<any>{
    return this.http.put('http://localhost:3000/candidat/'+ candidatId, candidat);

  }
  getCandidat(candidatId: string): Observable<Candidat> {
    return this.http.get<Candidat>('http://localhost:3000/appelOffre/' + candidatId);
  }

  souscrireCandidat(user: User, idAppelOffre: string): Observable<any> {
    const candidatData = {
      nom: user.name,
      email: user.email,
      numero: user.phone.toString(),
      idAppelOffre: idAppelOffre,
      idUser: user._id,
      statut: 'En attente'
    };

    return this.http.post(`${this.baseUrl}/candidat`, candidatData);
  }

}
