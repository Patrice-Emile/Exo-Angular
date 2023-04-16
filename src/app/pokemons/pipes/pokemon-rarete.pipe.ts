import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonRarete',
})
export class PokemonRarityPipe implements PipeTransform {
  transform(rarity: string): string {
    let name: string;

    switch (rarity) {
      case '**':
        name = 'Peu commun';
        break;
      case '***':
        name = 'Rare';
        break;
      case '****':
        name = 'Très rare';
        break;
      case '*****':
        name = 'Légendaire';
        break;
      case '******':
        name = 'Mythique';
        break;
      default:
        name = 'Commun';
        break;
    }

    return name;
  }
}
