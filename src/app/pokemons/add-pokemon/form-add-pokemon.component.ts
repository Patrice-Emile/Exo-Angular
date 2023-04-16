import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../doss-pokemon/mock-pokemon';
import { Pokemon } from '../doss-pokemon/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'form-add-pokemon',
  templateUrl: 'form-add-pokemon.component.html',
})
export class FormAddPokemonComponent implements OnInit {
  @Input() pokemon: any;

  types: any = [];
  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypes();
    this.pokemon = new Pokemon();
    this.pokemon.id = POKEMONS[POKEMONS.length - 1].id + 1;
  }

  hasType(type: string): Boolean {
    let index = this.pokemon.types.indexOf(type);
    if (index > -1) return true;
    return false;
  }

  isTypesValid(type: string): Boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    } else if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  addPokemon() {
    POKEMONS.push(this.pokemon);
    this.router.navigate(['/pokemon/' + this.pokemon.id]);
  }

  deletePokemon() {
    for (let i = 0; i < POKEMONS.length; i++) {
      if (POKEMONS[i].id === this.pokemon.id) {
        POKEMONS.splice(i, 1);
        this.router.navigate(['/pokemon/all']);
      }
    }
  }
}
