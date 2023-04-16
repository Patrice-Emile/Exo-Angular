import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer le module FormsModule
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { FormEditPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonService } from './pokemon.service';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../directive/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonRarityPipe } from './pipes/pokemon-rarete.pipe';
import { FormAddPokemonComponent } from './add-pokemon/form-add-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    DetailPokemonComponent,
    FormEditPokemonComponent,
    FormAddPokemonComponent,
    AddPokemonComponent,
    EditPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonRarityPipe,
  ],
  imports: [CommonModule, FormsModule, PokemonRoutingModule],
  providers: [PokemonService],
  bootstrap: [],
})
export class PokemonModule {}
