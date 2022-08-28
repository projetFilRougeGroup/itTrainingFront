import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../_interfaces/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  url = 'http://localhost:8080/formation/sessions'
  constructor(private httpClient:HttpClient) { }

getAllSessions():Observable<Session[]>{
  return this.httpClient.get<Session[]>(`${this.url}`);
}

CreateSession(session:Session):Observable<Session>{
  return this.httpClient.post(`${this.url}`, session);
}

public deleteSession(idSession:any){
  return this.httpClient.delete(this.url+'/'+idSession);
}
}
