import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../doss-pokemon/mock-pokemon';
import { Pokemon } from '../doss-pokemon/pokemon';

@Component({
  selector: 'app-edit-form-pokemon',
  templateUrl: 'form-pokemon.component.html',
})
export class FormEditPokemonComponent implements OnInit {
  pokemons!: Pokemon[];
  @Input() pokemon: any;
  types: any = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;
    this.types = this.getPokemonTypes();
  }
  getPokemonTypes(): string[] {
    return [
      'Acier',
      'Combat',
      'Dragon',
      'Eau',
      'Electrique',
      'Fée',
      'Feu',
      'Glace',
      'Insecte',
      'Normal',
      'Plante',
      'Poison',
      'Psy',
      'Roche',
      'Sol',
      'Spectre',
      'Ténèbres',
      'Vol',
    ];
  }
  hasType(type: string): boolean {
    return this.pokemon.types.indexOf(type) > -1;
  }

  isTypesValid(type: string): boolean {
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

  savePokemonState(): void {
    this.router.navigate(['./pokemon/' + this.pokemon.id]);
  }

  back(): void {
    this.router.navigate(['./pokemon/all']);
  }

  deletePokemon(id: number): void {
    // POKEMONS = POKEMONS.filter((pk) => pk.id !== id);
    for (let i = 0; i < POKEMONS.length; i++) {
      if (POKEMONS[i].id === id) {
        POKEMONS.splice(i, 1);
      }
    }
    this.router.navigate(['./pokemon/all']);
  }
}
