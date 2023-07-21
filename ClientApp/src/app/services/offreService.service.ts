import { AppleOffre, Offre } from './../models/appelOffre';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {
  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  getOffre(offreId: string): Observable<Offre> {
    return this.http.get<Offre>('http://localhost:3000/appelOffre/' + offreId);
  }

  updateOffre(offreId: string, offre: Offre): Observable<any> {
    console.log('bonjour' + offre)
    return this.http.put('http://localhost:3000/appelOffre/' + offreId, offre);
  }
  getOffreDetails(offreId: string): Observable<AppleOffre> {
    return this.http.get<AppleOffre>('http://localhost:3000/appelOffre/' + offreId);
  }
  getListOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>('http://localhost:3000/appelOffre/');
  }
  deleteOffre(offreId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/appelOffre/${offreId}`)
  }
  getOffresByEntreprise(userId: string): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.baseUrl}/appelOffre/users/${userId}/offres`);


  }
  createOffre(offre: Offre): Observable<Offre> {
    const userId = '64a96fe35561a21522119fe1';
    offre.idUser = userId;
    return this.http.post<Offre>(`${this.baseUrl}/appelOffre/`, offre);
  }
  //getCandidatsByOffre(offre: Offre): Observable<Candidat[]> {
  //return this.http.get<Candidat[]>(`${this.baseUrl}/appelOffre/${offre._id}/candidats`);
  //}
  getCandidatsByOffre(offreId: string): Observable<Candidat[]> {
    const url = `${this.baseUrl}/appelOffre/${offreId}/candidats`;
    return this.http.get<Candidat[]>(url);
  }

}
