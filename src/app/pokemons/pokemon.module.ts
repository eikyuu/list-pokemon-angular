import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon.compoment';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		PokemonFormComponent,
		BorderCardDirective,
		PokemonTypeColorPipe

	],
	providers: [PokemonsService]
})
export class PokemonsModule { }