import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon'
import {POKEMONS } from './mock-pokemons';

@Injectable()

export class PokemonsService {

// Retourne tous les pokemons

  getPokemons() : Pokemon[] {
    return POKEMONS;
  }

  // Retourne le pokemon avec l'identifiant passe en parametre

  getPokemon(id : number): Pokemon {
    let pokemons = this.getPokemons();

    for(let index = 0; index < pokemons.length; index++) {
      if(id === pokemons[index].id) {
        return pokemons[index];
      }
    }
  }
  
  getPokemonTypes() : string[] {
    return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }
}
