import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

// const pokemonRoutes: Routes = [
//   {
//     path: 'pokemon/all',
//     component: PokemonsComponent,
//   },
//   { path: 'pokemon/:id', component: DetailPokemonComponent },
//   { path: 'pokemon/:id/edit', component: EditPokemonComponent },
// ];
const pokemonRoutes: Routes = [
  {
    path: 'pokemon',
    children: [
      {
        path: 'all',
        component: PokemonsComponent,
      },
      { path: 'add', component: AddPokemonComponent },
      { path: 'random', component: DetailPokemonComponent },
      { path: ':id', component: DetailPokemonComponent },
      { path: ':id/edit', component: EditPokemonComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
