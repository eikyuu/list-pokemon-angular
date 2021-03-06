import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon'
import { POKEMONS } from './mock-pokemons';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class PokemonsService {

private pokemonsUrl = 'api/pokemons';

	constructor(private http: HttpClient) { }

  private log(log : string) {
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed : ${error.message}`);

      return of(result as T);
    }
  }

// Retourne tous les pokemons
getPokemons(): Observable<Pokemon[]> {
  return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
    tap(_ => this.log(`fetched pokemons`)),
    catchError(this.handleError('getPokemons', []))
  );
}

// Retourne le pokemon avec l'identifiant passe en parametre

getPokemon(id: number): Observable<Pokemon> {
  const url = `${this.pokemonsUrl}/${id}`;

  return this.http.get<Pokemon>(url).pipe(
    tap(_ => this.log(`fetched pokemon id=${id}`)),
    catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
  );
}

getPokemonTypes() : string[] {
  return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
}
}
