import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonManagerComponent } from './pokemon-manager.component';

describe('PokemonManagerComponent', () => {
  let component: PokemonManagerComponent;
  let fixture: ComponentFixture<PokemonManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
