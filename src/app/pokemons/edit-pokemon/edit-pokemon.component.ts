import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../doss-pokemon/pokemon';
import { POKEMONS } from '../doss-pokemon/mock-pokemon';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
})
export class EditPokemonComponent implements OnInit {
  pokemons!: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;
    let idUrl = this.route.snapshot.params['id'];

    for (let i = 0; i < this.pokemons.length; i++) {
      if (idUrl == this.pokemons[i].id) {
        this.pokemon = this.pokemons[i];
      }
    }
  }
}
