import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../doss-pokemon/pokemon';
import { POKEMONS } from '../doss-pokemon/mock-pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html',
})
export class PokemonsComponent implements OnInit {
  pokemons!: Pokemon[];
  filteredPokemons!: Pokemon[]; // Pokémon filtrés
  searchPokemonNameTerm!: string; // terme de recherche

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // Insertions des données de mock.ts au sein de ce composant
    // this.pokemons = POKEMONS;
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.filteredPokemons = pokemons;
    });
  }
  selectPokemon(pokemon: Pokemon) {
    let link = ['./pokemon', pokemon.id];
    this.router.navigate(link);
  }
  normalizeSearchTerm(searchTerm: string): string {
    return searchTerm
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  searchPokemon() {
    const normalizedSearchTerm = this.normalizeSearchTerm(
      this.searchPokemonNameTerm
    );
    this.filteredPokemons = this.pokemons.filter((pokemon) => {
      const normalizedPokemonName = this.normalizeSearchTerm(pokemon.name);
      return normalizedPokemonName.includes(normalizedSearchTerm);
    });
  }
}
