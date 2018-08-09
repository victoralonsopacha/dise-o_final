
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ListarComponent } from './components/listar/listar.component';
import { InfoComponent } from './components/info/info.component';



const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'listar', component: ListarComponent},
    {path: 'info' , component: InfoComponent}
    ];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
