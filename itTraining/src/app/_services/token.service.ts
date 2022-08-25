import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  saveToken(token:string):void{
    localStorage.setItem('token',token)
    this.router.navigate(['admin'])
  }
  isLogged():boolean{
    const token = localStorage.getItem('token');
    console.log(token);
    return !!token;
  }
}
