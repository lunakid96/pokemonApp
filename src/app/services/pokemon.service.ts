import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  // get all pokemon info
  getAllPokemonInfo(): Observable<any> {
    var result: any = null;
    result = this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
    return result;
  }

  // get pokemon info by id
  getPokemonInfoById(id: number): Observable<any> {
    var result: any = null;
    result = this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id);
    return result;
  }

  // get all pokemon abilities
  getAllPokemonAbilities(): Observable<any> {
    var result: any = null;
    result = this.http.get<any>('https://pokeapi.co/api/v2/ability');
    return result;
  }

  // get all pokemon forms
  getAllPokemonForms(): Observable<any> {
    var result: any = null;
    result = this.http.get<any>('https://pokeapi.co/api/v2/pokemon-form');
    return result;
  }
}
