import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule
  ]
})
export class LivrosModule { }
