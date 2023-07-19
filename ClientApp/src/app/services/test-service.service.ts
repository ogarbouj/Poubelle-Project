import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

constructor(private http: HttpClient) { }

public httpget(url: string) {
  return this.http.get(url); 
}


}





