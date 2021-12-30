import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-manager',
  templateUrl: './pokemon-manager.component.html',
  styleUrls: ['./pokemon-manager.component.scss']
})
export class PokemonManagerComponent implements OnInit {

  pokemonList: any[] = [];
  pokemonPerRow: any[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.initDataListener();
  }

  initDataListener() {
    this.pokemonService.getAllPokemonInfo().subscribe(res => {
      console.log(res);
      this.pokemonList = res.results;
      this.getPokemonInRow();
    });
  }

  getPokemonInRow() {
    for (let i = 1; i <= this.pokemonList.length; i++) {
      var dataInRow: any[] = [];
      var pokemonEl: any = null;
      this.pokemonService.getPokemonInfoById(i).subscribe(res => {
        pokemonEl = res;
        // add 5 pokemon in per row
        if (dataInRow.length >= 5) {
          this.pokemonPerRow.push(dataInRow);
          dataInRow = [];
        } else {
          dataInRow.push(pokemonEl);
          
        }
      });
    }
  }
}
