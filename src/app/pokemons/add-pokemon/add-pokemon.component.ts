import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'add-pokemon',
  templateUrl: './add-pokemon.component.html',
})
export class AddPokemonComponent implements OnInit {
  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    let idUrl = this.route.snapshot.params['id'];

    this.pokemon = this.pokemonService
      .getPokemon(idUrl)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  onSubmit(): void {
    this.router.navigate(['/pokemon/' + this.pokemon.id]);
  }
}
