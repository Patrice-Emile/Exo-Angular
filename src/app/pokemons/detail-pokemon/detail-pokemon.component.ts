import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../doss-pokemon/pokemon';
import { Location } from '@angular/common';
import { POKEMONS } from '../doss-pokemon/mock-pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent {
  pokemon: any = null;
  pokemons: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    let idUrl = this.location.path().includes('random')
      ? this.randomPokemonState()
      : this.route.snapshot.params['id'];

    console.log(idUrl);
    this.pokemon = this.pokemonService
      .getPokemon(idUrl)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  back(): void {
    this.router.navigate(['/pokemon/all']);
  }

  updatePokemonState(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon/' + this.pokemon.id + '/edit']);
  }

  randomPokemonState(): any {
    // const randomPokemon = this.pokemons[randomIndex];
    let randomId = Math.floor(Math.random() * this.pokemons.length);

    return this.pokemons[randomId].id;
  }
}
