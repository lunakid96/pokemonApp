import { Component, ElementRef, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemonModel';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  pokemonInfo: any = new Pokemon();
  imgPokemon: string = '';
  ElementRef: HTMLElement | undefined;
  constructor(private el: ElementRef, private pokemonService: PokemonService) {
    this.ElementRef = el.nativeElement;
   }

  ngOnInit(): void {
  }

  closeModal(event: any) {
    this.ElementRef?.dispatchEvent(new CustomEvent('CLOSE'));
  }

  setPokemonInfo(id: number) {
    this.pokemonService.getPokemonInfoById(id).subscribe(res => {
      this.pokemonInfo = res;
      if (this.pokemonInfo.sprites) {
        this.imgPokemon = this.pokemonInfo.sprites.front_default;
      }
    });
  }
}
