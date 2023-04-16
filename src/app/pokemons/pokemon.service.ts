import { Injectable } from '@angular/core';
import { Pokemon } from './doss-pokemon/pokemon';
import { Observable, of, catchError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  private pokemonUrl = 'api/pokemons';

  log(msg: string): void {
    console.info(msg);
  }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap((_) => this.log('fetched pokemon')),
      catchError(this.handleError('getPokemons', []))
    );
  }
  // getPokemons(): Observable<any> {
  //   return this.http.get(this.pokemonUrl);
  // }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap((_) => this.log('fetched pokemon')),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  // getPokemons(): Pokemon[] {
  //   return POKEMONS;
  // }
  // getPokemon(id: number) {
  //   let pokemons = POKEMONS;
  //   for (let i = 0; i < pokemons.length; i++) {
  //     if (pokemons[i].id == id) {
  //       return pokemons[i];
  //     }
  //   }
  //   return false;
  // }

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
}
