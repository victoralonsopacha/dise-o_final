import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ListarComponent } from './components/listar/listar.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    ListarComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
