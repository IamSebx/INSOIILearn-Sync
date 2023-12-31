import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { IntranetRoutingModule } from './intranet-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { CrearTopicoComponent } from './creartopico/creartopico.component';
import { CrearCategoriaComponent } from './crearcategoria/crearcateogoria.component';

@NgModule({
  declarations: [
    CategoriasComponent,
    InicioComponent,
    CrearTopicoComponent,
    CrearCategoriaComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    IntranetRoutingModule,
    HttpClientModule
  ]
})
export class IntranetModule { }
