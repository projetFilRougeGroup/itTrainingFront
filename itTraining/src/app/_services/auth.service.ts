import { Observable } from 'rxjs';
import { IToken } from './../_interfaces/token';
import { ICredential } from './../_interfaces/credential';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/formation/users/auth/login'



  /////////////////////////////////////////////// A changer l'url

  constructor(private http: HttpClient) { }

  login(credentials:ICredential): Observable<IToken>{
    return this.http.post<IToken>(this.url,credentials)
  }
}
