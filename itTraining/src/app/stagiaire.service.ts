import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from './stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private baseURLStagiaire = "http://localhost:8080/formation/stagiaires"
  constructor(private httpClient:HttpClient) { }

  getStagiaireList():Observable<Stagiaire[]>{
    return this.httpClient.get<Stagiaire[]>(`${this.baseURLStagiaire}`);
  }
  getStagiaireById(idStagiaire:number):Observable<Stagiaire>{
    return this.httpClient.get<Stagiaire>(`${this.baseURLStagiaire}/${idStagiaire}`);
  }
  CreateStagiaire(stagiaire:Stagiaire):Observable<Stagiaire>{
    return this.httpClient.post(`${this.baseURLStagiaire}`, stagiaire);
  }

}
