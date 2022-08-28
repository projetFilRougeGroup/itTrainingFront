import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../_interfaces/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemService {

  url='http://localhost:8080/formation/themes';

constructor(private httpClient : HttpClient) { }

getAllThemes():Observable<Theme[]>{
  return this.httpClient.get<Theme[]>(`${this.url}`);
}

createTheme(theme:Theme):Observable<Theme>{
  return this.httpClient.post(`${this.url}`, theme);
}

public deleteTheme(idTheme:any){
  return this.httpClient.delete(this.url+'/'+idTheme);
}

}
