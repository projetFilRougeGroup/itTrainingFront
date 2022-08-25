import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Formation} from './formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseURL ="http://localhost:8080/formation/formations";

  constructor(private httpClient:HttpClient) { }

  getFormationList():Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(`${this.baseURL}`);
  }

  getFormationById(idFormation:number):Observable<Formation>{
    return this.httpClient.get<Formation>(`${this.baseURL}/${idFormation}`);
  }
}
