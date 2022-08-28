import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formations } from '../_interfaces/formations';

@Injectable({
  providedIn: 'root',
})
export class FormationsService {
  url = 'http://localhost:8080/formation/formations';

  constructor(private httpClient: HttpClient) {}

  getAllFormations() {
    return this.httpClient.get(`${this.url}`);
  }
  // getUser(uid: string | null): Observable<ISingleUser>{
  //     return this.httpClient.get<ISingleUser>(this.url+'/'+uid);
  // }

  CreateFormation(formation: Formations): Observable<Formations> {
    return this.httpClient.post(`${this.url}`, formation);
  }

  public deleteFormation(idFormation:any) {
    return this.httpClient.delete(this.url + '/' + idFormation);
  }

  public updateFormatio(formation:any){
    return this.httpClient.put(this.url+'/updateFormations', formation);
  }
}
