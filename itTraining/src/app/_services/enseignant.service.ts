import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enseignant } from '../_interfaces/enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  url = 'http://localhost:8080/formation/enseignants'

  constructor(private httpClient:HttpClient) { }


  getAllEnseignants():Observable<Enseignant[]>{
    return this.httpClient.get<Enseignant[]>(`${this.url}`);
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
  CreateEnseignant(enseignant:Enseignant):Observable<Enseignant>{
    return this.httpClient.post(`${this.url}`, enseignant);
  }



  }
