import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemon.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
		PokemonsModule, // L'odre de chargement des modules est très important
		AppRoutingModule, // pour l'ordre de déclaration des routes !
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }