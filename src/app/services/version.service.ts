import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http: HttpClient) { }
  
  // get all Games Version
  getListVersion():Observable<any> {
    var result: any = null;
    result = this.http.get<any>('https://pokeapi.co/api/v2/version');
    return result;
  }
}
