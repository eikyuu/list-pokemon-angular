import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon'
import { POKEMONS } from './mock-pokemons';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()

export class PokemonsService {

  constructor(private http: HttpClient) {}

  private pokemonsUrl = 'api/pokemons';

  private log(log : string) {
    console.info(log);
  }
// Retourne tous les pokemons

  getPokemons() : Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=> this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, []))
    );
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
