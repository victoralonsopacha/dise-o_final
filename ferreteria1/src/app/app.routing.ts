
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ListarComponent } from './components/listar/listar.component';


const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'listar', component: ListarComponent}
    ];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
