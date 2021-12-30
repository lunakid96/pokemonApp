import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PokemonManagerComponent } from './pokemon-manager/pokemon-manager.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'manager-pokemon', component: PokemonManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
