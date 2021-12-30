import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  pokemonList: any[] = [];
  pokemonCards: any[] = [];
  modal_flg: boolean = false;
  @ViewChild(ModalComponent)
  modal!: ModalComponent;
  constructor(private pokemonService: PokemonService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initDataListener();
    this.initListCardPokemon();
  }

  private initDataListener() {
  }

  private initListCardPokemon() {
    var i = 1
    while (i <= 10) {
      this.pokemonService.getPokemonInfoById(i).subscribe(res => {
        this.pokemonCards.push(res);
      });
      i++;
    }
  }

  showModal(event: any, index: number) {
    this.modal_flg = true;
    this.changeDetectorRef.detectChanges();
    this.modal.ElementRef?.addEventListener('CLOSE', this.closeModal.bind(this), false);
    this.modal.setPokemonInfo(index);
  }

  closeModal(event: any) {
    this.modal_flg = false;
  }
}
