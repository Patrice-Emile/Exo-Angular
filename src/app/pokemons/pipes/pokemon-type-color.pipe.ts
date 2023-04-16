import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color : string;

    switch(type) {
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Insecte':
        color = 'lime lighten-1';
        break;
      case 'Normal':
        color= 'grey lighten-1';
        break;
      case 'Vol':
        color= 'blue lighten-3';
          break;
      case 'Poison':
        color = 'deep-purple lighten-2';
        break;
      case 'Electrik':
        color = 'yellow lighten-2';
        break;
      case 'Sol':
        color = 'brown lighten-1 accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      case 'Psy':
        color = 'pink lighten-1';
        break;
      case 'Roche':
        color = 'grey lighten-1';
        break;
      case 'Spectre':
        color = 'deep-purple lighten-1';
        break;
      case 'Dragon':
        color = 'deep-purple lighten-4';
        break;
      case 'Acier':
        color = 'blue-grey lighten-2';
        break;
      case 'Fée':
        color= 'pink lighten-4';
        break;
      default:
        color = 'grey lighten-3';
        break;
    }

    return 'chip ' + color;

  }
}
