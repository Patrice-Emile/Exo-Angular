import { Pokemon } from './pokemon';

export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbizzare',
    rarity: '*',
    hp: 25,
    cp: 5,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    types: ['Plante', 'Poison'],
    created: new Date(),
  },
  {
    id: 4,
    name: 'Salamèche',
    hp: 30,
    rarity: '**',

    cp: 6,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    types: ['Feu'],
    created: new Date(),
  },
  {
    id: 6,
    name: 'Dracaufeu',
    hp: 90,
    rarity: '*****',
    cp: 24,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
    types: ['Feu', 'Vol'],
    created: new Date(),
  },
  {
    id: 7,
    name: 'carapuce',
    hp: 35,
    cp: 7,
    rarity: '***',

    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    types: ['Eau'],
    created: new Date(),
  },
  {
    id: 8,
    name: 'Caratruc',
    hp: 60,
    cp: 13,
    rarity: '****',
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
    types: ['Eau'],
    created: new Date(),
  },
  {
    id: 150,
    name: 'Mewtwo',
    hp: 106,
    cp: 30,
    rarity: '******',

    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png',
    types: ['Psy'],
    created: new Date(),
  },
  {
    id: 151,
    name: 'Mew',
    hp: 100,
    cp: 100,
    rarity: '******',
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png',
    types: ['Psy'],
    created: new Date(),
  },
];
