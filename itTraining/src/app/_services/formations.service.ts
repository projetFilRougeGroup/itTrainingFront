import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {
  url = 'http://localhost:8080/formation/formations'

  constructor(private httpClient:HttpClient) { }


  getAllFormations(){
    return this.httpClient.get(`${this.url}`);
  }
  // getUser(uid: string | null): Observable<ISingleUser>{
  //     return this.httpClient.get<ISingleUser>(this.url+'/'+uid);
  // }
  }
