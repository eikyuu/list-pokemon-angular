import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

import { Pokemon } from "./Pokemon";
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private pokemons: Pokemon[];
  private title: string = "Liste des pokemons";

  ngOnInit() {

    this.pokemons = POKEMONS;

  }

  selectPokemon(pokemon: Pokemon) {
    alert("vous avez cliquer sur " + pokemon.name);
  }
}
