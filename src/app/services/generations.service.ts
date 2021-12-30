import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {

  constructor(private http: HttpClient) { }

  // get all Generations
  getAllGenerations(): Observable<any> {
    var result: any = null;
    result = this.http.get<any>('https://pokeapi.co/api/v2/generation');
    return result;
  }
}
