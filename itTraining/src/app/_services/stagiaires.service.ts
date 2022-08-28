import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from '../_interfaces/stagiaires';

@Injectable({
  providedIn: 'root'
})
export class StagiairesService {
  url = 'http://localhost:8080/formation/stagiaires'

  constructor(private httpClient:HttpClient) { }


  getAllStagiaires():Observable<Stagiaire[]>{
    return this.httpClient.get<Stagiaire[]>(`${this.url}`);
  }
  // getUser(uid: string | null): Observable<ISingleUser>{
  //     return this.httpClient.get<ISingleUser>(this.url+'/'+uid);
  // }

  // getStagiaireList():Observable<Stagiaire[]>{
  //   return this.httpClient.get<Stagiaire[]>(`${this.baseURLStagiaire}`);
  // }
  // getStagiaireById(idStagiaire:number):Observable<Stagiaire>{
  //   return this.httpClient.get<Stagiaire>(`${this.baseURLStagiaire}/${idStagiaire}`);
  // }
  CreateStagiaire(stagiaire:Stagiaire):Observable<Stagiaire>{
    return this.httpClient.post(`${this.url}`, stagiaire);
  }

  public deleteStagiaire(idStagiaire:any){
    return this.httpClient.delete(this.url+'/'+idStagiaire);
  }
}
