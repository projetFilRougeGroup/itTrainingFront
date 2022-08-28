import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../_interfaces/user';

import { IDataUser, ISingleUser } from '../_interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/formation/users'

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get(`${this.url}`);
  }
  // getUser(uid: string | null): Observable<ISingleUser>{
  //     return this.httpClient.get<ISingleUser>(this.url+'/'+uid);
  // }

  // addUser(user:IUser):Observable<IUser>{
  //   return this.httpClient.put('${this.url}',user);
  // }
  CreateUser(user:IUser):Observable<IUser>{
    return this.httpClient.post(`${this.url}`, user);
  }

  public deleteUser(idUser:any){
    return this.httpClient.delete(this.url+'/'+idUser);
  }







  }




